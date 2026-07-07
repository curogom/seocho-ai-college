# AI College Learning Notes

서초 AI 칼리지 수업 내용을 쉽게 이해하기 위한 React 기반 학습 노트 사이트입니다.

## Purpose

이 저장소는 Machine Learning, Deep Learning, Large Language Model 관련 수업 내용을 차시별로 요약하고, 주요 개념을 학습 카드와 퀴즈 형태로 정리하는 것을 목표로 합니다.

## Current Sessions

전체 운영 기준은 16차시입니다. 상단 메뉴에는 개별 차시를 직접 추가하지 않고, `차시` 메뉴의 SelectBox와 `/sessions` 전체 차시 인덱스에서 관리합니다.

| Session | Topic | Status |
|---:|---|---|
| 01 | From Machine Learning to Deep Learning | Published |
| 02 | Large Language Models | Published |
| 03 | Graph Machine Learning | Published |
| 04 | Knowledge Graph Embedding | Published |
| 06-1 | Mobility Big Data Analysis | Published |
| 06-2 | Data Science for Infectious Disease Response | Published |
| 07 | AGI/ASI Value Alignment and Superalignment | Published |

## Core Features

- 차시별 요약
- 강의자 정보
- 핵심 개념 카드
- 용어 사전
- 이해도 체크 퀴즈
- 다음 차시 예고
- 개인 프로젝트 연결 메모
- GA4 기반 사용 분석
- mailto 기반 피드백 링크

## Development

```bash
npm install
npm run dev
```

## Test and Build

```bash
npm run ci
npm test
npm run build
```

`npm run build`는 TypeScript/Vite 빌드 이후 AI 수집과 SEO용 산출물을 생성하고 검증합니다.

- `crawl:generate`: 정적 route HTML, `sitemap.xml`, `llms.txt`, `llms-full.txt` 생성
- `crawl:check`: `src/data/sessions.ts` 기준으로 차시별 정적 HTML, canonical URL, robots meta, sitemap, LLM 수집 파일, robots.txt 검증

GitHub Actions는 PR과 `main` push에서 `npm run ci`를 실행합니다.

## Cloudflare Pages

권장 배포 설정:

```text
Framework preset: React (Vite)
Build command: npm run build
Build output directory: dist
```

Cloudflare Pages 환경에 가깝게 로컬 preview:

```bash
npm run cf:preview
```

Wrangler direct deploy:

```bash
npm run cf:deploy
```

CI 배포에는 `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_API_TOKEN`, 선택적으로 `VITE_GA_MEASUREMENT_ID` secret이 필요합니다.

## Environment

```bash
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_BASE_PATH=/
```

`VITE_GA_MEASUREMENT_ID`가 없으면 analytics는 비활성화됩니다.

GitHub Pages에서 repository subpath로 배포할 때는 `VITE_BASE_PATH=/repo-name/` 형태로 빌드합니다.
GitHub Pages용 SPA fallback이 필요할 때는 `npm run build:github`를 사용합니다.

## Contact

Feedback: i_am@curogom.dev

## Docs

- [Handoff](docs/handoff.md)
- [Content Curation Policy](docs/content-curation-policy.md)
- [Session Update Guide](docs/session-update-guide.md)
- [Analytics Policy](docs/analytics-policy.md)
- [Deployment Review](docs/deployment-review.md)
- [Cloudflare Pages Runbook](docs/cloudflare-pages.md)

## License

TBD
