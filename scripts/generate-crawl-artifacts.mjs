import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const siteOrigin = 'https://seocho-ai.curogom.com';
const distDir = 'dist';

const routeDefinitions = [
  {
    path: '/',
    title: 'AI College Learning Notes',
    description:
      '서초 AI 칼리지 수업 내용을 차시별 학습 노트, 개념 카드, 용어 사전, 퀴즈로 정리한 웹앱입니다.',
    content: `# AI College Learning Notes

서초 AI 칼리지 수업 내용을 차시별로 정리하는 문서형 학습 노트입니다.

Machine Learning에서 Deep Learning, LLM, Graph Machine Learning, Agentic AI, Physical AI까지 이어지는 흐름을 누적해서 복습합니다.

현재 공개된 차시는 1차시 From Machine Learning to Deep Learning, 2차시 Large Language Models이며, 3차시 Graph Machine Learning은 예습 과제로 정리되어 있습니다.`,
  },
  {
    path: '/sessions',
    title: '전체 차시 - AI College Learning Notes',
    description:
      '서초 AI 칼리지 전체 차시 카탈로그와 공개, 예고, 대기 상태를 확인합니다.',
    content: `# 전체 차시

총 16차시 슬롯을 기준으로 운영합니다.

- 1차시: From Machine Learning to Deep Learning
- 2차시: Large Language Models
- 3차시: Graph Machine Learning 예습 과제

새 차시는 같은 학습 구조에 맞춰 세션 데이터, 퀴즈, 용어, 시각 노트를 추가하는 방식으로 확장합니다.`,
  },
  {
    path: '/sessions/01',
    title: '1차시 From Machine Learning to Deep Learning',
    koreanTitle: '기계학습에서 딥러닝으로',
    description:
      '전통적인 Machine Learning에서 Deep Learning, DNN, CNN, RNN으로 이어지는 흐름을 정리합니다.',
    sourcePath: 'content/sessions/01-from-ml-to-dl.md',
  },
  {
    path: '/sessions/02',
    title: '2차시 Large Language Models',
    koreanTitle: '대형언어모델',
    description:
      'RNN에서 Transformer로 넘어간 이유, BERT와 GPT의 차이, GPT의 prefill과 decoding, Qwen3-Next와 Scientific Foundation Model 흐름을 정리합니다.',
    sourcePath: 'content/sessions/02-llm-transformer-qwen-next.md',
  },
  {
    path: '/sessions/03',
    title: '3차시 Graph Machine Learning 예습 과제',
    koreanTitle: '그래프 기계학습',
    description:
      'Graph, Node, Edge, Relation, Graph Embedding, Node Embedding, GNN, Message Passing을 중심으로 3차시 예습 내용을 정리합니다.',
    sourcePath: 'content/prestudy/03-graph-ml-prestudy.md',
  },
  {
    path: '/glossary',
    title: '용어 사전 - AI College Learning Notes',
    description:
      '서초 AI 칼리지 차시별 핵심 용어와 모델 구조를 정리한 용어 사전입니다.',
    sourcePath: 'content/glossary/glossary.md',
  },
  {
    path: '/about',
    title: '문서형 학습 노트 소개',
    description:
      '서초 AI 칼리지 수업의 핵심 흐름과 개념을 차시별로 정리해 복습에 활용할 수 있도록 구성한 학습 노트입니다.',
    content: `# 문서형 학습 노트 소개

서초 AI 칼리지 수업의 핵심 흐름과 개념을 차시별로 정리해 복습에 활용할 수 있도록 구성한 학습 노트입니다.

## 제품 목적

짧고 명확한 차시별 요약, 개념 카드, 용어 사전, 퀴즈를 통해 개인 학습과 발표 준비에 바로 쓸 수 있는 자료를 만드는 것이 목표입니다.

## 학습 구성 방식

- 차시별 핵심 흐름을 먼저 정리합니다.
- 개념 카드와 용어 사전을 함께 연결합니다.
- 모델 구조와 수식은 복습에 필요한 수준으로 요약합니다.
- 퀴즈와 복습 질문으로 이해도를 점검합니다.`,
  },
];

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function closeList(state, html) {
  if (state.list === 'ul') {
    html.push('</ul>');
  }

  if (state.list === 'ol') {
    html.push('</ol>');
  }

  state.list = null;
}

