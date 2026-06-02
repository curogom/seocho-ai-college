export type SessionStatus = 'planned' | 'draft' | 'published';

export type Instructor = {
  name: string;
  englishName?: string;
  title?: string;
  affiliationKo: string;
  affiliationEn?: string;
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
  summary: string;
  keyPoints: string[];
  questions: string[];
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
    summaryLines: [
      '전통 ML은 사람이 좋은 feature를 설계하고, 모델은 그 feature를 기준으로 분류나 예측을 수행했다.',
      'Deep Learning은 여러 hidden layer를 통해 feature representation 자체를 모델이 학습하도록 만든 흐름이다.',
      'Logistic Regression, DNN, CNN, RNN은 입력을 표현으로 바꾸고 예측한다는 큰 구조로 연결된다.',
    ],
    coreFlow: [
      'AI',
      'Machine Learning',
      'Deep Learning',
      'Feature Engineering',
      'Logistic Regression',
      'Sigmoid / Probability',
      'Representation Learning',
      'DNN',
      'CNN',
      'RNN',
    ],
    coreFlowGroups: [
      {
        label: '상위 범주',
        layout: 'hierarchy',
        items: ['AI', 'Machine Learning', 'Deep Learning'],
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
        items: ['Representation Learning', 'DNN', 'CNN', 'RNN'],
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
      title: 'LLM, Transformer, Diffusion, and Qwen3-Next',
      summary:
        '다음 차시에서는 GPT의 next token prediction, Transformer의 self-attention, 그리고 Qwen3-Next에서 보이는 Gated DeltaNet + masked self-attention hybrid 구조를 다룬다.',
      questions: [
        'GPT는 왜 next token prediction만으로 reasoning처럼 보이는 능력을 갖게 되었는가?',
        'Transformer의 attention은 긴 문맥에서 어떤 비용 문제가 있는가?',
        'Qwen3-Next의 Gated DeltaNet은 masked self-attention과 어떤 역할을 나누는가?',
      ],
      keyPoints: [
        'GPT는 decoder-only Transformer다.',
        '긴 문맥이 길어질수록 attention 비용이 커진다.',
        'Qwen3-Next는 Gated DeltaNet과 masked self-attention을 섞어 효율성과 reasoning 사이 균형을 노린다.',
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
      '아직 진행되지 않은 차시입니다. 현재는 1차시에서 이어질 예고만 남겨두고, 실제 수업 후 학습 노트로 확장합니다.',
    summaryLines: [],
    coreFlow: [],
    coreFlowGroups: [],
    conceptCards: [],
    visualNotes: [],
    intuitions: [],
    modelNotes: [],
    quizIds: [],
    reflectionQuestions: [],
    projectConnections: [],
    preview: {
      summary:
        '다음 차시에서는 LLM의 핵심 구조인 Transformer와 GPT의 next token prediction을 다룰 예정입니다. Qwen3-Next의 Gated DeltaNet + masked self-attention hybrid 구조는 예고 수준으로만 남겨둡니다.',
      keyPoints: [
        'GPT의 next token prediction과 decoder-only Transformer를 다룰 예정입니다.',
        '긴 문맥에서 self-attention 비용이 왜 문제가 되는지 살펴볼 예정입니다.',
        'Qwen3-Next의 hybrid architecture는 Gated DeltaNet과 masked self-attention의 역할 분리 관점으로 다룰 예정입니다.',
      ],
      questions: [
      'GPT가 next token prediction만으로 reasoning처럼 보이는 능력을 갖게 되는 이유는 무엇인가?',
      'Transformer의 self-attention은 왜 긴 문맥에서 비용 문제가 생기는가?',
      'Qwen3-Next의 Gated DeltaNet은 기존 attention과 어떤 역할 차이가 있는가?',
      'Hybrid architecture는 Transformer를 대체하는가, 보완하는가?',
      ],
    },
  },
];

export const getSessionById = (id: string | undefined) =>
  sessions.find((session) => session.id === id);

export const publishedSessions = sessions.filter(
  (session) => session.status === 'published',
);

export type SessionSlot = {
  id: string;
  order: number;
  label: string;
  status: SessionStatus | 'empty';
  session?: Session;
};

export const sessionSlots: SessionSlot[] = Array.from(
  { length: totalSessionCount },
  (_, index) => {
    const order = index + 1;
    const id = String(order).padStart(2, '0');
    const session = getSessionById(id);

    return {
      id,
      order,
      label: `${order}차시`,
      status: session?.status ?? 'empty',
      session,
    };
  },
);
