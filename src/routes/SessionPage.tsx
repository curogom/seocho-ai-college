import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { trackLearningEvent } from '../analytics/ga';
import { ConceptFlowCards } from '../components/ConceptFlowCards';
import { ContactCTA } from '../components/ContactCTA';
import { GlossaryInlineText } from '../components/GlossaryInlineText';
import { InstructorCard } from '../components/InstructorCard';
import { NextSessionPreview } from '../components/NextSessionPreview';
import { QuizCard } from '../components/QuizCard';
import { Section } from '../components/Section';
import { SessionVisuals } from '../components/SessionVisuals';
import { getQuizzesBySessionId } from '../data/quizzes';
import { getSessionById, sessions } from '../data/sessions';

export function SessionPage() {
  const { sessionId } = useParams();
  const session = getSessionById(sessionId);

  useEffect(() => {
    if (session) {
      trackLearningEvent('session_opened', {
        session_id: session.id,
        status: session.status,
      });
    }
  }, [session]);

  if (!session) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-ink">세션을 찾을 수 없습니다.</h1>
        <Link
          className="mt-5 inline-flex rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper"
          to="/sessions"
        >
          전체 차시로 이동
        </Link>
      </div>
    );
  }

  if (session.status !== 'published') {
    return (
      <>
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-normal text-rust">
              Session {session.id} Preview
            </p>
            <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              {session.title}
            </h1>
            <p className="mt-3 text-xl font-medium text-moss">
              {session.koreanTitle}
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-ink/70">
              {session.subtitle}
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <section className="rounded-md border border-line bg-white p-6 shadow-soft">
            <span className="rounded-md bg-paper px-2.5 py-1 text-xs font-semibold text-rust">
              차시 예고
            </span>
            <h2 className="mt-4 text-2xl font-semibold text-ink">
              아직 수업이 진행되지 않았습니다.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-ink/70">
              {session.preview?.summary ?? session.summary}
            </p>

            {session.preview?.keyPoints.length ? (
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-ink">예고 포인트</h3>
                <ul className="mt-3 grid gap-3 md:grid-cols-3">
                  {session.preview.keyPoints.map((point) => (
                    <li
                      key={point}
                      className="rounded-md border border-line bg-paper p-4 text-sm leading-6 text-ink/75"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {session.preview?.questions.length ? (
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-ink">
                  다음 수업에서 확인할 질문
                </h3>
                <ol className="mt-3 grid gap-3 md:grid-cols-2">
                  {session.preview.questions.map((question, index) => (
                    <li
                      key={question}
                      className="rounded-md border border-line bg-paper p-4 text-sm leading-6 text-ink/75"
                    >
                      <span className="mb-2 block text-xs font-semibold text-rust">
                        Q{index + 1}
                      </span>
                      {question}
                    </li>
                  ))}
                </ol>
              </div>
            ) : null}

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                className="inline-flex rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper transition hover:bg-moss"
                to="/sessions/01"
              >
                1차시로 돌아가기
              </Link>
              <Link
                className="inline-flex rounded-md border border-line px-4 py-2 text-sm font-semibold text-ink transition hover:border-moss hover:bg-paper"
                to="/sessions"
              >
                전체 차시 보기
              </Link>
            </div>
          </section>
        </div>
      </>
    );
  }

  const quizzes = getQuizzesBySessionId(session.id);
  const nextSession = sessions.find((item) => item.order === session.order + 1);

  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-normal text-rust">
            Session {session.id}
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            {session.title}
          </h1>
          <p className="mt-3 text-xl font-medium text-moss">
            {session.koreanTitle}
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-ink/70">
            {session.subtitle}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_320px]">
          <section className="rounded-md border border-line bg-white p-6 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-normal text-rust">
              3줄 요약
            </p>
            <ol className="mt-4 space-y-3">
              {session.summaryLines.map((line, index) => (
                <li key={line} className="flex gap-3 text-sm leading-7 text-ink/75">
                  <span className="grid size-7 shrink-0 place-items-center rounded-md bg-paper text-xs font-semibold text-ink">
                    {index + 1}
                  </span>
                  <span>
                    <GlossaryInlineText text={line} />
                  </span>
                </li>
              ))}
            </ol>
          </section>
          {session.instructor && <InstructorCard instructor={session.instructor} />}
        </div>

        <Section
          eyebrow="Core Flow"
          title="핵심 구조 복습"
          description="수업에서 다룬 구조를 시각 노트와 개념 흐름 카드로 이어서 정리했습니다."
        >
          <div className="grid gap-6">
            <SessionVisuals visuals={session.visualNotes} />
            <ConceptFlowCards
              flow={session.coreFlow}
              flowGroups={session.coreFlowGroups}
              concepts={session.conceptCards}
              sessionId={session.id}
            />
          </div>
        </Section>

        <Section
          eyebrow="Intuition"
          title="강의 설명에서 건질 직관"
          description="개념을 이해할 때 도움이 되는 설명을 짧은 메모로 정리했습니다."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {session.intuitions.map((note) => (
              <article
                key={note.title}
                className="rounded-md border border-line bg-white p-5"
              >
                <h3 className="text-lg font-semibold text-ink">{note.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/70">
                  <GlossaryInlineText text={note.body} />
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Model Notes"
          title="수식/모델 구조 요약"
          description="수업 복습에 필요한 최소한의 식과 구조만 남겼습니다."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {session.modelNotes.map((note) => (
              <article
                key={note.title}
                className="rounded-md border border-line bg-white p-5"
              >
                <h3 className="text-lg font-semibold text-ink">{note.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/70">
                  <GlossaryInlineText text={note.body} />
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Project"
          title="개인 프로젝트 연결 메모"
          description="학습 개념을 실제 제품 아이디어와 연결해 둡니다."
        >
          <ul className="grid gap-3 md:grid-cols-3">
            {session.projectConnections.map((connection) => (
              <li
                key={connection}
                className="rounded-md border border-line bg-white p-5 text-sm leading-6 text-ink/75"
              >
                {connection}
              </li>
            ))}
          </ul>
        </Section>

        <Section
          eyebrow="Quiz"
          title="이해도 체크"
          description={
            quizzes.length > 0
              ? '정답을 선택하면 바로 해설을 확인할 수 있습니다.'
              : '이 차시는 아직 퀴즈 작성 전입니다.'
          }
        >
          {quizzes.length > 0 ? (
            <div className="grid gap-4">
              {quizzes.map((quiz) => (
                <QuizCard key={quiz.id} quiz={quiz} />
              ))}
            </div>
          ) : (
            <div className="rounded-md border border-line bg-white p-5 text-sm text-ink/70">
              계획 단계 세션입니다. 차시 자료가 정리되면 퀴즈를 추가합니다.
            </div>
          )}
        </Section>

        {session.nextPreview && (
          <Section title="다음 차시 예고">
            <NextSessionPreview
              preview={session.nextPreview}
              nextSessionId={nextSession?.id}
            />
          </Section>
        )}

        <Section
          eyebrow="Reflection"
          title="복습 질문"
          description="수업 후 개인 노트에 답을 적어두면 다음 차시 복습 기준으로 사용할 수 있습니다."
        >
          <ol className="grid gap-3 md:grid-cols-2">
            {session.reflectionQuestions.map((question, index) => (
              <li
                key={question}
                className="rounded-md border border-line bg-white p-5 text-sm leading-6 text-ink/75"
              >
                <span className="mb-2 block text-xs font-semibold text-rust">
                  Q{index + 1}
                </span>
                {question}
              </li>
            ))}
          </ol>
        </Section>

        <ContactCTA />
      </div>
    </>
  );
}
