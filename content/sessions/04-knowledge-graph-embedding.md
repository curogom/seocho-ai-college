# 4차시 Knowledge Graph Embedding

## 핵심 요약

4차시는 Knowledge Graph를 더 깊게 다룬다. 3차시가 graph와 Graph Representation Learning의 입구였다면, 이번 차시는 entity와 relation으로 구성된 Knowledge Graph를 vector space로 옮기고, 빠져 있는 지식을 예측하는 흐름을 중심으로 본다.

- Knowledge Graph는 fact를 `(head entity, relation, tail entity)` triplet으로 표현한다.
- 현실의 Knowledge Graph는 sparse하므로, 빠진 relation이나 entity를 예측하는 Knowledge Graph Completion이 중요하다.
- Knowledge Graph Embedding은 entity와 relation을 vector representation으로 바꾸고, scoring function으로 triplet의 plausibility를 계산한다.
- Link Prediction 성능은 Mean Rank, MRR, Hits@K 같은 ranking metric으로 평가한다.
- 현실 지식은 triplet보다 복잡하므로 hyper-relational, numerical, multimodal, temporal knowledge graph로 확장된다.
- GraphRAG는 LLM이 답변할 때 text chunk뿐 아니라 관련 subgraph, path, triplet을 함께 제공하려는 접근이다.

## Knowledge Graph의 기본 단위

Knowledge Graph는 사람의 지식을 graph로 표현한다. 예를 들어 `Barack Obama --born in--> Honolulu`는 자연어 문장을 graph의 fact로 바꾼 예다.

| 구성 | 의미 | 예시 |
|---|---|---|
| Head entity | 관계의 출발점 | Barack Obama |
| Relation | 관계 타입 | born in |
| Tail entity | 관계의 도착점 | Honolulu |

이 세 요소를 triplet이라고 부른다. 자연어의 주어, 동사, 목적어와 비슷하게 볼 수 있지만 완전히 같지는 않다. Relation을 어떻게 정의하느냐에 따라 head와 tail의 방향이 바뀔 수 있고, 현실 지식은 단순한 삼형식보다 더 많은 부가 정보를 가진다.

## 왜 Embedding이 필요한가

Knowledge Graph는 node와 edge로 이루어진 이산적인 구조다. 반면 machine learning 모델은 보통 연속적인 feature vector를 계산한다. 따라서 entity와 relation을 vector space에 옮겨야 downstream model이나 AI application에서 활용하기 쉽다.

또 현실의 Knowledge Graph는 완전하지 않다. 가능한 entity와 relation 조합은 많지만 실제로 기록된 fact는 일부뿐이다. Knowledge Graph Embedding은 graph 구조를 보존한 vector representation을 학습해 빠진 지식을 추론하는 데 사용된다.

## Scoring Function과 모델 계열

Knowledge Graph Embedding 모델의 핵심은 scoring function이다. 모델은 어떤 triplet이 주어졌을 때 그 fact가 그럴듯한지 점수로 계산한다.

- 맞는 fact처럼 보이는 triplet은 높은 score를 받는다.
- 틀린 fact처럼 보이는 triplet은 낮은 score를 받는다.
- 비어 있는 head, relation, tail 후보를 넣어 ranking하면 missing link를 예측할 수 있다.

대표적인 모델 계열은 다음과 같이 나눠 볼 수 있다.

| 계열 | 핵심 직관 | 예시 |
|---|---|---|
| Translational Distance Model | `head + relation`이 `tail`과 가까워지도록 학습 | TransE 계열 |
| Semantic Matching Model | head, relation, tail 사이의 compatibility를 높이도록 학습 | RESCAL, DistMult, ComplEx 계열 |

세부 모델의 수식보다 중요한 점은 entity와 relation을 어떻게 표현하고, 어떤 scoring function으로 맞는 fact와 틀린 fact를 구분할지 설계한다는 것이다.

## Link Prediction과 평가 지표

Knowledge Graph Completion 또는 Link Prediction은 graph에 빠진 정보를 예측하는 task다. 예를 들어 `(?, capital_of, Hawaii)`처럼 head가 비어 있으면 가능한 entity 후보를 모두 넣어 보고 score가 높은 후보를 찾는다.

| Metric | 의미 | 방향 |
|---|---|---|
| Mean Rank | 정답 후보가 ranking에서 평균 몇 등인지 측정 | 낮을수록 좋다 |
| MRR | 정답 순위 역수의 평균 | 높을수록 좋다 |
| Hits@K | 정답이 상위 K개 후보 안에 들어간 비율 | 높을수록 좋다 |

