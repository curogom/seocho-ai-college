아래 문서를 그대로 docs/handoff.md 또는 Codex 첫 프롬프트로 넣으면 됩니다. 강의자 정보는 1차시 PDF 첫 장 기준으로 Noseong Park, Tenured Associate Professor, School of Computing, KAIST로 표기되어 있고, 앱에는 “KAIST 전산학부 박노성 교수”로 넣는 구조입니다.  ￼ Qwen3-Next 관련해서는 강의자료의 3:1 hybrid 설명을 우선 기준으로 두고, Gated DeltaNet 자체는 긴 문맥/효율성을 겨냥한 linear-attention 계열로 이해하면 됩니다. Gated DeltaNet 논문도 gating과 delta rule을 결합해 long-context, retrieval, length extrapolation 성능 개선을 목표로 한 구조라고 설명합니다.  ￼

Codex Handoff: AI College Learning Notes

0. 요청 요약

React + TypeScript 기반의 학습 노트 사이트를 만든다.

이 프로젝트는 서초 AI 칼리지 수업 내용을 차시별로 정리하고, 수업 자료·수업 노트·전사문에서 핵심만 추출해 복습 가능한 형태로 제공하는 웹앱이다.

중요한 방향 전환:

* 웹게임은 만들지 않는다.
* 과도한 인터랙션도 만들지 않는다.
* 차시별 학습 노트, 개념 카드, 용어 사전, 퀴즈, 다음 차시 예고 중심으로 만든다.
* GitHub repo에서 계속 누적 업데이트하기 쉬운 구조로 만든다.
* 교수의 사견성 발화는 콘텐츠에서 제외한다.
* 1차시 강의자 소개를 포함한다.
* 2차시 예고에는 LLM, Transformer, Qwen3-Next의 hybrid architecture 내용을 포함한다.
* Contact는 mailto:i_am@curogom.dev로 처리한다.
* GA4는 환경변수 기반으로 붙인다.

⸻

1. 프로젝트명

ai-college-learning-notes

⸻

2. 제품 목적

서초 AI 칼리지 수업 내용을 차시별로 정리하고, 개인 학습·복습·발표 준비에 활용할 수 있는 React 기반 학습 노트 사이트를 만든다.

이 앱은 게임형 학습 앱이 아니다.

목표는 다음이다.

* 수업에서 다룬 핵심 개념을 짧고 명확하게 정리한다.
* 수업 노트와 전사문에서 유효한 직관만 추출한다.
* 전사문에 포함된 교수의 사견, 잡담, 사회비평성 발화는 제거한다.
* 차시가 늘어날수록 content/data 파일만 업데이트해 확장 가능하게 만든다.
* Codex / Claude Code / ChatGPT가 repo를 쉽게 읽고 수정할 수 있는 구조를 유지한다.

⸻

3. 최종 제품 형태

Home
├─ Sessions
│  ├─ 01. From Machine Learning to Deep Learning
│  └─ 02. LLM, Transformer, Diffusion, and Qwen3-Next
├─ Glossary
├─ About
└─ Contact

사용자 흐름:

Home
→ 차시 선택
→ 3줄 요약
→ 강의자 정보
→ 핵심 흐름
→ 개념 카드
→ 교수 설명에서 건질 직관
→ 수식/모델 구조 요약
→ 이해도 체크 퀴즈
→ 다음 차시 예고
→ 개인 프로젝트 연결 메모
→ 피드백 메일 CTA

⸻

4. 기술 스택

필수

* React
* TypeScript
* Vite
* React Router
* Tailwind CSS
* Markdown 또는 MDX 기반 콘텐츠
* Vitest
* GA4
* mailto contact

선택

* MDX
* Shiki 또는 rehype-pretty-code
* Framer Motion
* GitHub Pages / Vercel / Cloudflare Pages
* GitHub Actions

⸻

5. 초기 구현 범위

Phase 1 MVP

* Vite + React + TypeScript 세팅
* Tailwind CSS 세팅
* Home Page
* Session 01 Page
* Instructor Card
* Session 02 Preview
* Glossary Page
* Quiz Component
* Contact CTA
* Privacy / Analytics Notice
* GA4 env 기반 연결
* README 작성
* content curation policy 문서 작성

웹게임, 그래프 시뮬레이터, Canvas 시각화는 구현하지 않는다.

⸻

6. 콘텐츠 소스

Primary Source

강의자료 PDF.

1차시 자료명:

From ML to DL.pdf

Secondary Source

사용자의 수업 노트.

Tertiary Source

강의 전사문.

전사문은 ASR 오류가 많고 강의 외 발화가 섞여 있으므로 raw 파일로만 저장하고, 사용자-facing UI에는 정제된 요약만 노출한다.

⸻

7. 콘텐츠 정제 정책

반영할 내용

다음 내용은 콘텐츠에 반영한다.

