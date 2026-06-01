import { describe, expect, it } from 'vitest';
import { quizzes } from '../data/quizzes';
import { sessions } from '../data/sessions';

describe('quiz data', () => {
  it('has valid answer indexes', () => {
    for (const quiz of quizzes) {
      expect(quiz.choices.length).toBeGreaterThan(1);
      expect(quiz.answerIndex).toBeGreaterThanOrEqual(0);
      expect(quiz.answerIndex).toBeLessThan(quiz.choices.length);
    }
  });

  it('resolves every quiz id used by sessions', () => {
    const quizIds = new Set(quizzes.map((quiz) => quiz.id));

    for (const session of sessions) {
      for (const quizId of session.quizIds) {
        expect(quizIds.has(quizId)).toBe(true);
      }
    }
  });
});
