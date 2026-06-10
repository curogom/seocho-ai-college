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
    instructor: {
      name: '황지영',
      englishName: 'Joyce Jiyoung Whang',
      title: 'Professor',
      affiliationKo: 'KAIST AI 컴퓨팅학과',
      affiliationEn: 'KAIST Department of AI Computing',
      lab: 'Big Data Intelligence Lab',
    },
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