* Machine Learning의 목적
* Classification / Classifier
* Feature Engineering
* AI / ML / DL 포함 관계
* Logistic Regression
* Odds / Log Odds / Logit
* Sigmoid
* Decision Boundary
* Representation Learning
* DNN / Hidden Layer / Parameter
* Training / Inference
* Loss / Gradient Descent / Local Minimum
* CNN / Filter / Convolution
* RNN / Language Modeling
* Transformer / GPT / Next Token Prediction
* State-Space Model
* Qwen3-Next
* Discrete Diffusion Language Model
* Scientific Foundation Model

제외할 내용

다음 내용은 사용자-facing 콘텐츠에서 제외한다.

* 특정 국가, 인종, 이민, 영주권 관련 장황한 발화
* 특정 기업·리더에 대한 감정적 평가
* 정치·사회비평성 발화
* 교수 개인사와 가족사 중심의 긴 에피소드
* 주식·투자 판단처럼 보일 수 있는 발화
* 비속어, 농담, 사담
* 강의 주제와 직접 연결되지 않는 조직문화 평가

전사문 처리 규칙

전사문 원문을 그대로 노출하지 않는다.

항상 아래 방식으로 정제한다.

원문 발화
→ 개념 추출
→ 중립적 설명
→ 학습자용 문장으로 재작성

예시:

전사문 의미:
GPA를 쓰자는 것은 단순 feature 사용이고, 학생 네트워크를 만들고 PageRank를 계산하는 것은 feature engineering이다.
앱 반영:
Feature Engineering은 원본 데이터에서 문제 해결에 도움이 되는 새로운 값을 계산해 모델 입력으로 추가하는 작업이다.

⸻

8. Repository Structure

ai-college-learning-notes/
├─ README.md
├─ package.json
├─ index.html
├─ vite.config.ts
├─ tsconfig.json
├─ .env.example
├─ public/
│  ├─ og-image.png
│  └─ favicon.svg
├─ docs/
│  ├─ handoff.md
│  ├─ content-curation-policy.md
│  ├─ session-update-guide.md
│  └─ analytics-policy.md
├─ content/
│  ├─ sessions/
│  │  ├─ 01-from-ml-to-dl.md
│  │  └─ 02-llm-transformer-qwen-next.md
│  ├─ raw/
│  │  ├─ 01-user-note.md
│  │  ├─ 01-transcript.txt
│  │  └─ 02-user-note.md
│  └─ glossary/
│     └─ glossary.md
├─ src/
│  ├─ main.tsx
│  ├─ App.tsx
│  ├─ routes/
│  │  ├─ HomePage.tsx
│  │  ├─ SessionPage.tsx
│  │  ├─ GlossaryPage.tsx
│  │  └─ AboutPage.tsx
│  ├─ data/
│  │  ├─ sessions.ts
│  │  ├─ quizzes.ts
│  │  └─ glossary.ts
│  ├─ analytics/
│  │  └─ ga.ts
│  ├─ components/
│  │  ├─ Layout.tsx
│  │  ├─ Header.tsx
│  │  ├─ Footer.tsx
│  │  ├─ SessionCard.tsx
│  │  ├─ InstructorCard.tsx
│  │  ├─ ConceptCard.tsx
│  │  ├─ ConceptFlow.tsx
│  │  ├─ QuizCard.tsx
│  │  ├─ NextSessionPreview.tsx
│  │  ├─ ContactCTA.tsx
│  │  └─ PrivacyNotice.tsx
│  ├─ styles/
│  │  └─ globals.css
│  └─ tests/
│     └─ quiz.test.ts

⸻

9. 페이지 설계

9.1 Home Page

목적

전체 학습 사이트의 목적과 현재까지 정리된 차시를 보여준다.

구성

* Hero
* Current Session
* Session List
* Learning Flow
* Next Session Preview
* Contact CTA

Hero Copy

AI 개념을 게임처럼 억지로 만들기보다, 차시별 핵심 흐름과 개념을 짧고 명확하게 정리하는 학습 노트입니다.
Machine Learning에서 Deep Learning, LLM, Agentic AI, Physical AI까지 이어지는 흐름을 누적해서 정리합니다.

⸻

9.2 Session Page

Route

/sessions/:sessionId

예시:

/sessions/01

구성

* 차시 제목
* 부제
* 강의자 카드
* 3줄 요약
* 핵심 흐름
* 주요 개념 카드
* 교수 설명에서 건질 직관
* 수식/모델 구조 요약
* 내 프로젝트 연결
* 이해도 체크 퀴즈
* 다음 차시 예고

⸻

9.3 Glossary Page

목적

차시별로 반복 등장하는 용어를 정리한다.

요구사항

* 용어 검색
* 차시 필터
* 한글/영문 병기
* 짧은 설명
* 관련 차시 링크

⸻

9.4 About Page

구성

* 이 프로젝트의 목적
* 콘텐츠 정제 기준
* 차시 업데이트 방식
* GA4 사용 안내
* Contact

⸻

10. 데이터 모델

SessionStatus

export type SessionStatus = 'planned' | 'draft' | 'published';

Instructor

export type Instructor = {
  name: string;
  englishName?: string;
  title?: string;
  affiliationKo: string;
  affiliationEn?: string;
};

Session

