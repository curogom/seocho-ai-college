# 용어 사전

차시별 핵심 용어를 한국어와 영어로 함께 정리한 학습용 용어 사전입니다. 용어는 차시와 함께 핵심 요소, 개념, 모델, 함수, 학습 과정, 아키텍처, 태스크, 기법으로 분류합니다.

## 1차시 핵심 요소

- Input x: 모델에 들어가는 입력값
- Label y: 모델이 맞혀야 하는 실제 정답
- Prediction y-hat: 모델이 계산한 예측값
- Parameter theta: 학습 과정에서 조정되는 값들의 묶음
- Weight w: feature의 영향도를 조절하는 학습 가능한 값
- Bias b: 선형 점수에 더해지는 학습 가능한 값
- Loss: 예측값과 정답의 차이를 수치화한 값
- Gradient: loss를 줄이기 위한 parameter 조정 방향
- Feature Vector: 여러 feature를 모델이 계산할 수 있도록 vector 형태로 정리한 입력 표현
- Ground Truth: 학습 또는 평가에서 기준이 되는 실제 정답

## 1차시 주요 개념

- Feature: 모델이 입력으로 받는 값
- Feature Engineering: 원본 데이터에서 문제 해결에 도움이 되는 새로운 입력값을 설계하거나 계산하는 작업
- Logistic Regression: 선형 점수를 sigmoid에 통과시켜 binary classification의 확률처럼 해석하는 모델
- Sigmoid: 임의의 실수값을 0과 1 사이 값으로 변환하는 함수
- Decision Boundary: 모델이 서로 다른 class를 나누는 기준
- Gradient Descent: loss가 줄어드는 방향으로 parameter를 반복적으로 조정하는 최적화 방법
- Training: loss를 줄이기 위해 parameter를 업데이트하는 과정
- Inference: 학습된 parameter를 고정한 뒤 새 input에 대한 prediction을 계산하는 과정
- Representation Learning: 모델이 task에 유용한 내부 표현을 스스로 학습하는 접근
- CNN: 이미지처럼 주변 구조가 중요한 데이터에서 local pattern을 찾는 데 강한 신경망 구조
- RNN: 순서가 있는 데이터를 처리하기 위해 이전 상태를 다음 계산에 반영하는 신경망 구조

## 2차시 주요 용어

- Token: 언어 모델이 처리하는 텍스트 단위
- Embedding: token을 계산 가능한 vector representation으로 바꾼 표현
- Transformer: Self-attention을 중심으로 token 간 관계를 계산하는 시퀀스 모델 구조
- Self-Attention: 같은 sequence 안의 token들이 서로를 참조해 관계를 계산하는 구조
- BERT: Encoder-only Transformer 기반 language understanding model
- GPT: Decoder-only Transformer 기반 autoregressive generation model
- Prefill: prompt를 먼저 처리해 이후 token 생성을 위한 cache를 준비하는 단계
- Decoding: 이전 token들을 조건으로 다음 token을 하나씩 생성하는 단계
- Autoregressive Generation: 이미 생성된 token을 조건으로 다음 token을 순차 생성하는 방식
- Autoregressive Model: 이전 token 또는 이전 상태를 조건으로 다음 값을 예측하는 모델
- Next Token Prediction: 이전 token sequence를 조건으로 다음 token 확률 분포를 예측하는 학습 목표
- Cross Entropy: 정답 token 확률이 높아지도록 학습하는 대표 loss
- KV Cache: Transformer decoding에서 이미 계산한 key와 value를 저장해 다음 token 생성 비용을 줄이는 cache
- Prompt: 모델이 어떤 맥락에서 어떤 출력을 생성할지 결정하는 입력
- In-context Learning: prompt 안의 예시와 문맥으로 문제 의도를 추정하는 방식
- Chain-of-thought: 바로 답을 내기보다 중간 추론 단계를 거치게 하는 방식
- Hallucination: 자연스럽지만 사실과 다른 내용을 생성하는 현상
- AI Infrastructure: LLM 실행을 위한 GPU, CPU, 메모리, 네트워크, 데이터센터 등 운영 기반
- State-Space Model: self-attention 비용 문제를 줄이려는 대안 시퀀스 모델 계열
- Masked Self-Attention: 현재 token이 미래 token을 보지 못하도록 가리는 attention 구조
- Gated DeltaNet: 긴 token 의존성과 효율성을 다루기 위한 sequence modeling 구조
- Qwen3-Next: 강의자료 기준 Gated DeltaNet과 masked self-attention을 3:1 비율로 섞는 hybrid 구조
- Hybrid Architecture: 서로 다른 sequence module의 장점을 조합해 비용과 성능의 균형을 맞추는 구조
- Discrete Diffusion Language Model: token sequence 같은 이산 데이터 생성을 diffusion 관점으로 다루려는 언어 모델 계열
- Scientific Foundation Model: PDE 해, 시뮬레이션, 관측 데이터 등 과학·공학 데이터를 중심으로 하는 foundation model 흐름

