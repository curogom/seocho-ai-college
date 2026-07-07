export type SessionStatus = 'planned' | 'draft' | 'published';

export type Instructor = {
  name: string;
  englishName?: string;
  title?: string;
  affiliationKo: string;
  affiliationEn?: string;
  lab?: string;
};

export type ConceptCard = {
  term: string;
  korean: string;
  description: string;
  takeaway: string;
  flowItem?: string;
};

export type ConceptFlowGroup = {
  label: string;
  layout?: 'hierarchy' | 'pipeline' | 'branch';
  items: string[];
};

export type NoteBlock = {
  title: string;
  body: string;
  highlight?: string;
  table?: {
    headers: string[];
    rows: string[][];
  };
};

export type VisualNote = {
  title: string;
  src: string;
  alt: string;
  caption: string;
};

export type NextPreview = {
  title: string;
  summary: string;
  questions: string[];
  keyPoints: string[];
};

export type SessionPreview = {
  label?: string;
  heading?: string;
  summary: string;
  keyPoints: string[];
  questions: string[];
  assignments?: {
    title: string;
    goal: string;
    body: string;
    prompts: string[];
    example?: string[];
  }[];
  focusQuestions?: string[];
  excludedTopics?: string[];
};

export type Session = {
  id: string;
  order: number;
  slotId?: string;
  partLabel?: string;
  title: string;
  koreanTitle: string;
  subtitle: string;
  status: SessionStatus;
  instructor?: Instructor;
  summary: string;
  summaryLines: string[];
  coreFlow: string[];
  coreFlowGroups: ConceptFlowGroup[];
  conceptCards: ConceptCard[];
  visualNotes: VisualNote[];
  intuitions: NoteBlock[];
  modelNotes: NoteBlock[];
  quizIds: string[];
  reflectionQuestions: string[];
  projectConnections: string[];
  preview?: SessionPreview;
  nextPreview?: NextPreview;
};

export const totalSessionCount = 16;

const parkInstructor: Instructor = {
  name: '박노성',
  englishName: 'Noseong Park',
  title: 'Tenured Associate Professor',
  affiliationKo: 'KAIST 전산학부',
  affiliationEn: 'School of Computing, KAIST',
};

const whangInstructor: Instructor = {
  name: '황지영',
  englishName: 'Joyce Jiyoung Whang',
  title: 'Professor',
  affiliationKo: 'KAIST AI 컴퓨팅학과',
  affiliationEn: 'KAIST Department of AI Computing',
  lab: 'Big Data Intelligence Lab',
};

const leeInstructor: Instructor = {
  name: '이재길',
  englishName: 'Jae-Gil Lee',
  title: 'Professor',
  affiliationKo: 'KAIST 전산학부',
  affiliationEn: 'School of Computing, KAIST',
};

const bakInstructor: Instructor = {
  name: '박진영',
  englishName: 'JinYeong Bak',
  title: 'Professor',
  affiliationKo: '성균관대학교',
  affiliationEn: 'Sungkyunkwan University',
  lab: 'Human Language Intelligence Lab',
};

