# 07 cleaned notes: AGI/ASI Value Alignment and Superalignment

## 강의 범위

- 인간 중심 AGI/ASI, Value Alignment, Superalignment
- Human Language Intelligence Lab 연구 흐름을 중심으로 다섯 개 연구 블록을 연결
- 1부: human value를 LLM에 주입하고 평가하는 문제
- 2부: AGI/ASI 시대의 superalignment와 scalable oversight 문제

## 정제된 핵심 흐름

1. Human value는 사람마다 다른 value distribution으로 볼 수 있다.
2. Schwartz Theory of Basic Values는 value distribution을 설명하는 심리학적 기반으로 활용된다.
3. Value Injection Method는 target value distribution을 LLM에 반영해 stance, argument, behavior prediction을 수행하려는 접근이다.
4. Value-aligned LLM은 더 유용할 수 있지만 특정 value profile이 toxicity나 bias 같은 안전 위험을 키울 수도 있다.
5. Cultural Value Alignment는 국가와 문화권별 open-ended text에서 드러나는 value expression을 평가해야 한다.
6. DOVE는 value expression을 value codebook과 distribution으로 바꾸어 human document와 LLM response의 alignment를 비교한다.
7. AGI와 ASI로 갈수록 인간 평가자가 항상 더 잘 판단한다는 가정이 약해진다.
8. Superalignment는 competence와 conformity를 함께 최적화하고, scalable oversight를 설계하는 문제다.
9. Sandwiching, Self-Enhancement, Weak-to-Strong Generalization은 각각 유용하지만 기만, 편향 증폭, 약한 감독 오류 모방 같은 한계가 있다.
10. UniPRO는 easy data의 label과 hard data의 prompt를 이용해 policy와 reward를 번갈아 업데이트하는 easy-to-hard generalization 접근이다.

## 연구 블록

| 블록 | 정리 |
|---|---|
| Value-Injected LLMs | LLM에 human value distribution을 반영해 의견과 행동을 예측 |
| Unintended Harms | 가치 정렬이 특정 safety risk를 키울 수 있음을 분석 |
| DOVE | Open-ended text 기반 문화 가치 정렬 평가 |
| Superalignment | ASI 시대의 competence와 conformity 병렬 최적화 |
| UniPRO | Scalable oversight를 위한 policy-reward 공동 업데이트 |

## 복습 질문

- Value Alignment와 일반 safety tuning은 무엇이 다른가?
- 가치 정렬이 유해성이나 편향을 키울 수 있다면 어떤 평가가 함께 필요할까?
- Survey-style cultural alignment benchmark의 한계는 무엇인가?
- AGI/ASI 시대에는 왜 인간 감독만으로 충분하지 않을 수 있는가?
- Easy-to-Hard Generalization에서 reward model이 hard distribution에 적응해야 하는 이유는 무엇인가?