export type Session = {
  id: string;
  order: number;
  title: string;
  koreanTitle: string;
  subtitle: string;
  status: SessionStatus;
  instructor?: Instructor;
  summary: string;
  keyConcepts: string[];
  quizIds: string[];
  reflectionQuestions: string[];
  projectConnections: string[];
  nextPreview?: {
    title: string;
    summary: string;
    questions: string[];
  };
};

Quiz

export type Quiz = {
  id: string;
  sessionId: string;
  question: string;
  choices: string[];
  answerIndex: number;
  explanation: string;
};

GlossaryEntry

export type GlossaryEntry = {
  term: string;
  korean: string;
  description: string;
  sessionIds: string[];
};

⸻

11. 1차시 콘텐츠

Title

01. From Machine Learning to Deep Learning

Korean Title

1차시. 기계학습에서 딥러닝으로

Subtitle

Feature Engineering에서 Representation Learning으로

Instructor

1차시 강의자는 다음과 같이 표시한다.

KAIST 전산학부 박노성 교수

데이터 구조:

instructor: {
  name: '박노성',
  englishName: 'Noseong Park',
  title: 'Tenured Associate Professor',
  affiliationKo: 'KAIST 전산학부',
  affiliationEn: 'School of Computing, KAIST',
}

UI에서는 아래 정보를 표시한다.

Instructor
KAIST 전산학부 박노성 교수
Noseong Park
Tenured Associate Professor
School of Computing, KAIST

InstructorCard Component

export type Instructor = {
  name: string;
  englishName?: string;
  title?: string;
  affiliationKo: string;
  affiliationEn?: string;
};
type InstructorCardProps = {
  instructor: Instructor;
};
export function InstructorCard({ instructor }: InstructorCardProps) {
  return (
    <section className="rounded-2xl border bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-gray-500">Instructor</p>
      <h2 className="mt-1 text-xl font-semibold text-gray-900">
        {instructor.affiliationKo} {instructor.name} 교수
      </h2>
      {instructor.englishName && (
        <p className="mt-1 text-sm text-gray-600">
          {instructor.englishName}
        </p>
      )}
      {instructor.title && (
        <p className="mt-2 text-sm text-gray-700">
          {instructor.title}
        </p>
      )}
      {instructor.affiliationEn && (
        <p className="text-sm text-gray-600">
          {instructor.affiliationEn}
        </p>
      )}
    </section>
  );
}

Three-line Summary

전통 ML은 사람이 좋은 feature를 설계하고, 모델은 그 feature를 기준으로 분류나 예측을 수행했다.
Deep Learning은 여러 hidden layer를 통해 feature representation 자체를 모델이 학습하도록 만든 흐름이다.
Logistic Regression, DNN, CNN, RNN은 입력을 표현으로 바꾸고 예측한다는 큰 구조로 연결된다.

Core Flow

AI
→ Machine Learning
→ Feature Engineering
→ Logistic Regression
→ Sigmoid / Probability
→ Deep Neural Network
→ Representation Learning
→ CNN / RNN

Key Concepts

* AI
* Machine Learning
* Deep Learning
* Classification
* Classifier
* Feature
* Feature Engineering
* Ground Truth
* Parameter
* Weight
* Bias
* Logistic Regression
* Odds
* Log Odds
* Logit
* Sigmoid
* Decision Boundary
* Representation Learning
* DNN
* Hidden Layer
* Training
* Inference
* Loss
* Gradient Descent
* Local Minimum
* CNN
* RNN
* Language Model
* Next Token Prediction

Refined Notes

Machine Learning

Machine Learning은 사람이 규칙을 직접 작성하는 대신, 데이터로부터 원하는 task를 수행하는 함수를 학습하는 방식이다.

ŷ = f(x; θ)

* x: 입력 feature
* y: 실제 정답
* ŷ: 모델 예측
* θ: 모델 parameter

Feature Engineering

전통적인 Applied ML에서는 좋은 feature를 만드는 일이 성능을 크게 좌우한다.

단순 feature 사용:

GPA를 입력값으로 사용한다.

Feature Engineering:

학생 간 수강 관계 네트워크를 만들고 PageRank를 계산해 새로운 feature로 추가한다.

Logistic Regression

Logistic Regression은 binary classification의 대표적인 모델이다.

입력 x
→ 선형 점수 z = wᵀx + b
→ sigmoid(z)
→ class 1일 확률

확률을 직접 선형식으로 다루기 어렵기 때문에 log odds를 선형 모델로 다룬다.

Sigmoid

Sigmoid는 임의의 실수값을 0과 1 사이 값으로 바꾼다.

z < 0  → class 1 가능성 낮음
z = 0  → class 1 가능성 50%
z > 0  → class 1 가능성 높음

DNN

DNN은 여러 hidden layer를 통해 입력 데이터를 더 분리하기 쉬운 표현 공간으로 변환한다.

사람이 공간 변환을 설계하면 Feature Engineering이고, 모델이 layer를 통해 학습하면 Deep Learning이다.

Training and Inference

Training은 parameter를 업데이트하는 과정이다.

Inference는 학습된 parameter를 이용해 새 입력에 대한 예측을 수행하는 과정이다.

CNN

CNN은 이미지에서 local pattern을 찾는 구조다.