function flushParagraph(paragraph, html) {
  if (!paragraph.length) {
    return;
  }

  html.push(`<p>${paragraph.join(' ')}</p>`);
  paragraph.length = 0;
}

function splitTableCells(line) {
  return line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => cell.trim());
}

function isTableSeparator(line) {
  const cells = splitTableCells(line);

  return (
    cells.length > 0 &&
    cells.every((cell) => /^:?-{3,}:?$/.test(cell))
  );
}

function isTableStart(lines, index) {
  return (
    index + 1 < lines.length &&
    lines[index].trim().startsWith('|') &&
    isTableSeparator(lines[index + 1].trim())
  );
}

function renderTable(lines, startIndex) {
  const headers = splitTableCells(lines[startIndex]);
  const rows = [];
  let index = startIndex + 2;

  while (index < lines.length && lines[index].trim().startsWith('|')) {
    rows.push(splitTableCells(lines[index]));
    index += 1;
  }

  const head = headers
    .map((header) => `<th>${escapeHtml(header)}</th>`)
    .join('');
  const body = rows
    .map((row) => {
      const cells = row
        .map((cell) => `<td>${escapeHtml(cell)}</td>`)
        .join('');
      return `<tr>${cells}</tr>`;
    })
    .join('\n');

  return {
    html: `<table>\n<thead><tr>${head}</tr></thead>\n<tbody>\n${body}\n</tbody>\n</table>`,
    nextIndex: index,
  };
}

function markdownToHtml(markdown) {
  const html = [];
  const state = { list: null, code: false };
  const paragraph = [];
  const lines = markdown.split(/\r?\n/);

  for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
    const rawLine = lines[lineIndex];
    const line = rawLine.trimEnd();
    const trimmed = line.trim();

    if (trimmed.startsWith('```')) {
      flushParagraph(paragraph, html);
      closeList(state, html);

      if (state.code) {
        html.push('</code></pre>');
        state.code = false;
      } else {
        html.push('<pre><code>');
        state.code = true;
      }
      continue;
    }

    if (state.code) {
      html.push(`${escapeHtml(line)}\n`);
      continue;
    }

    if (!trimmed) {
      flushParagraph(paragraph, html);
      closeList(state, html);
      continue;
    }

    if (isTableStart(lines, lineIndex)) {
      flushParagraph(paragraph, html);
      closeList(state, html);
      const table = renderTable(lines, lineIndex);
      html.push(table.html);
      lineIndex = table.nextIndex - 1;
      continue;
    }

    const heading = trimmed.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      flushParagraph(paragraph, html);
      closeList(state, html);
      const level = Math.min(heading[1].length + 1, 4);
      html.push(`<h${level}>${escapeHtml(heading[2])}</h${level}>`);
      continue;
    }

    const unordered = trimmed.match(/^[-*]\s+(.+)$/);
    if (unordered) {
      flushParagraph(paragraph, html);
      if (state.list !== 'ul') {
        closeList(state, html);
        html.push('<ul>');
        state.list = 'ul';
      }
      html.push(`<li>${escapeHtml(unordered[1])}</li>`);
      continue;
    }

    const ordered = trimmed.match(/^\d+\.\s+(.+)$/);
    if (ordered) {
      flushParagraph(paragraph, html);
      if (state.list !== 'ol') {
        closeList(state, html);
        html.push('<ol>');
        state.list = 'ol';
      }
      html.push(`<li>${escapeHtml(ordered[1])}</li>`);
      continue;
    }

    if (trimmed.startsWith('> ')) {
      flushParagraph(paragraph, html);
      closeList(state, html);
      html.push(`<blockquote>${escapeHtml(trimmed.slice(2))}</blockquote>`);
      continue;
    }

    paragraph.push(escapeHtml(trimmed));
  }

  flushParagraph(paragraph, html);
  closeList(state, html);

  if (state.code) {
    html.push('</code></pre>');
  }

  return html.join('\n');
}

