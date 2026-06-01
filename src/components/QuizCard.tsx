import { useState } from 'react';
import { trackLearningEvent } from '../analytics/ga';
import type { Quiz } from '../data/quizzes';

type QuizCardProps = {
  quiz: Quiz;
};

export function QuizCard({ quiz }: QuizCardProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const answered = selectedIndex !== null;

  function selectAnswer(index: number) {
    setSelectedIndex(index);
    trackLearningEvent('quiz_answered', {
      session_id: quiz.sessionId,
      quiz_id: quiz.id,
      is_correct: index === quiz.answerIndex,
    });
  }

  return (
    <article className="rounded-md border border-line bg-white p-5">
      <p className="text-sm font-semibold text-rust">{quiz.id.toUpperCase()}</p>
      <h3 className="mt-2 text-lg font-semibold leading-7 text-ink">
        {quiz.question}
      </h3>
      <div className="mt-4 grid gap-2">
        {quiz.choices.map((choice, index) => {
          const isSelected = selectedIndex === index;
          const isAnswer = quiz.answerIndex === index;
          const showCorrect = answered && isAnswer;
          const showWrong = answered && isSelected && !isAnswer;

          return (
            <button
              key={choice}
              className={[
                'min-h-12 rounded-md border px-4 py-3 text-left text-sm leading-6 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2 focus-visible:ring-offset-white',
                showCorrect
                  ? 'border-moss bg-moss text-paper'
                  : showWrong
                    ? 'border-rust bg-rust text-paper'
                    : isSelected
                      ? 'border-ink bg-paper'
                      : 'border-line bg-paper hover:border-moss hover:bg-white',
              ].join(' ')}
              type="button"
              onClick={() => selectAnswer(index)}
            >
              {choice}
            </button>
          );
        })}
      </div>
      {answered && (
        <p className="mt-4 rounded-md bg-paper p-4 text-sm leading-6 text-ink/75">
          {quiz.explanation}
        </p>
      )}
    </article>
  );
}
