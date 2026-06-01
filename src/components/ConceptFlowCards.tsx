import { useState } from 'react';
import { trackLearningEvent } from '../analytics/ga';
import type { ConceptCard, ConceptFlowGroup } from '../data/sessions';

type ConceptFlowCardsProps = {
  flow: string[];
  flowGroups: ConceptFlowGroup[];
  concepts: ConceptCard[];
  sessionId: string;
};

function getFlowIndex(flow: string[], concept: ConceptCard) {
  const normalizedTerm = (concept.flowItem ?? concept.term).toLowerCase();
  const firstTerm = normalizedTerm.split('/')[0].trim();
  const index = flow.findIndex((item) => {
    const normalizedItem = item.toLowerCase();
    return (
      normalizedItem.includes(normalizedTerm) ||
      normalizedTerm.includes(normalizedItem) ||
      normalizedItem.includes(firstTerm)
    );
  });

  return index >= 0 ? index + 1 : null;
}

export function ConceptFlowCards({
  flow,
  flowGroups,
  concepts,
  sessionId,
}: ConceptFlowCardsProps) {
  const sortedConcepts = [...concepts].sort((left, right) => {
    const leftIndex = getFlowIndex(flow, left) ?? Number.MAX_SAFE_INTEGER;
    const rightIndex = getFlowIndex(flow, right) ?? Number.MAX_SAFE_INTEGER;

    return leftIndex - rightIndex;
  });
  const [openTerm, setOpenTerm] = useState(sortedConcepts[0]?.term ?? '');

  function renderFlowItem(
    item: string,
    itemIndex: number,
    extraClass = '',
    style?: { paddingLeft?: string },
  ) {
    const flowIndex = flow.indexOf(item) + 1;

    return (
      <li
        key={item}
        className={[
          'flex min-h-11 items-center justify-start gap-2 rounded-md border border-line bg-white px-3 py-2 text-left text-sm font-semibold text-ink',
          extraClass,
        ].join(' ')}
        style={style}
      >
        <span className="grid size-6 shrink-0 place-items-center rounded bg-ink text-xs text-paper">
          {flowIndex}
        </span>
        <span className="min-w-0 break-words">{item}</span>
      </li>
    );
  }

  function toggleConcept(concept: ConceptCard) {
    const nextOpenTerm = openTerm === concept.term ? '' : concept.term;
    setOpenTerm(nextOpenTerm);

    if (nextOpenTerm) {
      trackLearningEvent('concept_card_opened', {
        session_id: sessionId,
        concept: concept.term,
      });
    }
  }

  return (
    <div className="space-y-5">
      <div className="rounded-md border border-line bg-white p-4">
        <div className="flex flex-col gap-3" aria-label="핵심 흐름">
          {flowGroups.map((group) => (
            <section
              key={group.label}
              className="rounded-md border border-line bg-paper p-3"
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-normal text-rust">
                {group.label}
              </p>
              {group.layout === 'hierarchy' && (
                <ol className="flex flex-col gap-2">
                  {group.items.map((item, itemIndex) =>
                    renderFlowItem(item, itemIndex, 'w-full', {
                      paddingLeft: itemIndex
                        ? `calc(0.75rem + ${itemIndex * 1.25}rem)`
                        : '0.75rem',
                    }),
                  )}
                </ol>
              )}
              {group.layout === 'branch' && (
                <div className="flex flex-col gap-2">
                  <ol>{renderFlowItem(group.items[0], 0, 'w-full')}</ol>
                  <ol className="ml-0 flex flex-wrap items-stretch gap-2 border-l border-line pl-3 sm:ml-5">
                    {group.items
                      .slice(1)
                      .map((item, itemIndex) =>
                        renderFlowItem(item, itemIndex, 'min-w-44 flex-auto'),
                      )}
                  </ol>
                </div>
              )}
              {(group.layout === 'pipeline' || !group.layout) && (
                <ol className="flex flex-wrap items-stretch gap-2">
                  {group.items.map((item, itemIndex) =>
                    renderFlowItem(item, itemIndex, 'min-w-44 flex-auto'),
                  )}
                </ol>
              )}
            </section>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {sortedConcepts.map((concept) => {
          const flowIndex = getFlowIndex(flow, concept);
          const isOpen = openTerm === concept.term;

          return (
            <article
              key={concept.term}
              className="rounded-md border border-line bg-white p-5"
            >
              <button
                className="flex w-full items-start justify-between gap-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                type="button"
                aria-expanded={isOpen}
                onClick={() => toggleConcept(concept)}
              >
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-normal text-rust">
                    {flowIndex ? `Flow ${flowIndex}` : 'Concept'}
                  </span>
                  <span className="mt-2 block text-lg font-semibold text-ink">
                    {concept.term}
                  </span>
                  <span className="mt-1 block text-sm font-medium text-moss">
                    {concept.korean}
                  </span>
                </span>
                <span className="grid size-8 shrink-0 place-items-center rounded-md border border-line text-lg text-rust">
                  {isOpen ? '-' : '+'}
                </span>
              </button>
              <p className="mt-4 text-sm leading-6 text-ink/70">
                {concept.description}
              </p>
              {isOpen && (
                <div className="mt-4 border-l-4 border-gold bg-paper px-4 py-3 text-sm leading-6 text-ink/75">
                  {concept.takeaway}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
