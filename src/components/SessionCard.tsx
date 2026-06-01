import { Link } from 'react-router-dom';
import type { Session } from '../data/sessions';

const statusLabel: Record<Session['status'], string> = {
  planned: '예고',
  draft: '작성 중',
  published: '공개',
};

type SessionCardProps = {
  session: Session;
};

export function SessionCard({ session }: SessionCardProps) {
  return (
    <article className="rounded-md border border-line bg-white p-5 shadow-soft">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-semibold text-rust">
          {String(session.order).padStart(2, '0')}
        </p>
        <span className="rounded-md bg-skyglass px-2.5 py-1 text-xs font-semibold text-ink">
          {statusLabel[session.status]}
        </span>
      </div>
      <h3 className="mt-4 text-xl font-semibold text-ink">{session.title}</h3>
      <p className="mt-1 text-sm font-medium text-moss">{session.koreanTitle}</p>
      <p className="mt-3 min-h-14 text-sm leading-6 text-ink/70">
        {session.summary}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {session.conceptCards.slice(0, 4).map((concept) => (
          <span
            key={concept.term}
            className="rounded-md border border-line bg-paper px-2.5 py-1 text-xs text-ink/70"
          >
            {concept.term}
          </span>
        ))}
      </div>
      <Link
        className="mt-5 inline-flex rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper transition hover:bg-moss focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        to={`/sessions/${session.id}`}
      >
        {session.status === 'published' ? '학습 노트 보기' : '예고 보기'}
      </Link>
    </article>
  );
}
