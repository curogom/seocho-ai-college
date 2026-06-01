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
];

export const getQuizzesBySessionId = (sessionId: string) =>
  quizzes.filter((quiz) => quiz.sessionId === sessionId);
