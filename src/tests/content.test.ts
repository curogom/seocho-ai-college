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

  it('keeps Qwen3-Next preview terms in the glossary', () => {
    const terms = new Set(glossary.map((entry) => entry.term));

    expect(terms.has('Qwen3-Next')).toBe(true);
    expect(terms.has('Gated DeltaNet')).toBe(true);
    expect(terms.has('Masked Self-Attention')).toBe(true);
    expect(terms.has('Hybrid Architecture')).toBe(true);
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

    expect(JSON.stringify(getSessionById('01'))).not.toContain('noseong@');
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
    expect(sessionSlots[15].id).toBe('16');
    expect(sessionSlots[1].session?.id).toBe('02');
  });

  it('keeps session 02 as preview-only until the class is held', () => {
    const session = getSessionById('02');

    expect(session?.status).toBe('planned');
    expect(session?.summaryLines).toHaveLength(0);
    expect(session?.coreFlow).toHaveLength(0);
    expect(session?.coreFlowGroups).toHaveLength(0);
    expect(session?.conceptCards).toHaveLength(0);
    expect(session?.visualNotes).toHaveLength(0);
    expect(session?.intuitions).toHaveLength(0);
    expect(session?.modelNotes).toHaveLength(0);
    expect(session?.quizIds).toHaveLength(0);
    expect(session?.preview?.questions.length).toBeGreaterThan(0);
  });
});
