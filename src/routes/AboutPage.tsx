import { ContactCTA } from '../components/ContactCTA';
import { PrivacyNotice } from '../components/PrivacyNotice';
import { Section } from '../components/Section';

const studyPrinciples = [
  '차시별 핵심 흐름을 먼저 정리한다.',
  '개념 카드와 용어 사전을 함께 연결한다.',
  '모델 구조와 수식은 복습에 필요한 수준으로 요약한다.',
  '퀴즈와 복습 질문으로 이해도를 점검한다.',
];

const updateSteps = [
  '차시의 핵심 흐름을 정리한다.',
  '시각 노트와 개념 카드를 보강한다.',
  '용어 사전과 퀴즈를 연결한다.',
  '이전 차시와 다음 차시의 맥락을 갱신한다.',
];

export function AboutPage() {
  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-normal text-rust">
            About
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-ink sm:text-5xl">
            문서형 학습 노트 소개
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-ink/70">
            이 프로젝트는 웹게임이 아니라 서초 AI 칼리지 수업 내용을
            차시별로 정리하고 복습하기 위한 React 기반 학습 노트입니다.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Section
          eyebrow="Purpose"
          title="제품 목적"
          description="짧고 명확한 차시별 요약, 개념 카드, 용어 사전, 퀴즈를 통해 개인 학습과 발표 준비에 바로 쓸 수 있는 자료를 만드는 것이 목표입니다."
        >
          <div className="rounded-md border border-line bg-white p-5 text-sm leading-7 text-ink/75">
            차시가 늘어나도 컴포넌트 구조를 크게 바꾸지 않고 content와 data
            파일만 업데이트하는 방식으로 운영합니다.
          </div>
        </Section>

        <Section
          eyebrow="Study Design"
          title="학습 구성 방식"
          description="흐름, 개념, 용어, 퀴즈를 같은 구조로 반복해 차시 간 연결을 쉽게 만듭니다."
        >
          <ul className="grid gap-3 md:grid-cols-2">
            {studyPrinciples.map((rule) => (
              <li
                key={rule}
                className="rounded-md border border-line bg-white p-5 text-sm leading-6 text-ink/75"
              >
                {rule}
              </li>
            ))}
          </ul>
        </Section>

        <Section
          eyebrow="Workflow"
          title="차시 업데이트 방식"
          description="새 차시가 준비되면 같은 학습 구조에 맞춰 내용을 확장합니다."
        >
          <ol className="grid gap-3 md:grid-cols-2">
            {updateSteps.map((step, index) => (
              <li
                key={step}
                className="flex gap-4 rounded-md border border-line bg-white p-5 text-sm leading-6 text-ink/75"
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-md bg-ink text-xs font-semibold text-paper">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </Section>

        <PrivacyNotice />
        <div className="mt-8">
          <ContactCTA />
        </div>
      </div>
    </>
  );
}
