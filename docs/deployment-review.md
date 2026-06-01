# Deployment Review

## 결론

현재 앱은 Vite 기반 정적 SPA이므로 GitHub Pages와 Cloudflare Pages 모두 배포 가능하다. 운영 편의성과 preview workflow까지 고려하면 Cloudflare Pages가 더 유리하다.

검토일: 2026-06-01

참고한 공식 문서:

- GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- GitHub Pages limits: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
- Cloudflare Pages Git integration: https://developers.cloudflare.com/pages/configuration/git-integration/
- Cloudflare Pages build configuration: https://developers.cloudflare.com/pages/configuration/build-configuration/
- Cloudflare Pages serving behavior: https://developers.cloudflare.com/pages/configuration/serving-pages/
- Cloudflare Pages headers: https://developers.cloudflare.com/pages/configuration/headers/
- Vite base config: https://vite.dev/config/shared-options/

## GitHub Pages가 맞는 경우

- GitHub 저장소만으로 가장 단순하게 공개하고 싶다.
- 별도 preview 배포가 중요하지 않다.
- 커스텀 도메인, CDN, 리다이렉트 설정을 최소화한다.
- 비용 없이 개인 학습 노트를 공개하는 정도면 충분하다.

주의할 점:

- repository subpath 배포 시 `VITE_BASE_PATH=/repo-name/`로 빌드해야 한다.
- SPA deep link를 위해 build 후 `dist/404.html`을 `index.html`과 같게 복사한다.
- GitHub Pages는 정적 호스팅에 적합하지만, 공식 limits 문서 기준으로 Published site 1 GB, 배포 10분 timeout, 월 100 GB soft bandwidth limit, 시간당 10 build soft limit 같은 제한을 고려해야 한다.

## Cloudflare Pages가 맞는 경우

- PR/branch preview 배포가 필요하다.
- `/sessions/01` 같은 clean URL을 SPA fallback으로 안정적으로 처리하고 싶다.
- 커스텀 도메인과 CDN 운영을 같이 묶고 싶다.
- 나중에 Cloudflare Functions, Turnstile, R2 같은 주변 기능을 붙일 가능성이 있다.

현재 프로젝트는 Cloudflare Pages의 기본 SPA 동작을 사용하도록 CF용 기본 빌드에서 top-level `404.html`과 `_redirects`를 생성하지 않는다.
추가로 `public/_headers`, `wrangler.toml`, `npm run cf:preview`, `npm run cf:deploy`, GitHub Actions direct deploy workflow를 포함해 Cloudflare Pages 운영 준비를 마쳤다.

권장 Cloudflare Pages 설정:

```text
Framework preset: React (Vite)
Build command: npm run build
Build output directory: dist
Environment variable: VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

로컬 Cloudflare preview:

```bash
npm run cf:preview
```

Wrangler direct deploy:

```bash
npm run cf:deploy
```

SPA fallback은 Cloudflare Pages의 serving behavior에 맡긴다. GitHub Pages용 `404.html` fallback은 `npm run build:github`로만 생성한다.

## 이 프로젝트 추천

초기 개인 학습 노트 공개만 목표라면 GitHub Pages로 충분하다. 다만 이 프로젝트는 차시별 콘텐츠가 계속 누적되고, 브랜치별 확인과 clean URL 유지가 유리하므로 기본 추천은 Cloudflare Pages다.

GitHub Pages를 선택한다면 빌드 시 repository path를 맞춘다.

```bash
VITE_BASE_PATH=/seocho-ai-college/ npm run build:github
```

Cloudflare Pages를 선택한다면 기본 path가 `/`이므로 별도 base path 없이 빌드한다.

```bash
npm run build
```
