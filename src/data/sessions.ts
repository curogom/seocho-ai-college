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
  resourcePath?: string;
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
        takeaway: '긴 token 의존성과 효율성은 Gated DeltaNet, 정밀한 token interaction은 masked self-attention이 나눠 맡는 방향이다.',
      },
      {
        term: 'Scientific Foundation Model',
        korean: '과학 파운데이션 모델',
        description:
          'Scientific Foundation Model은 foundation model 관점을 과학·공학 문제에 적용하려는 흐름이다. PDE 해, 시뮬레이션, 관측 데이터가 중요하다.',
        takeaway: '자연어 token이 아니라 물리 현상과 관측 데이터를 다루며 forward/inverse problem과 연결된다.',
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
        body: '강의자료 기준 Qwen3-Next-80B는 Gated DeltaNet과 masked self-attention을 3:1 비율로 interleave한다. 효율성과 정밀한 token interaction의 균형을 노린다.',
      },
      {
        title: 'Scientific Foundation Model',
        body: 'LLM이 자연어 prompt에서 latent concept을 추정하듯, Scientific Foundation Model은 관측 데이터에서 PDE나 물리 법칙을 추정하고 forward/inverse problem을 풀려는 방향으로 볼 수 있다.',
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
    subtitle: 'Graph, Embedding, GNN, Message Passing',
    status: 'planned',
    instructor: {
      name: '황지영',
      englishName: 'Joyce Jiyoung Whang',
      title: 'Professor',
      affiliationKo: 'KAIST AI 컴퓨팅학과',
      affiliationEn: 'KAIST Department of AI Computing',
      lab: 'Big Data Intelligence Lab',
    },
    summary:
      '3차시는 관계 데이터를 graph로 표현하고, graph embedding과 GNN을 통해 node와 graph representation을 학습하는 흐름을 다룬다.',
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
      label: '수업 전 예습',
      heading: 'Graph Machine Learning 예습 과제',
      summary:
        '이번 예습의 목표는 GNN이 node 자신의 feature뿐 아니라 연결된 neighbor 정보까지 함께 보고 판단하는 모델이라는 관점을 이해하는 것이다.',
      resourcePath: 'content/prestudy/03-graph-ml-prestudy.md',
      keyPoints: [
        'Graph = Node + Edge',
        'Node / Edge / Relation',
        'Graph Embedding',
        'Node Embedding',
        'GNN',
        'Message Passing / Neighborhood Aggregation',
      ],
      questions: [
        'Graph에서 node와 edge는 각각 무엇인가?',
        'Relation은 edge와 어떻게 다른가?',
        'Graph embedding이 필요한 이유는 무엇인가?',
        'Node embedding에서 비슷한 node는 embedding space에서도 가까워야 한다는 말은 무엇인가?',
        'GNN은 왜 neighbor 정보를 사용하는가?',
        'Message passing과 neighborhood aggregation은 어떤 관계인가?',
        'k-hop neighbor는 무엇인가?',
        '실내 내비게이션을 graph로 표현하면 node와 edge는 무엇이 될 수 있는가?',
        'GNN layer가 깊어질수록 더 먼 정보를 볼 수 있다는 말은 무슨 뜻인가?',
        '너무 먼 hop까지 정보를 섞으면 어떤 문제가 생길 수 있는가?',
      ],
      assignments: [
        {
          title: '과제 1. Graph = Node + Edge',
          goal: '그래프가 무엇인지 이해한다.',
          body:
            'Graph는 객체와 객체 간 관계를 표현하는 데이터 구조다. Node는 개체이고, edge는 개체 간 연결 또는 관계다.',
          prompts: [
            '실내 내비게이션의 node와 edge를 정의한다.',
            '쇼핑몰 추천 시스템의 node와 edge를 정의한다.',
            '보험사기 탐지의 node와 edge를 정의한다.',
          ],
          example: [
            '실내 내비게이션에서 node는 출입구, 복도, 매장, 계단, 엘리베이터, 화장실이 될 수 있다.',
            'edge는 이동 가능한 경로, 같은 층에 있음, 가까이 있음, 휠체어 접근 가능 같은 관계가 될 수 있다.',
            '실내 공간은 좌표보다 이동 가능 관계가 중요하므로 graph 표현이 자연스럽다.',
          ],
        },
        {
          title: '과제 2. Node / Edge / Relation',
          goal: 'Node, edge, relation의 차이를 이해한다.',
          body:
            'Node는 개체이고 edge는 개체 간 연결이다. Relation은 edge가 어떤 의미의 연결인지 나타내는 타입이다.',
          prompts: [
            '실내 내비게이션 relation type을 5개 이상 정의한다.',
            '각 relation이 왜 필요한지 한 줄로 설명한다.',
            'connected_to, same_floor_as, nearby 같은 관계를 구분한다.',
          ],
          example: [
            'connected_to는 두 장소 사이에 실제 이동 가능한 경로가 있는지 나타낸다.',
            'accessible_by_wheelchair는 휠체어 접근 가능 경로인지 나타낸다.',
            'requires_vertical_movement는 계단이나 엘리베이터처럼 층 이동이 필요한 관계를 나타낸다.',
          ],
        },
        {
          title: '과제 3. Graph Embedding',
          goal: 'Graph embedding이 왜 필요한지 이해한다.',
          body:
            'Graph embedding은 graph의 구조 정보를 최대한 보존하면서 node, edge, subgraph, whole graph를 vector space로 바꾸는 것이다.',
          prompts: [
            '왜 graph를 vector로 바꿔야 하는가?',
            'Node embedding과 whole-graph embedding은 무엇이 다른가?',
            '실내 내비게이션 node embedding에는 어떤 정보가 반영되어야 하는가?',
          ],
          example: [
            'ML/DL 모델은 숫자 vector를 입력으로 다루기 쉽기 때문에 graph 구조를 representation으로 바꿔야 한다.',
            'Node embedding은 특정 매장 하나를 표현하고, whole-graph embedding은 쇼핑몰 전체 구조를 표현할 수 있다.',
            '위치, 층, 장소 타입, 주변 장소, 이동 가능 경로, 혼잡도, 접근성, 방문 빈도가 반영될 수 있다.',
          ],
        },
        {
          title: '과제 4. Node Embedding',
          goal: 'Node embedding의 목적을 이해한다.',
          body:
            'Node embedding은 각 node를 vector로 표현하는 것이다. 원래 graph에서 비슷한 node는 embedding space에서도 가깝게 위치해야 한다.',
          prompts: [
            '같은 층에 있는 엘리베이터와 계단은 가까워야 하는가?',
            '같은 브랜드의 매장 두 개는 가까워야 하는가?',
            '물리적으로 멀지만 같은 카테고리의 매장 두 개는 가까워야 하는가?',
          ],
          example: [
            '같은 층의 엘리베이터와 계단은 vertical movement node라는 점에서 가까울 수 있다.',
            '같은 브랜드 매장은 추천 task에서는 가까울 수 있지만 내비게이션 task에서는 멀 수 있다.',
            'Embedding의 거리는 어떤 task를 위한 representation인지에 따라 달라진다.',
          ],
        },
        {
          title: '과제 5. GNN',
          goal: 'GNN이 왜 필요한지 이해한다.',
          body:
            'GNN은 graph 위에서 동작하는 neural network다. Target node의 feature와 neighbor node들의 정보를 함께 사용해 node representation을 업데이트한다.',
          prompts: [
            '보험사기 탐지에서 graph가 왜 유용한지 설명한다.',
            '가짜 리뷰 탐지에서 단일 feature table이 부족한 이유를 설명한다.',
            '실내 혼잡도 예측과 쇼핑몰 개인화 추천을 graph 관점으로 설명한다.',
          ],
          example: [
            '보험사기 탐지는 환자, 병원, 설계사, 청구 건 사이의 반복 연결 패턴을 봐야 한다.',
            '가짜 리뷰 탐지는 리뷰 문장만이 아니라 사용자, 상품, 시점의 연결 패턴을 함께 봐야 한다.',
            '실내 혼잡도는 연결된 복도, 입구, 엘리베이터, 이벤트 공간의 영향을 함께 볼 수 있다.',
          ],
        },
        {
          title: '과제 6. Message Passing / Neighborhood Aggregation',
          goal: 'GNN의 핵심 연산을 이해한다.',
          body:
            'Message passing은 node들이 edge를 따라 정보를 주고받는 과정이고, neighborhood aggregation은 target node 주변 neighbor 정보를 모으는 과정이다.',
          prompts: [
            '현재 위치 node의 1-hop neighbor를 정의한다.',
            '2-hop neighbor 정보가 필요한 상황을 설명한다.',
            '너무 먼 hop까지 섞으면 어떤 문제가 생기는지 설명한다.',
          ],
          example: [
            '1-hop neighbor는 바로 이동 가능한 복도, 매장, 엘리베이터, 계단, 출입구가 될 수 있다.',
            '2-hop neighbor는 한 번 경유해야 하는 목적지나 곧 혼잡 영향을 줄 공간을 볼 때 필요하다.',
            '너무 먼 hop까지 섞으면 node별 특성이 흐려지는 over-smoothing 문제가 생길 수 있다.',
          ],
        },
      ],
      focusQuestions: [
        '이 강의에서 graph embedding과 GNN을 어떻게 구분하는가?',
        'Node embedding은 downstream task에 어떻게 연결되는가?',
        'GNN에서 aggregation 방식은 mean, sum, attention 중 무엇을 쓰는가?',
        'Graph layer가 깊어질수록 어떤 장점과 문제가 생기는가?',
        'Fraud detection 사례에서는 왜 relation-aware GNN이 필요한가?',
        'Homophily와 heterophily는 어떤 차이인가?',
        '실내 내비게이션이나 혼잡도 예측에 적용한다면 graph를 어떻게 설계해야 하는가?',
        'Graph ML이 기존 ML/DL과 가장 크게 다른 지점은 무엇인가?',
      ],
      excludedTopics: [
        'DRAG',
        'SpoT-Mamba',
        'FinePrompt',
        'Graph Adversarial Attack',
        'Knowledge Graph',
        'Knowledge Graph Embedding',
        'TransE',
        'MRR',
        'Hit@N',
        'Hyper-relational Knowledge Graph',
        'Visual-Textual Knowledge Graph',
        'Inductive Inference',
        'Fact Generation',
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
