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

const programFacts = [
  {
    label: '과정명',
    value: 'KAIST와 함께하는 2026 서초 AI 칼리지 재직자 과정',
  },
  {
    label: '운영 일정',
    value: '2026년 5월 26일부터 9월 5일까지 총 15주 운영',
  },
  {
    label: '교육 장소',
    value: 'KAIST 도곡캠퍼스에서 진행되는 직장인 대상 과정',
  },
];

const curriculumFocus = [
  {
    title: 'AI 최신 연구 동향',
    summary: '강의별 핵심 연구 흐름을 복습 가능한 단위로 정리합니다.',
  },
  {
    title: 'AI 응용 분야별 기술 동향',
    summary: '그래프, 모빌리티, 감염병, 정렬 문제처럼 주제별 적용 맥락을 연결합니다.',
  },
  {
    title: '사례 연구 중심 강의',
    summary: '개념 설명에 그치지 않고 실제 연구 사례와 문제 설정을 함께 봅니다.',
  },
  {
    title: '문제 정의부터 적용까지',
    summary: '과제 기획, 문제 정의, 해결, 실제 적용으로 이어지는 사고 과정을 점검합니다.',
  },
];

const sourceLinks = [
  {
    label: '2026 재직자과정 공지',
    href: 'https://www.seocho.go.kr/site/seocho/ex/bbs/View.do?bcIdx=408846&cbIdx=57',
  },
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
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.18] text-ink sm:text-5xl sm:leading-[1.18]">
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
          eyebrow="Program"
          title="서초 AI 칼리지 프로그램"
          description="이 사이트는 KAIST와 함께하는 2026 서초 AI 칼리지 재직자 과정에서 다룬 강의 내용을 15주 과정 기준으로 정리하는 복습 노트입니다."
        >
          <div className="space-y-5">
            <div className="grid gap-4 md:grid-cols-3">
              {programFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-md border border-line bg-white p-5 shadow-soft"
                >
                  <p className="text-sm font-semibold text-rust">{fact.label}</p>
                  <p className="mt-3 text-base leading-7 text-ink/75">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-md border border-line bg-white p-5 shadow-soft">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-moss">
                    재직자 과정 학습 범위
                  </p>
                  <p className="mt-2 text-sm leading-6 text-ink/65">
                    모집 공지에 공개된 교육 내용 기준으로 AI 최신 연구 동향,
                    응용 기술 동향, 사례 연구, 실제 적용 프로세스를 복습합니다.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {sourceLinks.map((source) => (
                    <a
                      key={source.href}
                      className="rounded-md border border-line bg-paper px-3 py-2 text-xs font-semibold text-ink/70 transition hover:border-moss hover:text-ink"
                      href={source.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {source.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {curriculumFocus.map((track) => (
                  <div
                    key={track.title}
                    className="rounded-md border border-line bg-paper p-4"
                  >
                    <p className="text-base font-semibold text-ink">
                      {track.title}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-ink/70">
                      {track.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section
          eyebrow="Sessions"
          title="차시별 노트"
          description={`총 ${totalSessionCount}주차 기준으로 운영하고, 상단 메뉴에는 개별 차시를 늘리지 않습니다.`}
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
