import { Link } from 'react-router-dom';
import { trackLearningEvent } from '../analytics/ga';

const email = 'i_am@curogom.dev';

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 text-sm text-ink/70 sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p className="font-semibold text-ink">AI College Learning Notes</p>
          <p className="mt-2 max-w-2xl">
            수업에서 다룬 핵심 흐름과 개념을 차시별로 누적하는 개인 학습
            노트입니다.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <Link className="hover:text-ink" to="/about">
            Analytics Notice
          </Link>
          <a
            className="hover:text-ink"
            href={`mailto:${email}?subject=${encodeURIComponent(
              'AI College Learning Notes Feedback',
            )}`}
            onClick={() => trackLearningEvent('contact_clicked')}
          >
            {email}
          </a>
        </div>
      </div>
    </footer>
  );
}
