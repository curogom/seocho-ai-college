import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { glossary } from '../data/glossary';
import { sessions } from '../data/sessions';

export function GlossaryPage() {
  const [query, setQuery] = useState('');
  const [sessionFilter, setSessionFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const categoryOptions = useMemo(
    () => Array.from(new Set(glossary.map((entry) => entry.category))),
    [],
  );

  const filteredEntries = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return glossary.filter((entry) => {
      const matchesQuery =
        !normalizedQuery ||
        entry.term.toLowerCase().includes(normalizedQuery) ||
        entry.korean.toLowerCase().includes(normalizedQuery) ||
        entry.category.toLowerCase().includes(normalizedQuery) ||
        entry.description.toLowerCase().includes(normalizedQuery);
      const matchesSession =
        sessionFilter === 'all' || entry.sessionIds.includes(sessionFilter);
      const matchesCategory =
        categoryFilter === 'all' || entry.category === categoryFilter;

      return matchesQuery && matchesSession && matchesCategory;
    });
  }, [categoryFilter, query, sessionFilter]);

  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-normal text-rust">
            Glossary
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-ink sm:text-5xl">
            용어 사전
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-ink/70">
            차시별로 반복 등장하는 용어와 모델을 구성하는 핵심 요소를
            한글/영문으로 같이 정리합니다.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="grid gap-3 rounded-md border border-line bg-white p-5 shadow-soft md:grid-cols-[minmax(0,1fr)_180px_180px]">
          <label className="grid gap-2 text-sm font-medium text-ink">
            검색
            <input
              className="min-h-11 rounded-md border border-line bg-paper px-3 text-sm text-ink outline-none transition focus:border-moss focus:ring-2 focus:ring-moss/25"
              type="search"
              value={query}
              placeholder="x, theta, loss, 시그모이드..."
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-ink">
            차시
            <select
              className="min-h-11 rounded-md border border-line bg-paper px-3 text-sm text-ink outline-none transition focus:border-moss focus:ring-2 focus:ring-moss/25"
              value={sessionFilter}
              onChange={(event) => setSessionFilter(event.target.value)}
            >
              <option value="all">전체</option>
              {sessions.map((session) => (
                <option key={session.id} value={session.id}>
                  {session.id}차시
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-medium text-ink">
            분류
            <select
              className="min-h-11 rounded-md border border-line bg-paper px-3 text-sm text-ink outline-none transition focus:border-moss focus:ring-2 focus:ring-moss/25"
              value={categoryFilter}
              onChange={(event) => setCategoryFilter(event.target.value)}
            >
              <option value="all">전체</option>
              {categoryOptions.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-2">
          {filteredEntries.map((entry) => (
            <article
              key={`${entry.term}-${entry.sessionIds.join('-')}`}
              className="rounded-md border border-line bg-white p-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl font-semibold text-ink">{entry.term}</h2>
                  <p className="mt-1 text-sm font-medium text-moss">
                    {entry.korean}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md bg-moss/10 px-2.5 py-1 text-xs font-semibold text-moss">
                    {entry.category}
                  </span>
                  {entry.sessionIds.map((id) => (
                    <Link
                      key={id}
                      className="rounded-md bg-paper px-2.5 py-1 text-xs font-semibold text-ink/70 hover:text-ink"
                      to={`/sessions/${id}`}
                    >
                      {id}차시
                    </Link>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-ink/70">
                {entry.description}
              </p>
            </article>
          ))}
        </section>

        {filteredEntries.length === 0 && (
          <div className="mt-6 rounded-md border border-line bg-white p-8 text-center text-sm text-ink/70">
            검색 결과가 없습니다.
          </div>
        )}
      </div>
    </>
  );
}