## 3차시 주요 용어

- Graph: 개체를 node로, 개체 간 관계를 edge로 표현하는 데이터 구조
- Node: graph에서 개체를 나타내는 단위
- Edge: graph에서 node와 node 사이의 연결 또는 관계
- Relation: edge가 어떤 의미의 연결인지 나타내는 타입
- Knowledge Graph: 사람의 지식을 entity와 relation의 graph로 표현한 구조
- Ontology: 도메인에서 어떤 entity와 relation을 둘 것인지 정의하는 구조
- Triplet: head entity, relation, tail entity로 이루어진 하나의 지식 단위
- Knowledge Graph Completion: graph에 빠진 head, relation, tail을 예측하는 task
- Graph Embedding: graph 구조 정보를 보존하면서 vector representation으로 변환하는 방법
- Node Embedding: 개별 node를 vector로 표현하는 방법
- Edge Embedding: node 사이의 연결 또는 relation을 vector로 표현하는 방법
- Subgraph Embedding: graph의 일부 구조를 vector로 표현하는 방법
- Whole-Graph Embedding: graph 전체를 하나의 vector로 표현하는 방법
- Graph Representation Learning: graph 정보를 downstream task에 유용한 representation으로 학습하는 접근
- Graph Mining: graph에서 community, cluster, pattern, anomaly 같은 구조적 신호를 찾는 접근
- Graph Neural Network: graph 위에서 neighbor 정보를 모아 node representation을 업데이트하는 neural network
- Graph Convolutional Network: neighbor 정보를 집계해 node representation을 업데이트하는 GNN 계열 모델
- Message Passing: GNN에서 node들이 edge를 따라 정보를 주고받는 과정
- Neighborhood Aggregation: target node 주변 neighbor 정보를 모으는 과정
- Computation Graph: target node의 representation 계산에 필요한 neighbor와 연산 의존 관계
- k-hop Neighbor: k개의 edge를 거쳐 도달할 수 있는 node
- Node Classification: graph 안의 개별 node class를 예측하는 task
- Link Prediction: 두 node 사이에 edge가 존재할 가능성이나 relation을 예측하는 task
- Graph Classification: graph 전체의 class를 예측하는 task
- Fraud Detection: 관계 패턴을 이용해 정상과 이상 또는 사기를 구분하는 task
- Spatio-Temporal Graph: 공간적 연결과 시간 변화를 함께 표현하는 graph
- Homophily: 연결된 node들이 비슷한 속성이나 label을 갖는 경향
- Heterophily: 연결된 node들이 서로 다른 속성이나 label을 갖는 경향

## 4차시 주요 용어

- Knowledge Graph Embedding: entity와 relation을 vector representation으로 바꾸는 기법
- Sparse Graph: 가능한 연결 조합에 비해 실제 edge가 적은 graph
- Entity Embedding: Knowledge Graph의 entity를 vector로 표현한 값
- Relation Embedding: Knowledge Graph의 relation type을 계산 가능한 representation으로 표현한 값
- Scoring Function: triplet이 그럴듯한 fact인지 점수로 계산하는 함수
- Translational Distance Model: head + relation이 tail과 가까워지도록 학습하는 KGE 계열
- TransE: h + r이 t와 가까워지는 직관을 사용하는 대표 KGE 모델
- Semantic Matching Model: head, relation, tail의 compatibility를 높이는 KGE 계열
- RESCAL: relation을 matrix로 보고 head-tail interaction을 계산하는 모델
- DistMult: 같은 차원끼리의 곱을 중심으로 score를 계산하는 모델
- ComplEx: complex space로 embedding을 확장하는 KGE 모델
- Mean Rank: 정답 후보의 평균 순위를 보는 link prediction metric
- MRR: 정답 순위 역수의 평균을 보는 metric
- Hits@K: 정답이 상위 K개 후보 안에 들어간 비율
- Hyper-relational Knowledge Graph: main triplet에 qualifier를 붙여 부가 정보를 표현하는 graph
- Qualifier: main triplet에 붙는 연도, 출처, 수상자, 수치 같은 부가 정보
- Numerical Knowledge Graph: 수치 속성이나 측정값을 함께 표현하는 Knowledge Graph
- Multimodal Knowledge Graph: image, text, graph structure를 함께 다루는 Knowledge Graph
- Temporal Knowledge Graph: 시간이 지나며 바뀌는 fact를 표현하는 Knowledge Graph
- Inductive Reasoning: 새로운 entity나 relation이 들어와도 구조 정보로 추론하는 설정
- Transductive Reasoning: training time에 본 entity와 relation 집합 안에서 예측하는 설정
- Relation Graph: relation을 node로 보고 relation 사이의 구조적 유사성을 표현한 graph
- Knowledge Graph Construction: text나 raw data에서 entity와 relation을 추출해 graph를 만드는 과정
- Entity Extraction: 문서에서 entity 후보를 찾는 과정
- Entity Canonicalization: 같은 대상을 가리키는 표현을 하나의 entity로 묶는 과정
- Relation Extraction: entity 사이의 relation을 추출하는 과정
- GraphRAG: RAG의 retrieval 대상을 node, edge, triplet, path, subgraph로 확장하는 접근
- Retrieval-Augmented Generation: 외부 문서나 지식을 검색해 LLM context로 제공하는 방식
- Subgraph Retrieval: 질문과 관련된 부분 graph를 찾는 과정
- Graph Database: node와 edge 중심으로 데이터를 저장하고 탐색하는 데이터베이스
- Data Governance: 데이터의 보안, 품질, 접근 권한, 최신성, 책임 범위를 관리하는 체계

