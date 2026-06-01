# Cloudflare Pages Runbook

검토일: 2026-06-01

## 권장 배포 방식

이 프로젝트는 정적 Vite SPA이므로 Cloudflare Pages Git integration을 기본 배포 방식으로 사용한다.

## 현재 준비 상태

레포 안에는 Cloudflare Pages용 빌드 설정이 준비되어 있다.

- `npm run build`: Cloudflare Pages 기본 빌드
- `npm run cf:preview`: Wrangler 기반 로컬 Pages preview
- `npm run cf:deploy`: Wrangler direct deploy
- `wrangler.toml`: Pages output을 `dist`로 지정
- `wrangler.toml`의 `[assets]`: Cloudflare가 `npx wrangler deploy`를 실행하는 Workers static assets 경로도 `dist`로 지정
- `public/_headers`: 기본 보안 헤더와 asset cache policy
- `.github/workflows/cloudflare-pages.yml`: 수동 실행용 GitHub Actions direct upload fallback

실제 Pages 프로젝트 생성 전 확인해야 할 외부 상태:

- 이 폴더를 GitHub repository로 만들고 push할지 결정한다.
- Wrangler direct deploy를 쓸 경우 `wrangler login` 또는 CI token이 필요하다.
- GA4는 production 빌드 환경에만 `VITE_GA_MEASUREMENT_ID`를 넣는다.

Cloudflare Dashboard 설정:

```text
Workers & Pages -> Create application -> Pages -> Import an existing Git repository
Project name: seocho-ai-college
Framework preset: React (Vite)
Build command: npm run build
Build output directory: dist
Root directory: /
Production branch: main
```

환경변수:

```text
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_BASE_PATH=/
```

`VITE_GA_MEASUREMENT_ID`가 없으면 analytics는 비활성화된다.

## SPA fallback

Cloudflare Pages는 top-level `404.html`이 없으면 SPA로 판단해 모든 incoming path를 root로 매칭한다. 그래서 Cloudflare용 기본 빌드에서는 `404.html`과 `_redirects`를 만들지 않는다.

```bash
npm run build
```

GitHub Pages용 `404.html` fallback은 별도 명령으로만 생성한다.

```bash
npm run build:github
```

이 분리 덕분에 `/sessions/01`, `/glossary`, `/about` 같은 deep link는 Cloudflare Pages의 기본 SPA 동작으로 처리되고, Wrangler local preview에서도 redirect loop 경고가 나지 않는다.

## Headers

`public/_headers`에서 기본 보안 헤더와 asset cache policy를 지정한다.

- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `/assets/*`: immutable long cache
- `/index.html`: no-cache

## Wrangler local preview

Cloudflare Pages 환경에 가깝게 preview하려면 다음을 실행한다.

```bash
npm run cf:preview
```

내부적으로 `npm run build` 후 `wrangler pages dev dist`를 실행한다.

## Wrangler direct deploy

Cloudflare 로그인 또는 CI secret이 준비되어 있으면 다음으로 직접 배포할 수 있다.

```bash
npm run cf:deploy
```

로컬에서 direct deploy로 production analytics까지 포함하려면 shell 환경 또는 `.env.production.local`에 다음 값을 둔다. `.env.production.local`은 커밋하지 않는다.

```text
VITE_GA_MEASUREMENT_ID=G-...
VITE_BASE_PATH=/
```

CI에서는 다음 값이 필요하다.

```text
CLOUDFLARE_ACCOUNT_ID
CLOUDFLARE_API_TOKEN
```

API Token에는 Pages project 배포 권한이 필요하다.

## Wrangler config

`wrangler.toml`:

```toml
name = "seocho-ai-college"
compatibility_date = "2026-06-01"
pages_build_output_dir = "./dist"
send_metrics = false

[assets]
directory = "./dist"
not_found_handling = "single-page-application"
```

Pages Functions를 추가하기 전까지는 binding 설정이 없다.

## 공식 문서

- Cloudflare Pages Vite guide: https://developers.cloudflare.com/pages/framework-guides/deploy-a-vite3-project/
- Cloudflare Pages Git integration: https://developers.cloudflare.com/pages/configuration/git-integration/
- Cloudflare Pages serving behavior: https://developers.cloudflare.com/pages/configuration/serving-pages/
- Cloudflare Pages headers: https://developers.cloudflare.com/pages/configuration/headers/
- Direct Upload with CI: https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/
- Wrangler Pages configuration: https://developers.cloudflare.com/pages/functions/wrangler-configuration/