function readRouteContent(route) {
  if (route.content) {
    return route.content;
  }

  if (!route.sourcePath || !existsSync(route.sourcePath)) {
    return '';
  }

  return readFileSync(route.sourcePath, 'utf8');
}

function injectHead(html, route) {
  const canonicalUrl = `${siteOrigin}${route.path}`;
  let nextHtml = html
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(route.title)}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
      `<meta name="description" content="${escapeHtml(route.description)}" />`,
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:title" content="${escapeHtml(route.title)}" />`,
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:description" content="${escapeHtml(route.description)}" />`,
    )
    .replace(
      /<meta\s+property="og:image"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:image" content="${siteOrigin}/og-image.svg" />`,
    );

  nextHtml = nextHtml.replace(
    '</head>',
    `    <meta name="robots" content="index,follow" />\n    <link rel="canonical" href="${canonicalUrl}" />\n    <meta property="og:url" content="${canonicalUrl}" />\n    <meta property="og:type" content="article" />\n  </head>`,
  );

  return nextHtml;
}

function renderRouteHtml(indexHtml, route) {
  const content = readRouteContent(route);
  const crawlContent = [
    '<main class="static-crawl-content" data-crawl-content="true">',
    `<h1>${escapeHtml(route.title)}</h1>`,
    route.koreanTitle ? `<p>${escapeHtml(route.koreanTitle)}</p>` : '',
    `<p>${escapeHtml(route.description)}</p>`,
    markdownToHtml(content),
    '</main>',
  ]
    .filter(Boolean)
    .join('\n');

  return injectHead(indexHtml, route).replace(
    '<div id="root"></div>',
    `<div id="root">\n${crawlContent}\n    </div>`,
  );
}

function writeRouteFile(route, html) {
  const routePath = route.path === '/' ? '/index' : route.path;
  const extensionPath = join(distDir, `${routePath}.html`);
  const directoryPath = join(distDir, route.path.slice(1), 'index.html');

  if (route.path === '/') {
    writeFileSync(join(distDir, 'index.html'), html);
    return;
  }

  mkdirSync(dirname(extensionPath), { recursive: true });
  writeFileSync(extensionPath, html);

  mkdirSync(dirname(directoryPath), { recursive: true });
  writeFileSync(directoryPath, html);
}

function writeSitemap() {
  const now = new Date().toISOString().slice(0, 10);
  const urls = routeDefinitions
    .map(
      (route) => `  <url>
    <loc>${siteOrigin}${route.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${route.path === '/' ? 'weekly' : 'monthly'}</changefreq>
  </url>`,
    )
    .join('\n');

  writeFileSync(
    join(distDir, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
  );
}

function writeLlmsFiles() {
  const routeList = routeDefinitions
    .map((route) => `- [${route.title}](${siteOrigin}${route.path}): ${route.description}`)
    .join('\n');

  const fullText = routeDefinitions
    .map((route) => {
      const content = readRouteContent(route);
      const koreanTitle = route.koreanTitle
        ? `\nKorean title: ${route.koreanTitle}\n`
        : '';
      return `# ${route.title}

URL: ${siteOrigin}${route.path}
${koreanTitle}

${route.description}

${content}`;
    })
    .join('\n\n---\n\n');

  writeFileSync(
    join(distDir, 'llms.txt'),
    `# AI College Learning Notes

> 서초 AI 칼리지 수업 내용을 차시별로 정리한 한국어 학습 노트입니다.

## Pages

${routeList}

## Full Text

- [llms-full.txt](${siteOrigin}/llms-full.txt)
`,
  );

  writeFileSync(join(distDir, 'llms-full.txt'), fullText);
}

const indexPath = join(distDir, 'index.html');

if (!existsSync(indexPath)) {
  throw new Error('dist/index.html is missing. Run vite build first.');
}

const indexHtml = readFileSync(indexPath, 'utf8');

for (const route of routeDefinitions) {
  writeRouteFile(route, renderRouteHtml(indexHtml, route));
}

writeSitemap();
writeLlmsFiles();
