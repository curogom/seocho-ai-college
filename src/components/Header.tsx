import { useEffect, useMemo, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import type { Session } from '../data/sessions';
import { getSessionLabel, orderedSessions, sessionSlots } from '../data/sessions';

const navItems = [
  { to: '/', label: '홈' },
  { to: '/glossary', label: '용어' },
  { to: '/about', label: '소개' },
];

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSessionPickerOpen, setIsSessionPickerOpen] = useState(false);
  const availableSessions = useMemo(
    () => orderedSessions.filter((session) => session.status !== 'draft'),
    [],
  );
  const activeSessionId = location.pathname.match(/^\/sessions\/([^/]+)/)?.[1];
  const activeSession = availableSessions.find(
    (session) => session.id === activeSessionId,
  );
  const activeSessionIndex = activeSession
    ? availableSessions.findIndex((session) => session.id === activeSession.id)
    : -1;
  const previousSession =
    activeSessionIndex > 0 ? availableSessions[activeSessionIndex - 1] : undefined;
  const nextSession =
    activeSessionIndex >= 0 && activeSessionIndex < availableSessions.length - 1
      ? availableSessions[activeSessionIndex + 1]
      : undefined;

  useEffect(() => {
    setIsSessionPickerOpen(false);
  }, [location.pathname]);

  function selectSession(sessionId: string) {
    if (sessionId === 'all') {
      navigate('/sessions');
      return;
    }

    navigate(`/sessions/${sessionId}`);
  }

  function moveToSession(session: Session | undefined) {
    if (!session) return;

    navigate(`/sessions/${session.id}`);
  }

  const sessionButtonLabel = activeSession
    ? getSessionLabel(activeSession)
    : location.pathname === '/sessions'
      ? '전체 차시'
      : '차시 선택';

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <NavLink to="/" className="flex items-center gap-3" aria-label="홈으로 이동">
          <span className="grid size-10 place-items-center rounded-md bg-ink text-sm font-bold text-paper">
            AI
          </span>
          <span>
            <span className="block text-sm font-semibold uppercase tracking-normal text-rust">
              Seocho AI College
            </span>
            <span className="block text-lg font-semibold text-ink">
              Learning Notes
            </span>
          </span>
        </NavLink>
        <nav className="flex flex-wrap items-center gap-2" aria-label="주요 메뉴">
          <div
            className={[
              'flex items-center rounded-md border transition',
              location.pathname.startsWith('/sessions')
                ? 'border-ink bg-ink text-paper'
                : 'border-line bg-white text-ink',
            ].join(' ')}
          >
            <button
              className="grid min-h-9 w-9 place-items-center rounded-l-md text-lg font-semibold disabled:cursor-not-allowed disabled:opacity-35"
              type="button"
              aria-label="이전 차시"
              disabled={!previousSession}
              onClick={() => moveToSession(previousSession)}
            >
              ‹
            </button>
            <button
              className="min-h-9 border-x border-inherit px-3 text-sm font-semibold transition hover:bg-paper/40"
              type="button"
              aria-expanded={isSessionPickerOpen}
              aria-controls="session-picker-panel"
              onClick={() => setIsSessionPickerOpen((value) => !value)}
            >
              {sessionButtonLabel}
            </button>
            <button
              className="grid min-h-9 w-9 place-items-center rounded-r-md text-lg font-semibold disabled:cursor-not-allowed disabled:opacity-35"
              type="button"
              aria-label="다음 차시"
              disabled={!nextSession}
              onClick={() => moveToSession(nextSession)}
            >
              ›
            </button>
          </div>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  'rounded-md px-3 py-2 text-sm font-medium transition',
                  isActive
                    ? 'bg-ink text-paper'
                    : 'text-ink/70 hover:bg-white hover:text-ink',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
      {isSessionPickerOpen && (
        <div
          id="session-picker-panel"
          className="border-t border-line bg-white"
        >
          <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
            <label className="grid max-w-md gap-2 text-sm font-semibold text-ink">
              이동할 차시
              <select
                className="min-h-11 rounded-md border border-line bg-paper px-3 text-sm text-ink outline-none transition focus:border-moss focus:ring-2 focus:ring-moss/25"
                value={activeSessionId ?? (location.pathname === '/sessions' ? 'all' : '')}
                onChange={(event) => selectSession(event.target.value)}
              >
                <option value="" disabled>
                  차시 선택
                </option>
                <option value="all">전체 차시 보기</option>
                {sessionSlots.flatMap((slot) =>
                  slot.sessions.length > 0
                    ? slot.sessions.map((session) => (
                        <option key={session.id} value={session.id}>
                          {getSessionLabel(session)}. {session.koreanTitle}
                        </option>
                      ))
                    : [
                        <option key={slot.id} value={slot.id} disabled>
                          {slot.id}.{' '}
                          {slot.status === 'deferred'
                            ? '추후 보강 예정'
                            : '자료 준비 전'}
                        </option>,
                      ],
                )}
              </select>
            </label>
          </div>
        </div>
      )}
    </header>
  );
}
