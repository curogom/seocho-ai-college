import { describe, expect, it } from 'vitest';
import { existsSync, readFileSync } from 'node:fs';
import { glossary } from '../data/glossary';
import {
  getSessionById,
  sessionSlots,
  sessions,
  totalSessionCount,
} from '../data/sessions';

describe('learning content', () => {
  it('includes the required session 01 instructor profile', () => {
    const session = getSessionById('01');

    expect(session?.instructor?.name).toBe('박노성');
    expect(session?.instructor?.englishName).toBe('Noseong Park');
    expect(session?.instructor?.affiliationKo).toBe('KAIST 전산학부');
    expect(session?.instructor?.affiliationEn).toBe('School of Computing, KAIST');
  });

  it('keeps session 02 LLM terms in the glossary', () => {
    const terms = new Set(glossary.map((entry) => entry.term));

    for (const term of [
      'Token',
      'Embedding',
      'Transformer',
      'Self-Attention',
      'BERT',
      'GPT',
      'Prefill',
      'Decoding',
      'Autoregressive Generation',
      'In-context Learning',
      'Chain-of-thought',
      'Hallucination',
      'AI Infrastructure',
      'Qwen3-Next',
      'Gated DeltaNet',
      'Masked Self-Attention',
      'Hybrid Architecture',
      'Discrete Diffusion Language Model',
      'Scientific Foundation Model',
    ]) {
      expect(terms.has(term)).toBe(true);
    }
  });

  it('keeps session 03 graph ML terms in the glossary', () => {
    const terms = new Set(glossary.map((entry) => entry.term));

    for (const term of [
      'Graph',
      'Node',
      'Edge',
      'Relation',
      'Graph Embedding',
      'Node Embedding',
      'Graph Neural Network',
      'Message Passing',
      'Neighborhood Aggregation',
      'k-hop Neighbor',
      'Homophily',
      'Heterophily',
    ]) {
      expect(terms.has(term)).toBe(true);
    }
  });

  it('keeps model core elements in the glossary', () => {
    const terms = new Set(glossary.map((entry) => entry.term));

    for (const term of [
      'Input x',
      'Label y',
      'Prediction y-hat',
      'Parameter theta',
      'Weight w',
      'Bias b',
      'Loss',
      'Gradient',
    ]) {
      expect(terms.has(term)).toBe(true);
    }
  });

  it('keeps inline glossary aliases for technical terms', () => {
    const sigmoid = glossary.find((entry) => entry.term === 'Sigmoid');
    const dnn = glossary.find((entry) => entry.term === 'Deep Neural Network');
    const prefill = glossary.find((entry) => entry.term === 'Prefill');
    const qwen = glossary.find((entry) => entry.term === 'Qwen3-Next');

    expect(sigmoid?.aliases).toContain('sigmoid');
    expect(dnn?.aliases).toContain('DNN');
    expect(prefill?.aliases).toContain('prefill');
    expect(qwen?.description).toContain('3:1');
  });

  it('classifies every glossary term by category and session', () => {
    const slotIds = new Set(sessionSlots.map((slot) => slot.id));

    for (const entry of glossary) {
      expect(entry.category.length).toBeGreaterThan(0);
      expect(entry.sessionIds.length).toBeGreaterThan(0);

      for (const sessionId of entry.sessionIds) {
        expect(slotIds.has(sessionId)).toBe(true);
      }
    }
  });

  it('does not expose the instructor direct email address', () => {
    const handoff = readFileSync('docs/handoff.md', 'utf8');
    const sessionNote = readFileSync('content/sessions/01-from-ml-to-dl.md', 'utf8');

    expect(JSON.stringify(sessions)).not.toContain('noseong@');
    expect(handoff).not.toContain('noseong@');
    expect(sessionNote).not.toContain('noseong@');
  });

  it('points every visual note to a public asset', () => {
    for (const session of sessions) {
      for (const visual of session.visualNotes) {
        expect(existsSync(`public${visual.src}`)).toBe(true);
        expect(visual.alt.length).toBeGreaterThan(20);
      }
    }
  });

  it('keeps session 01 scope before Transformer and GPT', () => {
    const session = getSessionById('01');
    const sessionOneTerms = new Set(
      glossary
        .filter((entry) => entry.sessionIds.includes('01'))
        .map((entry) => entry.term),
    );

    expect(session?.coreFlow.join(' ')).not.toContain('Transformer');
    expect(session?.coreFlow.join(' ')).not.toContain('GPT');
    expect(sessionOneTerms.has('Transformer')).toBe(false);
    expect(sessionOneTerms.has('GPT')).toBe(false);
    expect(sessionOneTerms.has('Next Token Prediction')).toBe(false);
  });

  it('uses grouped flow data without losing flow items', () => {
    for (const session of sessions) {
      const groupedItems = session.coreFlowGroups.flatMap((group) => group.items);

      expect(groupedItems).toEqual(session.coreFlow);
    }
  });

  it('keeps a fixed 16-session catalog independent from header navigation', () => {
    expect(totalSessionCount).toBe(16);
    expect(sessionSlots).toHaveLength(16);
    expect(sessionSlots[0].id).toBe('01');
    expect(sessionSlots[1].id).toBe('02');
    expect(sessionSlots[2].id).toBe('03');
    expect(sessionSlots[15].id).toBe('16');
    expect(sessionSlots[1].session?.id).toBe('02');
    expect(sessionSlots[2].session?.id).toBe('03');
    expect(sessionSlots[2].status).toBe('planned');
  });

  it('publishes session 02 learning content', () => {
    const session = getSessionById('02');

    expect(session?.status).toBe('published');
    expect(session?.instructor?.name).toBe('박노성');
    expect(session?.summaryLines).toHaveLength(3);
    expect(session?.coreFlow).toContain('BERT');
    expect(session?.coreFlow).toContain('GPT');
    expect(session?.coreFlow).toContain('Autoregressive Generation');
    expect(session?.coreFlow).toContain('Qwen3-Next');
    expect(session?.conceptCards.length).toBeGreaterThanOrEqual(10);
    expect(session?.visualNotes).toHaveLength(2);
    expect(session?.intuitions.length).toBeGreaterThan(0);
    expect(session?.modelNotes.length).toBeGreaterThan(0);
    expect(session?.quizIds).toHaveLength(5);
    expect(session?.preview).toBeUndefined();
    expect(session?.nextPreview?.title).toBe('Graph Machine Learning');
  });

  it('adds session 03 graph ML as pre-study content', () => {
    const session = getSessionById('03');
    const prestudy = readFileSync(
      'content/prestudy/03-graph-ml-prestudy.md',
      'utf8',
    );

    expect(session?.status).toBe('planned');
    expect(session?.title).toBe('Graph Machine Learning');
    expect(session?.instructor?.name).toBe('황지영');
    expect(session?.instructor?.englishName).toBe('Joyce Jiyoung Whang');
    expect(session?.preview?.label).toBe('수업 전 예습');
    expect(session?.preview?.assignments).toHaveLength(6);
    expect(session?.preview?.questions).toHaveLength(10);
    expect(session?.preview?.focusQuestions).toHaveLength(8);
    expect(session?.preview?.excludedTopics).toContain('DRAG');
    expect(session?.preview?.excludedTopics).toContain('Knowledge Graph');
    expect(session?.preview?.resourcePath).toBe(
      'content/prestudy/03-graph-ml-prestudy.md',
    );
    expect(prestudy).toContain('과제 6. Message Passing / Neighborhood Aggregation');
    expect(prestudy).toContain('DRAG');
    expect(prestudy).toContain('이번 예습 과제에서는 아래 항목을 깊게 다루지 않는다');
  });
});
