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
  {
    id: 's03-q1',
    sessionId: '03',
    question: '컴퓨터 과학과 AI에서 말하는 graph의 설명으로 가장 적절한 것은?',
    choices: [
      'x-y 축 위에 숫자를 그리는 chart만 의미한다.',
      '객체를 node로, 객체 간 관계를 edge로 표현하는 자료 구조다.',
      '이미지 pixel을 항상 정사각형 grid로만 표현하는 구조다.',
      '언어 모델의 token vocabulary만 의미한다.',
    ],
    answerIndex: 1,
    explanation:
      '3차시에서 graph는 객체와 객체 사이의 관계성을 node와 edge로 표현하는 자료 구조로 정리한다.',
  },
  {
    id: 's03-q2',
    sessionId: '03',
    question: 'Knowledge Graph를 쓰는 이유로 가장 적절한 것은?',
    choices: [
      '모든 데이터를 text file로만 저장하기 위해',
      '사람의 지식을 entity와 relation으로 구조화하고 관계를 따라 reasoning하기 위해',
      'GPU 없이 deep learning을 금지하기 위해',
      'node와 edge를 모두 삭제하기 위해',
    ],
    answerIndex: 1,
    explanation:
      'Knowledge Graph는 사람의 지식을 graph로 표현해 질문 응답, 검색, 추천, missing relation 추론에 활용할 수 있다.',
  },
  {
    id: 's03-q3',
    sessionId: '03',
    question: 'Graph Representation Learning이 필요한 주된 이유는?',
    choices: [
      'graph는 이산적인 관계 구조라 그대로 ML/DL 모델이 계산하기 어렵기 때문에',
      'graph에는 node가 전혀 없기 때문에',
      '모델이 숫자 대신 그림만 처리하기 때문에',
      'link prediction을 항상 사람이 직접 해야 하기 때문에',
    ],
    answerIndex: 0,
    explanation:
      '기계학습 모델은 숫자 vector를 계산하므로 graph의 구조 정보를 보존한 embedding이나 feature vector로 변환해야 한다.',
  },
  {
    id: 's03-q4',
    sessionId: '03',
    question: 'GCN의 기본 아이디어로 맞는 것은?',
    choices: [
      'Target node가 neighbor 정보를 집계해 자신의 embedding을 업데이트한다.',
      '모든 node를 독립적인 row로 보고 edge를 무시한다.',
      '미래 token을 가려서 다음 token만 예측한다.',
      '이미지 filter만 학습하고 graph 구조는 쓰지 않는다.',
    ],
    answerIndex: 0,
    explanation:
      'GCN은 target node의 representation을 만들 때 주변 neighbor의 representation을 모아 계산한다.',
  },
  {
    id: 's03-q5',
    sessionId: '03',
    question: 'Link Prediction task의 예로 가장 적절한 것은?',
    choices: [
      '두 node 사이에 생길 수 있는 친구 관계나 빠진 지식을 예측한다.',
      '이미지를 고양이와 강아지로만 분류한다.',
      'prompt를 prefill한 뒤 다음 token을 생성한다.',
      '단일 graph 전체를 무조건 하나의 숫자로 압축한다.',
    ],
    answerIndex: 0,
    explanation:
      'Link Prediction은 missing link를 예측하는 task로, 친구 추천이나 knowledge graph completion과 연결된다.',
  },
  {
    id: 's04-q1',
    sessionId: '04',
    question: 'Knowledge Graph의 기본 fact 단위인 triplet 구성으로 맞는 것은?',
    choices: [
      'head entity, relation, tail entity',
      'input token, hidden layer, output token',
      'image, filter, pooling',
      'prompt, answer, temperature',
    ],
    answerIndex: 0,
    explanation:
      'Knowledge Graph의 하나의 fact는 보통 head entity, relation, tail entity로 표현한다.',
  },
  {
    id: 's04-q2',
    sessionId: '04',
    question: 'Knowledge Graph Embedding에서 scoring function의 역할은?',
    choices: [
      'SVG 이미지를 압축한다.',
      'Triplet이 그럴듯한 fact인지 점수로 계산한다.',
      '모든 entity를 삭제한다.',
      'LLM의 temperature만 조정한다.',
    ],
    answerIndex: 1,
    explanation:
      'Scoring function은 entity와 relation representation을 이용해 triplet plausibility를 계산한다.',
  },
  {
    id: 's04-q3',
    sessionId: '04',
    question: 'Translational distance model의 핵심 직관으로 가장 적절한 것은?',
    choices: [
      'head + relation이 tail과 가까워지도록 학습한다.',
      '모든 relation을 텍스트로만 저장한다.',
      '정답 ranking을 무작위로 섞는다.',
      'LLM이 graph를 보지 못하게 한다.',
    ],
    answerIndex: 0,
    explanation:
      'TransE 계열의 대표 직관은 h + r이 t와 가까워지는 방향으로 embedding을 학습하는 것이다.',
  },
  {
    id: 's04-q4',
    sessionId: '04',
    question: 'Hits@K metric의 의미로 맞는 것은?',
    choices: [
      '정답 후보가 상위 K개 안에 들어간 비율',
      '모델 parameter의 개수',
      '문서 chunk의 평균 길이',
      'graph에 있는 node의 색상 수',
    ],
    answerIndex: 0,
    explanation:
      'Hits@K는 정답이 ranking 상위 K개 후보 안에 포함되는 비율을 본다.',
  },
  {
    id: 's04-q5',
    sessionId: '04',
    question: 'GraphRAG 설명으로 가장 적절한 것은?',
    choices: [
      'RAG에서 관련 text chunk만 금지하는 방식이다.',
      '질문과 관련된 node, edge, triplet, subgraph를 검색해 LLM 답변에 함께 제공하는 접근이다.',
      'Knowledge Graph를 항상 이미지 파일로만 저장하는 방식이다.',
      'LLM이 외부 정보를 전혀 보지 않게 하는 방식이다.',
    ],
    answerIndex: 1,
    explanation:
      'GraphRAG는 retrieval 대상을 graph structure로 확장해 grounding과 explainability를 높이려는 접근이다.',
  },
  {
    id: 's06-q1',
    sessionId: '06-1',
    question: 'Mobility Big Data의 설명으로 가장 적절한 것은?',
    choices: [
      '시간에 따른 위치와 이동 맥락이 함께 쌓이는 trajectory data다.',
      '텍스트 token만 모은 문서 데이터다.',
      '이미지 pixel만 저장한 데이터다.',
      '모델 parameter만 저장한 파일이다.',
    ],
    answerIndex: 0,
    explanation:
      '모빌리티 데이터는 위치, 시간, 속도, 체류, 교통수단 같은 이동 맥락이 결합된 trajectory data로 볼 수 있다.',
  },
  {
    id: 's06-q2',
    sessionId: '06-1',
    question: '교통카드 데이터에서 Location Inference가 필요한 이유는?',
    choices: [
      '승하차 시점 사이의 모든 위치가 직접 관측되는 것은 아니기 때문에',
      '교통카드 데이터에는 시간이 없기 때문에',
      '위치 데이터는 항상 완전하기 때문에',
      '승차와 하차 정보를 삭제하기 위해',
    ],
    answerIndex: 0,
    explanation:
      '승차와 하차 event는 관측되지만 그 사이 시간대의 위치는 직접 관측되지 않는다. 앞뒤 기록으로 추정하되 근거가 약한 구간은 unknown으로 남길 수 있다.',
  },
  {
    id: 's06-q3',
    sessionId: '06-1',
    question: 'Revisit Prediction에 사용할 수 있는 실내 동선 feature가 아닌 것은?',
    choices: [
      '구역별 체류 시간 비율',
      '매장 내부에서 감지된 총 시간',
      '방문 시간과 요일',
      'LLM의 temperature 값',
    ],
    answerIndex: 3,
    explanation:
      '재방문 예측에서는 직원이나 통로 통과자 같은 noise를 제거한 뒤 체류 시간, 구역별 비율, 방문 시간, 유사 동선 같은 행동 feature를 사용한다.',
  },
  {
    id: 's06-q4',
    sessionId: '06-1',
    question: 'Spatial Stream Processing의 핵심 특징은?',
    choices: [
      '빠르게 들어오는 위치 stream에서 규칙에 맞는 event를 탐지한다.',
      '모든 데이터를 종이에 적어 수동으로 분류한다.',
      '시간 순서를 모두 제거하고 평균만 계산한다.',
      '항상 이미지 분류 문제로만 처리한다.',
    ],
    answerIndex: 0,
    explanation:
      '공간 stream 처리에서는 위치와 시간 event가 계속 들어오므로 실시간 판단과 규칙 기반 event 탐지가 중요하다.',
  },
  {
    id: 's06-q5',
    sessionId: '06-1',
    question: '모빌리티 위험 예측에서 Data Governance가 중요한 이유는?',
    choices: [
      '이동경로가 개인 생활 패턴이나 민감 운영 정보를 드러낼 수 있기 때문에',
      '위치 데이터에는 민감성이 전혀 없기 때문에',
      '모델 정확도를 낮추기 위해',
      '데이터를 모두 공개해야만 학습할 수 있기 때문에',
    ],
    answerIndex: 0,
    explanation:
      '이동경로 데이터는 개인, 차량, 시설, 안보 맥락을 노출할 수 있어 익명화, 접근 권한, 목적 제한이 필요하다.',
  },
  {
    id: 's06-2-q1',
    sessionId: '06-2',
    question: 'Imported Case Prediction에서 Infection Risk와 Inbound Flow를 함께 보는 이유는?',
    choices: [
      '감염 위험과 실제 유입량이 함께 imported case 규모를 좌우하기 때문에',
      '둘 중 하나는 항상 0이기 때문에',
      '감염 위험은 위치와 무관하기 때문에',
      '유입 흐름은 모델 입력으로 쓸 수 없기 때문에',
    ],
    answerIndex: 0,
    explanation:
      '출발 국가의 감염 위험과 국내 유입량을 X로 함께 봐야 질병관리 통계의 imported case 수라는 Y를 더 잘 예측할 수 있다.',
  },
  {
    id: 's06-2-q2',
    sessionId: '06-2',
    question: 'Hi-COVIDNet에서 Transformer와 LSTM 역할 설명으로 적절한 것은?',
    choices: [
      'Transformer는 위험 시점에 주목하고, LSTM은 시간적 추세를 반영한다.',
      'Transformer는 이미지를 압축하고, LSTM은 CSS를 생성한다.',
      '둘 다 위치 데이터를 삭제하기 위한 규칙이다.',
      'LSTM은 시간 순서를 전혀 사용하지 않는다.',
    ],
    answerIndex: 0,
    explanation:
      '강의 자료 기준으로 Transformer는 감염 위험이 높은 기간을 강조하고, LSTM은 감염 추세의 temporal pattern을 포착하는 역할로 설명된다.',
  },
  {
    id: 's06-2-q3',
    sessionId: '06-2',
    question: 'Fine-Grained EEM이 필요한 이유는?',
    choices: [
      '지역과 업종별 피해가 다르게 나타날 수 있기 때문에',
      '모든 지역과 업종의 피해가 항상 같기 때문에',
      '경제 데이터를 쓰면 안 되기 때문에',
      '감염병 데이터에는 시간 정보가 없기 때문에',
    ],
    answerIndex: 0,
    explanation:
      '소득이나 실업률 같은 coarse-grained 지표만으로는 지역-업종 단위의 세밀한 경제 피해 차이를 보기 어렵고, 집계 카드 데이터 같은 fine-grained 신호가 필요하다.',
  },
  {
    id: 's06-2-q4',
    sessionId: '06-2',
    question: 'Pincette의 세 가지 view로 맞는 조합은?',
    choices: [
      'Efficiency, Periodicity, Popularity',
      'Color, Font, Shadow',
      'Prompt, Temperature, Token',
      'Head, Relation, Tail',
    ],
    answerIndex: 0,
    explanation:
      'Pincette는 이동 경로 효율성, 생활 패턴의 주기성, 장소의 대중성을 함께 보고 POI 방문 가능성을 추정한다.',
  },
  {
    id: 's06-2-q5',
    sessionId: '06-2',
    question: '감염병 대응 데이터 사이언스에서 Privacy-Preserving 설계가 중요한 이유는?',
    choices: [
      '건강, 위치, 소비, 이동 이력처럼 민감한 데이터가 함께 쓰일 수 있기 때문에',
      '모든 데이터가 공개 데이터라서 보호가 필요 없기 때문에',
      '예측 정확도를 무조건 0으로 만들기 위해',
      '모델이 데이터를 보지 못하게 하기 위해',
    ],
    answerIndex: 0,
    explanation:
      '감염병 대응 데이터는 공익 목적이 있더라도 개인의 건강, 위치, 소비 이력에 닿을 수 있다. 정확도와 프라이버시 사이의 trade-off를 줄이는 설계가 필요하다.',
  },
];

export const getQuizzesBySessionId = (sessionId: string) =>
  quizzes.filter((quiz) => quiz.sessionId === sessionId);