검색이나 추천처럼 사용자에게 상위 몇 개 결과를 보여주는 서비스에서는 Hits@10 같은 지표가 직관적이다. 반대로 top-1 정답이 매우 중요한 문제에서는 MRR이나 Hits@1을 더 엄격하게 볼 수 있다.

## Triplet을 넘어서는 지식 표현

현실의 지식은 단순 triplet만으로 충분하지 않은 경우가 많다. 영화 수상 정보만 해도 영화, 수상 부문, 연도, 수상자, 감독 같은 부가 정보가 함께 붙는다.

| 확장 형태 | 설명 |
|---|---|
| Hyper-relational Knowledge Graph | main triplet에 qualifier를 붙여 부가 정보를 표현 |
| Numerical Knowledge Graph | 수치 속성이나 측정값을 함께 표현 |
| Multimodal Knowledge Graph | image, text, graph structure를 함께 사용 |
| Temporal Knowledge Graph | 시간이 지나며 바뀌는 fact를 표현 |

이 확장은 Knowledge Graph를 더 현실적인 데이터 구조로 만들지만, embedding과 reasoning 문제도 함께 복잡하게 만든다.

## Inductive Reasoning

전통적인 Knowledge Graph Embedding은 training time에 본 entity와 relation을 기준으로 inference하는 transductive setting에 가까운 경우가 많다.

하지만 실제 서비스에서는 새로운 entity와 relation이 계속 들어온다. Inductive reasoning은 inference time에 새로운 graph가 들어와도 구조 정보를 이용해 추론하려는 문제 설정이다.

새 entity는 주변 neighbor를 aggregation해 representation을 만들 수 있다. Relation은 neighbor 개념이 직접적으로 없기 때문에, 강의에서는 relation끼리의 graph를 만드는 접근이 소개되었다. 두 relation이 head나 tail entity를 많이 공유하면 서로 가까운 relation으로 보고 relation graph를 구성할 수 있다.

## Knowledge Graph Construction

Knowledge Graph를 모두 사람이 직접 그리기는 어렵다. 최근에는 LLM을 활용해 text에서 entity와 relation을 추출하고, 중복을 합치고, 검증을 거쳐 graph를 구성하는 흐름이 연구되고 있다.

| 단계 | 역할 |
|---|---|
| Entity Extraction | 문서에서 entity 후보를 찾는다 |
| Entity Canonicalization | 같은 대상을 가리키는 표현을 하나로 묶는다 |
| Relation Extraction | entity 사이의 관계를 추출한다 |
| Validation | 추출된 fact의 일관성과 신뢰도를 확인한다 |
| Deduplication | 중복 fact를 제거한다 |

도메인별 relation schema가 다르면 그대로 적용하기 어렵다. 그래서 실제 적용에서는 도메인 지식, 검증 규칙, graph database 운영 방식까지 함께 고려해야 한다.

## GraphRAG

GraphRAG는 Retrieval-Augmented Generation에서 retrieval 대상을 graph structure로 확장하는 접근이다. 질문에 등장한 entity를 Knowledge Graph에서 찾고, 관련 node, edge, triplet, path, subgraph를 LLM prompt에 함께 제공한다.

GraphRAG의 장점은 세 가지로 정리할 수 있다.

| 관점 | 기대 효과 |
|---|---|
| Grounding | 관련 fact와 relation을 함께 넣어 hallucination을 줄인다 |
| Explainability | 어떤 node와 path를 거쳐 답했는지 해석할 여지를 만든다 |
| Token Efficiency | 전체 문서 대신 관련 subgraph를 가져와 context를 줄인다 |

다만 graph를 많이 넣는다고 항상 좋아지는 것은 아니다. LLM이 복잡한 graph structure를 깊게 이해한다고 단정하기 어렵기 때문에, 필요한 subgraph를 고르고 불필요한 edge를 pruning하는 과정이 중요하다.

## 실무 관점

Graph 문제를 시작할 때는 무엇을 node로 둘지, 무엇을 edge 또는 relation으로 둘지 먼저 정해야 한다. 이 모델링이 잘 되면 node classification, link prediction, graph classification 같은 task로 문제를 바꿀 수 있다.

최소한의 skeleton graph가 있으면 Knowledge Graph Embedding이나 completion 기술로 빈 relation을 채워 나갈 수 있다. 반대로 아무 구조도 없는 상태에서는 graph 기반 추론을 시작하기 어렵다.

사내 데이터에서는 보안, 개인정보, 데이터 거버넌스도 중요하다. 공개 benchmark와 달리 실제 회사의 Knowledge Graph는 폐쇄 환경에서 관리해야 하는 경우가 많고, graph database와 검증 파이프라인을 함께 설계해야 한다.