전통 이미지 처리에서는 사람이 filter를 설계했지만, CNN은 데이터를 통해 filter를 학습한다.

RNN and Language Model

RNN은 순서가 있는 데이터를 처리하기 위한 구조다.

Language Model은 과거 token을 보고 다음 token을 예측하는 task로 볼 수 있다.

Pr(next token | previous tokens)

⸻

12. 2차시 예고 콘텐츠

Title

02. LLM, Transformer, Diffusion, and Qwen3-Next

Korean Title

2차시. 대형언어모델과 차세대 시퀀스 모델

Subtitle

Next Token Prediction에서 Hybrid Architecture로

Preview Copy

다음 차시에서는 LLM의 핵심 구조인 Transformer와 GPT의 next token prediction을 더 깊게 다룬다.
특히 최근 Qwen3-Next에서 언급된 “Next” 계열 접근은 기존 Transformer-only 구조와 다른 방향을 보여준다.
기존 GPT류 모델이 decoder-only Transformer와 masked self-attention을 중심으로 구성됐다면, Qwen3-Next는 Gated DeltaNet과 masked self-attention을 섞는 hybrid 구조를 사용한다.

Qwen3-Next Concept Summary

Qwen3-Next의 핵심은 Transformer를 완전히 버리는 것이 아니라, attention의 장점은 유지하면서 더 효율적인 sequence modeling 구조를 섞는 것이다.

Traditional Transformer-only LLM

Decoder-only Transformer
+ Masked Self-Attention
+ Autoregressive next token prediction

문제:

긴 문맥이 길어질수록 attention 비용이 커진다.
긴 답변은 token을 순차적으로 생성해야 하므로 느릴 수 있다.
모든 token interaction을 비싼 attention으로 처리하면 효율성이 떨어진다.

Qwen3-Next Approach

강의자료 기준으로 Qwen3-Next-80B는 다음 구조를 섞는다.

Gated DeltaNet : Masked Self-Attention = 3 : 1

역할 분리:

Component	Role
Gated DeltaNet	긴 token 의존성, 긴 문맥 처리, 효율성 담당
Masked Self-Attention	정밀한 reasoning, token 간 세밀한 상호작용 담당

학습자용 설명:

기존 Transformer-only 접근은 모든 token 관계를 attention으로 자세히 계산하는 방식에 가깝다.
Qwen3-Next는 모든 것을 attention으로 처리하지 않고, 긴 흐름과 효율성은 Gated DeltaNet 계열에 맡기고, 정밀한 추론과 token 상호작용이 필요한 부분은 masked self-attention에 맡기는 hybrid 방향으로 볼 수 있다.

Why This Matters

LLM이 길고 복잡한 context를 다룰수록 계산 비용과 추론 속도가 중요해진다.
Transformer의 self-attention은 강력하지만 긴 sequence에서 비용 문제가 있다.
Qwen3-Next 같은 hybrid architecture는 긴 문맥 처리와 reasoning 사이의 균형을 잡으려는 시도로 볼 수 있다.

Key Points

* GPT는 decoder-only Transformer다.
* GPT는 Pr(x_t | x_<t)를 autoregressive하게 학습한다.
* 긴 답변 생성은 token을 순차적으로 만들어야 하므로 느릴 수 있다.
* Attention은 token 간 정밀한 상호작용에 강하지만, 긴 문맥에서는 비용이 커진다.
* State-Space Model, DeltaNet 계열은 긴 sequence를 더 효율적으로 처리하려는 방향이다.
* Qwen3-Next는 Gated DeltaNet과 masked self-attention을 혼합해 효율성과 reasoning 사이 균형을 노린다.
* 다음 차시에서는 Transformer 이후의 구조 변화도 주목한다.

Questions for Session 02

1. GPT가 next token prediction만으로 reasoning처럼 보이는 능력을 갖게 되는 이유는 무엇인가?
2. Transformer의 self-attention은 왜 긴 문맥에서 비용 문제가 생기는가?
3. Qwen3-Next의 Gated DeltaNet은 기존 attention과 어떤 역할 차이가 있는가?
4. Hybrid architecture는 Transformer를 대체하는가, 보완하는가?
5. LLM에서 cross entropy 학습은 reasoning 능력을 직접 학습하는 것인가, scale에 따른 emergent behavior인가?

Session 02 Expected Glossary

* Transformer
* Self-Attention
* Masked Self-Attention
* Encoder-only
* Decoder-only
* BERT
* GPT
* Autoregressive Model
* Next Token Prediction
* Cross Entropy
* KV Cache
* State-Space Model
* S4
* Gated DeltaNet
* Qwen3-Next
* Hybrid Architecture
* Discrete Diffusion Language Model

⸻

13. 초기 세션 데이터

src/data/sessions.ts

