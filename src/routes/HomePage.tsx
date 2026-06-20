import { ContactCTA } from '../components/ContactCTA';
import { NextSessionPreview } from '../components/NextSessionPreview';
import { Section } from '../components/Section';
import { SessionCard } from '../components/SessionCard';
import { Link } from 'react-router-dom';
import { sessions, totalSessionCount } from '../data/sessions';

const learningFlow = [
  '차시 선택',
  '3줄 요약',
  '핵심 흐름',
  '개념 카드',
  '퀴즈',
  '다음 차시 예고',
];

export function HomePage() {
  const latestPublishedSession = [...sessions]
    .reverse()
    .find((session) => session.status === 'published');
  const nextPreview = latestPublishedSession?.nextPreview;
  const nextPreviewSessionId = nextPreview
    ? sessions.find(
        (session) =>
          session.title === nextPreview.title ||
          session.koreanTitle === nextPreview.title,
      )?.id
    : undefined;

  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-rust">
              AI College Learning Notes
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              차시별 핵심 흐름과 개념을 짧고 명확하게 정리합니다.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-ink/70">
              Machine Learning에서 Deep Learning, LLM, Agentic AI, Physical
              AI까지 이어지는 흐름을 누적해서 복습할 수 있는 문서형
              학습 노트입니다.
            </p>
          </div>
          <div className="rounded-md border border-line bg-paper p-5">
            <p className="text-sm font-semibold text-moss">현재 학습 범위</p>
            <div className="mt-5 space-y-4">
              {learningFlow.map((item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="grid size-8 place-items-center rounded-md bg-ink text-xs font-semibold text-paper">
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium text-ink">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Section
          eyebrow="Sessions"
          title="차시별 노트"
          description={`총 ${totalSessionCount}차시 슬롯을 기준으로 운영하고, 상단 메뉴에는 개별 차시를 늘리지 않습니다.`}
        >
          <div className="mb-4 flex justify-end">
            <Link
              className="rounded-md border border-line bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:border-moss hover:bg-paper"
              to="/sessions"
            >
              전체 차시 보기
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {sessions.map((session) => (
              <SessionCard key={session.id} session={session} />
            ))}
          </div>
        </Section>

        {nextPreview && (
          <Section title="다음 차시에서 이어질 질문">
            <NextSessionPreview
              preview={nextPreview}
              nextSessionId={nextPreviewSessionId}
            />
          </Section>
        )}

        <Section
          eyebrow="Study Pattern"
          title="복습 방식"
          description="각 차시는 흐름을 먼저 잡고, 개념 카드와 퀴즈로 이해도를 확인하는 방식으로 구성합니다."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {[
              '전체 흐름을 먼저 보고 세부 개념으로 내려간다.',
              '핵심 용어와 모델 구조를 같은 화면에서 연결한다.',
              '퀴즈와 복습 질문으로 다음 차시 전에 이해도를 점검한다.',
            ].map((policy) => (
              <div
                key={policy}
                className="rounded-md border border-line bg-white p-5 text-sm leading-6 text-ink/75"
              >
                {policy}
              </div>
            ))}
          </div>
        </Section>

        <ContactCTA />
      </div>
    </>
  );
}