export const sessions: Session[] = [
  {
    id: '01',
    order: 1,
    title: 'From Machine Learning to Deep Learning',
    koreanTitle: '기계학습에서 딥러닝으로',
    subtitle: 'Feature Engineering에서 Representation Learning으로',
    status: 'published',
    instructor: parkInstructor,
    summary:
      '전통적인 Machine Learning에서 Deep Learning으로 넘어가는 흐름을 다룬다. 핵심은 사람이 feature를 직접 설계하던 방식에서, 모델이 여러 layer를 통해 feature representation을 학습하는 방식으로 전환된 것이다.',
    summaryLines: [
      '전통 ML은 사람이 좋은 feature를 설계하고, 모델은 그 feature를 기준으로 분류나 예측을 수행했다.',
      'Deep Learning은 여러 hidden layer를 통해 feature representation 자체를 모델이 학습하도록 만든 흐름이다.',
      'Logistic Regression, DNN, CNN, RNN은 입력을 표현으로 바꾸고 예측한다는 큰 구조로 연결된다.',
    ],
    coreFlow: [
      'AI',
      'Machine Learning',
      'Feature Engineering',
      'Logistic Regression',
      'Sigmoid / Probability',
      'Deep Learning',
      'Representation Learning',
      'DNN',
      'CNN',
      'RNN',
    ],
    coreFlowGroups: [
      {
        label: '상위 범주',
        layout: 'hierarchy',
        items: ['AI', 'Machine Learning'],
      },
      {
        label: '전통 ML 흐름',
        layout: 'pipeline',
        items: [
          'Feature Engineering',
          'Logistic Regression',
          'Sigmoid / Probability',
        ],
      },
      {
        label: '딥러닝 계열',
        layout: 'branch',
        items: ['Deep Learning', 'Representation Learning', 'DNN', 'CNN', 'RNN'],
      },
    ],
    conceptCards: [
      {
        term: 'Machine Learning',
        korean: '기계학습',
        description:
          '사람이 규칙을 직접 작성하는 대신, 데이터로부터 원하는 task를 수행하는 함수를 학습하는 방식이다.',
        takeaway: '입력 x를 받아 예측 y-hat을 만드는 함수 f(x; theta)를 데이터로 맞춘다.',
      },
      {
        term: 'Feature Engineering',
        korean: '특징 설계',
        description:
          '원본 데이터에서 문제 해결에 도움이 되는 새로운 입력값을 설계하거나 계산하는 작업이다.',
        takeaway: 'GPA를 그대로 쓰는 것은 단순 feature 사용이고, 수강 관계 네트워크에서 PageRank를 계산하면 feature engineering이다.',
      },
      {
        term: 'Logistic Regression',
        korean: '로지스틱 회귀',
        description:
          'Binary classification을 위해 선형 점수를 sigmoid로 바꿔 class 1일 확률처럼 해석하는 모델이다.',
        takeaway: 'z = w^T x + b를 만든 뒤 sigmoid(z)를 통과시킨다.',
      },
      {
        term: 'Deep Neural Network',
        korean: '심층 신경망',
        description:
          '여러 hidden layer를 통해 입력 데이터를 더 분리하기 쉬운 표현 공간으로 바꾸는 모델이다.',
        takeaway: '사람이 공간 변환을 설계하면 feature engineering이고, 모델이 layer로 학습하면 representation learning이다.',
        flowItem: 'DNN',
      },
      {
        term: 'CNN',
        korean: '합성곱 신경망',
        description:
          '이미지에서 주변 픽셀의 local pattern을 찾는 구조다. 전통 이미지 처리의 filter 설계를 데이터 기반 학습으로 바꾼다.',
        takeaway: 'filter를 직접 고정하기보다 데이터로 유용한 filter를 학습한다.',
        flowItem: 'CNN',
      },
      {
        term: 'RNN / Language Model',
        korean: '순환 신경망 / 언어 모델',
        description:
          '순서가 있는 데이터를 처리하고, 이전 token들을 조건으로 다음 token의 확률을 예측하는 관점으로 이어진다.',
        takeaway: '순서 정보가 중요한 문제에서는 이전 입력의 흐름을 반영해 다음 상태나 출력을 예측한다.',
        flowItem: 'RNN',
      },
    ],
    visualNotes: [
      {
        title: 'ML에서 DL로 넘어가는 중심 이동',
        src: '/session-visuals/session-01-ml-to-dl-flow.svg',
        alt: 'Feature Engineering에서 Representation Learning으로 넘어가는 흐름을 설명하는 도식',
        caption:
          'Feature Engineering에서 Representation Learning으로 중심이 이동하는 흐름을 정리했습니다.',
      },
      {
        title: 'Logistic Regression과 Sigmoid',
        src: '/session-visuals/session-01-logistic-sigmoid.svg',
        alt: '선형 점수 z가 sigmoid를 거쳐 확률처럼 해석되는 흐름을 설명하는 도식',
        caption:
          'z = w^T x + b를 sigmoid로 바꾸고 class 1 가능성으로 해석하는 과정을 시각화했습니다.',
      },
    ],
    intuitions: [
      {
        title: '좋은 입력 표현이 성능의 출발점이다',
        body: '전통 ML에서는 모델이 볼 수 있는 정보가 사람이 설계한 feature에 묶인다. 그래서 문제를 잘 설명하는 feature를 만드는 일이 모델 선택만큼 중요했다.',
      },
      {
        title: 'Deep Learning은 feature engineering을 줄인다',
        body: 'DNN은 hidden layer를 통해 입력을 여러 단계로 변환한다. 이 과정에서 사람이 직접 만들던 표현 일부를 모델이 데이터로 학습한다.',
      },
      {
        title: 'Training과 Inference는 역할이 다르다',
        body: 'Training은 loss를 줄이기 위해 parameter를 업데이트하는 과정이고, inference는 이미 학습된 parameter로 새 입력을 계산하는 과정이다.',
      },
    ],
    modelNotes: [
      {
        title: 'Machine Learning 목적',
        body: 'y-hat = f(x; theta). x는 입력 feature, y는 실제 정답, y-hat은 모델 예측, theta는 weight와 bias 같은 parameter다.',
      },
      {
        title: 'Logistic Regression 구조',
        body: '입력 x -> 선형 점수 z = w^T x + b -> sigmoid(z) -> class 1일 확률. 확률을 직접 선형식으로 다루기 어렵기 때문에 log odds를 선형 모델로 둔다.',
      },
      {
        title: 'Sigmoid 해석',
        body: 'z가 0보다 작으면 class 1 가능성이 낮고, 0이면 50%, 0보다 크면 class 1 가능성이 높다고 해석한다.',
      },
      {
        title: 'Loss와 Gradient Descent',
        body: '모델 예측과 정답의 차이를 loss로 측정하고, gradient descent로 parameter를 조금씩 조정한다. 복잡한 loss landscape에서는 local minimum 문제가 생길 수 있다.',
      },
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
      title: 'Large Language Models',
      summary:
        '2차시에서는 RNN에서 Transformer로 넘어간 이유, BERT와 GPT의 차이, 그리고 Qwen3-Next의 hybrid architecture를 다룬다.',
      questions: [
        'BERT와 GPT는 구조적으로 무엇이 다른가?',
        'GPT의 prefill과 decoding은 각각 어떤 역할을 하는가?',
        'Transformer의 attention은 긴 문맥에서 어떤 비용 문제가 있는가?',
      ],
      keyPoints: [
        'BERT는 encoder-only, GPT는 decoder-only 구조다.',
        'GPT는 decoder-only Transformer다.',
        'Qwen3-Next는 Gated DeltaNet과 masked self-attention을 섞는 hybrid architecture로 설명된다.',
      ],
    },
  },
  {
    id: '02',
    order: 2,
    title: 'Large Language Models',
    koreanTitle: '대형언어모델',
    subtitle: 'BERT, GPT, Transformer, Qwen3-Next, Scientific Foundation Model',
    status: 'published',
    instructor: parkInstructor,
    summary:
      '2차시는 RNN에서 Transformer로 넘어간 이유, BERT와 GPT의 차이, GPT의 prefill/decoding 구조, 그리고 State-Space Model과 Qwen3-Next 같은 Transformer 이후의 대안 구조를 다룬다.',
    summaryLines: [
      'RNN은 순차 처리 한계가 있고, Transformer는 self-attention으로 token 간 관계를 병렬 계산한다.',
      'BERT는 encoder-only 구조로 문장 이해에 강하고, GPT는 decoder-only 구조로 이전 token을 조건으로 다음 token을 생성한다.',
      '긴 context의 attention 비용 문제는 State-Space Model, Qwen3-Next, discrete diffusion 계열과 같은 대안 구조 논의로 이어진다.',
    ],
    coreFlow: [
      'RNN',
      'Token / Embedding',
      'Transformer / Self-Attention',
      'BERT',
      'GPT',
      'Prefill / Decoding',
      'Autoregressive Generation',
      'Prompt / In-context Learning',
      'Chain-of-thought / Hallucination',
      'AI Infrastructure',
      'State-Space Model',
      'Qwen3-Next',
      'Discrete Diffusion Language Model',
      'Scientific Foundation Model',
    ],
    coreFlowGroups: [
      {
        label: '시퀀스 모델 흐름',
        layout: 'pipeline',
        items: [
          'RNN',
          'Token / Embedding',
          'Transformer / Self-Attention',
        ],
      },
      {
        label: 'LLM 구조',
        layout: 'pipeline',
        items: [
          'BERT',
          'GPT',
          'Prefill / Decoding',
          'Autoregressive Generation',
          'Prompt / In-context Learning',
          'Chain-of-thought / Hallucination',
        ],
      },
      {
        label: '차세대 구조와 응용',
        layout: 'pipeline',
        items: [
          'AI Infrastructure',
          'State-Space Model',
          'Qwen3-Next',
          'Discrete Diffusion Language Model',
          'Scientific Foundation Model',
        ],
      },
    ],
    conceptCards: [
      {
        term: 'RNN',
        korean: '순환 신경망',
        description:
          'RNN은 token을 순차적으로 읽으며 hidden state를 업데이트하는 구조다. 긴 sequence에서는 병렬화가 어렵고 오래된 정보가 희미해질 수 있다.',
        takeaway: 'Transformer가 등장한 배경에는 긴 sequence 처리와 병렬화의 한계가 있다.',
      },
      {
        term: 'Token / Embedding',
        korean: '토큰 / 임베딩',
        description:
          '자연어를 모델이 계산할 수 있도록 token으로 나누고, 각 token을 vector space의 위치로 바꾸는 과정이다.',
        takeaway: 'word와 token은 다르며, 하나의 word가 여러 subword token으로 쪼개질 수 있다.',
      },
      {
        term: 'Transformer / Self-Attention',
        korean: '트랜스포머 / 셀프 어텐션',
        description:
          'Transformer는 self-attention으로 token 간 관계를 병렬 계산하는 architecture다. 모든 Transformer가 양방향인 것은 아니다.',
        takeaway: 'BERT는 encoder-only로 양방향 문맥 이해에 가깝고, GPT는 decoder-only로 이전 token만 본다.',
      },
      {
        term: 'BERT',
        korean: '버트',
        description:
          'BERT는 encoder-only Transformer 기반 language understanding model이다. 문장을 생성하기보다 문맥이 반영된 token representation을 만든다.',
        takeaway: 'BERT의 output은 분류, QA, NLI, 감성 분석 같은 이해 task에 사용된다.',
      },
      {
        term: 'GPT',
        korean: '지피티',
        description:
          'GPT는 decoder-only Transformer다. 이전 token들을 조건으로 다음 token을 하나씩 예측하는 autoregressive generation model이다.',
        takeaway: 'GPT에는 BERT식 encoder가 없으며, prompt 처리는 prefill 단계로 보는 것이 정확하다.',
      },
      {
        term: 'Prefill / Decoding',
        korean: '프리필 / 디코딩',
        description:
          'Prefill은 prompt를 먼저 처리해 KV cache를 준비하는 단계이고, decoding은 이전 token들을 조건으로 다음 token을 순차 생성하는 단계다.',
        takeaway: 'Prompt 처리는 병렬화할 수 있지만, autoregressive generation은 이전 token 결과에 의존한다.',
      },
      {
        term: 'Autoregressive Generation',
        korean: '자기회귀 생성',
        description:
          'Autoregressive generation은 이미 생성된 token들을 조건으로 다음 token을 하나씩 생성하는 방식이다.',
        takeaway: '한 token의 결과가 다음 token의 조건이 되므로 긴 답변에서는 생성 latency가 누적된다.',
      },
      {
        term: 'Prompt / In-context Learning',
        korean: '프롬프트 / 문맥 내 학습',
        description:
          'Prompt는 모델이 어떤 맥락에서 어떤 출력을 생성할지 결정하는 핵심 입력이다. In-context learning은 prompt 안의 예시와 문맥으로 latent concept을 추정하는 관점이다.',
        takeaway: '좋은 prompt는 단순 질문이 아니라 모델이 문제를 해석할 조건을 제공한다.',
      },
      {
        term: 'Chain-of-thought / Hallucination',
        korean: '사고 과정 / 환각',
        description:
          'Chain-of-thought는 중간 추론 단계를 거치게 하는 방식이고, hallucination은 사실과 다른 내용을 그럴듯하게 생성하는 현상이다.',
        takeaway: '추론 과정이 길어지면 성능이 좋아질 수 있지만 비용과 latency도 함께 늘어난다.',
      },
      {
        term: 'Qwen3-Next',
        korean: 'Qwen3-Next',
        description:
          '강의자료 기준 Qwen3-Next-80B는 Gated DeltaNet과 masked self-attention을 3:1 비율로 interleave하는 hybrid architecture로 설명된다.',
        takeaway: 'Gated DeltaNet : Masked Self-Attention = 3 : 1. Attention을 완전히 버리기보다 비용이 큰 부분을 효율적인 sequence module로 분산시키는 방향이다.',
      },
      {
        term: 'Scientific Foundation Model',
        korean: '과학 파운데이션 모델',
        description:
          'Scientific Foundation Model은 LLM처럼 대규모 데이터를 학습하지만, 자연어가 아니라 PDE 해, 시뮬레이션, 관측 데이터, 실험 데이터 같은 과학·공학 데이터를 중심으로 forward problem과 inverse problem을 다루려는 흐름이다.',
        takeaway: '자연어 token보다 물리 현상 예측, 설계, forward/inverse problem이 중심이다.',
      },
    ],
    visualNotes: [
      {
        title: 'BERT와 GPT의 구조 차이',
        src: '/session-visuals/session-02-bert-gpt-prefill.svg',
        alt: 'BERT는 encoder-only 이해 모델이고 GPT는 decoder-only 생성 모델이며 prefill과 decoding으로 나뉘는 흐름을 설명하는 도식',
        caption:
          'BERT의 contextual representation과 GPT의 prefill/decoding 흐름을 분리해 정리했습니다.',
      },
      {
        title: '긴 문맥 비용과 Hybrid Architecture',
        src: '/session-visuals/session-02-qwen-sfm-flow.svg',
        alt: 'Self-attention 비용 문제에서 Qwen3-Next의 Gated DeltaNet과 masked self-attention 3대1 구조, Scientific Foundation Model로 이어지는 흐름을 설명하는 도식',
        caption:
          'Self-attention 비용 문제를 Qwen3-Next hybrid architecture와 Scientific Foundation Model 흐름으로 연결했습니다.',
      },
    ],
    intuitions: [
      {
        title: 'Transformer는 항상 양방향이 아니다',
        body: 'Transformer는 self-attention으로 token 간 관계를 계산하는 architecture다. BERT와 GPT는 같은 계열의 구조를 쓰지만 attention mask와 사용 방식이 다르다.',
      },
      {
        title: 'GPT의 prompt 처리는 encoder가 아니다',
        body: 'GPT는 decoder-only 구조다. Prompt를 먼저 읽는 과정은 BERT식 encoder가 아니라 prefill 단계로 이해하는 것이 정확하다.',
      },
      {
        title: '자연스러운 문장이 사실을 보장하지 않는다',
        body: 'LLM은 자연스러운 문장을 생성하도록 학습되지만, 그럴듯한 문장과 사실성은 다르다. Hallucination은 이 차이에서 발생한다.',
      },
    ],
    modelNotes: [
      {
        title: 'BERT와 GPT',
        body: 'BERT는 encoder-only language understanding model이고, GPT는 decoder-only autoregressive generation model이다. BERT는 이해 task의 representation을 만들고, GPT는 이전 token을 조건으로 다음 token을 생성한다.',
      },
      {
        title: 'GPT 추론 단계',
        body: 'Prefill은 prompt를 처리해 KV cache를 준비하는 단계다. Decoding은 이전 token들을 조건으로 다음 token을 하나씩 생성하는 단계이며 autoregressive하다.',
      },
      {
        title: 'Qwen3-Next 구조',
        body: '강의자료 기준 Qwen3-Next-80B는 Gated DeltaNet과 masked self-attention을 3:1 비율로 interleave한다. 모든 layer를 attention으로만 구성하는 Transformer-only 접근과 다르게, attention의 장점은 유지하면서 비용이 큰 부분을 더 효율적인 sequence module로 분산시키는 hybrid architecture로 이해할 수 있다.',
        highlight: 'Gated DeltaNet : Masked Self-Attention = 3 : 1',
        table: {
          headers: ['Component', '역할'],
          rows: [
            ['Gated DeltaNet', '긴 token 의존성, 긴 문맥 처리, 효율성 담당'],
            [
              'Masked Self-Attention',
              '정밀한 reasoning, token 간 세밀한 상호작용 담당',
            ],
          ],
        },
      },
      {
        title: 'Scientific Foundation Model',
        body: 'Scientific Foundation Model은 LLM처럼 대규모 데이터를 학습하지만, 자연어가 아니라 PDE 해, 시뮬레이션, 관측 데이터, 실험 데이터 같은 과학·공학 데이터를 중심으로 forward problem과 inverse problem을 다루려는 흐름이다.',
        table: {
          headers: ['구분', 'LLM', 'Scientific Foundation Model'],
          rows: [
            [
              '주요 데이터',
              '텍스트, 코드, 논문, 웹 문서',
              'PDE 해, 시뮬레이션, 관측 데이터, 실험 데이터',
            ],
            [
              '주요 목표',
              '언어 이해, 생성, reasoning 보조',
              '물리 현상 예측, 설계, forward/inverse problem',
            ],
            [
              '주요 리스크',
              'hallucination, reasoning 한계',
              '데이터 부족, 물리 법칙 미지, 고비용 시뮬레이션',
            ],
          ],
        },
      },
    ],
    quizIds: ['s02-q1', 's02-q2', 's02-q3', 's02-q4', 's02-q5'],
    reflectionQuestions: [
      'BERT와 GPT의 가장 큰 구조적 차이는 무엇인가?',
      'GPT에서 prefill과 decoding은 각각 어떤 역할을 하는가?',
      'Transformer self-attention이 긴 context에서 비용 문제가 생기는 이유는 무엇인가?',
      'Qwen3-Next는 왜 Gated DeltaNet과 masked self-attention을 섞는가?',
      'Scientific Foundation Model은 LLM과 무엇이 다른가?',
    ],
    projectConnections: [
      '실내 안내 Agent에서 GPT류 LLM은 목적 해석과 안내 문장 생성에 활용할 수 있다.',
      '긴 공간 문맥이나 운영 문서를 다루려면 긴 context 처리 비용과 검색 구조를 함께 고려해야 한다.',
      'Qwen3-Next 같은 hybrid architecture는 온프렘 또는 로컬 추론 전략과 연결될 수 있다.',
      'Scientific Foundation Model 개념은 실내 공간 상태 예측이나 시뮬레이션 기반 planning과 연결될 수 있다.',
    ],
    nextPreview: {
      title: 'Graph Machine Learning',
      summary:
        '3차시에서는 관계 데이터를 graph로 표현하고, graph embedding과 GNN을 통해 node representation을 학습하는 흐름을 다룬다.',
      questions: [
        'Node, edge, relation은 각각 무엇인가?',
        'Graph embedding과 node embedding은 무엇이 다른가?',
        'GNN은 왜 target node의 neighbor 정보를 함께 보는가?',
      ],
      keyPoints: [
        'Graph는 node, edge, relation, structure로 관계 데이터를 표현한다.',
        'Embedding은 graph 구조를 vector representation으로 바꾸는 과정이다.',
        'Message passing은 neighbor 정보를 모아 node representation을 업데이트한다.',
      ],
    },
  },
  {
    id: '03',
    order: 3,
    title: 'Graph Machine Learning',
    koreanTitle: '그래프 기계학습',
    subtitle: 'Graphs, Knowledge Graphs, Graph Representation Learning, GCN',
    status: 'published',
    instructor: whangInstructor,
    summary:
      '3차시는 컴퓨터 과학에서의 graph를 관계 데이터 구조로 정의하고, Knowledge Graph, Graph Representation Learning, Graph Embedding, GCN으로 이어지는 그래프 기계학습의 기본 흐름을 다룬다.',
    summaryLines: [
      '컴퓨터 과학과 AI에서 graph는 x-y chart가 아니라 객체 간 관계성을 node와 edge로 표현하는 자료 구조다.',
      'Knowledge Graph는 사람의 지식을 graph로 표현한 것이며, 관계를 따라가며 추론하는 인간의 사고 방식과 연결된다.',
      '기계학습 모델이 graph를 다루려면 이산적인 관계 구조를 숫자 vector로 바꾸는 Graph Representation Learning과 Graph Embedding이 필요하다.',
    ],
    coreFlow: [
      'AI / ML / Deep Learning',
      'Graph',
      'Node / Edge / Relation',
      'Knowledge Graph',
      'Knowledge Graph Completion',
      'Graph Representation Learning',
      'Graph Embedding',
      'Node Embedding',
      'Graph Neural Network',
      'Graph Convolutional Network',
      'Computation Graph',
      'Neighborhood Aggregation',
      'k-hop Neighbor',
      'Node Classification',
      'Link Prediction',
      'Graph Classification',
      'Fraud Detection',
      'Spatio-Temporal Graph',
      'Financial Domain Applications',
    ],
    coreFlowGroups: [
      {
        label: '상위 맥락',
        layout: 'hierarchy',
        items: ['AI / ML / Deep Learning', 'Graph'],
      },
      {
        label: '관계와 지식 모델링',
        layout: 'pipeline',
        items: [
          'Node / Edge / Relation',
          'Knowledge Graph',
          'Knowledge Graph Completion',
        ],
      },
      {
        label: '숫자 표현으로 변환',
        layout: 'pipeline',
        items: [
          'Graph Representation Learning',
          'Graph Embedding',
          'Node Embedding',
        ],
      },
      {
        label: 'GNN 기본 구조',
        layout: 'pipeline',
        items: [
          'Graph Neural Network',
          'Graph Convolutional Network',
          'Computation Graph',
          'Neighborhood Aggregation',
          'k-hop Neighbor',
        ],
      },
      {
        label: '대표 task와 활용',
        layout: 'pipeline',
        items: [
          'Node Classification',
          'Link Prediction',
          'Graph Classification',
          'Fraud Detection',
          'Spatio-Temporal Graph',
          'Financial Domain Applications',
        ],
      },
    ],
    conceptCards: [
      {
        term: 'Graph',
        korean: '그래프',
        description:
          '컴퓨터 과학에서 graph는 객체와 객체 사이의 관계를 node와 edge로 표현하는 자료 구조다. 일반적인 x-y chart와는 다른 의미로 사용한다.',
        takeaway: '핵심은 값 하나가 아니라 객체 사이의 연결과 관계성이다.',
      },
      {
        term: 'Knowledge Graph',
        korean: '지식 그래프',
        description:
          '사람이 알고 있는 지식을 entity와 relation의 graph로 표현한 구조다. Palantir식 ontology 논의도 도메인의 객체와 관계를 명시적으로 구조화한다는 점에서 맞닿아 있다.',
        takeaway: '관계가 정리되면 질문 응답, 검색, 추천, reasoning을 같은 구조 위에서 다룰 수 있다.',
      },
      {
        term: 'Knowledge Graph Completion',
        korean: '지식 그래프 완성',
        description:
          '이미 있는 entity와 relation을 바탕으로 graph에 빠진 head, relation, tail을 예측하는 task다.',
        takeaway: '명시적으로 적혀 있지 않은 관계를 추론하는 것이 knowledge graph를 학습하는 중요한 이유다.',
      },
      {
        term: 'Graph Representation Learning',
        korean: '그래프 표현 학습',
        description:
          '이산적인 graph 구조를 machine learning이 계산할 수 있는 feature vector나 embedding으로 바꾸는 접근이다.',
        takeaway: 'Graph를 바로 모델에 넣기 어렵기 때문에 구조 정보를 보존한 숫자 표현이 필요하다.',
      },
      {
        term: 'Graph Embedding',
        korean: '그래프 임베딩',
        description:
          'Graph의 구조적 특성과 관계 정보를 최대한 보존하면서 node, edge, subgraph, whole graph를 low-dimensional vector space로 옮기는 방법이다.',
        takeaway: 'Embedding이 잘 되면 원래 graph에서 가까운 node가 vector space에서도 가깝게 놓인다.',
      },
      {
        term: 'Node Embedding',
        korean: '노드 임베딩',
        description:
          '개별 node를 숫자 vector로 표현한다. Node 사이의 유사도가 원래 graph에서의 연결 구조와 역할을 반영해야 한다.',
        takeaway: 'Node classification, clustering, link prediction 같은 downstream task의 기본 재료가 된다.',
      },
      {
        term: 'Graph Neural Network',
        korean: '그래프 신경망',
        description:
          'Graph 위에서 동작하는 neural network다. Target node가 자기 feature만 보는 것이 아니라 neighbor 정보를 함께 모아 representation을 업데이트한다.',
        takeaway: 'Graph ML에서 deep learning 아이디어를 적용하는 대표 계열이다.',
      },
      {
        term: 'Graph Convolutional Network',
        korean: '그래프 합성곱 신경망',
        description:
          'GCN은 node representation을 계산할 때 주변 neighbor의 representation을 참조하고 집계하는 대표적인 GNN 구조다.',
        takeaway: 'Image grid의 convolution 직관을 불규칙한 graph neighborhood로 옮겨온 것으로 볼 수 있다.',
      },
      {
        term: 'Computation Graph',
        korean: '계산 그래프',
        description:
          '특정 target node의 representation을 계산하기 위해 어떤 neighbor와 몇 hop까지 참고할지 펼쳐 놓은 연산 구조다.',
        takeaway: 'Node마다 필요한 이웃 구조가 다르므로 각 node는 자기 neighborhood 기반의 computation graph를 가진다.',
      },
      {
        term: 'Neighborhood Aggregation',
        korean: '이웃 집계',
        description:
          'Target node 주변 neighbor들의 embedding을 평균, 합, attention, neural network 등으로 모아 target node 표현을 갱신하는 과정이다.',
        takeaway: 'Layer가 깊어질수록 더 먼 k-hop neighbor의 정보가 들어온다.',
      },
      {
        term: 'Graph Tasks',
        korean: '그래프 task',
        description:
          '대표 task는 node classification, link prediction, graph classification이다. 무엇을 예측하느냐에 따라 node, edge, whole graph 수준의 representation이 필요하다.',
        takeaway: '문제가 node 수준인지, 관계 수준인지, graph 전체 수준인지 먼저 구분해야 한다.',
        flowItem: 'Node Classification',
      },
      {
        term: 'Fraud Detection',
        korean: '사기 탐지',
        description:
          '리뷰, 계정, 거래, 보험 청구 건 사이의 반복 관계를 graph로 만들고, node나 edge가 정상인지 이상인지 분류하는 대표 응용이다.',
        takeaway: '개별 feature만으로 약한 신호도 관계 패턴으로 보면 더 잘 드러날 수 있다.',
      },
    ],
    visualNotes: [
      {
        title: '관계 데이터를 Graph로 보는 관점',
        src: '/session-visuals/session-03-graph-knowledge-flow.svg',
        alt: '객체와 관계를 graph로 표현하고 knowledge graph와 reasoning으로 연결하는 흐름을 설명하는 도식',
        caption:
          '객체, 관계, 지식 그래프, reasoning을 하나의 관계 중심 흐름으로 다시 그렸습니다.',
      },
      {
        title: 'Graph를 Vector로 바꾸는 학습 흐름',
        src: '/session-visuals/session-03-representation-gcn-flow.svg',
        alt: '이산적인 graph 구조를 graph representation learning과 embedding으로 변환하고 GCN이 neighbor 정보를 집계하는 흐름을 설명하는 도식',
        caption:
          'Graph representation learning, graph embedding, GCN의 neighborhood aggregation을 한 번에 복습할 수 있도록 정리했습니다.',
      },
    ],
    intuitions: [
      {
        title: 'Graph는 관계를 먼저 본다',
        body: 'Table은 row 하나를 독립적으로 보기 쉽지만 graph는 객체 사이의 연결을 함께 본다. 그래서 추천, 보험사기, 보안, bioinformatics처럼 관계 자체가 신호인 문제에 잘 맞는다.',
      },
      {
        title: '사람도 관계를 따라 추론한다',
        body: 'Knowledge Graph는 지식을 entity와 relation으로 묶는다. 질문 응답이나 검색에서 답을 찾을 때도 관계를 따라가며 reasoning하는 구조가 중요해진다.',
      },
      {
        title: '모델은 결국 숫자를 계산한다',
        body: 'Graph는 node와 edge로 된 이산 구조라 그대로 ML/DL 모델에 넣기 어렵다. Graph representation learning은 이 구조를 vector representation으로 바꾸는 접점이다.',
      },
      {
        title: 'DL이 항상 정답은 아니다',
        body: '일반적으로 deep learning의 표현력은 강하지만 특정 task에서는 전통 ML이나 규칙 기반 접근이 더 나을 수 있다. 문제의 데이터 구조와 비용을 보고 선택해야 한다.',
      },
    ],
    modelNotes: [
      {
        title: 'Graph 기본 단위',
        body: 'Graph는 G = (V, E)처럼 볼 수 있다. V는 node, vertex, entity처럼 관계를 표현하고 싶은 대상이고, E는 대상 사이의 edge 또는 relation이다.',
        table: {
          headers: ['단위', '의미', '예시'],
          rows: [
            ['Node / Entity', '관계를 표현하고 싶은 객체', '사람, 상품, 문서, 보험 청구 건'],
            ['Edge / Relation', '객체 사이의 연결 또는 의미 있는 관계', '친구, 구매, 인용, 같은 작성자'],
            ['Direction / Label', '관계의 방향성과 타입', 'A follows B, User purchased Product'],
          ],
        },
      },
      {
        title: 'Knowledge Graph와 Ontology',
        body: 'Knowledge Graph는 사람의 지식을 graph로 표현한다. Ontology는 어떤 entity와 relation을 둘 것인지 정하는 도메인 구조에 가깝고, 그 구조 위에서 knowledge graph를 만들 수 있다.',
        highlight: '(head entity, relation, tail entity)',
      },
      {
        title: 'Graph Representation Learning',
        body: '기계학습 모델은 숫자 vector를 계산한다. 따라서 graph의 이산적인 구조를 feature vector로 바꾸되, 원래 graph의 structural information과 graph properties를 최대한 보존해야 한다.',
      },
      {
        title: 'GCN과 k-hop 정보',
        body: 'Graph Convolutional Network는 target node를 표현할 때 neighbor representation을 모아 자기 embedding을 업데이트한다. Layer-0은 자기 feature이고, layer-k는 k-hop distant node의 정보를 반영한다.',
        table: {
          headers: ['Layer', '들어오는 정보'],
          rows: [
            ['Layer-0', 'Target node 자신의 input feature'],
            ['Layer-1', '직접 연결된 1-hop neighbor 정보'],
            ['Layer-k', 'k개의 edge를 거쳐 닿는 k-hop neighbor 정보'],
          ],
        },
      },
      {
        title: '대표 Graph Task',
        body: 'Graph embedding은 task-independent feature learning으로 시작할 수 있지만, 실제 평가는 downstream task 성능으로 확인한다.',
        table: {
          headers: ['Task', '예측 대상', '예시'],
          rows: [
            ['Node Classification', '개별 node의 class', '리뷰가 fake인지, 보험 청구가 suspicious한지'],
            ['Link Prediction', '두 node 사이의 missing link', '친구 추천, 관계 추천, 빠진 지식 발견'],
            ['Graph Classification', 'Graph 전체의 class', '분자 구조가 약 후보인지 분류'],
          ],
        },
      },
      {
        title: '3차시 진행 범위',
        body: '이번 복습 범위는 Graph Models, Graph Representation Learning, Graph Embedding, Node Embedding, GCN 기본 구조, fraud detection, spatio-temporal graph, financial domain applications까지다. Knowledge Graph Embedding 상세는 다음 범위로 남긴다.',
      },
    ],
    quizIds: ['s03-q1', 's03-q2', 's03-q3', 's03-q4', 's03-q5'],
    reflectionQuestions: [
      '컴퓨터 과학에서 graph는 일반적인 x-y chart와 무엇이 다른가?',
      'Knowledge Graph가 사람의 reasoning 방식과 연결되는 이유는 무엇인가?',
      'Graph를 바로 machine learning 모델에 넣기 어려운 이유는 무엇인가?',
      'Graph embedding이 보존해야 하는 구조 정보는 무엇인가?',
      'GCN에서 target node가 neighbor 정보를 집계하는 이유는 무엇인가?',
      'Node classification, link prediction, graph classification은 각각 어떤 예측 문제인가?',
    ],
    projectConnections: [
      '실내 내비게이션은 장소를 node로, 이동 가능 경로를 edge로 두면 graph 문제로 정리할 수 있다.',
      '매장, 편의시설, 층, 접근성, 운영 정책을 knowledge graph로 묶으면 LLM 안내와 검색의 grounding에 활용할 수 있다.',
      '방문 로그와 장소 관계를 함께 보면 추천이나 혼잡도 예측에서 단순 table feature보다 풍부한 신호를 얻을 수 있다.',
      '이상 이동 패턴이나 비정상 리뷰·피드백 탐지는 fraud detection과 유사한 graph classification 관점으로 확장할 수 있다.',
    ],
    nextPreview: {
      title: 'Knowledge Graph Embedding',
      summary:
        '다음 범위에서는 Knowledge Graph를 triplet으로 표현하고, entity와 relation을 continuous feature space에 embedding해 missing relation을 예측하는 흐름을 더 자세히 다룬다.',
      questions: [
        'Knowledge Graph에서 head entity, relation, tail entity는 각각 무엇인가?',
        'Knowledge Graph Completion은 어떤 missing information을 예측하는가?',
        'Entity와 relation을 vector로 옮길 때 relation의 의미를 어떻게 보존할 수 있는가?',
      ],
      keyPoints: [
        '각 fact는 (head entity, relation, tail entity) triplet으로 표현된다.',
        'Knowledge Graph Embedding은 entity와 relation을 continuous feature space로 옮긴다.',
        'Completion task는 빠진 tail, head, relation을 예측하는 문제로 볼 수 있다.',
      ],
    },
  },
  {
    id: '04',
    order: 4,
    title: 'Knowledge Graph Embedding',
    koreanTitle: '지식 그래프 임베딩',
    subtitle:
      'Triplet, Scoring Function, Link Prediction, Inductive Reasoning, GraphRAG',
    status: 'published',
    instructor: whangInstructor,
    summary:
      '4차시는 Knowledge Graph를 triplet으로 표현하고, entity와 relation을 vector space로 옮겨 빠진 지식을 예측하는 Knowledge Graph Embedding의 기본 흐름을 다룬다. 후반부에서는 hyper-relational, multimodal knowledge graph와 GraphRAG까지 연결한다.',
    summaryLines: [
      'Knowledge Graph는 fact를 head entity, relation, tail entity로 이루어진 triplet으로 표현한다.',
      'Knowledge Graph Embedding은 entity와 relation을 vector representation으로 바꾸고, scoring function으로 triplet의 plausibility를 계산한다.',
      'GraphRAG는 질문과 관련된 node, edge, triplet, path, subgraph를 검색해 LLM 답변의 grounding과 explainability를 높이려는 접근이다.',
    ],
    coreFlow: [
      'Knowledge Graph',
      'Triplet',
      'Sparse Graph',
      'Knowledge Graph Embedding',
      'Entity / Relation Embedding',
      'Scoring Function',
      'Translational Distance Model',
      'Semantic Matching Model',
      'Link Prediction',
      'Mean Rank / MRR / Hits@K',
      'Hyper-relational Knowledge Graph',
      'Multimodal Knowledge Graph',
      'Inductive Reasoning',
      'Relation Graph',
      'Knowledge Graph Construction',
      'GraphRAG',
      'Graph Database / Data Governance',
    ],
    coreFlowGroups: [
      {
        label: '지식 표현',
        layout: 'pipeline',
        items: ['Knowledge Graph', 'Triplet', 'Sparse Graph'],
      },
      {
        label: 'Embedding과 scoring',
        layout: 'pipeline',
        items: [
          'Knowledge Graph Embedding',
          'Entity / Relation Embedding',
          'Scoring Function',
          'Translational Distance Model',
          'Semantic Matching Model',
        ],
      },
      {
        label: '예측과 평가',
        layout: 'pipeline',
        items: ['Link Prediction', 'Mean Rank / MRR / Hits@K'],
      },
      {
        label: '복잡한 지식 구조',
        layout: 'pipeline',
        items: [
          'Hyper-relational Knowledge Graph',
          'Multimodal Knowledge Graph',
          'Inductive Reasoning',
          'Relation Graph',
        ],
      },
      {
        label: 'LLM 활용 흐름',
        layout: 'pipeline',
        items: [
          'Knowledge Graph Construction',
          'GraphRAG',
          'Graph Database / Data Governance',
        ],
      },
    ],
    conceptCards: [
      {
        term: 'Knowledge Graph',
        korean: '지식 그래프',
        description:
          '사람의 지식을 entity와 relation의 graph로 표현한 구조다. 단순히 문서를 저장하는 것이 아니라, 객체와 객체 사이의 의미 있는 관계를 명시한다.',
        takeaway:
          '질문 응답, 검색, 추천, reasoning을 관계 구조 위에서 다룰 수 있게 한다.',
      },
      {
        term: 'Triplet',
        korean: '트리플렛',
        description:
          'Knowledge Graph에서 하나의 fact를 head entity, relation, tail entity로 표현한 단위다.',
        takeaway:
          'Barack Obama --born in--> Honolulu처럼 fact 하나를 graph의 edge로 바꾼다.',
      },
      {
        term: 'Sparse Graph',
        korean: '희소 그래프',
        description:
          '가능한 entity와 relation 조합은 많지만 실제로 관찰되거나 기록된 fact는 일부에 그치는 graph 상태다.',
        takeaway:
          'Knowledge Graph Completion이 필요한 이유는 현실 graph가 완전하지 않기 때문이다.',
      },
      {
        term: 'Knowledge Graph Embedding',
        korean: '지식 그래프 임베딩',
        description:
          'Entity와 relation을 vector representation으로 바꿔 graph 구조와 relation 의미를 계산 가능한 형태로 옮기는 기법이다.',
        takeaway:
          '이산적인 triplet 구조를 machine learning 모델이 다룰 수 있는 연속 공간으로 옮긴다.',
      },
      {
        term: 'Scoring Function',
        korean: '스코어링 함수',
        description:
          'Triplet이 그럴듯한 fact인지 점수로 계산하는 함수다. 맞는 fact는 높은 score, 틀린 fact는 낮은 score를 받도록 학습한다.',
        takeaway:
          '비어 있는 head, relation, tail 후보를 scoring하고 ranking해 missing link를 찾는다.',
      },
      {
        term: 'Translational Distance Model',
        korean: '거리 기반 변환 모델',
        description:
          'Head vector와 relation vector를 더했을 때 tail vector와 가까워지도록 학습하는 Knowledge Graph Embedding 계열이다.',
        takeaway:
          'TransE의 핵심 직관은 h + r이 t와 가까워져야 한다는 것이다.',
      },
      {
        term: 'Semantic Matching Model',
        korean: '의미 매칭 모델',
        description:
          '거리보다 head, relation, tail 사이의 compatibility 또는 similarity를 높이는 방향으로 fact plausibility를 계산하는 계열이다.',
        takeaway:
          'RESCAL, DistMult, ComplEx처럼 relation interaction을 어떻게 모델링하느냐가 중요하다.',
      },
      {
        term: 'Link Prediction',
        korean: '링크 예측',
        description:
          'Knowledge Graph에서 빠진 head, relation, tail을 예측하는 task다. Knowledge Graph Completion과 밀접하게 연결된다.',
        takeaway:
          '후보 entity나 relation을 넣어 score를 계산하고 높은 순위 후보를 정답으로 본다.',
      },
      {
        term: 'Mean Rank / MRR / Hits@K',
        korean: '랭킹 평가 지표',
        description:
          'Link Prediction에서 정답 후보가 ranking에서 얼마나 위에 있는지 평가하는 대표 metric 묶음이다.',
        takeaway:
          'Mean Rank는 낮을수록 좋고, MRR과 Hits@K는 높을수록 좋다.',
      },
      {
        term: 'Hyper-relational Knowledge Graph',
        korean: '초관계형 지식 그래프',
        description:
          'Main triplet에 qualifier를 붙여 연도, 수상자, 수치 같은 부가 정보를 표현하는 knowledge graph다.',
        takeaway:
          '현실의 지식은 triplet 하나보다 복잡하므로 qualifier를 함께 다룰 수 있어야 한다.',
      },
      {
        term: 'Multimodal Knowledge Graph',
        korean: '멀티모달 지식 그래프',
        description:
          'Graph structure뿐 아니라 image, text, numerical feature 같은 다양한 modality를 함께 다루는 knowledge graph다.',
        takeaway:
          '구조, 이미지, 텍스트를 균형 있게 학습해야 더 풍부한 representation을 얻을 수 있다.',
      },
      {
        term: 'Inductive Reasoning',
        korean: '귀납적 추론',
        description:
          'Training time에 보지 못한 새로운 entity나 relation이 inference time에 들어와도 구조 정보를 기반으로 추론하려는 설정이다.',
        takeaway:
          '실제 서비스에서는 data와 relation이 계속 바뀌므로 매번 재학습하지 않는 추론 구조가 중요하다.',
      },
      {
        term: 'Relation Graph',
        korean: '관계 그래프',
        description:
          'Relation을 node로 보고 relation끼리의 유사한 구조를 edge로 연결한 graph다. 두 relation이 entity를 많이 공유할수록 가까운 relation으로 볼 수 있다.',
        takeaway:
          '새로운 relation도 주변 relation 구조를 통해 embedding하고 추론할 수 있게 돕는다.',
      },
      {
        term: 'Knowledge Graph Construction',
        korean: '지식 그래프 구축',
        description:
          'Text에서 entity와 relation을 추출하고, canonicalization, validation, deduplication을 거쳐 knowledge graph를 만드는 과정이다.',
        takeaway:
          'LLM을 활용할 수 있지만 도메인별 relation schema와 검증 기준은 별도로 설계해야 한다.',
      },
      {
        term: 'GraphRAG',
        korean: '그래프 검색 증강 생성',
        description:
          'RAG에서 retrieval 대상을 text chunk뿐 아니라 관련 node, edge, triplet, path, subgraph로 확장하는 접근이다.',
        takeaway:
          'LLM 답변에 구조화된 근거를 넣어 grounding, explainability, token efficiency를 높이는 방향이다.',
      },
    ],
    visualNotes: [
      {
        title: 'Knowledge Graph Embedding과 Scoring',
        src: '/session-visuals/session-04-kge-scoring-flow.svg',
        alt: 'Triplet을 entity와 relation vector로 embedding하고 scoring function으로 missing link 후보를 ranking하는 흐름을 설명하는 도식',
        caption:
          'Triplet, embedding, scoring function, ranking metric의 관계를 한 흐름으로 정리했습니다.',
      },
      {
        title: 'GraphRAG의 Retrieval 흐름',
        src: '/session-visuals/session-04-graphrag-flow.svg',
        alt: '문서에서 knowledge graph를 만들고 질문에 맞는 subgraph를 검색해 LLM 답변에 넣는 GraphRAG 흐름을 설명하는 도식',
        caption:
          '문서에서 graph를 만들고 관련 subgraph를 LLM context로 가져오는 흐름을 복습용으로 정리했습니다.',
      },
    ],
    intuitions: [
      {
        title: 'Knowledge Graph는 비어 있는 지식까지 다룬다',
        body: '명시적으로 기록된 fact만 따라가는 것이 아니라, graph 구조와 relation 패턴을 이용해 빠져 있는 지식을 예측하는 것이 Knowledge Graph Embedding의 중요한 목적이다.',
      },
      {
        title: '모델은 triplet을 점수로 본다',
        body: 'Triplet이 맞는 fact인지 아닌지 사람이 직접 규칙으로 판단하기보다, entity와 relation representation을 scoring function에 넣어 plausibility를 계산한다.',
      },
      {
        title: '현실 지식은 triplet보다 복잡하다',
        body: '연도, 수상자, 수치, 이미지, 텍스트처럼 부가 정보가 붙으면 단순 Knowledge Graph Embedding보다 hyper-relational 또는 multimodal graph modeling이 필요해진다.',
      },
      {
        title: 'GraphRAG는 graph를 그대로 많이 넣는 기술이 아니다',
        body: '관련 subgraph를 잘 고르고 pruning해야 한다. LLM이 복잡한 graph를 항상 깊게 이해한다고 단정할 수 없기 때문이다.',
      },
    ],
    modelNotes: [
      {
        title: 'Triplet과 sparse graph',
        body: 'Knowledge Graph의 fact는 head entity, relation, tail entity로 표현된다. 가능한 조합은 많지만 실제 관찰된 fact는 일부이므로 graph는 sparse해지기 쉽다.',
        highlight: '(head entity, relation, tail entity)',
      },
      {
        title: 'Scoring Function',
        body: 'Knowledge Graph Embedding 모델은 entity와 relation representation을 scoring function에 넣어 triplet plausibility를 계산한다. 맞는 fact의 score는 높이고 틀린 fact의 score는 낮추는 방향으로 학습한다.',
        table: {
          headers: ['입력', '학습 방향'],
          rows: [
            ['Positive triplet', '높은 score를 받도록 학습'],
            ['Negative triplet', '낮은 score를 받도록 학습'],
            ['Missing candidate', '후보별 score를 계산해 ranking'],
          ],
        },
      },
      {
        title: '모델 계열',
        body: 'Knowledge Graph Embedding은 entity와 relation을 어떻게 표현하고 scoring function을 어떻게 설계하느냐에 따라 여러 계열로 나뉜다.',
        table: {
          headers: ['계열', '핵심 직관', '예시'],
          rows: [
            [
              'Translational Distance Model',
              'head + relation이 tail과 가까워지도록 학습',
              'TransE 계열',
            ],
            [
              'Semantic Matching Model',
              'head, relation, tail의 compatibility를 높임',
              'RESCAL, DistMult, ComplEx 계열',
            ],
          ],
        },
      },
      {
        title: 'Link Prediction 평가',
        body: '비어 있는 head, relation, tail 후보를 넣어 score를 계산하고 ranking한다. 정답 후보가 ranking에서 얼마나 위에 있는지가 주요 평가 기준이다.',
        table: {
          headers: ['Metric', '의미', '좋은 방향'],
          rows: [
            ['Mean Rank', '정답 후보의 평균 순위', '낮을수록 좋음'],
            ['MRR', '정답 순위 역수의 평균', '높을수록 좋음'],
            ['Hits@K', '정답이 상위 K개 후보 안에 든 비율', '높을수록 좋음'],
          ],
        },
      },
      {
        title: '복잡한 Knowledge Graph',
        body: '현실의 fact는 triplet 하나로 끝나지 않는 경우가 많다. Qualifier, 숫자, 이미지, 텍스트, 시간 정보를 함께 다루면 더 현실적인 graph가 되지만 embedding과 reasoning 문제도 복잡해진다.',
        table: {
          headers: ['형태', '포함 정보'],
          rows: [
            ['Hyper-relational KG', 'main triplet에 붙는 qualifier'],
            ['Numerical KG', '수치 속성 또는 측정값'],
            ['Multimodal KG', 'image, text, graph structure'],
            ['Temporal KG', '시간에 따라 바뀌는 fact'],
          ],
        },
      },
      {
        title: 'GraphRAG pipeline',
        body: 'GraphRAG는 문서에서 Knowledge Graph를 구성한 뒤, 질문과 관련된 subgraph를 검색해 LLM prompt에 함께 넣는다. 핵심은 관련 node, edge, triplet, path를 적절히 고르는 retrieval 단계다.',
        table: {
          headers: ['단계', '역할'],
          rows: [
            ['KG Construction', 'entity와 relation을 추출해 graph 구성'],
            ['Subgraph Retrieval', '질문과 관련된 node, path, triplet 검색'],
            ['LLM Generation', '검색된 graph context를 근거로 답변 생성'],
          ],
        },
      },
    ],
    quizIds: ['s04-q1', 's04-q2', 's04-q3', 's04-q4', 's04-q5'],
    reflectionQuestions: [
      'Knowledge Graph에서 triplet은 어떤 세 요소로 구성되는가?',
      'Knowledge Graph Embedding에서 scoring function이 필요한 이유는 무엇인가?',
      'Translational distance model과 semantic matching model은 무엇이 다른가?',
      'Mean Rank, MRR, Hits@K는 각각 어떤 ranking 관점을 반영하는가?',
      'Hyper-relational Knowledge Graph가 필요한 이유는 무엇인가?',
      'GraphRAG에서 subgraph retrieval이 중요한 이유는 무엇인가?',
    ],
    projectConnections: [
      '실내 내비게이션에서는 장소, 시설, 층, 매장, 접근성 정보를 entity로 두고 이동 가능성이나 포함 관계를 relation으로 둘 수 있다.',
      '운영 문서와 매장 메타데이터를 Knowledge Graph로 묶으면 LLM 안내 응답을 단순 문서 검색보다 구조적으로 grounding할 수 있다.',
      '새 매장이나 임시 동선이 추가되는 상황은 inductive reasoning과 연결된다. 매번 전체 모델을 재학습하지 않는 구조가 중요하다.',
      'GraphRAG는 사용자의 질문과 관련된 장소 subgraph만 가져와 token 비용을 줄이고 답변 근거를 설명하는 방식으로 확장할 수 있다.',
    ],
  },
  {
    id: '06-1',
    order: 6,
    slotId: '06',
    partLabel: '6-1차시',
    title: 'Mobility Big Data Analysis',
    koreanTitle: '모빌리티 빅데이터 분석',
    subtitle:
      'Trajectory, Smart Card Data, In-store Sensors, Spatial Stream Processing, Anomaly Detection',
    status: 'published',
    instructor: leeInstructor,
    summary:
      '6-1차시는 사람, 차량, 항공기 같은 이동 주체가 남기는 trajectory data를 분석하는 흐름을 다룬다. 교통카드, 실내 동선, 자동차 운행기록, 비행항적 사례를 통해 raw mobility log를 feature와 prediction task로 바꾸는 과정을 정리한다.',
    summaryLines: [
      'Mobility Big Data는 스마트폰, 스마트카드, WiFi/Beacon, 내비게이션, 센서, 항적 기록처럼 시간에 따른 이동경로를 남기는 데이터에서 출발한다.',
      '교통카드와 매장 실내 동선 사례는 결측 위치 추정, 이동 규칙성, 체류 시간, 구역별 관심, 재방문 가능성을 feature로 바꾸는 과정이 중요하다는 점을 보여준다.',
      '차량 운행기록과 비행항적 사례는 실시간 공간 스트림 처리와 이상치 탐지를 통해 위험 상황을 조기에 감지하는 방향으로 확장된다.',
    ],
    coreFlow: [
      'Mobility Big Data',
      'Trajectory Data Sources',
      'Smart Card Data',
      'Location Inference',
      'Mobility Regularity',
      'In-store Trajectory',
      'Dwell Time / Zone Ratio',
      'Revisit Prediction',
      'Spatial Stream Processing',
      'Complex Event Processing',
      'Digital Tachograph',
      'Tactical Trajectory',
      'Feature Engineering',
      'Latent Space',
      'Anomaly Detection',
      'Digital Twin / Data Governance',
    ],
    coreFlowGroups: [
      {
        label: '데이터 원천',
        layout: 'pipeline',
        items: ['Mobility Big Data', 'Trajectory Data Sources'],
      },
      {
        label: '대중교통 이동 패턴',
        layout: 'pipeline',
        items: ['Smart Card Data', 'Location Inference', 'Mobility Regularity'],
      },
      {
        label: '실내 동선과 재방문',
        layout: 'pipeline',
        items: [
          'In-store Trajectory',
          'Dwell Time / Zone Ratio',
          'Revisit Prediction',
        ],
      },
      {
        label: '공간 스트림과 항적',
        layout: 'pipeline',
        items: [
          'Spatial Stream Processing',
          'Complex Event Processing',
          'Digital Tachograph',
          'Tactical Trajectory',
        ],
      },
      {
        label: 'AI 판단과 운영',
        layout: 'pipeline',
        items: [
          'Feature Engineering',
          'Latent Space',
          'Anomaly Detection',
          'Digital Twin / Data Governance',
        ],
      },
    ],
    conceptCards: [
      {
        term: 'Mobility Big Data',
        korean: '모빌리티 빅데이터',
        description:
          '사람, 차량, 항공기, 센서가 남기는 대규모 이동경로 데이터다. 위치, 시간, 속도, 체류, 교통수단, 센서 출처가 함께 붙을 수 있고, 실제 이동은 물리적 비용이 들기 때문에 행동 의도를 강하게 드러낼 수 있다.',
        takeaway:
          '단순 좌표 목록이 아니라 시간과 맥락이 결합된 trajectory data로 봐야 한다.',
      },
      {
        term: 'Trajectory',
        korean: '이동경로',
        description:
          '시간 순서대로 연결된 위치 기록이다. 이동 주체가 언제 어디에 있었는지를 sequence로 표현한다.',
        takeaway:
          'Timestamp, location, sampling gap, missing observation을 함께 고려해야 한다.',
      },
      {
        term: 'Smart Card Data',
        korean: '교통카드 데이터',
        description:
          '대중교통 승하차 기록으로 구성된 mobility data다. 승차와 하차 시점은 알 수 있지만 그 사이 위치는 별도 추정이 필요하다.',
        takeaway:
          'Boarding/alighting event를 시간대별 위치 리스트로 바꾸는 전처리가 중요하다.',
      },
      {
        term: 'Location Inference',
        korean: '위치 추정',
        description:
          '직접 관측되지 않은 시간대의 위치를 주변 관측값, 거리, 이동 규칙으로 추정하는 과정이다. 근거가 부족한 구간은 unknown으로 남기는 것도 분석상 더 안전할 수 있다.',
        takeaway:
          '수집된 위치만으로는 부족한 시간 구간을 채워 분석 가능한 sequence를 만든다.',
      },
      {
        term: 'Mobility Regularity',
        korean: '이동 규칙성',
        description:
          '같은 시간대에 가장 자주 방문한 장소의 횟수를 해당 시간대 전체 방문 횟수로 나눈 값처럼 정의할 수 있는 반복성 지표다. 출근 시간대와 점심 시간대처럼 생활 맥락에 따라 값의 의미가 달라질 수 있다.',
        takeaway:
          '방문 지역이 다양해질수록 규칙성은 낮아지는 경향이 있다.',
      },
      {
        term: 'In-store Trajectory',
        korean: '매장 실내 동선',
        description:
          'WiFi나 Beacon 기반 센서로 매장 안에서 고객이 어느 구역에 얼마나 머무는지 기록한 이동 데이터다. 직원, 청소 인력, 통로 통과처럼 고객 행동으로 보기 어려운 신호를 먼저 걸러야 한다.',
        takeaway:
          '구역별 체류와 이동 순서는 관심 상품이나 재방문 가능성의 신호가 될 수 있다.',
      },
      {
        term: 'Dwell Time',
        korean: '체류 시간',
        description:
          '고객이나 이동 주체가 특정 구역에 머문 시간이다. 실내 동선 분석에서 중요한 행동 feature가 된다.',
        takeaway:
          '긴 체류가 항상 구매 의도를 뜻하지는 않지만 관심 신호로 활용할 수 있다.',
      },
      {
        term: 'Revisit Prediction',
        korean: '재방문 예측',
        description:
          '현재까지의 방문 기록과 동선 feature를 이용해 고객이 향후 다시 방문할지 예측하는 task다. 관측 기간을 현재로 두고, 이후 기간의 실제 재방문 여부를 label로 삼는다.',
        takeaway:
          '총 체류 시간, 구역별 체류 비율, 방문 시간, 유사 동선 여부 등이 입력 feature가 된다.',
      },
      {
        term: 'Spatial Stream Processing',
        korean: '공간 스트림 처리',
        description:
          '빠르게 들어오는 위치 stream에서 특정 규칙이나 공간 조건에 맞는 이벤트를 탐지하는 처리 방식이다.',
        takeaway:
          'Batch 분석과 달리 입력 지연, 실시간 판단, 분산 처리 구조를 함께 고려해야 한다.',
      },
      {
        term: 'Complex Event Processing',
        korean: '복합 이벤트 처리',
        description:
          '여러 stream event와 규칙을 조합해 의미 있는 상황을 감지하는 기법이다. 위치 stream과 polygon 조건을 결합할 수 있다.',
        takeaway:
          '단일 좌표가 아니라 시간과 공간 조건을 만족하는 사건을 찾아낸다.',
      },
      {
        term: 'Digital Tachograph',
        korean: '디지털 운행기록계',
        description:
          '버스, 택시, 화물차 같은 사업용 차량의 운행 기록을 남기는 장치와 데이터 원천이다. 사후 안전 평가뿐 아니라 실시간 stream으로 다루면 운영 의사결정에도 연결될 수 있다.',
        takeaway:
          '차량 위치, 속도, 주행거리, 시각 정보가 공간 stream 분석의 입력이 된다.',
      },
      {
        term: 'Anomaly Detection',
        korean: '이상치 탐지',
        description:
          '모델이 학습한 정상 패턴에서 크게 벗어난 입력을 위험 또는 특이 상황으로 판단하는 접근이다. 실제 사고 데이터는 드물기 때문에 검증과 경보 기준에는 전문가 판단이 필요하다.',
        takeaway:
          '항적, 지형, 기상 feature를 함께 보면 단순 이동경로보다 문맥 있는 위험 판단이 가능하다.',
      },
    ],
    visualNotes: [
      {
        title: 'Mobility Big Data 분석 흐름',
        src: '/session-visuals/session-06-mobility-data-flow.svg',
        alt: '모빌리티 데이터 원천이 이동경로 feature, 예측 task, 데이터 거버넌스가 필요한 활용으로 이어지는 흐름을 설명하는 도식',
        caption:
          '이동경로 원천 데이터를 feature, prediction task, governance-aware application으로 바꾸는 흐름을 정리했습니다.',
      },
      {
        title: '이동 패턴 기반 위험 탐지',
        src: '/session-visuals/session-06-risk-detection-flow.svg',
        alt: '항적 데이터와 지형, 기상 context를 결합해 latent space에서 정상 패턴과 이상치를 구분하고 위험 판단으로 이어지는 흐름을 설명하는 도식',
        caption:
          '항적과 외부 context를 결합해 정상 패턴에서 벗어나는 이동을 위험 신호로 보는 구조를 복습용으로 정리했습니다.',
      },
    ],
    intuitions: [
      {
        title: '현행: 이동 데이터 원천은 이미 넓다',
        body: '스마트폰, 스마트카드, WiFi/Beacon, 내비게이션, 차량 운행기록, 레이더와 센서까지 다양한 시스템이 trajectory를 만든다. 실제 이동은 시간과 비용이 들기 때문에 행동 의도 신호가 강하지만, 그만큼 프라이버시 위험도 함께 커진다.',
      },
      {
        title: '알아둬야 할 지식: trajectory는 결측이 많다',
        body: '현실의 mobility log는 모든 순간의 위치를 알려주지 않는다. Location Inference와 feature engineering을 통해 분석 가능한 시간대별 위치 표현으로 바꿔야 한다.',
      },
      {
        title: '사전 학습: 예측 task를 먼저 구분한다',
        body: '이동 규칙성을 측정하는 문제, 재방문 여부를 맞히는 classification, 정상 패턴에서 벗어난 이동을 찾는 anomaly detection은 서로 다른 평가 기준을 갖는다.',
      },
    ],
    modelNotes: [
      {
        title: '모빌리티 데이터 원천',
        body: '모빌리티 분석은 실외와 실내 모두에서 생기는 이동경로 데이터를 다룬다. 같은 위치 데이터라도 수집 원천에 따라 해상도, 누락, 프라이버시 위험이 달라진다.',
        table: {
          headers: ['원천', '주요 신호', '대표 활용'],
          rows: [
            ['Smart Card Data', '승차, 하차, 시간, 정류장', '시간대별 위치 추정, 이동 규칙성'],
            ['WiFi / Beacon', '구역, 체류 시간, 방문 빈도', '실내 동선, 재방문 예측'],
            ['DTG / Sensors', '위치, 속도, 주행거리, stream', '공간 이벤트 탐지, 교통 운영'],
            ['Tactical Trajectory', '항적, 지형, 기상 context', '위험 예측, 이상치 탐지'],
          ],
        },
      },
      {
        title: '교통카드 위치 추정',
        body: '교통카드 데이터는 승차와 하차 event를 잘 알려주지만 모든 시간대의 위치를 직접 알려주지는 않는다. 앞뒤 승하차 기록, 거리, 시간 간격으로 머문 장소를 추정하고, 근거가 약한 구간은 unknown으로 남길 수 있다.',
        table: {
          headers: ['구간', '처리 관점'],
          rows: [
            ['승차-하차 사이', '대중교통 이동 중인 구간으로 해석'],
            ['하차 후 다음 승차 전', '거리와 시간 조건이 맞으면 체류 장소로 추정'],
            ['근거 부족 구간', '무리하게 채우지 않고 unknown 처리'],
          ],
        },
      },
      {
        title: 'Mobility Regularity',
        body: '이동 규칙성은 특정 시간대에 가장 자주 방문한 장소가 전체 방문에서 차지하는 비율로 이해할 수 있다. 값이 높으면 반복 패턴이 강하고, 값이 낮으면 방문 장소가 다양하다는 뜻이다. 출근 시간대는 반복성이 높고, 점심 시간대는 목적지가 다양해 낮게 나올 수 있다.',
        highlight: 'Mobility Regularity = most frequent place count / total visited place count',
      },
      {
        title: '재방문 예측 feature',
        body: '매장 실내 동선에서는 고객이 어디에 얼마나 머물렀는지, 어떤 시간대에 방문했는지, 과거 유사 동선이 있는지가 재방문 여부를 예측하는 신호가 된다. 직원이나 통로 통과자 같은 noise를 제거하고, 관측 기간 이후의 실제 방문 여부를 label로 둔다.',
        table: {
          headers: ['Feature', '의미'],
          rows: [
            ['Total sensing time', '매장 내부에서 감지된 총 시간'],
            ['Zone ratio', '구역별 체류 시간 비율'],
            ['Outside sensing frequency', '매장 주변에서 감지된 빈도'],
            ['Similar path', '동일 시간대 유사 동선 존재 여부'],
            ['Visit timing', '평일, 주말, 시간대별 방문 패턴'],
          ],
        },
      },
      {
        title: '공간 stream과 위험 탐지',
        body: '공간 stream processing은 빠르게 들어오는 위치 event를 처리하고, complex event processing은 규칙에 맞는 사건을 감지한다. 호출이 자주 들어오는 지역, 학교 주변 특정 시간대 속도 위험, 정상 항적에서 벗어난 움직임처럼 운영 판단으로 이어지는 event를 찾을 수 있다.',
      },
      {
        title: '항적 이상치 검증',
        body: '위험 예측에서는 trajectory와 context를 latent space로 옮겨 정상 분포에서 벗어나는 정도를 본다. 다만 사고 사례는 드물고 민감한 데이터도 많기 때문에, 모델 점수만으로 단정하기보다 전문가 기준치와 사후 검증을 함께 둬야 한다.',
      },
      {
        title: '사전 학습 체크포인트',
        body: '6-1차시를 이해하려면 time series, feature engineering, classification, anomaly detection, data governance의 기본 의미를 먼저 잡는 것이 좋다.',
        table: {
          headers: ['개념', '연결되는 질문'],
          rows: [
            ['Time Series', '위치가 시간 순서로 쌓일 때 어떤 순서 정보가 생기는가?'],
            ['Feature Engineering', 'Raw log를 모델 입력으로 바꾸려면 무엇을 계산해야 하는가?'],
            ['Classification', '재방문 여부와 위험 여부를 어떤 label로 볼 수 있는가?'],
            ['Anomaly Detection', '정상 패턴에서 벗어난 이동을 어떻게 점수화할 수 있는가?'],
            ['Data Governance', '이동경로 데이터는 어떤 프라이버시 위험을 갖는가?'],
          ],
        },
      },
    ],
    quizIds: ['s06-q1', 's06-q2', 's06-q3', 's06-q4', 's06-q5'],
    reflectionQuestions: [
      '교통카드 데이터만으로 승객의 모든 위치를 알 수 없는 이유는 무엇인가?',
      '관측되지 않은 위치를 추정할 때 unknown으로 남겨야 하는 구간은 어떤 경우인가?',
      'Mobility Regularity는 어떤 방식으로 계산되고, 어떤 해석상 주의점이 있는가?',
      '실내 동선에서 고객 행동과 통로 통과, 직원 행동을 분리해야 하는 이유는 무엇인가?',
      'Spatial Stream Processing은 offline batch 분석과 무엇이 다른가?',
      '항적 위험 예측에서 지형과 기상 context를 추가하는 이유는 무엇인가?',
      '모빌리티 데이터 공개와 활용에서 Data Governance가 중요한 이유는 무엇인가?',
    ],
    projectConnections: [
      '실내 내비게이션에서는 장소별 체류 시간과 이동 순서를 이용해 관심 구역 또는 혼잡 구역을 추정할 수 있다.',
      '매장, 층, 게이트, 편의시설을 trajectory data와 연결하면 추천, 안내, 운영 분석으로 확장할 수 있다.',
      '위치 stream을 실시간으로 처리하면 길찾기 실패, 비정상 체류, 혼잡 이벤트를 빠르게 감지할 수 있다.',
      '모빌리티 데이터는 개인 식별 위험이 크므로 서비스 설계 단계에서 익명화와 접근 권한을 먼저 정해야 한다.',
    ],
    nextPreview: {
      title: 'Data Science for Infectious Disease Response',
      summary:
        '6-2차시에서는 감염병 대응을 검역, 지역경제 피해 예측, 역학조사 문제로 나누고, 데이터 사이언스가 의사결정을 어떻게 보조하는지 정리한다.',
      questions: [
        '해외 유입 확진자 수를 예측할 때 infection risk와 inbound flow를 함께 보는 이유는 무엇인가?',
        '지역경제 피해를 district-business pair 단위로 예측하면 어떤 장점이 있는가?',
        '감염병 대응 데이터에서 프라이버시와 공익 사이의 균형은 어떻게 잡아야 하는가?',
      ],
      keyPoints: [
        '검역은 imported case prediction과 제한된 자원 배분 문제로 볼 수 있다.',
        '지역경제 피해는 경제, 지리, 감염병 feature를 결합한 fine-grained EEM으로 정리된다.',
        '역학조사는 POI reconstruction과 privacy-aware data science 관점이 함께 필요하다.',
      ],
    },
  },
  {
    id: '06-2',
    order: 6,
    slotId: '06',
    partLabel: '6-2차시',
    title: 'Data Science for Infectious Disease Response',
    koreanTitle: '감염병 대응을 위한 데이터 사이언스',
    subtitle:
      'Imported Case Prediction, COVID-EENet, Digital Contact Tracing, POI Reconstruction',
    status: 'published',
    instructor: leeInstructor,
    summary:
      '6-2차시는 감염병 대응을 검역, 재난지원금, 역학조사라는 세 문제로 나누고, 각 문제에서 데이터 사이언스와 AI가 어떤 의사결정을 보조하는지 다룬다.',
    summaryLines: [
      '감염병 대응 데이터 사이언스는 검역, 재난지원금, 역학조사를 서로 다른 예측 문제로 나누어 다룬다.',
      'Hi-COVIDNet은 해외 국가별 Infection Risk와 Inbound Flow를 X로 보고 Imported Case 수를 Y로 예측하는 흐름으로 이해할 수 있다.',
      'COVID-EENet과 Pincette 사례는 경제 피해 예측과 POI Reconstruction에서 세밀한 단위의 feature, 집계 데이터, privacy-aware 설계가 중요하다는 점을 보여준다.',
    ],
    coreFlow: [
      'Infectious Disease Data Science',
      'Imported Case Prediction',
      'Infection Risk',
      'Inbound Flow',
      'Hi-COVIDNet',
      'Transformer / LSTM',
      'Fine-Grained EEM',
      'COVID-EENet',
      'District-Business Pair',
      'Economy / Geography / Epidemic View',
      'Microscopic Encoder',
      'Macroscopic Aggregator',
      'Digital Contact Tracing',
      'Cellular Trajectory',
      'POI Reconstruction',
      'Pincette',
      'Privacy-Preserving Data Science',
    ],
    coreFlowGroups: [
      {
        label: '검역 예측',
        layout: 'pipeline',
        items: [
          'Infectious Disease Data Science',
          'Imported Case Prediction',
          'Infection Risk',
          'Inbound Flow',
          'Hi-COVIDNet',
          'Transformer / LSTM',
        ],
      },
      {
        label: '지역경제 피해 예측',
        layout: 'pipeline',
        items: [
          'Fine-Grained EEM',
          'COVID-EENet',
          'District-Business Pair',
          'Economy / Geography / Epidemic View',
          'Microscopic Encoder',
          'Macroscopic Aggregator',
        ],
      },
      {
        label: '역학조사와 프라이버시',
        layout: 'pipeline',
        items: [
          'Digital Contact Tracing',
          'Cellular Trajectory',
          'POI Reconstruction',
          'Pincette',
          'Privacy-Preserving Data Science',
        ],
      },
    ],
    conceptCards: [
      {
        term: 'Infectious Disease Data Science',
        korean: '감염병 데이터 사이언스',
        description:
          '감염병 대응에 필요한 예측, 자원 배분, 역학조사, 정책 평가 문제를 데이터와 AI로 보조하는 접근이다.',
        takeaway:
          '공중보건 의사결정을 돕지만, 개인정보와 사회적 영향까지 함께 고려해야 한다.',
      },
      {
        term: 'Imported Case Prediction',
        korean: '해외 유입 확진자 예측',
        description:
          '해외에서 국내로 유입될 감염자 수와 추세를 예측하는 task다. 출발 국가의 감염 상황과 유입 흐름을 X로 두고, 질병관리 통계의 해외 유입 확진자 수를 Y로 둘 수 있다.',
        takeaway:
          '감염 위험과 유입량을 함께 봐야 제한된 검역 자원을 더 잘 배치할 수 있다.',
      },
      {
        term: 'Infection Risk',
        korean: '감염 위험',
        description:
          '국가나 지역의 감염 확산 정도를 나타내는 시간 변화 신호다. 확진자, 검색어, 로밍, 항공편 같은 feature와 연결될 수 있다.',
        takeaway:
          '감염 위험은 고정값이 아니라 시간에 따라 변하는 spatio-temporal signal이다.',
      },
      {
        term: 'Inbound Flow',
        korean: '유입 흐름',
        description:
          '특정 국가나 지역에서 목적지로 들어오는 사람의 흐름이다. 검역 예측에서는 해외 감염 위험과 곱해져 유입 위험을 만든다.',
        takeaway:
          '위험한 지역이라도 유입량이 적으면 실제 imported case는 작을 수 있다.',
      },
      {
        term: 'Hi-COVIDNet',
        korean: 'Hi-COVIDNet',
        description:
          '해외 유입 COVID-19 확진자 수를 예측하기 위해 country-level과 continent-level representation을 구성하는 deep learning 모델이다.',
        takeaway:
          'Transformer, LSTM, concatenate layer를 이용해 감염 추세와 유입 흐름을 결합한다.',
      },
      {
        term: 'LSTM',
        korean: '장단기 기억 신경망',
        description:
          '순서가 있는 데이터를 처리하며 과거 상태를 다음 계산에 반영하는 recurrent neural network 계열 모델이다.',
        takeaway:
          '감염 추세처럼 시간 방향으로 누적되는 신호를 다룰 때 사용될 수 있다.',
      },
      {
        term: 'Fine-Grained EEM',
        korean: '세밀한 경제-역학 모델링',
        description:
          '지역과 업종처럼 세밀한 단위에서 감염병이 경제에 미치는 영향을 예측하는 Economic-Epidemiological Modeling이다. 집계된 카드 소비 통계와 집단감염 정보를 함께 활용할 수 있다.',
        takeaway:
          '소득이나 실업률 같은 coarse-grained 지표만으로는 지역별 피해 차이를 놓칠 수 있다.',
      },
      {
        term: 'COVID-EENet',
        korean: 'COVID-EENet',
        description:
          '경제 활동 데이터와 집단감염 데이터를 결합해 지역-업종 단위 매출 변화 추세를 예측하는 DNN 기반 framework다.',
        takeaway:
          '경제, 지리, 감염병 관점 feature를 함께 사용해 fine-grained impact를 예측한다.',
      },
      {
        term: 'District-Business Pair',
        korean: '지역-업종 쌍',
        description:
          '특정 지역과 특정 업종의 조합이다. COVID-EENet에서는 이 단위를 기준으로 매출 변화 추세를 예측한다.',
        takeaway:
          '같은 감염병 충격도 지역과 업종에 따라 경제 피해가 다르게 나타난다.',
      },
      {
        term: 'Digital Contact Tracing',
        korean: '디지털 역학조사',
        description:
          '위치나 접촉 데이터를 활용해 감염 가능 접촉과 이동 경로를 추정하는 공중보건 지원 방식이다. 확진자가 급증하면 인터뷰와 수작업 확인만으로는 한계가 생긴다.',
        takeaway:
          '정확도와 속도만큼 privacy-preserving design이 중요하다.',
      },
      {
        term: 'POI Reconstruction',
        korean: '방문 장소 재구성',
        description:
          '기지국 trajectory처럼 거친 위치 신호에서 실제 방문했을 가능성이 높은 point of interest를 추정하는 과정이다. 앞뒤 이동 맥락, 생활 반복성, 장소 대중성 같은 보조 신호가 필요하다.',
        takeaway:
          '기지국 수준 위치를 건물 또는 장소 단위로 세밀화하는 문제로 볼 수 있다.',
      },
      {
        term: 'Pincette',
        korean: 'Pincette',
        description:
          'Efficiency, periodicity, popularity view를 이용해 cellular trajectory에서 POI 방문 가능성을 추정하는 방법론이다.',
        takeaway:
          '이동 경로의 효율성, 생활 패턴의 주기성, 장소의 대중성을 함께 본다.',
      },
    ],
    visualNotes: [
      {
        title: '감염병 대응 데이터 사이언스의 세 문제',
        src: '/session-visuals/session-06-infectious-disease-response-flow.svg',
        alt: '검역, 지역경제 피해 예측, 역학조사라는 세 감염병 대응 문제와 각 예측 단위를 설명하는 도식',
        caption:
          '검역, 지역경제 피해 예측, 역학조사를 각각 다른 데이터 사이언스 문제로 나눠 정리했습니다.',
      },
      {
        title: 'POI Reconstruction과 감염 위험 추정',
        src: '/session-visuals/session-06-contact-tracing-flow.svg',
        alt: '기지국 궤적에서 efficiency, periodicity, popularity view를 이용해 POI 방문 확률과 감염 위험 지수로 이어지는 흐름을 설명하는 도식',
        caption:
          '기지국 기반 trajectory를 POI 방문 가능성과 risk index로 바꾸는 흐름을 복습용으로 정리했습니다.',
      },
    ],
    intuitions: [
      {
        title: '현행: 감염병 대응은 자원 배분 문제다',
        body: '검역 인력, 재난지원금, 역학조사 자원은 항상 제한되어 있다. Data science는 무엇을 X로 보고 무엇을 Y로 예측할지 정의한 뒤, 어디에 먼저 집중할지 판단할 근거를 제공한다.',
      },
      {
        title: '알아둬야 할 지식: 감염 위험은 시공간 신호다',
        body: 'Infection Risk는 국가별 감염 상황, 이동량, 시간 변화가 결합된 signal이다. 단순 누적 확진자만 보는 것보다 spatio-temporal relationship을 함께 봐야 한다.',
      },
      {
        title: '사전 학습: 성능과 프라이버시는 같이 본다',
        body: 'Digital Contact Tracing은 빠르고 세밀한 추정을 가능하게 하지만, 위치 데이터가 개인 생활을 드러낼 수 있다. Privacy-preserving data science가 모델 설계의 일부가 되어야 한다.',
      },
    ],
    modelNotes: [
      {
        title: '검역: Imported Case Prediction',
        body: '해외 유입 확진자 예측은 국가별 infection risk와 목적지로 들어오는 inbound flow를 함께 보는 문제다. 출발 국가의 감염 상황, 유입 흐름, 출발지-도착지 환경을 X로 두고, 질병관리 통계에서 확인되는 해외 유입 확진자 수를 Y로 둔다.',
        highlight: 'Imported Risk ~= Infection Risk x Inbound Flow',
      },
      {
        title: 'Hi-COVIDNet 구성',
        body: 'Hi-COVIDNet은 country-level representation과 continent-level representation을 구성한다. Transformer는 감염 위험이 높은 기간에 주목하고, LSTM은 직전 2주처럼 시간에 따른 감염 추세의 흐름을 포착한다.',
        table: {
          headers: ['구성', '역할'],
          rows: [
            ['Daily epidemic signal', '확진자, 사망자, 검색어 같은 감염 추세 입력'],
            ['Inbound flow', '로밍, 항공편 등 목적지 유입 흐름'],
            ['Transformer', '위험도가 높은 시점에 주목'],
            ['LSTM', '시간에 따른 감염 추세 반영'],
            ['Prediction layer', '향후 imported case 수 예측'],
          ],
        },
      },
      {
        title: '지역경제 피해 예측',
        body: 'COVID-EENet은 district-business pair 단위로 매출 변화 추세를 예측한다. 개인 거래 내역이 아니라 지역, 업종, 성별, 연령대, 시간 단위의 집계 카드 통계를 사용하고, 2020년 매출과 2019년 같은 시점의 차이를 예측 대상으로 볼 수 있다.',
        table: {
          headers: ['View', '담는 정보'],
          rows: [
            ['Economy-view', '특정 지역-업종에서 소비가 평소 어떻게 일어나는가'],
            ['Geography-view', '지역 사이의 물리적, 사회적 가까움'],
            ['Epidemic-view', '집단감염 사례가 얼마나 강하게 영향을 미치는가'],
          ],
        },
      },
      {
        title: '역학조사의 privacy trade-off',
        body: '정밀 GPS, 카드 사용 내역, 인터뷰 기록을 모두 결합하면 방문 장소를 더 정확히 파악할 수 있지만 개인 생활이 과도하게 노출될 수 있다. 기지국 trajectory 같은 더 거친 데이터로 필요한 추정을 수행하려는 이유가 여기에 있다.',
        table: {
          headers: ['데이터 수준', '장점', '주의점'],
          rows: [
            ['정밀 GPS / 카드 기록', '방문 장소 추정 정확도가 높다', '사생활 노출 위험이 크다'],
            ['Cellular trajectory', '개인 세부 행적 노출을 줄일 수 있다', '건물 단위 추정이 어렵다'],
            ['집계 통계', '정책 판단에 활용하기 쉽다', '개별 접촉 판단에는 부족하다'],
          ],
        },
      },
      {
        title: '역학조사: POI Reconstruction',
        body: '기지국 trajectory는 위치 해상도가 거칠다. Pincette는 앞뒤 이동 맥락과 지도 정보를 바탕으로 efficiency, periodicity, popularity view를 결합해 실제 방문했을 가능성이 높은 POI를 추정한다. 학습에는 동의 기반 GPS 패널처럼 정답 위치를 확인할 수 있는 ground truth가 필요하다.',
        table: {
          headers: ['View', '직관'],
          rows: [
            ['Efficiency', '사람은 이동 경로상 효율적인 장소를 방문할 가능성이 높다'],
            ['Periodicity', '생활 패턴에는 시간과 장소의 반복성이 있다'],
            ['Popularity', '대중적인 장소는 방문 후보가 될 가능성이 높다'],
          ],
        },
      },
      {
        title: '사전 학습 체크포인트',
        body: '6-2차시를 이해하려면 spatio-temporal data, Transformer/LSTM, feature engineering, POI reconstruction, privacy-preserving data science를 먼저 연결해 두는 것이 좋다.',
        table: {
          headers: ['개념', '연결되는 질문'],
          rows: [
            ['Spatio-Temporal Data', '감염 위험은 시간과 공간을 따라 어떻게 움직이는가?'],
            ['Transformer / LSTM', '시간 의존성과 위험 시점을 어떻게 모델링하는가?'],
            ['Feature Engineering', '경제, 지리, 감염병 view를 어떻게 분리해 입력으로 만드는가?'],
            ['POI Reconstruction', '거친 위치 신호에서 실제 방문 장소를 어떻게 추정하는가?'],
            ['Privacy-Preserving Data Science', '공익 목적 분석과 개인 권리 보호를 어떻게 함께 설계하는가?'],
          ],
        },
      },
    ],
    quizIds: ['s06-2-q1', 's06-2-q2', 's06-2-q3', 's06-2-q4', 's06-2-q5'],
    reflectionQuestions: [
      'Imported Case Prediction에서 Infection Risk와 Inbound Flow를 함께 봐야 하는 이유는 무엇인가?',
      '감염병 대응 예측 문제에서 X와 Y를 먼저 정의해야 하는 이유는 무엇인가?',
      'Hi-COVIDNet에서 Transformer와 LSTM은 각각 어떤 역할을 맡는가?',
      'COVID-EENet이 지역과 업종을 묶은 district-business pair 단위로 예측하는 이유는 무엇인가?',
      '카드 소비 데이터를 개인 거래 내역이 아니라 집계 통계로 다루는 이유는 무엇인가?',
      '기지국 기반 trajectory에서 POI Reconstruction을 할 때 efficiency, periodicity, popularity view가 필요한 이유는 무엇인가?',
      '감염병 대응 데이터 사이언스에서 프라이버시 설계가 모델 성능만큼 중요한 이유는 무엇인가?',
    ],
    projectConnections: [
      '실내 공간 서비스에서도 감염병 대응처럼 이동, 체류, 혼잡 정보를 공익적 의사결정에 활용할 수 있다.',
      '장소별 방문 가능성과 risk index를 다룰 때는 사용자의 위치 정보 최소화와 익명화가 먼저 설계되어야 한다.',
      '상권 또는 매장 단위 분석에서는 지역-업종 쌍처럼 예측 단위를 세밀하게 정의하는 것이 중요하다.',
      'LLM 기반 안내 시스템이 공공 안전 정보를 다룰 때는 검색 근거와 책임 있는 표현이 함께 필요하다.',
    ],
  },
  {
    id: '07',
    order: 7,
    title: 'AGI/ASI Value Alignment and Superalignment',
    koreanTitle: '인간 중심 AGI/ASI 가치 정렬과 슈퍼 정렬',
    subtitle:
      'Value-Injected LLMs, Cultural Alignment, Superalignment, Scalable Oversight, UniPRO',
    status: 'published',
    instructor: bakInstructor,
    summary:
      '7차시는 인간 가치가 LLM 응답과 안전성에 어떤 영향을 주는지에서 출발해, AGI/ASI 시대의 Superalignment와 scalable oversight 문제로 확장한다. 핵심은 모델 능력을 키우는 것과 인간 가치에 맞추는 것을 따로 보지 않고 함께 최적화해야 한다는 점이다.',
    summaryLines: [
      'Value Alignment는 LLM이 특정 human value distribution을 반영하도록 만드는 접근이지만, 정렬된 가치가 항상 안전한 결과를 보장하지는 않는다.',
      '문화권별 가치 정렬은 survey 문항만으로는 부족하므로, open-ended text를 value codebook과 distribution으로 평가하려는 흐름이 등장한다.',
      'Superalignment는 AGI/ASI처럼 인간 능력을 넘어서는 모델을 다룰 때 competence, conformity, scalable oversight를 함께 설계해야 하는 문제다.',
    ],
    coreFlow: [
      'Human Value',
      'Schwartz Theory of Basic Values',
      'Value-Injected LLM',
      'Value Alignment',
      'Value Injection Method',
      'Value-Safety Trade-off',
      'Cultural Value Alignment',
      'Value Codebook',
      'DOVE',
      'ANI / AGI / ASI',
      'Superalignment',
      'Capacity vs Capability',
      'Sandwiching',
      'Self-Enhancement',
      'Weak-to-Strong Generalization',
      'Scalable Oversight',
      'Easy-to-Hard Generalization',
      'UniPRO',
      'Policy-Reward Co-evolution',
    ],
    coreFlowGroups: [
      {
        label: '가치 주입과 정렬',
        layout: 'pipeline',
        items: [
          'Human Value',
          'Schwartz Theory of Basic Values',
          'Value-Injected LLM',
          'Value Alignment',
          'Value Injection Method',
          'Value-Safety Trade-off',
        ],
      },
      {
        label: '문화 가치 평가',
        layout: 'pipeline',
        items: ['Cultural Value Alignment', 'Value Codebook', 'DOVE'],
      },
      {
        label: 'AGI/ASI 정렬 문제',
        layout: 'pipeline',
        items: [
          'ANI / AGI / ASI',
          'Superalignment',
          'Capacity vs Capability',
          'Sandwiching',
          'Self-Enhancement',
          'Weak-to-Strong Generalization',
        ],
      },
      {
        label: '확장 가능한 감독',
        layout: 'pipeline',
        items: [
          'Scalable Oversight',
          'Easy-to-Hard Generalization',
          'UniPRO',
          'Policy-Reward Co-evolution',
        ],
      },
    ],
    conceptCards: [
      {
        term: 'Human Value',
        korean: '인간 가치',
        description:
          '개인이 무엇을 중요하게 여기는지 나타내는 믿음, 선호, 판단 기준이다. LLM 응답의 태도, 우선순위, 조언 방식에 영향을 줄 수 있다.',
        takeaway:
          'AI alignment에서 value는 단일 정답이 아니라 사람과 집단마다 다른 distribution으로 다뤄야 한다.',
      },
      {
        term: 'Schwartz Theory of Basic Values',
        korean: 'Schwartz 기본 가치 이론',
        description:
          '사람의 가치를 10개 basic value와 4개 higher-order value로 설명하는 심리학 이론이다. 강의에서는 value distribution을 모델링하는 기반으로 사용되었다.',
        takeaway:
          'Benevolence, Universalism, Power, Security처럼 사람이 중요하게 여기는 축을 수치화할 수 있다.',
      },
      {
        term: 'Value Alignment',
        korean: '가치 정렬',
        description:
          'AI가 특정 사람이나 집단의 가치 분포를 반영해 답변하거나 행동하도록 맞추는 과정이다. 단순히 친절한 답변을 만드는 것보다 더 넓은 문제다.',
        takeaway:
          '모델의 utility가 인간의 value-driven action과 가까워지도록 만드는 것으로 이해할 수 있다.',
      },
      {
        term: 'Value Injection Method',
        korean: '가치 주입 방법',
        description:
          'LLM에 목표 value distribution을 주입해, 특정 가치관을 가진 사람이 보일 법한 주장이나 행동을 더 잘 예측하도록 만드는 접근이다.',
        takeaway:
          '개인이나 집단의 value distribution을 조건으로 넣으면 stance와 behavior prediction에 활용할 수 있다.',
      },
      {
        term: 'Value-Safety Trade-off',
        korean: '가치-안전 절충',
        description:
          '특정 가치에 맞춘 모델이 일부 안전 범주에서는 오히려 더 위험한 출력을 낼 수 있다는 문제다.',
        takeaway:
          '가치 정렬은 좋은 의도만으로 끝나지 않고 toxicity, bias, sensitive context 평가가 함께 필요하다.',
      },
      {
        term: 'Cultural Value Alignment',
        korean: '문화 가치 정렬',
        description:
          '국가나 문화권마다 다른 선호와 가치 표현을 LLM 응답이 얼마나 잘 반영하는지 평가하고 조정하는 문제다.',
        takeaway:
          '모든 문화권에 보편적으로 선호되는 하나의 답변이 있다고 가정하면 실제 사용 맥락을 놓칠 수 있다.',
      },
      {
        term: 'Value Codebook',
        korean: '가치 코드북',
        description:
          '문서에서 추출한 value expression을 더 일반적인 code로 묶어 value space를 구성하는 방식이다.',
        takeaway:
          '정해진 설문 문항이 아니라 open-ended text에서 드러난 가치를 분포로 비교할 수 있다.',
      },
      {
        term: 'DOVE',
        korean: 'DOVE',
        description:
          'Open-ended text를 value code distribution으로 바꾸고, 인간 문서와 LLM 응답의 문화 가치 정렬을 비교하는 평가 방법론이다.',
        takeaway:
          '문화권별 문서와 LLM 응답을 같은 value space에 올려 distribution 차이를 측정한다.',
      },
      {
        term: 'AGI / ASI',
        korean: '범용 인공지능 / 초지능',
        description:
          'AGI는 인간 수준의 일반 지능을 목표로 하는 AI, ASI는 인간을 넘어서는 능력을 가진 가설적 AI를 뜻한다.',
        takeaway:
          '모델 능력이 인간 평가자를 넘어서면 기존 alignment의 감독 구조가 약해진다.',
      },
      {
        term: 'Superalignment',
        korean: '슈퍼 정렬',
        description:
          'ASI 수준의 모델이 인간 가치와 사회적 이익에 맞게 작동하도록, 능력 향상과 정렬을 함께 최적화하려는 문제다.',
        takeaway:
          '인간을 정답 target으로만 두기 어려운 구간에서는 scalable oversight와 단계적 감독이 필요하다.',
      },
      {
        term: 'Capacity vs Capability',
        korean: '내재 지식과 수행 능력',
        description:
          'Capacity는 pretraining으로 내부화한 지식과 기술이고, capability는 post-training과 사용 맥락에서 실제 task를 수행하는 능력이다.',
        takeaway:
          'Superalignment에서는 모델이 무엇을 알고 있는지와 실제로 무엇을 할 수 있는지를 구분해야 한다.',
      },
      {
        term: 'Weak-to-Strong Generalization',
        korean: '약한 모델에서 강한 모델로의 일반화',
        description:
          '더 약한 감독자나 모델이 더 강한 모델을 지도해 능력을 끌어내려는 alignment 패러다임이다.',
        takeaway:
          '강한 모델이 약한 감독의 오류를 그대로 모방하거나 과적합할 수 있다는 한계가 있다.',
      },
      {
        term: 'Scalable Oversight',
        korean: '확장 가능한 감독',
        description:
          'AI 능력이 커져도 유효한 감독 신호를 제공하기 위한 방법론이다. 인간 직접 라벨이 느리거나 불안정한 hard task에서 특히 중요하다.',
        takeaway:
          '정답을 사람이 직접 판단하기 어려운 문제에서는 reward model, surrogate evaluation, step-level feedback이 필요하다.',
      },
      {
        term: 'UniPRO',
        korean: 'Unified Policy and Reward Optimization',
        description:
          '쉬운 문제의 라벨과 어려운 문제의 prompt를 함께 활용해 policy와 reward를 번갈아 업데이트하는 easy-to-hard generalization 접근이다.',
        takeaway:
          'Policy와 reward가 함께 변하는 on-policy 영역을 따라가도록 만들어 supervision bottleneck을 줄이려는 구조다.',
      },
    ],
    visualNotes: [
      {
        title: '가치 정렬과 안전성 점검 흐름',
        src: '/session-visuals/session-07-value-alignment-flow.svg',
        alt: '인간 가치 분포가 value injection과 cultural evaluation을 거쳐 safety check로 이어지는 흐름을 설명하는 도식',
        caption:
          'Human value distribution을 LLM 응답에 주입하고, 문화권별 평가와 safety check를 함께 두는 구조를 복습용으로 정리했습니다.',
      },
      {
        title: 'Superalignment와 확장 가능한 감독',
        src: '/session-visuals/session-07-superalignment-oversight.svg',
        alt: 'AGI와 ASI 구간에서 competence와 conformity를 병렬 최적화하고 policy와 reward를 함께 업데이트하는 흐름을 설명하는 도식',
        caption:
          'Superalignment를 competence, conformity, scalable oversight가 함께 움직이는 문제로 정리했습니다.',
      },
    ],
    intuitions: [
      {
        title: '현행: alignment는 중립적인 스위치가 아니다',
        body: 'Value Alignment는 모델을 더 친절하게 만드는 단순 후처리가 아니다. 어떤 가치 분포를 반영하느냐에 따라 stance, recommendation, refusal, safety risk가 달라질 수 있다.',
      },
      {
        title: '알아둬야 할 지식: 문화권별 정답은 하나가 아니다',
        body: '같은 질문도 문화권과 집단에 따라 선호되는 답변이 달라질 수 있다. Survey-style benchmark만으로는 실제 open-ended 사용에서 드러나는 value expression을 충분히 잡기 어렵다.',
      },
      {
        title: '사전 학습: Superalignment는 감독의 확장 문제다',
        body: 'AGI/ASI 구간에서는 인간 평가자가 항상 더 잘 안다는 가정이 약해진다. 따라서 쉬운 문제에서 얻은 감독 신호를 어려운 문제로 확장하고, policy와 reward를 함께 갱신하는 설계가 중요해진다.',
      },
    ],
    modelNotes: [
      {
        title: '강의 구조',
        body: '7차시는 다섯 개 연구 흐름을 연결해 value alignment가 왜 필요한지, 왜 위험할 수 있는지, AGI/ASI 단계에서는 어떤 감독 구조가 필요한지로 확장한다.',
        table: {
          headers: ['블록', '핵심 질문'],
          rows: [
            ['Value-Injected LLMs', 'LLM에 사람의 value distribution을 어떻게 반영할 것인가?'],
            ['Unintended Harms', '가치 정렬이 toxicity와 bias를 키울 수도 있는가?'],
            ['DOVE', 'Open-ended text에서 문화 가치 정렬을 어떻게 평가할 것인가?'],
            ['Superalignment', '인간 능력을 넘어서는 AI를 어떻게 정렬할 것인가?'],
            ['UniPRO', '쉬운 감독 신호를 어려운 task로 어떻게 확장할 것인가?'],
          ],
        },
      },
      {
        title: 'Schwartz value와 VIM',
        body: 'Schwartz Theory of Basic Values는 사람의 가치관을 여러 축의 distribution으로 표현한다. VIM은 이 distribution을 LLM에 주입해 특정 가치관을 가진 사람이 생성할 법한 argument, stance, behavior를 예측하려는 접근이다.',
        table: {
          headers: ['구성', '역할'],
          rows: [
            ['Value distribution', '사람이나 집단이 중요하게 여기는 가치의 분포'],
            ['Prompt / Training signal', '모델이 반영해야 할 가치 조건'],
            ['Generated stance', '조건을 반영한 주장, 의견, 행동 예측'],
            ['Evaluation', '목표 가치 분포와 출력의 일치 정도 확인'],
          ],
        },
      },
      {
        title: 'Value Alignment의 부작용',
        body: '가치 정렬은 모델을 더 유용하게 만들 수 있지만, 특정 value profile이 safety category와 결합되면 toxicity나 bias가 증가할 수 있다. 따라서 alignment는 성능 지표와 안전 지표를 동시에 봐야 한다.',
        table: {
          headers: ['관점', '확인할 점'],
          rows: [
            ['Value consistency', '목표 가치가 출력에 실제로 반영되는가?'],
            ['Safety risk', '민감한 질문에서 유해하거나 편향된 응답이 늘어나는가?'],
            ['Context sensitivity', '특정 상황에서는 value를 억제하거나 재해석해야 하는가?'],
          ],
        },
      },
      {
        title: 'DOVE와 문화 가치 평가',
        body: 'DOVE는 문서에서 value expression을 뽑고 value codebook으로 mapping한 뒤, 문화권별 human document와 LLM response를 value distribution으로 비교한다. 핵심은 closed survey가 아니라 open-ended text에서 드러난 가치 표현을 평가한다는 점이다.',
        table: {
          headers: ['단계', '의미'],
          rows: [
            ['Value expression extraction', '문서에서 가치 표현을 짧고 일반적인 문장으로 추출'],
            ['Codebook refinement', '유사한 code는 합치고 부족한 code는 나눠 value space 구성'],
            ['Distribution comparison', '인간 문서와 LLM 응답의 value code 분포 차이 측정'],
          ],
        },
      },
      {
        title: 'Alignment와 Superalignment',
        body: '기존 alignment는 AI의 utility를 인간의 utility에 가깝게 맞추는 문제로 볼 수 있다. Superalignment에서는 ASI의 capacity가 인간을 크게 넘을 수 있으므로, 인간 utility를 단순 target으로 두기보다 capability와 capacity의 gap을 관리하는 방향이 필요하다.',
        table: {
          headers: ['구분', 'Alignment', 'Superalignment'],
          rows: [
            ['대상', 'ANI 또는 AGI 수준의 모델', 'ASI 수준까지 확장되는 모델'],
            ['감독자 가정', '인간이 비교적 판단 가능', '인간 판단이 lower bound가 될 수 있음'],
            ['핵심 위험', '편향, 유해성, 가치 불일치', '감독 실패, 기만, 능력-정렬 불균형'],
          ],
        },
      },
      {
        title: '기존 alignment 패러다임의 한계',
        body: 'Sandwiching, self-enhancement, weak-to-strong generalization은 모두 유용한 아이디어지만 ASI 구간에서는 충분하지 않을 수 있다. 강한 모델이 judge를 속이거나, 자기 편향을 증폭하거나, 약한 감독의 오류에 과적합할 수 있기 때문이다.',
        table: {
          headers: ['패러다임', '직관', '한계'],
          rows: [
            ['Sandwiching', '인간이 AI 제안을 판단하고 피드백', 'AI가 judge를 설득하거나 속일 수 있음'],
            ['Self-Enhancement', 'AI가 스스로 답변을 개선', 'Echo chamber와 편향 증폭 가능'],
            ['Weak-to-Strong', '약한 감독으로 강한 모델 지도', '약한 감독의 오류를 강한 모델이 모방할 수 있음'],
          ],
        },
      },
      {
        title: 'UniPRO와 Easy-to-Hard Generalization',
        body: 'UniPRO는 쉬운 데이터에는 라벨이 있고 어려운 데이터에는 prompt만 있는 상황에서, policy head와 reward head를 번갈아 업데이트한다. 고정된 reward가 hard distribution에서 OOD가 되는 문제를 줄이기 위해 policy와 reward가 함께 적응하도록 만든다.',
        table: {
          headers: ['구성', '역할'],
          rows: [
            ['Easy set', '라벨과 reasoning trace가 있는 학습 데이터'],
            ['Hard set', '라벨 없이 prompt만 있는 어려운 문제'],
            ['Policy head', '답변과 reasoning을 생성'],
            ['Reward head', 'reasoning step별 점수와 feedback 제공'],
            ['Alternating update', 'P-step과 R-step으로 policy와 reward를 함께 갱신'],
          ],
        },
      },
    ],
    quizIds: ['s07-q1', 's07-q2', 's07-q3', 's07-q4', 's07-q5'],
    reflectionQuestions: [
      'Value Alignment가 단순히 모델을 더 안전하게 만드는 과정이라고만 볼 수 없는 이유는 무엇인가?',
      'Schwartz Theory of Basic Values를 LLM 연구에 활용하면 어떤 장점이 있는가?',
      '문화 가치 정렬을 survey-style 질문만으로 평가할 때 생길 수 있는 한계는 무엇인가?',
      'Superalignment에서 인간 utility를 단순 target으로 두기 어려운 이유는 무엇인가?',
      'Sandwiching, self-enhancement, weak-to-strong generalization은 각각 어떤 failure mode를 가질 수 있는가?',
      'Easy-to-Hard Generalization에서 reward model이 고정되어 있으면 왜 supervision bottleneck이 생기는가?',
      '실제 AI 제품에서 value alignment와 safety evaluation을 함께 설계하려면 어떤 로그나 평가 기준이 필요한가?',
    ],
    projectConnections: [
      'LLM 기반 안내 서비스는 사용자 선호를 반영하더라도 안전, 공정성, 책임 있는 refusal 기준을 함께 가져야 한다.',
      '문화권이나 사용자 집단별 추천을 다룰 때는 하나의 보편 답변이 아니라 value distribution과 context를 구분해야 한다.',
      'RAG나 GraphRAG 응답 평가에서도 정답성뿐 아니라 가치 편향, 유해성, 근거 제시 여부를 별도 metric으로 둘 수 있다.',
      'AI agent가 복잡한 task를 수행할수록 final answer만 채점하기보다 reasoning step, tool use, reward feedback을 함께 봐야 한다.',
    ],
  },
];

