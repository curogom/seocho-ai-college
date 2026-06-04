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
      'AI 안에 ML이 있고, ML 안에 DL이 있다.',
      'DL 안에 ML이 있고, ML 안에 AI가 있다.',
      'ML 안에 DL이 있고, DL 안에 AI가 있다.',
      'AI, ML, DL은 서로 독립이다.',
    ],
    answerIndex: 0,
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
  {
    id: 's02-q1',
    sessionId: '02',
    question: 'BERT와 GPT의 가장 큰 구조적 차이로 맞는 것은?',
    choices: [
      'BERT는 decoder-only, GPT는 encoder-only다.',
      'BERT는 encoder-only language understanding model이고, GPT는 decoder-only autoregressive generation model이다.',
      'BERT와 GPT는 구조적으로 완전히 같다.',
      'GPT는 token을 사용하지 않는다.',
    ],
    answerIndex: 1,
    explanation:
      'BERT는 encoder-only 구조로 문맥 이해에 강하고, GPT는 decoder-only 구조로 이전 token을 조건으로 다음 token을 생성한다.',
  },
  {
    id: 's02-q2',
    sessionId: '02',
    question: 'GPT의 prefill 단계는 무엇을 의미하는가?',
    choices: [
      '모델 parameter를 새로 학습하는 과정',
      '사용자의 prompt를 먼저 처리해 이후 생성을 위한 cache를 준비하는 과정',
      '최종 답변을 사람이 검수하는 과정',
      '미래 token을 미리 정답으로 넣어주는 과정',
    ],
    answerIndex: 1,
    explanation:
      'Prefill은 prompt를 먼저 처리해 KV cache 등을 준비하는 단계로, 이후 decoding에서 다음 token을 순차적으로 생성한다.',
  },
  {
    id: 's02-q3',
    sessionId: '02',
    question: 'Transformer self-attention이 긴 context에서 비싸지는 이유는?',
    choices: [
      '모든 token을 삭제하기 때문에',
      'token 간 pairwise 관계를 계산하기 때문에',
      'embedding을 사용하지 않기 때문에',
      'GPU를 전혀 쓰지 않기 때문에',
    ],
    answerIndex: 1,
    explanation:
      'Self-attention은 token들 사이의 관계를 계산하므로 sequence 길이가 길어질수록 비용이 크게 증가한다.',
  },
  {
    id: 's02-q4',
    sessionId: '02',
    question: 'Qwen3-Next의 hybrid architecture 설명으로 가장 적절한 것은?',
    choices: [
      'CNN과 RNN만 섞은 구조다.',
      'Gated DeltaNet과 masked self-attention을 섞어 효율성과 정밀한 token interaction의 균형을 노린다.',
      'BERT만 사용하고 GPT 구조는 사용하지 않는다.',
      'attention을 완전히 제거한다.',
    ],
    answerIndex: 1,
    explanation:
      '강의자료 기준 Qwen3-Next는 Gated DeltaNet과 masked self-attention을 섞는 hybrid 구조로 설명된다.',
  },
  {
    id: 's02-q5',
    sessionId: '02',
    question: 'Scientific Foundation Model이 LLM과 다른 핵심 지점은?',
    choices: [
      'LLM은 데이터를 쓰지 않는다.',
      'SFM은 자연어가 아니라 PDE 해, 시뮬레이션, 관측 데이터 등 과학·공학 데이터를 중심으로 다룬다.',
      'SFM은 모델이 아니라 데이터베이스다.',
      'LLM과 SFM은 완전히 같은 말이다.',
    ],
    answerIndex: 1,
    explanation:
      'SFM은 LLM의 foundation model 개념을 과학·공학 문제에 적용하려는 흐름이며, PDE 해와 관측 데이터 같은 과학 데이터를 중요하게 다룬다.',
  },
];

export const getQuizzesBySessionId = (sessionId: string) =>
  quizzes.filter((quiz) => quiz.sessionId === sessionId);
