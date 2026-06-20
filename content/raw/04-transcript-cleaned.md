# 4차시 전사문 정제 노트

## 강의 흐름

4차시는 3차시의 Graph Machine Learning에서 이어져 Knowledge Graph와 Knowledge Graph Embedding을 다룬다.

핵심 질문은 다음과 같다.

- 사람의 지식을 graph로 표현하면 무엇을 할 수 있는가?
- Knowledge Graph를 machine learning 모델이 계산할 수 있는 vector representation으로 어떻게 바꾸는가?
- 빠져 있는 head, relation, tail을 어떻게 예측하는가?
- GraphRAG처럼 LLM과 graph를 함께 쓰면 어떤 장점과 한계가 있는가?

## Knowledge Graph와 Triplet

Knowledge Graph는 사람의 지식을 entity와 relation의 graph로 표현한다.

예를 들어 `Barack Obama --born in--> Honolulu`처럼 표현하면 하나의 fact가 된다.

Knowledge Graph의 기본 단위는 triplet이다.

| 구성 | 의미 |
|---|---|
| Head entity | 관계의 출발점이 되는 entity |
| Relation | 두 entity 사이의 관계 타입 |
| Tail entity | 관계의 도착점이 되는 entity |

Triplet은 자연어 문장의 주어, 동사, 목적어와 비슷하게 볼 수 있지만 완전히 같은 것은 아니다.
Relation을 어떻게 정의하느냐에 따라 head와 tail이 바뀔 수 있고, 실제 지식은 단순한 삼형식보다 훨씬 복잡하다.

## 왜 Knowledge Graph Embedding이 필요한가

현실의 Knowledge Graph는 sparse하다.
가능한 entity와 relation 조합은 매우 많지만, 실제로 관찰되거나 명시적으로 기록된 fact는 일부에 불과하다.

Machine learning 모델은 연속적인 vector representation을 계산하므로, graph 형태의 이산적인 지식을 그대로 넣기 어렵다.
Knowledge Graph Embedding은 entity와 relation을 vector space로 옮겨 구조 정보를 보존하려는 기술이다.

## Scoring Function

Knowledge Graph Embedding 모델은 triplet이 그럴듯한지 점수를 매기는 scoring function을 학습한다.

- 맞는 fact처럼 보이는 triplet은 높은 score를 받도록 학습한다.
- 틀린 fact처럼 보이는 triplet은 낮은 score를 받도록 학습한다.

이 scoring function을 이용하면 빠진 head, relation, tail 후보를 ranking하고 missing link를 예측할 수 있다.

## 모델 계열

강의에서는 Knowledge Graph Embedding의 큰 계열을 두 가지로 나누어 설명했다.

| 계열 | 핵심 아이디어 |
|---|---|
| Translational Distance Model | head vector와 relation vector를 더했을 때 tail vector와 가까워지도록 학습 |
| Semantic Matching Model | head, relation, tail 사이의 유사도 또는 compatibility를 높이도록 학습 |

TransE는 `h + r`이 `t`에 가까워져야 한다는 직관을 사용한다.
Semantic matching 계열은 거리보다 유사도 또는 상호작용 점수를 중심으로 fact plausibility를 계산한다.

## Link Prediction과 평가

Knowledge Graph Completion 또는 Link Prediction은 비어 있는 head, relation, tail을 예측하는 task다.

예를 들어 `(?, capital_of, Hawaii)`처럼 한 요소가 비어 있으면, 가능한 entity 후보를 넣어 scoring function 값을 계산하고 ranking한다.

대표 evaluation metric은 다음과 같다.

| Metric | 해석 |
|---|---|
| Mean Rank | 정답 후보의 평균 순위. 낮을수록 좋다. |
| MRR | 정답 순위 역수의 평균. 상위권 정답에 더 민감하다. |
| Hits@K | 정답이 상위 K개 후보 안에 들어간 비율. |

