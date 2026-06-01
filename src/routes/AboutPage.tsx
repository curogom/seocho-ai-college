import { ContactCTA } from '../components/ContactCTA';
import { PrivacyNotice } from '../components/PrivacyNotice';
import { Section } from '../components/Section';

const curationRules = [
  '강의자료 PDF를 primary source로 둔다.',
  '수업 노트는 직관과 예시를 보강하는 secondary source로만 사용한다.',
  '전사문은 raw 파일로 보관하고 사용자 화면에는 정제 요약만 노출한다.',
  '정치·사회비평성 발화, 사담, 투자 판단처럼 보일 수 있는 발화는 제외한다.',
];

const updateSteps = [
  'content/raw에 원자료를 추가한다.',
  'content/sessions에 정제된 차시 노트를 작성한다.',
  'src/data의 sessions, quizzes, glossary를 업데이트한다.',
  '이전 차시의 nextPreview와 README 진행표를 갱신한다.',
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
            문서형 학습 노트 운영 기준
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
          eyebrow="Curation"
          title="콘텐츠 정제 기준"
          description="강의 외 발화가 섞인 전사문은 그대로 노출하지 않습니다."
        >
          <ul className="grid gap-3 md:grid-cols-2">
            {curationRules.map((rule) => (
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
          description="새 차시가 들어오면 raw material과 정제 노트를 분리해서 추가합니다."
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
