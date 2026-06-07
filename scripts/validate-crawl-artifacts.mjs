import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import ts from 'typescript';

const siteOrigin = 'https://seocho-ai.curogom.com';
const distDir = 'dist';
const sourcePath = 'src/data/sessions.ts';

const fixedRoutes = [
  {
    path: '/',
    markers: ['AI College Learning Notes'],
  },
  {
    path: '/sessions',
    markers: ['전체 차시', '1차시', '2차시'],
  },
  {
    path: '/glossary',
    markers: ['용어 사전'],
  },
  {
    path: '/about',
    markers: ['문서형 학습 노트 소개'],
  },
];

function fail(message) {
  throw new Error(`[crawl:check] ${message}`);
}

function readRequiredFile(path) {
  if (!existsSync(path)) {
    fail(`Missing required file: ${path}`);
  }

  return readFileSync(path, 'utf8');
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function routeFilePaths(routePath) {
  if (routePath === '/') {
    return [join(distDir, 'index.html')];
  }

  const pathWithoutSlash = routePath.slice(1);

  return [
    join(distDir, `${pathWithoutSlash}.html`),
    join(distDir, pathWithoutSlash, 'index.html'),
  ];
}

function propertyName(name) {
  if (ts.isIdentifier(name) || ts.isStringLiteral(name)) {
    return name.text;
  }

  return null;
}

function literalText(node) {
  if (!node) {
    return null;
  }

  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
    return node.text;
  }

  return null;
}

function getObjectProperty(objectNode, name) {
  for (const property of objectNode.properties) {
    if (!ts.isPropertyAssignment(property)) {
      continue;
    }

    if (propertyName(property.name) === name) {
      return property.initializer;
    }
  }

  return null;
}

function getSessionsFromSource() {
  const source = readRequiredFile(sourcePath);
  const sourceFile = ts.createSourceFile(
    sourcePath,
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );
  let sessionsArray = null;

  function visit(node) {
    if (
      ts.isVariableDeclaration(node) &&
      ts.isIdentifier(node.name) &&
      node.name.text === 'sessions' &&
      node.initializer &&
      ts.isArrayLiteralExpression(node.initializer)
    ) {
      sessionsArray = node.initializer;
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);

  if (!sessionsArray) {
    fail(`Could not locate sessions array in ${sourcePath}`);
  }

  return sessionsArray.elements.map((element) => {
    if (!ts.isObjectLiteralExpression(element)) {
      fail('Every sessions entry must be an object literal for crawl validation');
    }

    const id = literalText(getObjectProperty(element, 'id'));
    const title = literalText(getObjectProperty(element, 'title'));
    const koreanTitle = literalText(getObjectProperty(element, 'koreanTitle'));
    const status = literalText(getObjectProperty(element, 'status'));

    if (!id || !title || !koreanTitle || !status) {
      fail('Every sessions entry needs id, title, koreanTitle, and status');
    }

    return { id, title, koreanTitle, status };
  });
}

function assertIncludes(content, expected, label) {
  if (!content.includes(expected)) {
    fail(`${label} does not include "${expected}"`);
  }
}

function assertNotIncludes(content, unexpected, label) {
  if (content.includes(unexpected)) {
    fail(`${label} unexpectedly includes "${unexpected}"`);
  }
}

function validateHtmlRoute(route) {
  const canonical = `${siteOrigin}${route.path}`;
  const paths = routeFilePaths(route.path);

  for (const path of paths) {
    const html = readRequiredFile(path);
    const label = `${route.path} (${path})`;

    assertIncludes(html, 'data-crawl-content="true"', label);
    assertIncludes(html, '<meta name="description"', label);
    assertIncludes(html, '<meta name="robots" content="index,follow"', label);
    assertIncludes(html, `<link rel="canonical" href="${canonical}"`, label);
    assertIncludes(html, `<meta property="og:url" content="${canonical}"`, label);
    assertIncludes(html, `${siteOrigin}/og-image.svg`, label);
    assertNotIncludes(html, '<div id="root"></div>', label);

    for (const marker of route.markers) {
      assertIncludes(html, escapeHtml(marker), label);
    }
  }
}

function validateSitemap(routes) {
  const sitemap = readRequiredFile(join(distDir, 'sitemap.xml'));

  assertIncludes(sitemap, '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">', 'sitemap.xml');
  assertNotIncludes(sitemap, '<!doctype html>', 'sitemap.xml');

  for (const route of routes) {
    assertIncludes(sitemap, `<loc>${siteOrigin}${route.path}</loc>`, 'sitemap.xml');
  }
}

function validateLlms(routes) {
  const llms = readRequiredFile(join(distDir, 'llms.txt'));
  const llmsFull = readRequiredFile(join(distDir, 'llms-full.txt'));

  assertNotIncludes(llms, '<!doctype html>', 'llms.txt');
  assertNotIncludes(llmsFull, '<!doctype html>', 'llms-full.txt');

  for (const route of routes) {
    assertIncludes(llms, `${siteOrigin}${route.path}`, 'llms.txt');
    assertIncludes(llmsFull, `URL: ${siteOrigin}${route.path}`, 'llms-full.txt');
  }
}

function validateRobots() {
  const robots = readRequiredFile(join(distDir, 'robots.txt'));

  assertIncludes(robots, 'User-agent: *', 'robots.txt');
  assertIncludes(robots, 'Allow: /', 'robots.txt');
  assertIncludes(robots, `Sitemap: ${siteOrigin}/sitemap.xml`, 'robots.txt');
}

const sessions = getSessionsFromSource();
const sessionRoutes = sessions.map((session) => ({
  path: `/sessions/${session.id}`,
  markers: [session.title, session.koreanTitle],
}));
const routes = [...fixedRoutes, ...sessionRoutes];

for (const route of routes) {
  validateHtmlRoute(route);
}

validateSitemap(routes);
validateLlms(routes);
validateRobots();

console.log(
  `[crawl:check] Validated ${routes.length} crawlable routes, ${sessions.length} sessions, sitemap.xml, llms.txt, llms-full.txt, and robots.txt.`,
);
