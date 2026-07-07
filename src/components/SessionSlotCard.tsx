import { Link } from 'react-router-dom';
import type { Session, SessionSlot } from '../data/sessions';
import { getSessionLabel } from '../data/sessions';

const statusLabel: Record<SessionSlot['status'], string> = {
  published: '공개',
  draft: '작성 중',
  planned: '예고',
  deferred: '추후 보강',
  empty: '대기',
};

type SessionSlotCardProps = {
  slot: SessionSlot;
};

function SessionLinkRow({ session }: { session: Session }) {
  return (
    <div className="border-t border-line pt-4 first:border-t-0 first:pt-0">
      <p className="text-xs font-semibold text-rust">{getSessionLabel(session)}</p>
      <h2 className="mt-2 text-lg font-semibold text-ink">{session.title}</h2>
      <p className="mt-1 text-sm font-medium text-moss">
        {session.koreanTitle}
      </p>
      <p className="mt-3 line-clamp-3 text-sm leading-6 text-ink/70">
        {session.summary}
      </p>
      <Link
        className="mt-4 inline-flex rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper transition hover:bg-moss"
        to={`/sessions/${session.id}`}
      >
        {session.status === 'published' ? '열기' : '예고 보기'}
      </Link>
    </div>
  );
}

export function SessionSlotCard({ slot }: SessionSlotCardProps) {
  const session = slot.session;

  return (
    <article className="rounded-md border border-line bg-white p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-rust">
          {String(slot.order).padStart(2, '0')}
        </p>
        <span className="rounded-md bg-paper px-2.5 py-1 text-xs font-semibold text-ink/70">
          {statusLabel[slot.status]}
        </span>
      </div>

      {slot.sessions.length > 1 ? (
        <div className="mt-4 grid gap-4">
          {slot.sessions.map((item) => (
            <SessionLinkRow key={item.id} session={item} />
          ))}
        </div>
      ) : session ? (
        <>
          <h2 className="mt-4 text-lg font-semibold text-ink">{session.title}</h2>
          <p className="mt-1 text-sm font-medium text-moss">
            {session.koreanTitle}
          </p>
          <p className="mt-3 line-clamp-3 min-h-18 text-sm leading-6 text-ink/70">
            {session.summary}
          </p>
          <Link
            className="mt-5 inline-flex rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper transition hover:bg-moss"
            to={`/sessions/${session.id}`}
          >
            {session.status === 'published' ? '열기' : '예고 보기'}
          </Link>
        </>
      ) : slot.status === 'deferred' ? (
        <>
          <h2 className="mt-4 text-lg font-semibold text-ink">
            {slot.label} 추후 보강 예정
          </h2>
          <p className="mt-3 min-h-18 text-sm leading-6 text-ink/60">
            휴강 차시입니다. 별도 수업 자료가 생기면 이 슬롯에 학습 노트를
            추가합니다.
          </p>
        </>
      ) : (
        <>
          <h2 className="mt-4 text-lg font-semibold text-ink">
            {slot.label} 자료 준비 전
          </h2>
          <p className="mt-3 min-h-18 text-sm leading-6 text-ink/60">
            차시 자료가 준비되면 이 슬롯에 학습 노트를 추가합니다.
          </p>
        </>
      )}
    </article>
  );
}
