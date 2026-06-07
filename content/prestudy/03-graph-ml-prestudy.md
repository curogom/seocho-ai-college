# 3차시 예습 과제: Graph Machine Learning

## 예습 목표

이번 예습의 목표는 다음 문장을 이해하는 것이다.

> GNN은 내가 누구인가를 내 feature만 보고 판단하지 않고, 내가 누구와 연결되어 있는지도 함께 보고 판단하는 모델이다.

3차시부터는 데이터 형태가 바뀐다. 기존 차시에서 주로 다룬 데이터가 image = grid, text = sequence, table = row / column이었다면, 이번 차시는 graph = node + edge + relation + structure를 다룬다.

이번 예습에서는 수식보다 먼저 관계 데이터를 graph로 보는 감각을 잡는다.

## 과제 1. Graph = Node + Edge

### 학습 목표

그래프가 무엇인지 이해한다.

### 정리할 내용

Graph는 객체와 객체 간 관계를 표현하는 데이터 구조다.

- Node: 개체
- Edge: 개체 간 연결 또는 관계

### 예시

- Social Network: node = 사람, edge = 친구 관계
- Product Network: node = 사용자, 상품, edge = 구매, 조회, 리뷰 작성
- Indoor Navigation: node = 매장, 복도, 계단, 엘리베이터, 화장실, edge = 이동 가능한 경로

### 과제

아래 3개 도메인을 graph로 바꿔 적는다.

1. 실내 내비게이션
2. 쇼핑몰 추천 시스템
3. 보험사기 탐지

각 도메인마다 node, edge, graph로 표현하면 좋은 이유를 작성한다.

## 과제 2. Node / Edge / Relation

### 학습 목표

Node, edge, relation의 차이를 이해한다.

### 정리할 내용

Node는 개체이고 edge는 개체 간 연결이다. Relation은 edge의 의미 또는 타입이다.

예를 들면 `User --purchased--> Product`, `User --reviewed--> Product`, `Store --connected_to--> Corridor`에서 purchased, reviewed, connected_to가 relation이다.

### 과제

실내 내비게이션 도메인에서 relation type을 5개 이상 정의하고, 각 relation이 왜 필요한지 한 줄로 설명한다.

예시:

- connected_to
- same_floor_as
- nearby
- accessible_by_wheelchair
- has_congestion_level
- requires_vertical_movement

## 과제 3. Graph Embedding

### 학습 목표

Graph embedding이 왜 필요한지 이해한다.

### 정리할 내용

Graph embedding은 graph의 구조 정보를 최대한 보존하면서 graph를 low-dimensional vector space로 바꾸는 것이다.

Graph는 그대로는 일반 ML/DL 모델이 다루기 어렵다. 그래서 node, edge, subgraph, whole graph를 vector로 바꿔야 한다.

### 구분

- Node embedding: node를 vector로 표현
- Edge embedding: edge를 vector로 표현
- Subgraph embedding: 부분 graph를 vector로 표현
- Whole-graph embedding: 전체 graph를 vector로 표현

### 과제

1. 왜 graph를 vector로 바꿔야 하는가?
2. Node embedding과 whole-graph embedding은 무엇이 다른가?
3. 실내 내비게이션에서 node embedding을 만든다면 어떤 정보가 반영되어야 하는가?

## 과제 4. Node Embedding

### 학습 목표

Node embedding의 목적을 이해한다.

### 정리할 내용

Node embedding은 각 node를 vector로 표현하는 것이다. 원래 graph에서 비슷한 node는 embedding space에서도 가깝게 위치해야 한다.

### 과제

아래 node들이 embedding space에서 가까워야 하는지 멀어야 하는지 판단하고 이유를 작성한다.

1. 같은 층에 있는 엘리베이터와 계단
2. 같은 브랜드의 매장 두 개
3. 혼잡도가 비슷한 복도 두 개
4. 물리적으로 멀지만 같은 카테고리의 매장 두 개
5. 출입구와 비상구

## 과제 5. GNN

### 학습 목표

GNN이 왜 필요한지 이해한다.

### 정리할 내용

GNN은 graph 위에서 동작하는 neural network다.

일반적인 DNN은 각 데이터를 독립적인 row처럼 보기 쉽다. 하지만 graph에서는 node 하나를 이해할 때 그 node와 연결된 이웃 node 정보가 중요하다.

핵심 문장:

> GNN은 target node의 feature와 neighbor node들의 정보를 함께 사용해 node representation을 업데이트한다.

### 과제

아래 문제에서 GNN이 왜 유용한지 설명한다. 각 항목마다 단일 feature table로 부족한 이유와 graph로 보면 좋아지는 점을 작성한다.

1. 보험사기 탐지
2. 가짜 리뷰 탐지
3. 실내 혼잡도 예측
4. 쇼핑몰 개인화 추천

## 과제 6. Message Passing / Neighborhood Aggregation

### 학습 목표

GNN의 핵심 연산을 이해한다.

### 정리할 내용

Message passing은 node들이 서로 정보를 주고받는 과정이다. Neighborhood aggregation은 target node 주변의 neighbor 정보를 모으는 과정이다.

기본 흐름:

1. Target node의 neighbor를 찾는다.
2. Neighbor node들의 embedding을 가져온다.
3. Sum / mean / attention 등으로 aggregate한다.
4. Neural network를 통과시켜 target node embedding을 업데이트한다.

### k-hop 이해

- Layer 0: 자기 자신의 feature
- Layer 1: 1-hop neighbor 정보 반영
- Layer 2: 2-hop neighbor 정보 반영
- Layer k: k-hop neighbor 정보 반영

### 과제

실내 내비게이션 graph를 기준으로 아래 질문에 답한다.

1. 현재 위치 node의 1-hop neighbor는 무엇인가?
2. 2-hop neighbor 정보가 필요한 상황은 언제인가?
3. 너무 먼 hop까지 섞으면 어떤 문제가 생길 수 있는가?
4. 혼잡도 예측에서는 몇 hop 정도가 적당할 것 같은가?

## 수업 중 집중해서 들을 질문

1. 이 강의에서 graph embedding과 GNN을 어떻게 구분하는가?
2. Node embedding은 downstream task에 어떻게 연결되는가?
3. GNN에서 aggregation 방식은 mean, sum, attention 중 무엇을 쓰는가?
4. Graph layer가 깊어질수록 어떤 장점과 문제가 생기는가?
5. Fraud detection 사례에서는 왜 relation-aware GNN이 필요한가?
6. Homophily와 heterophily는 어떤 차이인가?
7. 실내 내비게이션이나 혼잡도 예측에 적용한다면 graph를 어떻게 설계해야 하는가?
8. Graph ML이 기존 ML/DL과 가장 크게 다른 지점은 무엇인가?

## 제외 범위

이번 예습 과제에서는 아래 항목을 깊게 다루지 않는다. 이름만 확인하고 수업 후 복습 또는 이후 차시에서 다룬다.

- DRAG
- SpoT-Mamba
- FinePrompt
- Graph Adversarial Attack
- Knowledge Graph
- Knowledge Graph Embedding
- TransE
- MRR
- Hit@N
- Hyper-relational Knowledge Graph
- Visual-Textual Knowledge Graph
- Inductive Inference
- Fact Generation