검색 서비스처럼 첫 페이지 노출이 중요한 경우에는 Hits@10 같은 지표가 직관적일 수 있다.

## 더 복잡한 Knowledge Graph

현실의 지식은 triplet만으로 충분하지 않은 경우가 많다.

- Hyper-relational Knowledge Graph: main triplet에 qualifier를 붙여 부가 정보를 표현한다.
- Numerical Knowledge Graph: 수치 정보를 함께 표현한다.
- Multimodal Knowledge Graph: image, text, 구조 정보를 함께 다룬다.
- Temporal Knowledge Graph: 시간이 지나면서 변하는 지식을 다룬다.

예를 들어 영화 수상 정보는 영화, 수상 내역, 연도, 수상자, 감독 등 여러 qualifier가 붙을 수 있다.

## Inductive Reasoning

기존 Knowledge Graph Embedding은 training time에 본 entity와 relation을 기준으로 추론하는 transductive setting에 가까운 경우가 많았다.

하지만 실제 환경에서는 inference time에 새로운 entity나 새로운 relation이 등장할 수 있다.
Inductive reasoning은 이런 새로운 graph가 들어와도 구조 정보를 기반으로 추론하려는 문제 설정이다.

강의에서는 새로운 relation까지 다루기 위해 relation graph를 만드는 접근이 소개되었다.
Relation graph는 relation 사이의 관계를 나타내는 graph이며, 두 relation이 head나 tail entity를 많이 공유할수록 더 가깝다고 본다.

## Knowledge Graph Construction

Knowledge Graph를 손으로 모두 그리는 것은 어렵다.
최근에는 LLM을 활용해 text에서 entity와 relation을 추출하고, canonicalization, validation, deduplication을 거쳐 graph를 구성하는 흐름이 연구되고 있다.

기본 흐름은 다음과 같다.

1. Entity extraction
2. Entity canonicalization
3. Relation extraction
4. Validation
5. Redundancy removal
6. Final Knowledge Graph construction

도메인에 따라 잘 동작하는 경우도 있지만, relation schema나 검증 기준이 맞지 않으면 customization이 필요하다.

## GraphRAG

GraphRAG는 Retrieval-Augmented Generation에서 retrieval 대상을 단순 text chunk가 아니라 graph structure로 확장하는 접근이다.

질문에 등장한 entity를 Knowledge Graph에서 찾고, 관련 node, edge, triplet, path, subgraph를 가져와 LLM prompt에 함께 넣는다.

GraphRAG의 장점은 다음과 같다.

- 관련 지식을 구조화된 형태로 제공해 hallucination을 줄일 수 있다.
- 답변이 어떤 node와 relation을 거쳤는지 해석할 여지가 생긴다.
- 긴 문서를 모두 넣지 않고 필요한 subgraph를 가져와 token 사용량을 줄일 수 있다.

다만 LLM이 graph 구조를 항상 깊게 이해하는 것은 아니다.
너무 복잡한 graph를 그대로 넣으면 오히려 처리하기 어렵기 때문에, 필요한 subgraph를 적절히 선택하고 pruning하는 과정이 중요하다.

## 실무적 정리

Graph 문제를 적용하려면 먼저 무엇을 node로 둘지, 무엇을 edge 또는 relation으로 둘지 정해야 한다.
이 모델링이 잘 되어야 node classification, link prediction, graph classification 같은 task로 문제를 바꿀 수 있다.

최소한의 skeleton graph가 있으면 embedding이나 completion 기술로 빈 relation을 채워 나갈 수 있다.
반대로 아무 구조도 없는 상태에서는 graph 기반 추론을 시작하기 어렵다.

공개 benchmark와 사내 데이터의 요구는 다르다.
연구에서는 Wikidata 계열 benchmark처럼 공통 기준이 필요하지만, 실제 회사에서는 보안, 개인정보, 데이터 거버넌스 때문에 폐쇄 환경에서 graph를 관리해야 하는 경우가 많다.
