# 07. AGI/ASI Value Alignment and Superalignment

## 3줄 요약

- Value Alignment는 LLM이 특정 human value distribution을 반영하도록 만드는 접근이지만, 정렬된 가치가 항상 안전한 결과를 보장하지는 않는다.
- Cultural Value Alignment는 survey-style 질문만으로 보기 어렵기 때문에, open-ended text를 value expression, value codebook, distribution으로 바꾸어 평가하는 흐름이 중요하다.
- Superalignment는 AGI/ASI처럼 인간 능력을 넘어서는 모델에서 competence, conformity, scalable oversight를 함께 설계해야 하는 문제다.

## Instructor

성균관대학교 박진영 교수  
JinYeong Bak  
Professor  
Sungkyunkwan University  
Human Language Intelligence Lab

## Core Flow

Human Value -> Schwartz Theory of Basic Values -> Value-Injected LLM -> Value Alignment -> Value Injection Method -> Value-Safety Trade-off -> Cultural Value Alignment -> Value Codebook -> DOVE -> ANI / AGI / ASI -> Superalignment -> Capacity vs Capability -> Sandwiching -> Self-Enhancement -> Weak-to-Strong Generalization -> Scalable Oversight -> Easy-to-Hard Generalization -> UniPRO -> Policy-Reward Co-evolution

## Visual Notes

- `/session-visuals/session-07-value-alignment-flow.svg`
- `/session-visuals/session-07-superalignment-oversight.svg`

Human value를 LLM에 반영하는 문제에서 시작해, 문화권별 open-ended evaluation과 AGI/ASI 시대의 scalable oversight 문제로 확장한다.

## Notes

Value Alignment는 AI가 사람이나 집단의 value distribution을 반영하도록 만드는 과정이다. 강의에서는 Schwartz Theory of Basic Values를 활용해 사람이 중요하게 여기는 가치 축을 distribution으로 보고, 이 값을 LLM에 주입해 argument, stance, behavior prediction을 수행하는 흐름을 다루었다.

Value Injection Method는 목표 value distribution을 LLM에 반영해 특정 가치관을 가진 사람이 만들 법한 주장과 의견을 생성하거나 예측하는 접근이다. 이때 alignment는 단순히 더 친절한 답변을 만드는 것이 아니라, 모델 output의 방향성과 우선순위를 특정 가치 분포에 맞추는 문제로 이해할 수 있다.

다만 value-aligned LLM이 항상 더 안전한 것은 아니다. 특정 가치 정렬은 일부 safety category에서 toxicity나 bias를 높일 수 있고, 민감한 상황에서는 value를 그대로 강화하는 것보다 억제하거나 재해석해야 할 수 있다. 따라서 value consistency와 safety risk를 함께 평가해야 한다.

Cultural Value Alignment는 국가와 문화권마다 다른 선호와 가치 표현을 LLM이 얼마나 잘 반영하는지 보는 문제다. DOVE는 open-ended text에서 value expression을 추출하고 value codebook으로 mapping한 뒤, human document와 LLM response를 value code distribution으로 비교한다. 핵심은 정해진 survey 문항만 보는 것이 아니라 실제 사용자가 길게 작성하는 문서와 응답에서 드러나는 가치 표현을 다룬다는 점이다.

Superalignment는 AGI/ASI 수준의 모델이 인간 가치와 사회적 이익에 맞게 작동하도록 만드는 문제다. 기존 alignment는 AI utility와 human utility의 차이를 줄이는 방식으로 설명할 수 있지만, ASI처럼 capacity가 인간 능력을 크게 넘는 경우에는 인간 utility를 단순한 target으로 두기 어렵다. 그래서 capability와 capacity의 gap, competence와 conformity의 병렬 최적화, scalable oversight가 중요해진다.

기존 alignment paradigm에는 Sandwiching, Self-Enhancement, Weak-to-Strong Generalization이 있다. Sandwiching은 인간이 AI 제안을 판단하고 피드백하는 방식이고, Self-Enhancement는 AI가 자기 답변을 개선하는 방식이며, Weak-to-Strong Generalization은 약한 모델이나 약한 감독자가 더 강한 모델을 지도하는 방식이다. 그러나 강한 AI가 judge를 설득하거나 속일 수 있고, 자기 편향을 증폭할 수 있으며, 약한 감독의 오류에 과적합할 수 있다는 한계가 있다.

UniPRO는 Easy-to-Hard Generalization을 위한 접근이다. 쉬운 데이터에는 label과 reasoning trace가 있고 어려운 데이터에는 prompt만 있는 상황에서, policy head와 reward head를 번갈아 업데이트한다. 고정된 reward model이 hard distribution에서 OOD가 되면 policy collapse가 생길 수 있으므로, policy와 reward가 함께 적응하도록 만드는 것이 핵심이다.

## 핵심 비교

| 구분 | Alignment | Superalignment |
|---|---|---|
| 주요 대상 | ANI 또는 AGI 수준의 모델 | ASI 수준까지 확장되는 모델 |
| 기본 목표 | AI output을 human utility에 가깝게 맞춤 | competence와 conformity를 함께 최적화 |
| 감독자 가정 | 인간이 비교적 판단 가능 | 인간 판단이 lower bound가 될 수 있음 |
| 주요 위험 | 편향, 유해성, 가치 불일치 | 감독 실패, 기만, 능력-정렬 불균형 |

## Superalignment 패러다임

| 패러다임 | 직관 | 한계 |
|---|---|---|
| Sandwiching | 인간이 AI 제안을 평가하고 피드백 | AI가 judge를 설득하거나 속일 수 있음 |
| Self-Enhancement | AI가 자기 답변을 개선 | Echo chamber와 편향 증폭 가능 |
| Weak-to-Strong Generalization | 약한 감독으로 강한 모델을 지도 | 약한 감독의 오류를 강한 모델이 모방할 수 있음 |
| Scalable Oversight | 능력이 커져도 유효한 감독 신호 설계 | 평가 환경과 실제 hard task 사이의 차이를 관리해야 함 |

## 사전 학습 체크포인트

| 개념 | 먼저 알고 있으면 좋은 이유 |
|---|---|
| Human Value | Alignment가 단일 정답이 아니라 value distribution 문제임을 이해한다 |
| LLM Post-Training | 모델의 capability와 behavior가 pretraining 이후 어떻게 바뀌는지 본다 |
| Safety Evaluation | 정렬된 모델도 toxicity, bias, harmfulness 평가가 필요하다 |
| Cultural Alignment | 문화권과 집단에 따라 선호되는 응답이 달라질 수 있다 |
| Reward Model | Scalable oversight에서 평가 신호가 어떻게 만들어지는지 이해한다 |
| Easy-to-Hard Generalization | 쉬운 문제의 supervision을 어려운 문제로 확장하는 설정을 이해한다 |

## Reflection

- Value Alignment가 단순히 더 안전한 답변을 만드는 과정이라고만 볼 수 없는 이유는 무엇인가?
- Schwartz Theory of Basic Values는 LLM 연구에서 어떤 식으로 value distribution을 모델링하게 해 주는가?
- DOVE가 survey-style 평가 대신 open-ended text를 다루려는 이유는 무엇인가?
- Superalignment에서 인간 utility를 단순 target으로 두기 어려운 이유는 무엇인가?
- Weak-to-Strong Generalization에서 강한 모델이 약한 감독의 오류를 모방할 수 있는 이유는 무엇인가?
- UniPRO에서 policy와 reward를 함께 업데이트하는 이유는 무엇인가?