export type SessionStatus = 'planned' | 'draft' | 'published';
export type Instructor = {
  name: string;
  englishName?: string;
  title?: string;
  affiliationKo: string;
  affiliationEn?: string;
};
export type Session = {
  id: string;
  order: number;
  title: string;
  koreanTitle: string;
  subtitle: string;
  status: SessionStatus;
  instructor?: Instructor;
  summary: string;
  keyConcepts: string[];
  quizIds: string[];
  reflectionQuestions: string[];
  projectConnections: string[];
  nextPreview?: {
    title: string;
    summary: string;
    questions: string[];
  };
};
export const sessions: Session[] = [
  {
    id: '01',
    order: 1,
    title: 'From Machine Learning to Deep Learning',
    koreanTitle: '기계학습에서 딥러닝으로',
    subtitle: 'Feature Engineering에서 Representation Learning으로',
    status: 'published',
    instructor: {
      name: '박노성',
      englishName: 'Noseong Park',
      title: 'Tenured Associate Professor',
      affiliationKo: 'KAIST 전산학부',
      affiliationEn: 'School of Computing, KAIST',
    },
    summary:
      '전통적인 Machine Learning에서 Deep Learning으로 넘어가는 흐름을 다룬다. 핵심은 사람이 feature를 직접 설계하던 방식에서, 모델이 여러 layer를 통해 feature representation을 학습하는 방식으로 전환된 것이다.',
    keyConcepts: [
      'Machine Learning',
      'Feature Engineering',
      'Classification',
      'Logistic Regression',
      'Sigmoid',
      'Deep Neural Network',
      'Training',
      'Inference',
      'CNN',
      'RNN',
      'Language Model',
      'Transformer',
      'GPT',
    ],
    quizIds: ['s01-q1', 's01-q2', 's01-q3', 's01-q4', 's01-q5'],
    reflectionQuestions: [
      '전통 ML에서 Feature Engineering이 중요한 이유는 무엇인가?',
      'Deep Learning은 Feature Engineering을 완전히 없앤 것인가, 줄여준 것인가?',
      'Logistic Regression에서 sigmoid가 필요한 이유는 무엇인가?',
      '실내 내비게이션 서비스에서 규칙 기반으로 충분한 문제와 딥러닝이 필요한 문제는 어떻게 나눌 수 있는가?',
    ],
    projectConnections: [
      'QR/마커 기반 위치 인식은 규칙 기반으로 시작할 수 있다.',
      '카메라 기반 위치 보정이나 표지판 인식은 CNN/VLM 계열 접근이 필요할 수 있다.',
      '사용자의 자연어 목적지 해석과 안내 문구 생성은 LLM으로 확장할 수 있다.',
    ],
    nextPreview: {
      title: 'LLM, Transformer, Diffusion, and Qwen3-Next',
      summary:
        '다음 차시에서는 GPT의 next token prediction, Transformer의 self-attention, 그리고 Qwen3-Next에서 보이는 Gated DeltaNet + masked self-attention hybrid 구조를 다룬다.',
      questions: [
        'GPT는 왜 next token prediction만으로 reasoning처럼 보이는 능력을 갖게 되었는가?',
        'Transformer의 attention은 긴 문맥에서 어떤 비용 문제가 있는가?',
        'Qwen3-Next의 Gated DeltaNet은 masked self-attention과 어떤 역할을 나누는가?',
      ],
    },
  },
  {
    id: '02',
    order: 2,
    title: 'LLM, Transformer, Diffusion, and Qwen3-Next',
    koreanTitle: '대형언어모델과 차세대 시퀀스 모델',
    subtitle: 'Next Token Prediction에서 Hybrid Architecture로',
    status: 'planned',
    summary:
      'GPT의 autoregressive next token prediction과 Transformer 구조를 이해하고, Qwen3-Next처럼 attention과 DeltaNet 계열을 섞는 차세대 hybrid 구조를 살펴본다.',
    keyConcepts: [
      'Transformer',
      'Self-Attention',
      'Masked Self-Attention',
      'BERT',
      'GPT',
      'Autoregressive Model',
      'Next Token Prediction',
      'Cross Entropy',
      'KV Cache',
      'State-Space Model',
      'Gated DeltaNet',
      'Qwen3-Next',
      'Discrete Diffusion Language Model',
    ],
    quizIds: [],
    reflectionQuestions: [
      'LLM의 학습 목표는 reasoning을 직접 학습하는 것인가?',
      'Attention의 장점과 비용 문제는 무엇인가?',
      'Qwen3-Next의 hybrid 구조는 Transformer를 대체하는가, 보완하는가?',
    ],
    projectConnections: [
      '실내 안내 Agent에서 LLM은 목적 해석과 안내 문장 생성에 활용할 수 있다.',
      '긴 공간 문맥이나 운영 문서를 다루려면 긴 context 처리 비용과 검색 구조를 함께 고려해야 한다.',
      'Gated DeltaNet 같은 효율적 sequence module은 장기적으로 온프렘 또는 로컬 추론 전략과 연결될 수 있다.',
    ],
  },
];

⸻

14. Quiz Data

src/data/quizzes.ts

