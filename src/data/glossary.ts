export type GlossaryCategory =
  | '핵심 요소'
  | '개념'
  | '모델'
  | '함수'
  | '학습 과정'
  | '아키텍처'
  | '태스크'
  | '기법';

export type GlossaryEntry = {
  term: string;
  korean: string;
  category: GlossaryCategory;
  description: string;
  sessionIds: string[];
  aliases?: string[];
};

export const glossary: GlossaryEntry[] = [
  {
    term: 'AI',
    korean: '인공지능',
    category: '개념',
    description:
      '사람의 지능적 행동처럼 보이는 문제 해결, 판단, 예측, 생성 등을 컴퓨터로 수행하려는 가장 넓은 범주의 분야.',
    sessionIds: ['01'],
  },
  {
    term: 'Machine Learning',
    korean: '기계학습',
    category: '개념',
    description:
      '사람이 규칙을 직접 작성하는 대신, 데이터로부터 원하는 task를 수행하는 함수를 학습하는 방식.',
    sessionIds: ['01'],
  },
  {
    term: 'Deep Learning',
    korean: '딥러닝',
    category: '개념',
    description:
      '여러 layer를 가진 신경망을 통해 입력 데이터의 representation을 학습하는 machine learning 하위 분야.',
    sessionIds: ['01'],
  },
  {
    term: 'Input x',
    korean: '입력 x',
    category: '핵심 요소',
    description:
      '모델에 들어가는 입력값. 하나의 값일 수도 있고 여러 feature로 구성된 vector일 수도 있다.',
    sessionIds: ['01'],
  },
  {
    term: 'Label y',
    korean: '정답 y',
    category: '핵심 요소',
    description:
      '학습 데이터에서 모델이 맞혀야 하는 실제 정답. Ground Truth라고도 부른다.',
    sessionIds: ['01'],
  },
  {
    term: 'Prediction y-hat',
    korean: '예측값 y-hat',
    category: '핵심 요소',
    description:
      '모델이 입력 x를 보고 계산한 출력값. 실제 정답 y와 비교해 loss를 계산한다.',
    sessionIds: ['01'],
  },
  {
    term: 'Parameter theta',
    korean: '파라미터 theta',
    category: '핵심 요소',
    description:
      '모델이 학습 과정에서 조정하는 값들의 묶음. Weight와 bias를 포함하는 기호로 자주 쓴다.',
    sessionIds: ['01'],
  },
  {
    term: 'Weight w',
    korean: '가중치 w',
    category: '핵심 요소',
    description:
      '입력 feature가 예측에 얼마나 영향을 주는지 조절하는 학습 가능한 parameter.',
    sessionIds: ['01'],
  },
  {
    term: 'Bias b',
    korean: '편향 b',
    category: '핵심 요소',
    description:
      '입력값과 별도로 선형 점수에 더해지는 학습 가능한 parameter. 결정 경계의 위치를 이동시킨다.',
    sessionIds: ['01'],
  },
  {
    term: 'Feature',
    korean: '특징값',
    category: '핵심 요소',
    description:
      '모델이 입력으로 받는 값. 예를 들어 나이, 소득, GPA, 출석률 등이 feature가 될 수 있다.',
    sessionIds: ['01'],
  },
  {
    term: 'Feature Vector',
    korean: '특징 벡터',
    category: '핵심 요소',
    description:
      '여러 feature를 한 번에 담은 입력 표현. Logistic Regression의 x처럼 모델 입력으로 사용된다.',
    sessionIds: ['01'],
  },
  {
    term: 'Ground Truth',
    korean: '실제 정답',
    category: '핵심 요소',
    description:
      '학습 또는 평가에서 기준이 되는 실제 정답값. 모델 예측이 얼마나 맞는지 판단하는 기준이다.',
    sessionIds: ['01'],
  },
  {
    term: 'Feature Engineering',
    korean: '특징 설계',
    category: '기법',
    aliases: ['feature engineering'],
    description:
      '원본 데이터에서 문제 해결에 도움이 되는 새로운 입력값을 설계하거나 계산하는 작업.',
    sessionIds: ['01'],
  },
  {
    term: 'Classification',
    korean: '분류',
    category: '태스크',
    description:
      '입력을 정해진 class 중 하나로 배정하는 task. Binary classification은 두 class 중 하나를 고른다.',
    sessionIds: ['01'],
  },
  {
    term: 'Binary Classification',
    korean: '이진 분류',
    category: '태스크',
    aliases: ['binary classification'],
    description:
      '입력을 두 class 중 하나로 분류하는 문제. Logistic Regression을 설명할 때 대표적으로 사용된다.',
    sessionIds: ['01'],
  },
  {
    term: 'Classifier',
    korean: '분류기',
    category: '모델',
    description:
      '입력을 받아 class를 예측하는 모델 또는 함수.',
    sessionIds: ['01'],
  },
  {
    term: 'Logistic Regression',
    korean: '로지스틱 회귀',
    category: '모델',
    aliases: ['logistic regression'],
    description:
      '선형 점수 z를 sigmoid에 통과시켜 binary classification의 확률처럼 해석하는 대표 모델.',
    sessionIds: ['01'],
  },
  {
    term: 'Linear Score z',
    korean: '선형 점수 z',
    category: '핵심 요소',
    aliases: ['linear score', 'score z'],
    description:
      'z = w^T x + b로 계산되는 값. Sigmoid를 거치기 전의 raw score다.',
    sessionIds: ['01'],
  },
  {
    term: 'Odds',
    korean: '오즈',
    category: '핵심 요소',
    description:
      '어떤 class가 될 확률과 그렇지 않을 확률의 비율. Logistic Regression에서 log odds 설명의 출발점이다.',
    sessionIds: ['01'],
  },
  {
    term: 'Log Odds',
    korean: '로그 오즈',
    category: '핵심 요소',
    description:
      'Odds에 log를 취한 값. Logistic Regression은 log odds를 선형 점수로 모델링한다.',
    sessionIds: ['01'],
  },
  {
    term: 'Logit',
    korean: '로짓',
    category: '함수',
    aliases: ['logit'],
    description:
      'Log odds. Logistic Regression에서는 log(P(C1) / P(C0))를 선형 점수 w^T x로 모델링한다.',
    sessionIds: ['01'],
  },
  {
    term: 'Sigmoid',
    korean: '시그모이드',
    category: '함수',
    aliases: ['sigmoid'],
    description:
      '임의의 실수값을 0과 1 사이 값으로 변환하는 함수. Binary classification에서 확률처럼 해석할 수 있다.',
    sessionIds: ['01'],
  },
  {
    term: 'Decision Boundary',
    korean: '결정 경계',
    category: '개념',
    description:
      '모델이 class를 나누는 경계. Logistic Regression에서는 보통 sigmoid(z)가 0.5가 되는 지점과 연결된다.',
    sessionIds: ['01'],
  },
  {
    term: 'Representation Learning',
    korean: '표현 학습',
    category: '개념',
    aliases: ['representation learning'],
    description:
      '모델이 입력 데이터를 task에 유용한 내부 표현으로 바꾸는 방법을 학습하는 접근.',
    sessionIds: ['01'],
  },
  {
    term: 'Deep Neural Network',
    korean: '심층 신경망',
    category: '모델',
    aliases: ['DNN', 'deep neural network'],
    description:
      '여러 hidden layer를 통해 입력을 단계적으로 변환하는 신경망. DNN이라고 줄여 부른다.',
    sessionIds: ['01'],
  },
  {
    term: 'Hidden Layer',
    korean: '은닉층',
    category: '핵심 요소',
    aliases: ['hidden layer'],
    description:
      '입력층과 출력층 사이에 있는 layer. 입력을 더 유용한 representation으로 바꾸는 역할을 한다.',
    sessionIds: ['01'],
  },
  {
    term: 'Activation Function',
    korean: '활성화 함수',
    category: '함수',
    description:
      'Layer의 선형 계산 뒤에 적용해 비선형성을 부여하는 함수. 신경망이 복잡한 패턴을 표현하게 만든다.',
    sessionIds: ['01'],
  },
  {
    term: 'Loss',
    korean: '손실',
    category: '핵심 요소',
    aliases: ['loss'],
    description:
      '모델 예측과 실제 정답의 차이를 수치화한 값. 학습은 이 값을 줄이는 방향으로 진행된다.',
    sessionIds: ['01'],
  },
  {
    term: 'Gradient',
    korean: '기울기',
    category: '핵심 요소',
    aliases: ['gradient'],
    description:
      'Loss를 줄이기 위해 parameter를 어느 방향으로 얼마나 조정해야 하는지 알려주는 값.',
    sessionIds: ['01'],
  },
  {
    term: 'Gradient Descent',
    korean: '경사하강법',
    category: '학습 과정',
    description:
      'Loss가 줄어드는 방향으로 parameter를 조금씩 업데이트하는 최적화 방법.',
    sessionIds: ['01'],
  },
  {
    term: 'Local Minimum',
    korean: '국소 최솟값',
    category: '개념',
    description:
      '주변보다 loss가 낮지만 전체에서 가장 낮은 지점은 아닐 수 있는 위치. 복잡한 loss landscape에서 등장한다.',
    sessionIds: ['01'],
  },
  {
    term: 'Training',
    korean: '학습',
    category: '학습 과정',
    description:
      '학습 데이터를 이용해 parameter를 업데이트하는 과정.',
    sessionIds: ['01'],
  },
  {
    term: 'Inference',
    korean: '추론',
    category: '학습 과정',
    description:
      '학습된 parameter를 사용해 새 입력에 대한 결과를 계산하는 과정.',
    sessionIds: ['01'],
  },
  {
    term: 'CNN',
    korean: '합성곱 신경망',
    category: '모델',
    aliases: ['convolutional neural network'],
    description:
      '이미지처럼 주변 구조가 중요한 데이터에서 local pattern을 찾는 데 강한 신경망 구조.',
    sessionIds: ['01'],
  },
  {
    term: 'Filter',
    korean: '필터',
    category: '핵심 요소',
    description:
      '이미지의 local pattern을 감지하기 위해 사용하는 작은 가중치 묶음. CNN에서는 데이터를 통해 학습된다.',
    sessionIds: ['01'],
  },
  {
    term: 'Convolution',
    korean: '합성곱',
    category: '기법',
    description:
      '필터를 입력 위로 움직이며 local pattern을 계산하는 연산. CNN의 핵심 연산이다.',
    sessionIds: ['01'],
  },
  {
    term: 'RNN',
    korean: '순환 신경망',
    category: '모델',
    aliases: ['recurrent neural network'],
    description:
      '순서가 있는 데이터를 처리하기 위해 이전 상태를 다음 계산에 반영하는 신경망 구조.',
    sessionIds: ['01', '02'],
  },
  {
    term: 'Language Model',
    korean: '언어 모델',
    category: '모델',
    aliases: ['language model'],
    description:
      'token sequence의 확률을 모델링하는 모델. 2차시에서는 BERT와 GPT 같은 LLM 구조로 확장해 다룬다.',
    sessionIds: ['01', '02'],
  },
  {
    term: 'Token',
    korean: '토큰',
    category: '핵심 요소',
    aliases: ['token'],
    description:
      '언어 모델이 처리하는 텍스트 단위. 단어 하나와 항상 일치하지 않으며 subword 단위로 나뉠 수 있다.',
    sessionIds: ['02'],
  },
  {
    term: 'Embedding',
    korean: '임베딩',
    category: '핵심 요소',
    aliases: ['embedding'],
    description:
      'token을 모델이 계산할 수 있는 vector representation으로 바꾸는 표현.',
    sessionIds: ['02', '03'],
  },
  {
    term: 'Prompt',
    korean: '프롬프트',
    category: '핵심 요소',
    aliases: ['prompt'],
    description:
      'LLM이 어떤 맥락에서 어떤 출력을 생성할지 결정하는 입력 문맥.',
    sessionIds: ['02'],
  },
  {
    term: 'Transformer',
    korean: '트랜스포머',
    category: '아키텍처',
    aliases: ['transformer'],
    description:
      'Self-attention을 중심으로 token 간 관계를 계산하는 시퀀스 모델 구조. 현대 LLM의 핵심 기반이다.',
    sessionIds: ['02'],
  },
  {
    term: 'BERT',
    korean: '버트',
    category: '모델',
    aliases: ['bert'],
    description:
      'Encoder-only Transformer 기반 language understanding model. 문맥이 반영된 token representation을 만들어 분류, QA, NLI, 감성 분석 같은 이해 task에 사용한다.',
    sessionIds: ['02'],
  },
  {
    term: 'GPT',
    korean: '생성형 사전학습 트랜스포머',
    category: '모델',
    aliases: ['gpt'],
    description:
      'Decoder-only Transformer 기반 모델. 이전 token들을 조건으로 다음 token을 예측하는 autoregressive 방식으로 학습한다.',
    sessionIds: ['02'],
  },
  {
    term: 'Self-Attention',
    korean: '셀프 어텐션',
    category: '아키텍처',
    aliases: ['self-attention'],
    description:
      '한 sequence 안의 token들이 서로를 참조해 관계를 계산하는 구조.',
    sessionIds: ['02'],
  },
  {
    term: 'Masked Self-Attention',
    korean: '마스크드 셀프 어텐션',
    category: '아키텍처',
    aliases: ['masked self-attention'],
    description:
      '현재 token이 미래 token을 보지 못하도록 가린 self-attention. GPT류 autoregressive model에서 사용된다.',
    sessionIds: ['02'],
  },
  {
    term: 'Autoregressive Model',
    korean: '자기회귀 모델',
    category: '모델',
    aliases: ['autoregressive model'],
    description:
      '이전 출력을 조건으로 다음 출력을 순차적으로 예측하는 모델.',
    sessionIds: ['02'],
  },
  {
    term: 'Autoregressive Generation',
    korean: '자기회귀 생성',
    category: '기법',
    aliases: ['autoregressive generation'],
    description:
      '이전 token들을 조건으로 다음 token을 하나씩 생성하는 방식. GPT류 모델의 decoding 과정과 연결된다.',
    sessionIds: ['02'],
  },
  {
    term: 'Next Token Prediction',
    korean: '다음 토큰 예측',
    category: '태스크',
    aliases: ['next token prediction'],
    description:
      '이전 token들을 보고 다음 token의 확률분포를 맞히는 language model 학습 task.',
    sessionIds: ['02'],
  },
  {
    term: 'Cross Entropy',
    korean: '교차 엔트로피',
    category: '학습 과정',
    aliases: ['cross entropy'],
    description:
      '분류 또는 다음 token 예측에서 예측 분포와 정답 분포의 차이를 측정하는 대표 loss.',
    sessionIds: ['02'],
  },
  {
    term: 'Prefill',
    korean: '프리필',
    category: '학습 과정',
    aliases: ['prefill'],
    description:
      'GPT류 모델에서 사용자의 prompt를 먼저 처리해 이후 token 생성을 위한 cache를 준비하는 단계.',
    sessionIds: ['02'],
  },
  {
    term: 'Decoding',
    korean: '디코딩',
    category: '학습 과정',
    aliases: ['decoding'],
    description:
      '이전 token들을 조건으로 다음 token을 하나씩 생성하는 단계.',
    sessionIds: ['02'],
  },
  {
    term: 'KV Cache',
    korean: '키-값 캐시',
    category: '핵심 요소',
    aliases: ['KV cache', 'kv cache'],
    description:
      'Transformer 추론에서 이전 token의 key/value를 저장해 반복 계산을 줄이는 기법.',
    sessionIds: ['02'],
  },
  {
    term: 'In-context Learning',
    korean: '문맥 내 학습',
    category: '기법',
    aliases: ['in-context learning'],
    description:
      'prompt 안의 예시와 문맥을 보고 별도 parameter 업데이트 없이 문제 의도나 latent concept을 추정해 답하는 방식.',
    sessionIds: ['02'],
  },
  {
    term: 'Chain-of-thought',
    korean: '사고 과정',
    category: '기법',
    aliases: ['chain-of-thought', 'CoT'],
    description:
      '모델이 바로 답을 내기보다 중간 추론 단계를 거치게 하는 prompting 또는 추론 방식.',
    sessionIds: ['02'],
  },
  {
    term: 'Hallucination',
    korean: '환각',
    category: '개념',
    aliases: ['hallucination'],
    description:
      '언어 모델이 자연스럽지만 사실과 다른 내용을 생성하는 현상.',
    sessionIds: ['02'],
  },
  {
    term: 'AI Infrastructure',
    korean: 'AI 인프라',
    category: '개념',
    aliases: ['AI infrastructure'],
    description:
      'LLM 서비스를 운영하기 위해 필요한 GPU, CPU, 메모리, 네트워크, 서버 랙, 데이터센터, latency 최적화까지 포함하는 실행 기반.',
    sessionIds: ['02'],
  },
  {
    term: 'State-Space Model',
    korean: '상태공간모델',
    category: '아키텍처',
    aliases: ['state-space model', 'SSM'],
    description:
      '시퀀스 데이터를 상태 전이 관점에서 모델링하는 구조. Transformer의 긴 sequence 비용 문제를 보완하려는 대안 계열 중 하나다.',
    sessionIds: ['02'],
  },
  {
    term: 'Gated DeltaNet',
    korean: '게이트드 델타넷',
    category: '아키텍처',
    aliases: ['gated deltanet'],
    description:
      '긴 token 의존성과 효율성을 다루기 위한 sequence modeling 구조. Qwen3-Next에서는 masked self-attention과 함께 사용되는 것으로 소개된다.',
    sessionIds: ['02'],
  },
  {
    term: 'Qwen3-Next',
    korean: 'Qwen3-Next',
    category: '모델',
    aliases: ['qwen3-next'],
    description:
      '강의자료 기준 Gated DeltaNet과 masked self-attention을 3:1 비율로 섞는 hybrid architecture. 긴 문맥 효율성과 정밀한 token interaction의 균형을 노린다.',
    sessionIds: ['02'],
  },
  {
    term: 'Hybrid Architecture',
    korean: '하이브리드 아키텍처',
    category: '아키텍처',
    aliases: ['hybrid architecture'],
    description:
      '하나의 모델 안에서 서로 다른 장점을 가진 구조를 섞는 접근. Qwen3-Next에서는 효율적인 sequence module과 attention을 혼합하는 방향으로 볼 수 있다.',
    sessionIds: ['02'],
  },
  {
    term: 'Discrete Diffusion Language Model',
    korean: '이산 확산 언어 모델',
    category: '모델',
    aliases: ['discrete diffusion language model', 'D3PM'],
    description:
      '연속 이미지 확산 모델의 관점을 token sequence 같은 이산 데이터 생성 문제로 확장하려는 언어 모델 계열. BERT식 mask 복원 관점과도 연결해 볼 수 있다.',
    sessionIds: ['02'],
  },
  {
    term: 'Scientific Foundation Model',
    korean: '과학 파운데이션 모델',
    category: '모델',
    aliases: ['scientific foundation model', 'SFM'],
    description:
      'LLM의 foundation model 개념을 과학·공학 문제에 적용하려는 흐름. PDE 해, 시뮬레이션, 관측 데이터 등을 바탕으로 forward/inverse problem을 다루려 한다.',
    sessionIds: ['02'],
  },
  {
    term: 'Graph',
    korean: '그래프',
    category: '개념',
    aliases: ['graph'],
    description:
      '개체를 node로, 개체 간 관계를 edge로 표현하는 데이터 구조.',
    sessionIds: ['03'],
  },
  {
    term: 'Node',
    korean: '노드',
    category: '핵심 요소',
    aliases: ['node'],
    description:
      '그래프에서 개체를 나타내는 단위. 사람, 장소, 상품, 문서, 매장 등이 node가 될 수 있다.',
    sessionIds: ['03'],
  },
  {
    term: 'Edge',
    korean: '엣지',
    category: '핵심 요소',
    aliases: ['edge'],
    description:
      '그래프에서 node와 node 사이의 연결 또는 관계를 나타내는 단위.',
    sessionIds: ['03'],
  },
  {
    term: 'Relation',
    korean: '관계 타입',
    category: '핵심 요소',
    aliases: ['relation'],
    description:
      'Edge가 어떤 의미의 연결인지 나타내는 타입. purchased, visited, connected_to 같은 관계명이 될 수 있다.',
    sessionIds: ['03'],
  },
  {
    term: 'Knowledge Graph',
    korean: '지식 그래프',
    category: '개념',
    aliases: ['knowledge graph', 'KG'],
    description:
      '사람의 지식을 entity와 relation의 graph로 표현한 구조. 질문 응답, 검색, 추천, reasoning에 활용된다.',
    sessionIds: ['03'],
  },
  {
    term: 'Ontology',
    korean: '온톨로지',
    category: '개념',
    aliases: ['ontology'],
    description:
      '도메인에서 어떤 entity, relation, rule을 둘 것인지 정의하는 구조. Knowledge Graph를 설계할 때 기반이 될 수 있다.',
    sessionIds: ['03'],
  },
  {
    term: 'Triplet',
    korean: '트리플렛',
    category: '핵심 요소',
    aliases: ['triple', 'triplet'],
    description:
      'Knowledge Graph에서 하나의 fact를 head entity, relation, tail entity의 세 요소로 표현한 단위.',
    sessionIds: ['03'],
  },
  {
    term: 'Knowledge Graph Completion',
    korean: '지식 그래프 완성',
    category: '태스크',
    aliases: ['knowledge graph completion', 'KG completion'],
    description:
      '이미 있는 entity와 relation을 바탕으로 graph에 빠진 head, relation, tail을 예측하는 task.',
    sessionIds: ['03'],
  },
  {
    term: 'Graph Embedding',
    korean: '그래프 임베딩',
    category: '기법',
    aliases: ['graph embedding'],
    description:
      'Graph의 구조 정보를 보존하면서 node, edge, subgraph, whole graph를 vector representation으로 변환하는 방법.',
    sessionIds: ['03'],
  },
  {
    term: 'Node Embedding',
    korean: '노드 임베딩',
    category: '기법',
    aliases: ['node embedding'],
    description:
      '각 node를 vector로 표현하는 방법. 비슷한 node가 embedding space에서도 가까워지도록 학습한다.',
    sessionIds: ['03'],
  },
  {
    term: 'Edge Embedding',
    korean: '엣지 임베딩',
    category: '기법',
    aliases: ['edge embedding'],
    description:
      'Node 사이의 연결 또는 relation 자체를 vector representation으로 표현하는 방법.',
    sessionIds: ['03'],
  },
  {
    term: 'Subgraph Embedding',
    korean: '부분 그래프 임베딩',
    category: '기법',
    aliases: ['subgraph embedding'],
    description:
      'Graph의 일부 구조를 하나의 vector representation으로 표현하는 방법.',
    sessionIds: ['03'],
  },
  {
    term: 'Whole-Graph Embedding',
    korean: '전체 그래프 임베딩',
    category: '기법',
    aliases: ['whole-graph embedding', 'whole graph embedding'],
    description:
      'Graph 전체를 하나의 vector representation으로 표현하는 방법.',
    sessionIds: ['03'],
  },
  {
    term: 'Graph Representation Learning',
    korean: '그래프 표현 학습',
    category: '기법',
    aliases: ['graph representation learning'],
    description:
      'Graph의 node, edge, relation, structure 정보를 downstream task에 유용한 representation으로 학습하는 접근.',
    sessionIds: ['03'],
  },
  {
    term: 'Graph Mining',
    korean: '그래프 마이닝',
    category: '기법',
    aliases: ['graph mining'],
    description:
      'Graph에서 community, cluster, pattern, anomaly 같은 구조적 신호를 찾는 데이터 마이닝 접근.',
    sessionIds: ['03'],
  },
  {
    term: 'Graph Neural Network',
    korean: '그래프 신경망',
    category: '모델',
    aliases: ['GNN', 'graph neural network'],
    description:
      'Graph 위에서 동작하는 neural network. Node가 neighbor 정보를 모아 자신의 representation을 업데이트한다.',
    sessionIds: ['03'],
  },
  {
    term: 'Graph Convolutional Network',
    korean: '그래프 합성곱 신경망',
    category: '모델',
    aliases: ['GCN', 'graph convolutional network'],
    description:
      'Graph 구조에서 neighbor 정보를 집계해 node representation을 업데이트하는 GNN 계열 모델.',
    sessionIds: ['03'],
  },
  {
    term: 'Message Passing',
    korean: '메시지 패싱',
    category: '기법',
    aliases: ['message passing'],
    description:
      'GNN에서 node들이 edge를 따라 서로 정보를 주고받는 과정.',
    sessionIds: ['03'],
  },
  {
    term: 'Neighborhood Aggregation',
    korean: '이웃 집계',
    category: '기법',
    aliases: ['neighborhood aggregation'],
    description:
      'Target node 주변 neighbor들의 정보를 모아 node representation을 업데이트하는 과정.',
    sessionIds: ['03'],
  },
  {
    term: 'Computation Graph',
    korean: '계산 그래프',
    category: '개념',
    aliases: ['computation graph'],
    description:
      'Target node의 representation을 계산하기 위해 필요한 neighbor와 연산 의존 관계를 펼쳐 놓은 구조.',
    sessionIds: ['03'],
  },
  {
    term: 'k-hop Neighbor',
    korean: 'k-hop 이웃',
    category: '개념',
    aliases: ['k-hop neighbor', 'k-hop'],
    description:
      'Graph에서 k개의 edge를 거쳐 도달할 수 있는 node.',
    sessionIds: ['03'],
  },
  {
    term: 'Node Classification',
    korean: '노드 분류',
    category: '태스크',
    aliases: ['node classification'],
    description:
      'Graph 안의 개별 node가 어떤 class에 속하는지 예측하는 task.',
    sessionIds: ['03'],
  },
  {
    term: 'Link Prediction',
    korean: '링크 예측',
    category: '태스크',
    aliases: ['link prediction'],
    description:
      '두 node 사이에 edge가 존재할 가능성이나 relation을 예측하는 task.',
    sessionIds: ['03'],
  },
  {
    term: 'Graph Classification',
    korean: '그래프 분류',
    category: '태스크',
    aliases: ['graph classification'],
    description:
      'Graph 전체가 어떤 class에 속하는지 예측하는 task.',
    sessionIds: ['03'],
  },
  {
    term: 'Fraud Detection',
    korean: '사기 탐지',
    category: '태스크',
    aliases: ['fraud detection'],
    description:
      '리뷰, 거래, 계정, 보험 청구 건 사이의 관계 패턴을 이용해 정상과 이상 또는 사기를 구분하는 task.',
    sessionIds: ['03'],
  },
  {
    term: 'Spatio-Temporal Graph',
    korean: '시공간 그래프',
    category: '개념',
    aliases: ['spatio-temporal graph', 'STG'],
    description:
      '공간적 연결과 시간에 따른 변화를 함께 표현하는 graph. 교통, 날씨, 센서 예측 같은 문제에 활용된다.',
    sessionIds: ['03'],
  },
  {
    term: 'Homophily',
    korean: '동질성',
    category: '개념',
    aliases: ['homophily'],
    description:
      'Graph에서 서로 연결된 node들이 비슷한 속성이나 label을 갖는 경향.',
    sessionIds: ['03'],
  },
  {
    term: 'Heterophily',
    korean: '이질성',
    category: '개념',
    aliases: ['heterophily'],
    description:
      'Graph에서 서로 연결된 node들이 서로 다른 속성이나 label을 갖는 경향.',
    sessionIds: ['03'],
  },
];