## 6차시 주요 용어

- Mobility Big Data: 사람, 차량, 항공기, 센서가 남기는 대규모 이동경로 데이터
- Trajectory: 시간 순서대로 연결된 위치 기록
- Smart Card Data: 대중교통 승하차 기록으로 구성된 mobility data
- Location Inference: 직접 관측되지 않은 시간대의 위치를 주변 관측값과 규칙으로 추정하는 과정
- Mobility Regularity: 같은 시간대에 같은 장소를 반복 방문하는 정도를 나타내는 지표
- In-store Trajectory: WiFi나 Beacon 기반 센서로 기록한 매장 실내 동선
- Dwell Time: 특정 구역에 머문 시간
- Zone Ratio: 전체 체류 시간 중 특정 구역 체류 시간이 차지하는 비율
- Revisit Prediction: 현재까지의 방문 기록과 동선 feature로 향후 재방문 여부를 예측하는 task
- Spatial Stream Processing: 빠르게 들어오는 위치 stream에서 event를 탐지하는 처리 방식
- Complex Event Processing: 여러 event와 규칙을 조합해 의미 있는 상황을 감지하는 기법
- Digital Tachograph: 사업용 차량의 운행 기록을 남기는 장치와 데이터 원천
- Tactical Trajectory: 항공기나 추적 대상의 시간 순서 위치 기록
- Latent Space: 모델이 입력 데이터를 내부적으로 표현하는 공간
- Anomaly Detection: 정상 패턴에서 크게 벗어난 입력을 위험 또는 특이 상황으로 판단하는 task
- Digital Twin: 현실 시스템의 상태와 동작을 데이터로 복제한 디지털 표현

## 7차시 주요 용어

- Infectious Disease Data Science: 감염병 대응에 필요한 예측, 자원 배분, 역학조사, 정책 평가를 데이터와 AI로 보조하는 접근
- Imported Case Prediction: 해외에서 국내로 유입될 감염자 수와 추세를 예측하는 task
- Infection Risk: 국가나 지역의 감염 확산 정도를 나타내는 시간 변화 신호
- Inbound Flow: 특정 국가나 지역에서 목적지로 들어오는 사람의 흐름
- Hi-COVIDNet: 해외 유입 COVID-19 확진자 수를 예측하기 위한 deep learning 모델
- LSTM: 순서가 있는 데이터를 처리하며 과거 상태를 다음 계산에 반영하는 recurrent neural network 계열 모델
- Fine-Grained EEM: 지역과 업종처럼 세밀한 단위에서 감염병의 경제 영향을 예측하는 모델링
- COVID-EENet: 경제 활동 데이터와 집단감염 데이터를 결합해 지역-업종 단위 매출 변화 추세를 예측하는 framework
- District-Business Pair: 특정 지역과 특정 업종의 조합
- Economy View: 지역-업종의 평소 소비 패턴을 담는 feature 관점
- Geography View: 지역 사이의 물리적, 사회적 가까움을 담는 feature 관점
- Epidemic View: 집단감염 사례와 확산 강도를 담는 feature 관점
- Microscopic Encoder: 세부 수준의 영향을 encoding하는 하위 구조
- Macroscopic Aggregator: 세부 수준의 영향을 더 큰 관점으로 모아 예측에 반영하는 구조
- Digital Contact Tracing: 위치나 접촉 데이터를 활용해 감염 가능 접촉과 이동 경로를 추정하는 공중보건 지원 방식
- Cellular Trajectory: 스마트폰이 접속한 기지국 sequence로 표현된 이동 궤적
- POI Reconstruction: 거친 위치 신호에서 실제 방문했을 가능성이 높은 point of interest를 추정하는 과정
- Pincette: efficiency, periodicity, popularity view를 이용해 POI 방문 가능성을 추정하는 방법론
- Privacy-Preserving Data Science: 분석 목적을 달성하면서 개인정보 노출을 줄이도록 설계하는 데이터 사이언스 접근