export type Quiz = {
  id: string;
  sessionId: string;
  question: string;
  choices: string[];
  answerIndex: number;
  explanation: string;
};
export const quizzes: Quiz[] = [
  {
    id: 's01-q1',
    sessionId: '01',
    question: 'AI, ML, DL의 포함 관계로 가장 적절한 것은?',
    choices: [
      'AI ⊂ ML ⊂ DL',
      'DL ⊂ ML ⊂ AI',
      'ML ⊂ DL ⊂ AI',
      'AI, ML, DL은 서로 독립이다',
    ],
    answerIndex: 1,
    explanation:
      'AI가 가장 넓은 개념이고, ML은 AI의 하위 분야, DL은 ML의 하위 분야로 볼 수 있다.',
  },
  {
    id: 's01-q2',
    sessionId: '01',
    question: '전통적인 Applied ML에서 Feature Engineering이 중요한 이유는?',
    choices: [
      '모델 학습을 하지 않기 위해',
      '좋은 입력 표현이 모델 성능을 크게 좌우하기 때문에',
      'GPU를 덜 쓰기 위해',
      'Logistic Regression을 쓰지 않기 위해',
    ],
    answerIndex: 1,
    explanation:
      '전통 ML에서는 사람이 만든 feature가 모델이 볼 수 있는 정보의 품질을 결정한다.',
  },
  {
    id: 's01-q3',
    sessionId: '01',
    question: 'Logistic Regression에서 sigmoid를 쓰는 주된 이유는?',
    choices: [
      '입력값을 더 크게 만들기 위해',
      '모든 값을 음수로 만들기 위해',
      '선형 점수를 0~1 사이 확률처럼 해석하기 위해',
      '모델 parameter 개수를 늘리기 위해',
    ],
    answerIndex: 2,
    explanation:
      'sigmoid는 임의의 실수값을 0과 1 사이로 변환하므로 binary classification의 확률처럼 해석할 수 있다.',
  },
  {
    id: 's01-q4',
    sessionId: '01',
    question: 'DNN이 Feature Engineering 부담을 줄여줄 수 있는 이유는?',
    choices: [
      '데이터를 전혀 쓰지 않기 때문에',
      '사람이 만든 규칙만 실행하기 때문에',
      '여러 layer를 통해 입력 데이터의 유용한 표현을 학습할 수 있기 때문에',
      '항상 선형 모델만 쓰기 때문에',
    ],
    answerIndex: 2,
    explanation:
      'DNN은 여러 hidden layer를 통해 입력 공간을 변환하고 유용한 representation을 학습한다.',
  },
  {
    id: 's01-q5',
    sessionId: '01',
    question: 'Training과 Inference의 차이로 맞는 것은?',
    choices: [
      'Training은 예측이고 Inference는 학습이다.',
      'Training은 parameter를 업데이트하고, Inference는 학습된 parameter로 예측한다.',
      '둘은 완전히 같은 말이다.',
      'Inference는 입력 데이터가 필요 없다.',
    ],
    answerIndex: 1,
    explanation:
      'Training은 데이터를 통해 weight와 bias 같은 parameter를 조정하는 과정이고, Inference는 이미 학습된 parameter를 사용해 새 입력의 결과를 계산하는 과정이다.',
  },
];

⸻

15. Glossary Data

src/data/glossary.ts

export type GlossaryEntry = {
  term: string;
  korean: string;
  description: string;
  sessionIds: string[];
};
export const glossary: GlossaryEntry[] = [
  {
    term: 'Feature',
    korean: '특징값',
    description:
      '모델이 입력으로 받는 값. 예를 들어 나이, 소득, GPA, 출석률 등이 feature가 될 수 있다.',
    sessionIds: ['01'],
  },
  {
    term: 'Feature Engineering',
    korean: '특징 설계',
    description:
      '원본 데이터에서 문제 해결에 도움이 되는 새로운 입력값을 설계하거나 계산하는 작업.',
    sessionIds: ['01'],
  },
  {
    term: 'Sigmoid',
    korean: '시그모이드',
    description:
      '임의의 실수값을 0과 1 사이 값으로 변환하는 함수. Binary classification에서 확률처럼 해석할 수 있다.',
    sessionIds: ['01'],
  },
  {
    term: 'Logit',
    korean: '로짓',
    description:
      'Log odds. Logistic Regression에서는 log(P(C1) / P(C0))를 선형 점수 wᵀx로 모델링한다.',
    sessionIds: ['01'],
  },
  {
    term: 'Training',
    korean: '학습',
    description:
      '학습 데이터를 이용해 parameter를 업데이트하는 과정.',
    sessionIds: ['01'],
  },
  {
    term: 'Inference',
    korean: '추론',
    description:
      '학습된 parameter를 사용해 새 입력에 대한 결과를 계산하는 과정.',
    sessionIds: ['01'],
  },
  {
    term: 'Transformer',
    korean: '트랜스포머',
    description:
      'Self-attention을 중심으로 token 간 관계를 계산하는 시퀀스 모델 구조. 현대 LLM의 핵심 기반이다.',
    sessionIds: ['01', '02'],
  },
  {
    term: 'GPT',
    korean: '생성형 사전학습 트랜스포머',
    description:
      'Decoder-only Transformer 기반 모델. 이전 token들을 조건으로 다음 token을 예측하는 autoregressive 방식으로 학습한다.',
    sessionIds: ['01', '02'],
  },
  {
    term: 'Masked Self-Attention',
    korean: '마스크드 셀프 어텐션',
    description:
      '현재 token이 미래 token을 보지 못하도록 가린 self-attention. GPT류 autoregressive model에서 사용된다.',
    sessionIds: ['02'],
  },
  {
    term: 'State-Space Model',
    korean: '상태공간모델',
    description:
      '시퀀스 데이터를 상태 전이 관점에서 모델링하는 구조. Transformer의 긴 sequence 비용 문제를 보완하려는 대안 계열 중 하나다.',
    sessionIds: ['02'],
  },
  {
    term: 'Gated DeltaNet',
    korean: '게이트드 델타넷',
    description:
      '긴 token 의존성과 효율성을 다루기 위한 sequence modeling 구조. Qwen3-Next에서는 masked self-attention과 함께 사용되는 것으로 소개된다.',
    sessionIds: ['02'],
  },
  {
    term: 'Qwen3-Next',
    korean: 'Qwen3-Next',
    description:
      'Gated DeltaNet과 masked self-attention을 섞는 hybrid 구조를 사용한다. 긴 문맥 효율성과 정밀한 token interaction을 함께 노리는 접근으로 이해할 수 있다.',
    sessionIds: ['02'],
  },
  {
    term: 'Hybrid Architecture',
    korean: '하이브리드 아키텍처',
    description:
      '하나의 모델 안에서 서로 다른 장점을 가진 구조를 섞는 접근. Qwen3-Next에서는 효율적인 sequence module과 attention을 혼합하는 방향으로 볼 수 있다.',
    sessionIds: ['02'],
  },
];

