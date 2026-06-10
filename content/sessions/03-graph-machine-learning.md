# 3차시 Graph Machine Learning

## 핵심 요약

3차시는 그래프 기계학습의 입구를 다룬다. 여기서 Graph는 x-y chart가 아니라, 객체와 객체 사이의 관계를 node와 edge로 표현하는 자료 구조다.

- Graph는 각 객체 간의 관계성을 나타낸다.
- Knowledge Graph는 사람의 지식을 graph로 표현한 것이다.
- 사람은 많은 경우 관계를 따라가며 추론하므로, 인간의 사고를 따라가는 AI를 만들려면 관계 구조를 다루는 능력이 중요하다.
- 기계학습 모델은 숫자를 계산하므로, 이산적인 graph 구조를 feature vector나 embedding으로 바꾸는 Graph Representation Learning이 필요하다.

## AI / ML / DL과 Graph Machine Learning

AI, Machine Learning, Deep Learning은 포함 관계로 이해할 수 있다. 일반적으로 Deep Learning은 표현력이 강하고 성능이 높게 나오는 경우가 많지만, 특정 task에서는 전통적인 Machine Learning이나 규칙 기반 접근이 더 적합할 수 있다.

그래프 기계학습은 이 흐름에 관계 데이터 구조를 접목한다. 즉 문제의 핵심 신호가 개별 row나 sequence 안에만 있는 것이 아니라, 객체 사이의 연결에 있을 때 graph를 사용한다.

## Graph의 기본 단위

컴퓨터 과학에서 Graph는 객체와 관계를 함께 표현한다.

| 구성 요소 | 의미 | 예시 |
|---|---|---|
| Node / Vertex / Entity | 관계를 표현하고 싶은 객체 | 사람, 상품, 문서, 보험 청구 건, 장소 |
| Edge / Relation | 객체 사이의 연결 또는 의미 있는 관계 | 친구, 구매, 인용, 같은 작성자, 이동 가능 |
| Direction / Label | 관계의 방향성과 타입 | A follows B, User purchased Product |

World Wide Web, social network, product network, call graph, code property graph, scene graph, bioinformatics의 gene regulatory network, NLP의 abstract meaning representation graph는 모두 graph로 볼 수 있다.

## Knowledge Graph와 Ontology

Knowledge Graph는 사람의 지식을 graph로 표현한 구조다. 예를 들어 `Da Vinci --painted--> Mona Lisa`처럼 entity와 relation을 연결하면 하나의 fact를 만들 수 있다.

Palantir가 강조하는 ontology도 업무 도메인의 객체와 관계를 명시적으로 구조화한다는 점에서 Knowledge Graph와 맞닿아 있다. Ontology가 어떤 entity와 relation을 둘 것인지 정하는 설계도에 가깝다면, Knowledge Graph는 그 구조 위에 실제 지식과 관계를 채운 결과로 볼 수 있다.

| 개념 | 역할 |
|---|---|
| Ontology | 도메인에 어떤 객체와 관계 타입이 있는지 정의 |
| Knowledge Graph | 실제 entity와 relation을 연결해 지식을 graph로 표현 |
| Knowledge Graph Completion | 빠져 있는 head, relation, tail을 예측 |

Knowledge Graph가 중요한 이유는 관계를 따라 reasoning할 수 있기 때문이다. 질문 응답, web search, recommender system, chatbot은 모두 흩어진 지식을 연결하고 빠진 정보를 추론해야 하는 문제와 맞닿아 있다.

## Graph Representation Learning

기계 안에서 작동하려면 데이터는 결국 숫자화되어야 한다. Graph는 node와 edge로 이루어진 이산적인 구조라서, 그대로 일반적인 ML/DL 모델에 넣기 어렵다.

Graph Representation Learning은 graph의 구조 정보를 보존하면서 node, edge, subgraph, whole graph를 feature vector로 바꾸는 접근이다.

| 표현 수준 | 설명 | 연결되는 task |
|---|---|---|
| Node Embedding | 개별 node를 vector로 표현 | node classification, clustering, link prediction |
| Edge Embedding | node 사이의 관계 또는 interaction을 표현 | edge classification, relation prediction |
| Subgraph Embedding | 일부 구조를 하나의 vector로 표현 | motif, community, local pattern 분석 |
| Whole-Graph Embedding | graph 전체를 하나의 vector로 표현 | graph classification |

Graph Embedding은 graph를 low-dimensional vector space로 옮기되, 원래 graph의 structural information과 graph properties를 최대한 보존해야 한다. 원래 graph에서 가까운 node나 비슷한 역할의 node는 embedding space에서도 가까운 위치에 놓이는 것이 이상적이다.

## Graph Neural Network와 GCN

Graph Neural Network는 graph 위에서 동작하는 neural network다. 핵심 아이디어는 target node의 representation을 배울 때 node 자신의 feature만 쓰지 않고, neighbor node의 representation도 함께 모은다는 것이다.

Graph Convolutional Network는 이 관점을 설명하기 좋은 대표 구조다.

1. Target node를 정한다.
2. Target node의 neighbor를 찾는다.
3. Neighbor representation을 aggregate한다.
4. Neural network를 통과시켜 target node embedding을 업데이트한다.

Computation Graph는 target node의 representation을 계산할 때 어떤 neighbor를 참고할지 펼쳐 놓은 구조다. Network neighborhood가 computation graph를 정의한다.

| Layer | 들어오는 정보 |
|---|---|
| Layer-0 | target node 자신의 input feature |
| Layer-1 | 직접 연결된 1-hop neighbor 정보 |
| Layer-k | k개의 edge를 거쳐 닿는 k-hop distant node 정보 |

Layer가 깊어지면 더 먼 neighbor의 정보를 반영할 수 있다. 다만 모든 neighbor를 무작정 많이 쓰면 계산량이 커지고 node별 특성이 흐려질 수 있으므로, 어떤 범위의 neighbor를 참고할지 설계가 필요하다.

## 대표 Task

Graph에서 자주 푸는 문제는 크게 세 가지로 정리할 수 있다.

| Task | 예측 대상 | 예시 |
|---|---|---|
| Node Classification | 개별 node의 class | 리뷰가 fake인지, 보험 청구 건이 suspicious한지 |
| Link Prediction | 두 node 사이의 missing link | 친구 추천, 빠진 지식 발견, 관계 추천 |
| Graph Classification | graph 전체의 class | 분자 구조가 약 후보인지 분류 |

Graph embedding이나 GNN이 잘 학습되었는지는 downstream task 성능으로 간접 확인한다.

## 활용 사례

Graph Machine Learning은 관계가 중요한 도메인에서 힘을 얻는다.

- Recommender System: 사용자, 상품, 콘텐츠, 선호 관계를 graph로 표현한다.
- Fraud Detection: 리뷰, 계정, 거래, 보험 청구 건 사이의 관계 패턴으로 이상 여부를 분류한다.
- Web Security: code property graph나 call graph로 보안 취약점을 분석한다.
- Bioinformatics: gene regulatory network처럼 생물학적 요소 간 관계를 모델링한다.
- Spatio-Temporal Graph: 공간적 연결과 시간 변화를 함께 사용해 교통, 날씨, 센서 데이터를 예측한다.
- Financial Domain Applications: risk view, quantitative investment, compliance management처럼 여러 data silo의 관계를 연결한다.

이번 복습 범위는 Graph Models, Graph Representation Learning, Graph Embedding, Node Embedding, GCN 기본 구조, fraud detection, spatio-temporal graph, financial domain applications까지다. Knowledge Graph Embedding의 세부 구조는 다음 범위에서 더 자세히 다룬다.