export const getSessionById = (id: string | undefined) =>
  sessions.find((session) => session.id === id);

export const getSessionSlotId = (session: Session) =>
  session.slotId ?? session.id;

export const getSessionLabel = (session: Session) =>
  session.partLabel ?? `${session.order}차시`;

export const orderedSessions = [...sessions].sort((left, right) => {
  if (left.order !== right.order) {
    return left.order - right.order;
  }

  return left.id.localeCompare(right.id, 'ko', { numeric: true });
});

export const publishedSessions = orderedSessions.filter(
  (session) => session.status === 'published',
);

export type SessionSlot = {
  id: string;
  order: number;
  label: string;
  status: SessionStatus | 'deferred' | 'empty';
  session?: Session;
  sessions: Session[];
};

const deferredSessionIds = new Set(['05']);

export const getSessionSlotStatus = (
  slotSessions: Pick<Session, 'status'>[],
  slotId: string,
): SessionSlot['status'] => {
  if (slotSessions.length === 0) {
    return deferredSessionIds.has(slotId) ? 'deferred' : 'empty';
  }

  if (slotSessions.some((session) => session.status === 'draft')) {
    return 'draft';
  }

  if (slotSessions.some((session) => session.status === 'planned')) {
    return 'planned';
  }

  return 'published';
};

const sessionsBySlotId = orderedSessions.reduce((map, session) => {
  const slotId = getSessionSlotId(session);
  const slotSessions = map.get(slotId) ?? [];

  slotSessions.push(session);
  map.set(slotId, slotSessions);

  return map;
}, new Map<string, Session[]>());

export const sessionSlots: SessionSlot[] = Array.from(
  { length: totalSessionCount },
  (_, index) => {
    const order = index + 1;
    const id = String(order).padStart(2, '0');
    const slotSessions = sessionsBySlotId.get(id) ?? [];
    const session = slotSessions[0];

    return {
      id,
      order,
      label: `${order}차시`,
      status: getSessionSlotStatus(slotSessions, id),
      session,
      sessions: slotSessions,
    };
  },
);
