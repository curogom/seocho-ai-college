export function PrivacyNotice() {
  return (
    <section className="rounded-md border border-line bg-paper p-5">
      <h2 className="text-lg font-semibold text-ink">Analytics Notice</h2>
      <p className="mt-2 text-sm leading-6 text-ink/70">
        GA4 measurement id가 환경변수로 제공될 때만 페이지 조회와 학습
        이벤트를 수집합니다. 값이 없으면 analytics는 비활성화되며, 앱은
        정상 동작합니다. 개인 식별 정보는 코드에서 직접 수집하지 않습니다.
      </p>
    </section>
  );
}
