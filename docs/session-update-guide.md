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
7. 테스트와 빌드를 실행한다.

## 차시 탐색 구조

전체 운영 기준은 `src/data/sessions.ts`의 `totalSessionCount = 16`이다. 상단 메뉴에는 개별 차시를 직접 추가하지 않는다.

- 상단 메뉴: `홈 / 차시 / 용어 / 소개`
- `차시` 메뉴: SelectBox 기반 빠른 이동 + 16차시 compact map
- 전체 차시 인덱스: `/sessions`
- 개별 차시: `/sessions/01`, `/sessions/02`
- 03~16차시는 `sessionSlots`에서 대기 슬롯으로 표시한다.

새 차시를 추가할 때는 `sessions` 배열에 해당 id를 추가하면 `/sessions`와 개별 세션 탐색 UI에 자동 반영된다.

## Branch Naming

```text
session/02-llm-transformer-qwen-next
session/03-graph-ml
```

## Commit Naming

```text
feat(session-01): add ML to DL learning notes
feat(session-02): add LLM and Qwen Next preview
feat(analytics): add GA4 tracking
docs: add transcript curation policy
```

## PR Title

```text
feat(session-01): implement AI college learning notes MVP
```
