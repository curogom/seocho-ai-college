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
    const previewLabel = session.preview?.label ?? '차시 예고';
    const previewHeading =
      session.preview?.heading ?? '아직 수업이 진행되지 않았습니다.';
    const hasPrestudyAssignments = !!session.preview?.assignments?.length;
    const latestPublishedSession = sessions
      .filter((item) => item.status === 'published')
      .sort((left, right) => right.order - left.order)[0];

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
          <div className="grid gap-5 lg:grid-cols-[1fr_320px]">
            <section className="rounded-md border border-line bg-white p-6 shadow-soft">
              <span className="rounded-md bg-paper px-2.5 py-1 text-xs font-semibold text-rust">
                {previewLabel}
              </span>
              <h2 className="mt-4 text-2xl font-semibold text-ink">
                {previewHeading}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-ink/70">
                <GlossaryInlineText text={session.preview?.summary ?? session.summary} />
              </p>
              {session.preview?.resourcePath && (
                <p className="mt-3 text-xs font-medium text-ink/55">
                  자료 위치: {session.preview.resourcePath}
                </p>
              )}

              {session.preview?.keyPoints.length ? (
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-ink">예습 범위</h3>
                  <ul className="mt-3 grid gap-3 md:grid-cols-3">
                    {session.preview.keyPoints.map((point) => (
                      <li
                        key={point}
                        className="rounded-md border border-line bg-paper p-4 text-sm leading-6 text-ink/75"
                      >
                        <GlossaryInlineText text={point} />
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {session.preview?.questions.length && !hasPrestudyAssignments ? (
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
                        <GlossaryInlineText text={question} />
                      </li>
                    ))}
                  </ol>
                </div>
              ) : null}

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  className="inline-flex rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper transition hover:bg-moss"
                  to={
                    latestPublishedSession
                      ? `/sessions/${latestPublishedSession.id}`
                      : '/sessions'
                  }
                >
                  {latestPublishedSession
                    ? `${latestPublishedSession.order}차시로 돌아가기`
                    : '전체 차시 보기'}
                </Link>
                <Link
                  className="inline-flex rounded-md border border-line px-4 py-2 text-sm font-semibold text-ink transition hover:border-moss hover:bg-paper"
                  to="/sessions"
                >
                  전체 차시 보기
                </Link>
              </div>
            </section>
            {session.instructor && <InstructorCard instructor={session.instructor} />}
          </div>

          {session.preview?.assignments?.length ? (
            <Section
              eyebrow="Pre-study"
              title="예습 과제"
              description="수업 전에 관계 데이터를 그래프로 바라보는 감각을 먼저 잡습니다."
            >
              <div className="grid gap-4">
                {session.preview.assignments.map((assignment) => (
                  <article
                    key={assignment.title}
                    className="rounded-md border border-line bg-white p-5"
                  >
                    <p className="text-sm font-semibold text-rust">{assignment.goal}</p>
                    <h3 className="mt-2 text-xl font-semibold text-ink">
                      {assignment.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-ink/70">
                      <GlossaryInlineText text={assignment.body} />
                    </p>
                    <ul className="mt-4 grid gap-2 md:grid-cols-3">
                      {assignment.prompts.map((prompt) => (
                        <li
                          key={prompt}
                          className="rounded-md border border-line bg-paper p-3 text-sm leading-6 text-ink/75"
                        >
                          <GlossaryInlineText text={prompt} />
                        </li>
                      ))}
                    </ul>
                    {assignment.example?.length ? (
                      <details className="group/answer mt-4 rounded-md border border-line bg-paper">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-semibold text-ink marker:hidden">
                          <span>모범답안 보기</span>
                          <span className="grid size-7 shrink-0 place-items-center rounded-md border border-line bg-white text-rust group-open/answer:hidden">
                            +
                          </span>
                          <span className="hidden size-7 shrink-0 place-items-center rounded-md border border-line bg-white text-rust group-open/answer:grid">
                            -
                          </span>
                        </summary>
                        <ul className="border-t border-line px-4 py-3 space-y-2 text-sm leading-6 text-ink/75">
                          {assignment.example.map((item) => (
                            <li key={item}>
                              <GlossaryInlineText text={item} />
                            </li>
                          ))}
                        </ul>
                      </details>
                    ) : null}
                  </article>
                ))}
              </div>
            </Section>
          ) : null}

          {hasPrestudyAssignments && session.preview?.questions.length ? (
            <Section
              eyebrow="Check"
              title="최종 점검 퀴즈"
              description="예습 과제를 끝낸 뒤 스스로 설명할 수 있는지 확인합니다."
            >
              <ol className="grid gap-3">
                {session.preview.questions.map((question, index) => (
                  <li
                    key={question}
                    className="rounded-md border border-line bg-white p-4 text-sm leading-6 text-ink/75"
                  >
                    <span className="mb-2 block text-xs font-semibold text-rust">
                      Q{index + 1}
                    </span>
                    <GlossaryInlineText text={question} />
                  </li>
                ))}
              </ol>
            </Section>
          ) : null}

          {session.preview?.focusQuestions?.length ? (
            <Section
              eyebrow="Listening Guide"
              title="수업 중 집중해서 들을 질문"
            >
              <ol className="grid gap-3 md:grid-cols-2">
                {session.preview.focusQuestions.map((question, index) => (
                  <li
                    key={question}
                    className="rounded-md border border-line bg-white p-4 text-sm leading-6 text-ink/75"
                  >
                    <span className="mb-2 block text-xs font-semibold text-rust">
                      Q{index + 1}
                    </span>
                    <GlossaryInlineText text={question} />
                  </li>
                ))}
              </ol>
            </Section>
          ) : null}

          {session.preview?.excludedTopics?.length ? (
            <Section
              eyebrow="Scope"
              title="이번 예습에서 깊게 다루지 않는 항목"
              description="아래 항목은 이름만 확인하고, 수업 후 복습 또는 이후 차시에서 다룹니다."
            >
              <div className="flex flex-wrap gap-2">
                {session.preview.excludedTopics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-md border border-line bg-white px-3 py-2 text-sm font-medium text-ink/70"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </Section>
          ) : null}
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
          description="수업에서 다룬 흐름과 핵심 개념을 이어서 정리했습니다."
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
                className={`rounded-md border border-line bg-white p-5 ${
                  note.table && note.table.headers.length > 2 ? 'md:col-span-2' : ''
                }`}
              >
                <h3 className="text-lg font-semibold text-ink">{note.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/70">
                  <GlossaryInlineText text={note.body} />
                </p>
                {note.highlight && (
                  <p className="mt-4 break-words rounded-md bg-paper px-3 py-2 font-mono text-sm leading-6 text-ink">
                    {note.highlight}
                  </p>
                )}
                {note.table && (
                  <div className="mt-4 overflow-x-auto rounded-md border border-line">
                    <table className="min-w-full border-collapse text-left text-sm">
                      <thead className="bg-paper">
                        <tr>
                          {note.table.headers.map((header) => (
                            <th
                              key={header}
                              scope="col"
                              className="whitespace-nowrap border-b border-line px-3 py-2 font-semibold text-ink"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {note.table.rows.map((row) => (
                          <tr key={row.join('|')} className="border-t border-line">
                            {row.map((cell, cellIndex) => (
                              <td
                                key={`${row[0]}-${cellIndex}`}
                                className="min-w-40 align-top px-3 py-3 leading-6 text-ink/70"
                              >
                                <GlossaryInlineText text={cell} />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
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