⸻

16. GA4 Analytics

요구사항

* GA4 measurement id는 환경변수로 주입한다.
* 값이 없으면 analytics는 비활성화한다.
* 개인 식별 정보를 직접 수집하지 않는다.
* About page 또는 Footer에 analytics notice를 둔다.

.env.example

VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

src/analytics/ga.ts

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
export function initGA() {
  if (!GA_MEASUREMENT_ID) return;
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer?.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    anonymize_ip: true,
  });
}
export function trackPageView(path: string) {
  if (!GA_MEASUREMENT_ID || !window.gtag) return;
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: path,
  });
}
export function trackLearningEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (!GA_MEASUREMENT_ID || !window.gtag) return;
  window.gtag('event', eventName, params);
}

추적 이벤트

session_opened
concept_card_opened
quiz_answered
next_preview_opened
contact_clicked

⸻

17. Contact CTA

이메일

i_am@curogom.dev

요구사항

* Footer 또는 About page에 Contact CTA를 둔다.
* MVP에서는 mailto만 사용한다.
* 서버/API 이메일 전송은 구현하지 않는다.

Component

import { trackLearningEvent } from '../analytics/ga';
export function ContactCTA() {
  const email = 'i_am@curogom.dev';
  const subject = encodeURIComponent('AI College Learning Notes Feedback');
  return (
    <section className="rounded-2xl border p-6">
      <h2 className="text-xl font-semibold">Feedback</h2>
      <p className="mt-2 text-sm text-gray-600">
        잘못된 설명, 추가되면 좋을 개념 카드, 강의 내용 보강 아이디어가 있다면 메일로 알려주세요.
      </p>
      <a
        className="mt-4 inline-flex rounded-xl border px-4 py-2 text-sm font-medium"
        href={`mailto:${email}?subject=${subject}`}
        onClick={() => trackLearningEvent('contact_clicked')}
      >
        Send feedback
      </a>
    </section>
  );
}

⸻

18. Session Update Workflow

새 차시가 들어오면 다음 절차로 업데이트한다.

1. Raw material 추가
    * content/raw/02-user-note.md
    * content/raw/02-transcript.txt
2. 정제된 차시 콘텐츠 작성
    * content/sessions/02-llm-transformer-qwen-next.md
3. 데이터 파일 업데이트
    * src/data/sessions.ts
    * src/data/quizzes.ts
    * src/data/glossary.ts
4. 이전 차시의 다음 차시 예고 업데이트
    * nextPreview
5. 새 차시 상태 업데이트
    * planned → draft → published
6. README progress table 업데이트
7. PR 생성

Branch Naming

session/02-llm-transformer-qwen-next
session/03-graph-ml

Commit Naming

feat(session-01): add ML to DL learning notes
feat(session-02): add LLM and Qwen Next preview
feat(analytics): add GA4 tracking
docs: add transcript curation policy

PR Title

feat(session-01): implement AI college learning notes MVP

⸻

19. README Draft

