import { trackLearningEvent } from '../analytics/ga';

const email = 'i_am@curogom.dev';
const subject = encodeURIComponent('AI College Learning Notes Feedback');

export function ContactCTA() {
  return (
    <section className="rounded-md border border-line bg-white p-6 shadow-soft">
      <p className="text-sm font-semibold uppercase tracking-normal text-rust">
        Feedback
      </p>
      <h2 className="mt-1 text-2xl font-semibold text-ink">정리 보강 요청</h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-ink/70">
        잘못된 설명, 추가되면 좋을 개념 카드, 강의 내용 보강 아이디어가
        있다면 메일로 알려주세요. MVP에서는 서버 없이 mailto 링크만
        사용합니다.
      </p>
      <a
        className="mt-5 inline-flex rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper transition hover:bg-moss focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        href={`mailto:${email}?subject=${subject}`}
        onClick={() => trackLearningEvent('contact_clicked')}
      >
        피드백 메일 보내기
      </a>
    </section>
  );
}
