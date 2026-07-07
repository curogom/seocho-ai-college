# Session Update Guide

## 새 차시 추가 절차

1. Raw material을 추가한다.
   - `content/raw/02-user-note.md`
   - `content/raw/02-transcript.txt`
2. 정제된 차시 콘텐츠를 작성한다.
   - `content/sessions/02-llm-transformer-qwen-next.md`
3. 데이터 파일을 업데이트한다.
   - `src/data/sessions.ts`
   - `src/data/quizzes.ts`
   - `src/data/glossary.ts`
4. 이전 차시의 `nextPreview`를 업데이트한다.
5. 새 차시 상태를 `planned -> draft -> published` 순서로 변경한다.
6. README progress table을 업데이트한다.
7. AI 수집과 SEO 산출물 기준을 확인한다.
   - `src/data/sessions.ts`의 `sessions` 배열에 새 차시가 추가되면 `/sessions/{id}` 정적 HTML도 필요하다.
   - 새 차시 본문 경로가 바뀌면 `scripts/generate-crawl-artifacts.mjs`의 route definition과 `sourcePath`를 함께 갱신한다.
   - `sitemap.xml`, `llms.txt`, `llms-full.txt`, `robots.txt`는 빌드에서 자동 생성 또는 복사되므로 `dist` 산출물을 수동 편집하지 않는다.
8. `npm run ci`로 테스트, 빌드, AI 수집/SEO 산출물 검증을 함께 실행한다.

## 차시 탐색 구조

전체 운영 기준은 `src/data/sessions.ts`의 `totalSessionCount = 16`이다. 상단 메뉴에는 개별 차시를 직접 추가하지 않는다.

- 상단 메뉴: `홈 / 차시 / 용어 / 소개`
- `차시` 메뉴: SelectBox 기반 빠른 이동 + 16차시 compact map
- 전체 차시 인덱스: `/sessions`
- 개별 차시: `/sessions/01`, `/sessions/02`, `/sessions/03`, `/sessions/04`, `/sessions/06-1`, `/sessions/06-2`
- 05차시는 휴강으로 `추후 보강` 슬롯으로 표시하고, 06차시는 `6-1`, `6-2` 하위 노트로 표시하며, 07~16차시는 `sessionSlots`에서 대기 슬롯으로 표시한다.

새 차시를 추가할 때는 `sessions` 배열에 해당 id를 추가하면 `/sessions`와 개별 세션 탐색 UI에 자동 반영된다.

## AI 수집 / SEO 검증

`npm run build`는 Vite 빌드 이후 `crawl:generate`와 `crawl:check`를 실행한다. 이 검증은 Cloudflare Pages 배포 전에 아래 항목이 빠지지 않았는지 확인한다.

- 각 차시의 정적 HTML: `/sessions/{id}.html`, `/sessions/{id}/index.html`
- 각 정적 HTML의 canonical URL, robots meta, Open Graph URL, description
- `sitemap.xml`의 모든 공개 route 포함 여부
- `llms.txt`, `llms-full.txt`의 모든 공개 route 포함 여부
- `robots.txt`의 전체 허용 규칙과 sitemap 위치

PR과 `main` push에서는 GitHub Actions가 `npm run ci`를 실행한다. 차시 데이터가 추가되었는데 AI 수집용 정적 route가 빠져 있으면 CI가 실패한다.

## Branch Naming

```text
session/02-llm-transformer-qwen-next
session/03-graph-ml
```

## Commit Naming

```text
feat(session-01): add ML to DL learning notes
feat(session-02): add LLM learning notes
feat(analytics): add GA4 tracking
docs: add transcript curation policy
```

## PR Title

```text
feat(session-01): implement AI college learning notes MVP
```