# AI College Learning Notes
서초 AI 칼리지 수업 내용을 쉽게 이해하기 위한 React 기반 학습 노트 사이트입니다.
## Purpose
이 저장소는 Machine Learning, Deep Learning, Large Language Model 관련 수업 내용을 차시별로 요약하고, 주요 개념을 학습 카드와 퀴즈 형태로 정리하는 것을 목표로 합니다.
웹게임형 구현은 지양하고, 차시별 학습 내용을 지속적으로 보강할 수 있는 문서형 웹앱을 지향합니다.
## Current Sessions
| Session | Topic | Status |
|---:|---|---|
| 01 | From Machine Learning to Deep Learning | In Progress |
| 02 | LLM, Transformer, Diffusion, and Qwen3-Next | Planned |
## Core Features
- 차시별 요약
- 강의자 정보
- 핵심 개념 카드
- 용어 사전
- 이해도 체크 퀴즈
- 다음 차시 예고
- 개인 프로젝트 연결 메모
- GA4 기반 사용 분석
- mailto 기반 피드백 링크
## Contact
Feedback: i_am@curogom.dev
## Development
```bash
npm install
npm run dev

Environment

VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

If VITE_GA_MEASUREMENT_ID is missing, analytics will be disabled.

License

TBD

---
## 20. MVP Acceptance Criteria
### Content
- [ ] Home page가 존재한다.
- [ ] 1차시 요약 페이지가 존재한다.
- [ ] 1차시 강의자 카드가 표시된다.
- [ ] 강의자 이름은 “박노성 교수”로 표시된다.
- [ ] 소속은 “KAIST 전산학부 / School of Computing, KAIST”로 표시된다.
- [ ] 강의자 직접 연락처는 표시하지 않는다.
- [ ] AI / ML / DL 포함 관계가 설명된다.
- [ ] Feature Engineering과 Deep Learning의 차이가 설명된다.
- [ ] Logistic Regression과 Sigmoid가 설명된다.
- [ ] Training과 Inference의 차이가 설명된다.
- [ ] CNN, RNN의 위치가 간단히 설명된다.
- [ ] 2차시 예고에 LLM, Transformer, Qwen3-Next 개념이 포함된다.
- [ ] Qwen3-Next의 hybrid 구조가 “Gated DeltaNet + Masked Self-Attention”으로 설명된다.
- [ ] 교수 사견성 발화는 콘텐츠에서 제외되어 있다.
### Quiz
- [ ] 1차시 퀴즈 5개가 표시된다.
- [ ] 정답 선택 후 해설이 표시된다.
- [ ] quiz_answered 이벤트가 전송된다.
### Glossary
- [ ] 주요 용어가 한글/영문으로 표시된다.
- [ ] 차시별 용어 필터가 가능하다.
- [ ] Qwen3-Next, Gated DeltaNet, Masked Self-Attention, Hybrid Architecture가 2차시 예정 용어로 들어간다.
### Analytics
- [ ] GA4 measurement id가 있으면 GA가 초기화된다.
- [ ] env var가 없으면 analytics가 비활성화된다.
- [ ] session_opened 이벤트가 전송된다.
- [ ] concept_card_opened 이벤트가 전송된다.
- [ ] quiz_answered 이벤트가 전송된다.
- [ ] next_preview_opened 이벤트가 전송된다.
- [ ] contact_clicked 이벤트가 전송된다.
### Contact
- [ ] footer 또는 About page에서 `i_am@curogom.dev`로 mailto 링크가 제공된다.
- [ ] contact click 이벤트가 추적된다.
### Maintainability
- [ ] session data와 page component가 분리되어 있다.
- [ ] 새 차시는 markdown과 data file 업데이트만으로 추가 가능하다.
- [ ] raw transcript와 정제된 summary가 분리되어 있다.
- [ ] content curation policy 문서가 존재한다.
---
## 21. Notes for Codex
구현 시 반드시 지킬 것:
1. 웹게임을 만들지 않는다.
2. 차시별 학습 노트 사이트로 구현한다.
3. 콘텐츠는 data-driven으로 관리한다.
4. 전사문 raw file과 정제된 summary를 분리한다.
5. raw transcript를 사용자-facing UI에 노출하지 않는다.
6. 교수의 사견성·잡담성 발화는 제거하거나 중립화한다.
7. 1차시 강의자 카드에 KAIST 전산학부 박노성 교수를 표시한다.
8. 강의자 직접 연락처는 명시적 허가가 없는 한 공개 UI와 공개 문서에 노출하지 않는다.
9. Session 02 Preview를 처음부터 포함한다.
10. Qwen3-Next는 Gated DeltaNet과 masked self-attention을 섞는 hybrid architecture로 설명한다.
11. Gated DeltaNet은 long-range dependency와 efficiency 담당으로 설명한다.
12. Masked self-attention은 precise reasoning과 token interaction 담당으로 설명한다.
13. mailto 기반 feedback만 구현한다.
14. GA measurement id는 hardcoding하지 않는다.
15. GA env가 없어도 앱은 정상 동작해야 한다.
16. README와 세션 상태를 항상 최신으로 유지한다.
17. 초기 구현은 Phase 1 범위만 한다.
18. UI는 간결하고 문서형으로 만든다.
19. 복잡한 Canvas, chart, game interaction은 MVP에서 제외한다.
:::
Codex에는 위 문서 전체를 넣고, 첫 지시를 이렇게 주면 됩니다.
```text
이 핸드오프 문서를 기준으로 Vite + React + TypeScript + Tailwind 프로젝트를 생성하고, Phase 1 MVP 범위만 구현해줘. 웹게임은 만들지 말고, 차시별 학습 노트 사이트로 구성해줘. GA4는 env 기반으로 붙이고, 없으면 비활성화해줘. 
