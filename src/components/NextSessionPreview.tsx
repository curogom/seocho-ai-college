import { Link } from 'react-router-dom';
import { trackLearningEvent } from '../analytics/ga';
import type { NextPreview } from '../data/sessions';

type NextSessionPreviewProps = {
  preview: NextPreview;
  nextSessionId?: string;
};

export function NextSessionPreview({
  preview,
  nextSessionId,
}: NextSessionPreviewProps) {
  return (
    <section className="rounded-md border border-line bg-ink p-6 text-paper shadow-soft">
      <p className="text-sm font-semibold uppercase tracking-normal text-gold">
        다음 차시 예고
      </p>
      <h2 className="mt-2 text-2xl font-semibold">{preview.title}</h2>
      <p className="mt-3 max-w-3xl text-sm leading-6 text-paper/75">
        {preview.summary}
      </p>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        <div>
          <h3 className="text-sm font-semibold text-paper">핵심 포인트</h3>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-paper/75">
            {preview.keyPoints.map((point) => (
              <li key={point}>- {point}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-paper">생각해볼 질문</h3>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-paper/75">
            {preview.questions.map((question) => (
              <li key={question}>- {question}</li>
            ))}
          </ul>
        </div>
      </div>
      {nextSessionId && (
        <Link
          className="mt-6 inline-flex rounded-md bg-paper px-4 py-2 text-sm font-semibold text-ink transition hover:bg-skyglass focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          to={`/sessions/${nextSessionId}`}
          onClick={() =>
            trackLearningEvent('next_preview_opened', {
              next_session_id: nextSessionId,
            })
          }
        >
          2차시 미리보기
        </Link>
      )}
    </section>
  );
}
