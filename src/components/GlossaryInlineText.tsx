import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { glossary, type GlossaryEntry } from '../data/glossary';

type GlossaryInlineTextProps = {
  text: string;
};

type InlineGlossaryTarget = {
  alias: string;
  entry: GlossaryEntry;
};

const inlineTerms = new Set([
  'Feature Engineering',
  'Binary Classification',
  'Logistic Regression',
  'Linear Score z',
  'Logit',
  'Sigmoid',
  'Representation Learning',
  'Deep Neural Network',
  'Hidden Layer',
  'Loss',
  'Gradient',
  'CNN',
  'RNN',
  'Language Model',
  'Token',
  'Embedding',
  'Transformer',
  'Self-Attention',
  'BERT',
  'GPT',
  'Prompt',
  'Prefill',
  'Decoding',
  'Autoregressive Generation',
  'KV Cache',
  'In-context Learning',
  'Chain-of-thought',
  'Hallucination',
  'AI Infrastructure',
  'State-Space Model',
  'Qwen3-Next',
  'Gated DeltaNet',
  'Masked Self-Attention',
  'Discrete Diffusion Language Model',
  'Scientific Foundation Model',
]);

const inlineTargets: InlineGlossaryTarget[] = glossary
  .filter((entry) => inlineTerms.has(entry.term))
  .flatMap((entry) =>
    [entry.term, entry.korean, ...(entry.aliases ?? [])]
      .filter(Boolean)
      .map((alias) => ({ alias, entry })),
  )
  .filter(
    (target, index, targets) =>
      targets.findIndex(
        (candidate) => candidate.alias.toLowerCase() === target.alias.toLowerCase(),
      ) === index,
  )
  .sort((left, right) => right.alias.length - left.alias.length);

function isAsciiWordChar(value: string | undefined) {
  return !!value && /[A-Za-z0-9_-]/.test(value);
}

function hasAsciiLetter(value: string) {
  return /[A-Za-z]/.test(value);
}

function isValidMatchBoundary(text: string, index: number, alias: string) {
  if (!hasAsciiLetter(alias)) {
    return true;
  }

  const previous = text[index - 1];
  const next = text[index + alias.length];

  return !isAsciiWordChar(previous) && !isAsciiWordChar(next);
}

function findNextTarget(text: string, startIndex: number) {
  const lowerText = text.toLowerCase();
  let bestMatch:
    | {
        index: number;
        target: InlineGlossaryTarget;
      }
    | null = null;

  for (const target of inlineTargets) {
    const lowerAlias = target.alias.toLowerCase();
    let index = lowerText.indexOf(lowerAlias, startIndex);

    while (index >= 0 && !isValidMatchBoundary(text, index, target.alias)) {
      index = lowerText.indexOf(lowerAlias, index + target.alias.length);
    }

    if (index < 0) {
      continue;
    }

    if (
      !bestMatch ||
      index < bestMatch.index ||
      (index === bestMatch.index && target.alias.length > bestMatch.target.alias.length)
    ) {
      bestMatch = { index, target };
    }
  }

  return bestMatch;
}

function renderGlossaryLink(matchText: string, entry: GlossaryEntry, key: string) {
  return (
    <Link
      key={key}
      className="group relative inline-flex rounded-sm border-b border-dotted border-moss font-medium text-ink decoration-moss underline-offset-4 hover:text-moss focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      to={`/glossary?query=${encodeURIComponent(entry.term)}`}
      aria-label={`${matchText}: ${entry.korean}. ${entry.description}`}
    >
      {matchText}
      <span
        className="pointer-events-none absolute left-0 top-full z-30 mt-2 hidden w-72 max-w-[calc(100vw-2rem)] rounded-md border border-line bg-white p-3 text-left text-xs leading-5 text-ink shadow-soft group-hover:block group-focus-visible:block"
        role="tooltip"
      >
        <span className="block font-semibold text-ink">
          {entry.term}
          <span className="ml-1 font-medium text-moss">{entry.korean}</span>
        </span>
        <span className="mt-1 block text-ink/70">{entry.description}</span>
        <span className="mt-2 block text-rust">용어 사전에서 보기</span>
      </span>
    </Link>
  );
}

export function GlossaryInlineText({ text }: GlossaryInlineTextProps) {
  const nodes: ReactNode[] = [];
  let cursor = 0;

  while (cursor < text.length) {
    const match = findNextTarget(text, cursor);

    if (!match) {
      nodes.push(text.slice(cursor));
      break;
    }

    if (match.index > cursor) {
      nodes.push(text.slice(cursor, match.index));
    }

    const matchText = text.slice(match.index, match.index + match.target.alias.length);
    nodes.push(
      renderGlossaryLink(
        matchText,
        match.target.entry,
        `${match.target.entry.term}-${match.index}`,
      ),
    );
    cursor = match.index + match.target.alias.length;
  }

  return <>{nodes}</>;
}
