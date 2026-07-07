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
    sessionIds: ['01', '06-1', '06-2'],
  },
  {
    term: 'Machine Learning',
    korean: '기계학습',
    category: '개념',
    description:
      '사람이 규칙을 직접 작성하는 대신, 데이터로부터 원하는 task를 수행하는 함수를 학습하는 방식.',
    sessionIds: ['01', '06-1', '06-2'],
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
    sessionIds: ['01', '06-1', '06-2'],
  },
  {
    term: 'Feature Engineering',
    korean: '특징 설계',
    category: '기법',
    aliases: ['feature engineering'],
    description:
      '원본 데이터에서 문제 해결에 도움이 되는 새로운 입력값을 설계하거나 계산하는 작업.',
    sessionIds: ['01', '06-1', '06-2'],
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
    sessionIds: ['02', '06-2'],
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
    sessionIds: ['03', '04'],
  },
  {
    term: 'Ontology',
    korean: '온톨로지',
    category: '개념',
    aliases: ['ontology'],
    description:
      '도메인에서 어떤 entity, relation, rule을 둘 것인지 정의하는 구조. Knowledge Graph를 설계할 때 기반이 될 수 있다.',
    sessionIds: ['03', '04'],
  },
  {
    term: 'Triplet',
    korean: '트리플렛',
    category: '핵심 요소',
    aliases: ['triple', 'triplet'],
    description:
      'Knowledge Graph에서 하나의 fact를 head entity, relation, tail entity의 세 요소로 표현한 단위.',
    sessionIds: ['03', '04'],
  },
  {
    term: 'Knowledge Graph Completion',
    korean: '지식 그래프 완성',
    category: '태스크',
    aliases: ['knowledge graph completion', 'KG completion'],
    description:
      '이미 있는 entity와 relation을 바탕으로 graph에 빠진 head, relation, tail을 예측하는 task.',
    sessionIds: ['03', '04'],
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
    sessionIds: ['03', '04'],
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
    sessionIds: ['03', '06-2'],
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
  {
    term: 'Knowledge Graph Embedding',
    korean: '지식 그래프 임베딩',
    category: '기법',
    aliases: ['KGE', 'knowledge graph embedding'],
    description:
      'Knowledge Graph의 entity와 relation을 vector representation으로 바꿔 구조와 관계 의미를 계산 가능한 공간에 옮기는 기법.',
    sessionIds: ['04'],
  },
  {
    term: 'Sparse Graph',
    korean: '희소 그래프',
    category: '개념',
    aliases: ['sparse graph', 'sparse'],
    description:
      '가능한 연결 조합에 비해 실제 관찰되거나 기록된 edge가 적은 graph. Knowledge Graph는 대개 sparse하다.',
    sessionIds: ['04'],
  },
  {
    term: 'Entity Embedding',
    korean: '엔티티 임베딩',
    category: '기법',
    aliases: ['entity embedding'],
    description:
      'Knowledge Graph의 entity를 vector representation으로 표현한 값.',
    sessionIds: ['04'],
  },
  {
    term: 'Relation Embedding',
    korean: '관계 임베딩',
    category: '기법',
    aliases: ['relation embedding'],
    description:
      'Knowledge Graph의 relation type을 vector, matrix, complex value 등 계산 가능한 representation으로 표현한 값.',
    sessionIds: ['04'],
  },
  {
    term: 'Scoring Function',
    korean: '스코어링 함수',
    category: '기법',
    aliases: ['scoring function', 'score function'],
    description:
      'Triplet이 그럴듯한 fact인지 점수로 계산하는 함수. Positive triplet은 높은 score, negative triplet은 낮은 score가 되도록 학습한다.',
    sessionIds: ['04'],
  },
  {
    term: 'Translational Distance Model',
    korean: '거리 기반 변환 모델',
    category: '모델',
    aliases: ['translational distance model', 'distance model'],
    description:
      'Head entity와 relation의 embedding을 더하거나 변환했을 때 tail entity embedding과 가까워지도록 학습하는 Knowledge Graph Embedding 계열.',
    sessionIds: ['04'],
  },
  {
    term: 'TransE',
    korean: 'TransE',
    category: '모델',
    aliases: ['transe'],
    description:
      '대표적인 translational distance model. h + r이 t와 가까워지는 방향으로 entity와 relation embedding을 학습한다.',
    sessionIds: ['04'],
  },
  {
    term: 'Semantic Matching Model',
    korean: '의미 매칭 모델',
    category: '모델',
    aliases: ['semantic matching model', 'matching model'],
    description:
      'Head, relation, tail 사이의 compatibility 또는 similarity를 높이는 방향으로 fact plausibility를 계산하는 Knowledge Graph Embedding 계열.',
    sessionIds: ['04'],
  },
  {
    term: 'RESCAL',
    korean: 'RESCAL',
    category: '모델',
    aliases: ['rescal'],
    description:
      'Relation을 matrix로 보고 head와 tail embedding 사이의 상호작용을 계산하는 semantic matching 계열 KGE 모델.',
    sessionIds: ['04'],
  },
  {
    term: 'DistMult',
    korean: 'DistMult',
    category: '모델',
    aliases: ['distmult'],
    description:
      'RESCAL의 상호작용을 단순화한 semantic matching 계열 KGE 모델. 같은 차원끼리의 곱을 중심으로 score를 계산한다.',
    sessionIds: ['04'],
  },
  {
    term: 'ComplEx',
    korean: 'ComplEx',
    category: '모델',
    aliases: ['complex'],
    description:
      'Embedding을 complex space로 확장해 relation pattern을 표현하려는 Knowledge Graph Embedding 모델.',
    sessionIds: ['04'],
  },
  {
    term: 'Mean Rank',
    korean: '평균 순위',
    category: '태스크',
    aliases: ['mean rank', 'MR'],
    description:
      'Link Prediction에서 정답 후보가 ranking에서 평균 몇 등인지 측정하는 metric. 낮을수록 좋다.',
    sessionIds: ['04'],
  },
  {
    term: 'MRR',
    korean: '평균 역순위',
    category: '태스크',
    aliases: ['mean reciprocal rank'],
    description:
      'Mean Reciprocal Rank. 정답 순위 역수의 평균으로, 정답이 ranking 상위권에 있을수록 높아진다.',
    sessionIds: ['04'],
  },
  {
    term: 'Hits@K',
    korean: 'Hits@K',
    category: '태스크',
    aliases: ['hits@k', 'hits at k', 'Hits@10', 'Hits@1'],
    description:
      '정답 후보가 ranking 상위 K개 안에 포함되는 비율. 검색이나 추천처럼 상위 결과가 중요한 문제에서 자주 본다.',
    sessionIds: ['04'],
  },
  {
    term: 'Hyper-relational Knowledge Graph',
    korean: '초관계형 지식 그래프',
    category: '개념',
    aliases: ['hyper-relational knowledge graph', 'hyper-relational KG'],
    description:
      'Main triplet에 qualifier를 붙여 연도, 수상자, 수치 같은 부가 정보를 표현하는 Knowledge Graph.',
    sessionIds: ['04'],
  },
  {
    term: 'Qualifier',
    korean: '한정자',
    category: '핵심 요소',
    aliases: ['qualifier'],
    description:
      'Hyper-relational Knowledge Graph에서 main triplet에 붙는 부가 정보. 연도, 출처, 수상자, 수치 등이 qualifier가 될 수 있다.',
    sessionIds: ['04'],
  },
  {
    term: 'Numerical Knowledge Graph',
    korean: '수치형 지식 그래프',
    category: '개념',
    aliases: ['numerical knowledge graph', 'numerical KG'],
    description:
      'Entity와 relation에 수치 속성이나 측정값을 함께 표현하는 Knowledge Graph.',
    sessionIds: ['04'],
  },
  {
    term: 'Multimodal Knowledge Graph',
    korean: '멀티모달 지식 그래프',
    category: '개념',
    aliases: ['multimodal knowledge graph', 'multimodal KG'],
    description:
      'Graph structure와 함께 image, text, numerical feature 같은 여러 modality를 다루는 Knowledge Graph.',
    sessionIds: ['04'],
  },
  {
    term: 'Temporal Knowledge Graph',
    korean: '시계열 지식 그래프',
    category: '개념',
    aliases: ['temporal knowledge graph', 'temporal KG'],
    description:
      '시간에 따라 바뀌는 fact와 relation을 표현하는 Knowledge Graph.',
    sessionIds: ['04'],
  },
  {
    term: 'Inductive Reasoning',
    korean: '귀납적 추론',
    category: '기법',
    aliases: ['inductive reasoning', 'inductive inference', 'inductive learning'],
    description:
      'Training time에 보지 못한 새로운 entity나 relation이 inference time에 들어와도 구조 정보를 이용해 추론하는 설정.',
    sessionIds: ['04'],
  },
  {
    term: 'Transductive Reasoning',
    korean: '전이적 추론 설정',
    category: '기법',
    aliases: ['transductive reasoning', 'transductive inference'],
    description:
      'Training time에 보았던 entity와 relation 집합 안에서 빠진 link나 label을 예측하는 설정.',
    sessionIds: ['04'],
  },
  {
    term: 'Relation Graph',
    korean: '관계 그래프',
    category: '개념',
    aliases: ['relation graph'],
    description:
      'Relation을 node로 보고 relation 사이의 구조적 유사성을 edge로 표현한 graph. 새로운 relation embedding에 활용될 수 있다.',
    sessionIds: ['04'],
  },
  {
    term: 'Knowledge Graph Construction',
    korean: '지식 그래프 구축',
    category: '기법',
    aliases: ['KG construction', 'knowledge graph construction'],
    description:
      'Text나 raw data에서 entity와 relation을 추출하고, 정규화와 검증을 거쳐 Knowledge Graph를 만드는 과정.',
    sessionIds: ['04'],
  },
  {
    term: 'Entity Extraction',
    korean: '엔티티 추출',
    category: '기법',
    aliases: ['entity extraction', 'named entity recognition', 'NER'],
    description:
      '문서에서 사람, 장소, 조직, 제품처럼 graph의 entity 후보가 될 표현을 찾는 과정.',
    sessionIds: ['04'],
  },
  {
    term: 'Entity Canonicalization',
    korean: '엔티티 정규화',
    category: '기법',
    aliases: ['entity canonicalization', 'canonicalization'],
    description:
      '같은 대상을 가리키는 여러 표현을 하나의 canonical entity로 묶는 과정.',
    sessionIds: ['04'],
  },
  {
    term: 'Relation Extraction',
    korean: '관계 추출',
    category: '기법',
    aliases: ['relation extraction'],
    description:
      'Entity 사이에 어떤 relation이 있는지 text나 structured data에서 추출하는 과정.',
    sessionIds: ['04'],
  },
  {
    term: 'GraphRAG',
    korean: '그래프 검색 증강 생성',
    category: '기법',
    aliases: ['graph rag', 'Graph RAG'],
    description:
      'RAG에서 retrieval 대상을 text chunk뿐 아니라 Knowledge Graph의 node, edge, triplet, path, subgraph로 확장하는 접근.',
    sessionIds: ['04'],
  },
  {
    term: 'Retrieval-Augmented Generation',
    korean: '검색 증강 생성',
    category: '기법',
    aliases: ['RAG', 'retrieval augmented generation'],
    description:
      'LLM이 답변을 생성할 때 외부 문서나 지식을 검색해 context로 함께 제공하는 방식.',
    sessionIds: ['04'],
  },
  {
    term: 'Subgraph Retrieval',
    korean: '부분 그래프 검색',
    category: '기법',
    aliases: ['subgraph retrieval'],
    description:
      '질문과 관련된 node, edge, path, triplet을 포함하는 부분 graph를 찾아 LLM 또는 downstream task에 제공하는 과정.',
    sessionIds: ['04'],
  },
  {
    term: 'Graph Database',
    korean: '그래프 데이터베이스',
    category: '개념',
    aliases: ['graph database', 'graph DB'],
    description:
      'Node와 edge 중심으로 데이터를 저장하고 탐색하기 위한 데이터베이스. Knowledge Graph 운영과 업데이트에 활용될 수 있다.',
    sessionIds: ['04'],
  },
  {
    term: 'Data Governance',
    korean: '데이터 거버넌스',
    category: '개념',
    aliases: ['data governance'],
    description:
      '데이터의 보안, 품질, 접근 권한, 최신성, 책임 범위를 관리하는 원칙과 운영 체계.',
    sessionIds: ['04', '06-1', '06-2'],
  },
  {
    term: 'Mobility Big Data',
    korean: '모빌리티 빅데이터',
    category: '개념',
    aliases: ['mobility data', 'mobility big data'],
    description:
      '사람, 차량, 항공기, 센서가 남기는 대규모 이동경로 데이터. 위치, 시간, 속도, 체류, 교통수단 같은 맥락이 함께 붙는다.',
    sessionIds: ['06-1'],
  },
  {
    term: 'Trajectory',
    korean: '이동경로',
    category: '핵심 요소',
    aliases: ['trajectory', 'movement path'],
    description:
      '시간 순서대로 연결된 위치 기록. 이동 주체가 언제 어디에 있었는지를 sequence로 표현한다.',
    sessionIds: ['06-1', '06-2'],
  },
  {
    term: 'Smart Card Data',
    korean: '교통카드 데이터',
    category: '핵심 요소',
    aliases: ['smart card data'],
    description:
      '대중교통 승차와 하차 기록으로 구성된 mobility data. 시간대별 위치 추정과 이동 규칙성 분석에 활용된다.',
    sessionIds: ['06-1'],
  },
  {
    term: 'Location Inference',
    korean: '위치 추정',
    category: '기법',
    aliases: ['location inference', 'location imputation'],
    description:
      '직접 관측되지 않은 시간대의 위치를 주변 관측값, 거리, 이동 규칙으로 추정하는 과정.',
    sessionIds: ['06-1'],
  },
  {
    term: 'Unknown Segment',
    korean: '미확정 위치 구간',
    category: '핵심 요소',
    aliases: ['unknown segment', 'missing location segment'],
    description:
      '위치를 충분히 추정할 근거가 없어 명시적으로 모름으로 남겨 두는 시간 구간. 무리한 보간보다 안전한 선택일 수 있다.',
    sessionIds: ['06-1'],
  },
  {
    term: 'Mobility Regularity',
    korean: '이동 규칙성',
    category: '개념',
    aliases: ['mobility regularity'],
    description:
      '같은 시간대에 가장 자주 방문한 장소의 횟수를 전체 방문 횟수로 나누는 방식 등으로 보는 반복 이동 패턴 지표.',
    sessionIds: ['06-1'],
  },
  {
    term: 'In-store Trajectory',
    korean: '매장 실내 동선',
    category: '핵심 요소',
    aliases: ['in-store trajectory', 'indoor trajectory'],
    description:
      'WiFi나 Beacon 기반 센서로 매장 안에서 어느 구역에 얼마나 머무는지 기록한 이동 데이터.',
    sessionIds: ['06-1'],
  },
  {
    term: 'Dwell Time',
    korean: '체류 시간',
    category: '핵심 요소',
    aliases: ['dwell time'],
    description:
      '고객이나 이동 주체가 특정 구역에 머문 시간. 실내 동선 분석에서 관심도와 행동 패턴을 추정하는 feature가 된다.',
    sessionIds: ['06-1'],
  },
  {
    term: 'Zone Ratio',
    korean: '구역별 체류 비율',
    category: '핵심 요소',
    aliases: ['zone ratio'],
    description:
      '전체 체류 시간 중 특정 구역에서 머문 시간이 차지하는 비율. 구역별 관심도를 나타내는 feature로 쓸 수 있다.',
    sessionIds: ['06-1'],
  },
  {
    term: 'Revisit Prediction',
    korean: '재방문 예측',
    category: '태스크',
    aliases: ['revisit prediction'],
    description:
      '현재까지의 방문 기록과 동선 feature를 이용해 고객이 향후 다시 방문할지 예측하는 task.',
    sessionIds: ['06-1'],
  },
  {
    term: 'Observation Window',
    korean: '관측 기간',
    category: '핵심 요소',
    aliases: ['observation window'],
    description:
      '예측 시점까지 모델 입력으로 사용하는 과거 또는 현재 기간. 재방문 예측에서는 이 기간의 동선과 방문 이력을 feature로 만든다.',
    sessionIds: ['06-1'],
  },
  {
    term: 'Prediction Window',
    korean: '예측 확인 기간',
    category: '핵심 요소',
    aliases: ['prediction window'],
    description:
      '모델이 예측한 결과가 실제로 일어났는지 확인하는 미래 기간. 재방문 여부 같은 label을 만들 때 사용한다.',
    sessionIds: ['06-1'],
  },
  {
    term: 'Spatial Stream Processing',
    korean: '공간 스트림 처리',
    category: '기법',
    aliases: ['spatial stream processing'],
    description:
      '빠르게 들어오는 위치 stream에서 특정 규칙이나 공간 조건에 맞는 이벤트를 탐지하는 처리 방식.',
    sessionIds: ['06-1'],
  },
  {
    term: 'Complex Event Processing',
    korean: '복합 이벤트 처리',
    category: '기법',
    aliases: ['CEP', 'complex event processing'],
    description:
      '여러 stream event와 규칙을 조합해 의미 있는 상황을 감지하는 기법. 공간 stream과 함께 쓰일 수 있다.',
    sessionIds: ['06-1'],
  },
  {
    term: 'Digital Tachograph',
    korean: '디지털 운행기록계',
    category: '핵심 요소',
    aliases: ['DTG', 'digital tacho graph'],
    description:
      '버스, 택시, 화물차 같은 사업용 차량의 운행 기록을 남기는 장치와 데이터 원천.',
    sessionIds: ['06-1'],
  },
  {
    term: 'Tactical Trajectory',
    korean: '전술 항적',
    category: '핵심 요소',
    aliases: ['tactical trajectory', 'flight track'],
    description:
      '항공기나 추적 대상의 시간 순서 위치 기록. 위험 예측에서는 지형, 기상 같은 context와 함께 해석한다.',
    sessionIds: ['06-1'],
  },
  {
    term: 'Latent Space',
    korean: '잠재공간',
    category: '개념',
    aliases: ['latent space'],
    description:
      '모델이 입력 데이터를 내부적으로 표현하는 공간. 정상 패턴과 이상 패턴의 거리나 확률 차이를 해석하는 데 쓰일 수 있다.',
    sessionIds: ['06-1'],
  },
  {
    term: 'Anomaly Detection',
    korean: '이상치 탐지',
    category: '태스크',
    aliases: ['anomaly detection'],
    description:
      '학습된 정상 패턴에서 크게 벗어난 입력을 위험 또는 특이 상황으로 판단하는 task.',
    sessionIds: ['06-1'],
  },
  {
    term: 'Digital Twin',
    korean: '디지털 트윈',
    category: '개념',
    aliases: ['digital twin'],
    description:
      '현실 시스템의 상태와 동작을 데이터로 복제해 분석, 예측, 운영 의사결정에 활용하는 디지털 표현.',
    sessionIds: ['06-1'],
  },
  {
    term: 'Infectious Disease Data Science',
    korean: '감염병 데이터 사이언스',
    category: '개념',
    aliases: ['infectious disease data science', 'pandemic data science'],
    description:
      '감염병 대응에 필요한 예측, 자원 배분, 역학조사, 정책 평가 문제를 데이터와 AI로 보조하는 접근.',
    sessionIds: ['06-2'],
  },
  {
    term: 'Imported Case Prediction',
    korean: '해외 유입 확진자 예측',
    category: '태스크',
    aliases: ['imported case prediction', 'imported cases'],
    description:
      '해외에서 국내로 유입될 감염자 수와 추세를 예측하는 task. 검역 자원 배분과 연결된다.',
    sessionIds: ['06-2'],
  },
  {
    term: 'X / Y Definition',
    korean: '입력과 예측 대상 정의',
    category: '핵심 요소',
    aliases: ['X/Y definition', 'input target definition'],
    description:
      '무엇을 입력 feature X로 보고 무엇을 예측 대상 Y로 둘지 정하는 과정. 데이터 사이언스 문제 설정의 출발점이다.',
    sessionIds: ['06-2'],
  },
  {
    term: 'Infection Risk',
    korean: '감염 위험',
    category: '개념',
    aliases: ['infection risk'],
    description:
      '국가나 지역의 감염 확산 정도를 나타내는 시간 변화 신호. 확진자, 검색어, 로밍, 항공편 같은 feature와 연결될 수 있다.',
    sessionIds: ['06-2'],
  },
  {
    term: 'Inbound Flow',
    korean: '유입 흐름',
    category: '핵심 요소',
    aliases: ['inbound flow'],
    description:
      '특정 국가나 지역에서 목적지로 들어오는 사람의 흐름. 감염 위험과 결합해 유입 확진자 예측에 활용된다.',
    sessionIds: ['06-2'],
  },
  {
    term: 'Hi-COVIDNet',
    korean: 'Hi-COVIDNet',
    category: '모델',
    aliases: ['hi-covidnet'],
    description:
      '해외 유입 COVID-19 확진자 수를 예측하기 위해 country-level과 continent-level representation을 구성하는 deep learning 모델.',
    sessionIds: ['06-2'],
  },
  {
    term: 'LSTM',
    korean: '장단기 기억 신경망',
    category: '모델',
    aliases: ['lstm', 'long short-term memory'],
    description:
      '순서가 있는 데이터를 처리하며 과거 상태를 다음 계산에 반영하는 recurrent neural network 계열 모델.',
    sessionIds: ['06-2'],
  },
  {
    term: 'Fine-Grained EEM',
    korean: '세밀한 경제-역학 모델링',
    category: '기법',
    aliases: ['fine-grained EEM', 'economic-epidemiological modeling'],
    description:
      '지역과 업종처럼 세밀한 단위에서 감염병이 경제에 미치는 영향을 예측하는 Economic-Epidemiological Modeling.',
    sessionIds: ['06-2'],
  },
  {
    term: 'COVID-EENet',
    korean: 'COVID-EENet',
    category: '모델',
    aliases: ['covid-eenet'],
    description:
      '경제 활동 데이터와 집단감염 데이터를 결합해 지역-업종 단위 매출 변화 추세를 예측하는 DNN 기반 framework.',
    sessionIds: ['06-2'],
  },
  {
    term: 'Aggregated Card Data',
    korean: '집계 카드 데이터',
    category: '핵심 요소',
    aliases: ['aggregated card data', 'aggregated transaction data'],
    description:
      '개별 거래 내역이 아니라 지역, 업종, 성별, 연령대, 시간 단위로 묶어 만든 결제 통계. 경제 피해 분석에서 프라이버시 노출을 줄인다.',
    sessionIds: ['06-2'],
  },
  {
    term: 'District-Business Pair',
    korean: '지역-업종 쌍',
    category: '핵심 요소',
    aliases: ['district-business pair'],
    description:
      '특정 지역과 특정 업종의 조합. 감염병 충격에 따른 경제 피해를 세밀하게 예측하는 단위가 된다.',
    sessionIds: ['06-2'],
  },
  {
    term: 'Economy View',
    korean: '경제 관점 feature',
    category: '핵심 요소',
    aliases: ['economy-view', 'economy view'],
    description:
      '특정 지역-업종에서 소비가 평소 어떻게 일어나는지를 담는 feature 관점.',
    sessionIds: ['06-2'],
  },
  {
    term: 'Geography View',
    korean: '지리 관점 feature',
    category: '핵심 요소',
    aliases: ['geography-view', 'geography view'],
    description:
      '지역 사이의 물리적, 사회적 가까움이나 공간적 연결을 담는 feature 관점.',
    sessionIds: ['06-2'],
  },
  {
    term: 'Epidemic View',
    korean: '감염병 관점 feature',
    category: '핵심 요소',
    aliases: ['epidemic-view', 'epidemic view'],
    description:
      '집단감염 사례와 확산 강도가 지역경제 또는 이동 위험에 얼마나 영향을 미치는지를 담는 feature 관점.',
    sessionIds: ['06-2'],
  },
  {
    term: 'Microscopic Encoder',
    korean: '미시 인코더',
    category: '아키텍처',
    aliases: ['microscopic encoder'],
    description:
      '개별 지역-업종 또는 감염 사례 수준의 세부 영향을 encoding하는 COVID-EENet의 하위 구조.',
    sessionIds: ['06-2'],
  },
  {
    term: 'Macroscopic Aggregator',
    korean: '거시 집계기',
    category: '아키텍처',
    aliases: ['macroscopic aggregator'],
    description:
      '세부 수준에서 계산된 영향을 업종이나 지역 전체 관점으로 모아 예측에 반영하는 구조.',
    sessionIds: ['06-2'],
  },
  {
    term: 'Digital Contact Tracing',
    korean: '디지털 역학조사',
    category: '기법',
    aliases: ['digital contact tracing'],
    description:
      '위치나 접촉 데이터를 활용해 감염 가능 접촉과 이동 경로를 추정하는 공중보건 지원 방식.',
    sessionIds: ['06-2'],
  },
  {
    term: 'Cellular Trajectory',
    korean: '기지국 기반 이동 궤적',
    category: '핵심 요소',
    aliases: ['cellular trajectory', 'base station trajectory'],
    description:
      '스마트폰이 접속한 기지국 sequence로 표현된 이동 궤적. 위치 해상도가 거칠어 POI 추정이 필요할 수 있다.',
    sessionIds: ['06-2'],
  },
  {
    term: 'POI Reconstruction',
    korean: '방문 장소 재구성',
    category: '기법',
    aliases: ['POI reconstruction', 'point of interest reconstruction'],
    description:
      '기지국 trajectory처럼 거친 위치 신호에서 실제 방문했을 가능성이 높은 point of interest를 추정하는 과정.',
    sessionIds: ['06-2'],
  },
  {
    term: 'Pincette',
    korean: 'Pincette',
    category: '모델',
    aliases: ['pincette'],
    description:
      'Efficiency, periodicity, popularity view를 이용해 cellular trajectory에서 POI 방문 가능성을 추정하는 방법론.',
    sessionIds: ['06-2'],
  },
  {
    term: 'Privacy-Preserving Data Science',
    korean: '프라이버시 보존 데이터 사이언스',
    category: '기법',
    aliases: ['privacy-preserving data science', 'privacy aware data science'],
    description:
      '분석 목적을 달성하면서 개인정보 노출을 줄이기 위해 최소 수집, 익명화, 목적 제한, 접근 제어를 함께 설계하는 접근.',
    sessionIds: ['06-2'],
  },
  {
    term: 'Privacy Trade-off',
    korean: '프라이버시 절충',
    category: '개념',
    aliases: ['privacy trade-off', 'privacy accuracy tradeoff'],
    description:
      '더 정밀한 데이터가 더 높은 정확도를 줄 수 있지만 개인 생활 노출 위험도 키운다는 균형 문제.',
    sessionIds: ['06-2'],
  },
  {
    term: 'Human Value',
    korean: '인간 가치',
    category: '개념',
    aliases: ['human value', 'human values'],
    description:
      '개인이 무엇을 중요하게 여기는지 나타내는 믿음, 선호, 판단 기준. LLM 응답의 태도와 우선순위에 영향을 줄 수 있다.',
    sessionIds: ['07'],
  },
  {
    term: 'Schwartz Theory of Basic Values',
    korean: 'Schwartz 기본 가치 이론',
    category: '개념',
    aliases: ['Schwartz values', 'basic values', 'Schwartz value'],
    description:
      '사람의 가치를 10개 basic value와 4개 higher-order value로 설명하는 심리학 이론.',
    sessionIds: ['07'],
  },
  {
    term: 'Value-Injected LLM',
    korean: '가치 주입 LLM',
    category: '모델',
    aliases: ['value injected LLM', 'value-injected model'],
    description:
      '특정 value distribution을 반영하도록 조건을 주거나 학습한 대형언어모델.',
    sessionIds: ['07'],
  },
  {
    term: 'Value Alignment',
    korean: '가치 정렬',
    category: '학습 과정',
    aliases: ['value alignment', 'alignment'],
    description:
      'AI의 응답이나 행동이 특정 사람이나 집단의 가치 분포와 가까워지도록 맞추는 과정.',
    sessionIds: ['07'],
  },
  {
    term: 'Value Injection Method',
    korean: '가치 주입 방법',
    category: '기법',
    aliases: ['VIM', 'value injection'],
    description:
      '목표 value distribution을 LLM에 반영해 stance, argument, behavior prediction을 수행하려는 방법.',
    sessionIds: ['07'],
  },
  {
    term: 'Value-Safety Trade-off',
    korean: '가치-안전 절충',
    category: '개념',
    aliases: ['value safety trade-off', 'value-safety risk'],
    description:
      '특정 가치 정렬이 유용성을 높일 수 있지만 toxicity, bias 같은 안전 위험을 키울 수도 있다는 균형 문제.',
    sessionIds: ['07'],
  },
  {
    term: 'Cultural Value Alignment',
    korean: '문화 가치 정렬',
    category: '개념',
    aliases: ['cultural alignment', 'culture alignment'],
    description:
      '국가나 문화권마다 다른 가치와 선호를 LLM 응답이 얼마나 잘 반영하는지 평가하고 조정하는 문제.',
    sessionIds: ['07'],
  },
  {
    term: 'Value Codebook',
    korean: '가치 코드북',
    category: '핵심 요소',
    aliases: ['value codebook', 'value code'],
    description:
      'Open-ended text에서 추출한 value expression을 일반적인 code로 묶어 value space를 구성한 것.',
    sessionIds: ['07'],
  },
  {
    term: 'DOVE',
    korean: 'DOVE',
    category: '기법',
    aliases: ['Distributional Open-Ended Evaluation'],
    description:
      'Open-ended text를 value code distribution으로 변환해 인간 문서와 LLM 응답의 문화 가치 정렬을 비교하는 평가 방법론.',
    sessionIds: ['07'],
  },
  {
    term: 'ANI',
    korean: '좁은 인공지능',
    category: '개념',
    aliases: ['Artificial Narrow Intelligence'],
    description:
      '특정 task나 좁은 범위에서 높은 성능을 보이는 specialized AI.',
    sessionIds: ['07'],
  },
  {
    term: 'AGI',
    korean: '범용 인공지능',
    category: '개념',
    aliases: ['Artificial General Intelligence'],
    description:
      '여러 영역에서 인간 수준의 일반적인 지적 능력을 갖는 것을 목표로 하는 AI 개념.',
    sessionIds: ['07'],
  },
  {
    term: 'ASI',
    korean: '초지능',
    category: '개념',
    aliases: ['Artificial Superintelligence'],
    description:
      '인간의 지적 능력을 넘어서는 것으로 가정되는 초고도 AI 개념.',
    sessionIds: ['07'],
  },
  {
    term: 'Superalignment',
    korean: '슈퍼 정렬',
    category: '학습 과정',
    aliases: ['superalignment', 'super alignment'],
    description:
      'ASI 수준의 모델이 인간 가치와 사회적 이익에 맞게 작동하도록 competence와 conformity를 함께 최적화하려는 문제.',
    sessionIds: ['07'],
  },
  {
    term: 'Capacity',
    korean: '내재 역량',
    category: '개념',
    aliases: ['model capacity', 'capacity'],
    description:
      'AI가 pretraining 등을 통해 내부화한 정보, 지식, 기술의 총량.',
    sessionIds: ['07'],
  },
  {
    term: 'Capability',
    korean: '수행 능력',
    category: '개념',
    aliases: ['model capability', 'capability'],
    description:
      'AI가 실제 task에서 기대 효용이나 성능으로 드러내는 수행 능력.',
    sessionIds: ['07'],
  },
  {
    term: 'Sandwiching',
    korean: '샌드위칭',
    category: '기법',
    aliases: ['sandwiching'],
    description:
      '인간이 AI 제안을 판단하고 피드백하며 감독 신호를 만드는 alignment 패러다임.',
    sessionIds: ['07'],
  },
  {
    term: 'Self-Enhancement',
    korean: '자기 개선',
    category: '기법',
    aliases: ['self enhancement', 'self-enhancement'],
    description:
      'AI가 인간 감독 없이 자기 답변이나 추론을 개선하도록 하는 alignment 접근.',
    sessionIds: ['07'],
  },
  {
    term: 'Weak-to-Strong Generalization',
    korean: '약한 모델에서 강한 모델로의 일반화',
    category: '기법',
    aliases: ['W2SG', 'weak to strong generalization'],
    description:
      '약한 감독자나 약한 모델이 만든 supervision으로 더 강한 모델의 능력을 끌어내려는 접근.',
    sessionIds: ['07'],
  },
  {
    term: 'Scalable Oversight',
    korean: '확장 가능한 감독',
    category: '기법',
    aliases: ['scalable oversight'],
    description:
      'AI 능력이 커져도 유효한 평가와 감독 신호를 제공하기 위한 방법론.',
    sessionIds: ['07'],
  },
  {
    term: 'Easy-to-Hard Generalization',
    korean: '쉬운 문제에서 어려운 문제로의 일반화',
    category: '학습 과정',
    aliases: ['E2HG', 'easy to hard generalization'],
    description:
      '쉬운 데이터에서 얻은 supervision을 라벨이 부족한 어려운 task로 확장하려는 학습 설정.',
    sessionIds: ['07'],
  },
  {
    term: 'UniPRO',
    korean: 'Unified Policy and Reward Optimization',
    category: '기법',
    aliases: ['Unified Policy and Reward Optimization', 'unipro'],
    description:
      'Policy와 reward를 번갈아 업데이트해 hard prompt에서 supervision bottleneck을 줄이려는 easy-to-hard generalization 접근.',
    sessionIds: ['07'],
  },
  {
    term: 'Policy-Reward Co-evolution',
    korean: '정책-보상 공동 진화',
    category: '학습 과정',
    aliases: ['policy reward co-evolution', 'policy-reward coevolution'],
    description:
      'Policy가 생성하는 분포 변화에 맞춰 reward도 함께 갱신되어 평가 신호의 신뢰성을 유지하는 과정.',
    sessionIds: ['07'],
  },
];
