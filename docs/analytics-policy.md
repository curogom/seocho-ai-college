# Analytics Policy

## GA4 연결

GA4 measurement id는 `VITE_GA_MEASUREMENT_ID` 환경변수로 주입한다. 값이 없으면 analytics 코드는 아무 동작도 하지 않으며 앱은 정상 동작한다.

```bash
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 수집 이벤트

- `session_opened`
- `concept_card_opened`
- `quiz_answered`
- `next_preview_opened`
- `contact_clicked`

## 개인정보 원칙

코드에서 개인 식별 정보를 직접 수집하지 않는다. 피드백은 서버 API 없이 `mailto:i_am@curogom.dev` 링크로 처리한다.
