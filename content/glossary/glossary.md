# Glossary

실제 UI는 `src/data/glossary.ts`의 구조화 데이터를 사용합니다. 이 문서는 사람이 읽기 위한 용어 정리 초안입니다. 용어는 차시와 함께 `핵심 요소`, `개념`, `모델`, `함수`, `학습 과정`, `아키텍처`, `태스크`, `기법`으로 분류합니다.

## 1차시 핵심 요소

- Input x: 모델에 들어가는 입력값
- Label y: 모델이 맞혀야 하는 실제 정답
- Prediction y-hat: 모델이 계산한 예측값
- Parameter theta: 학습 과정에서 조정되는 값들의 묶음
- Weight w: feature의 영향도를 조절하는 학습 가능한 값
- Bias b: 선형 점수에 더해지는 학습 가능한 값
- Loss: 예측값과 정답의 차이를 수치화한 값
- Gradient: loss를 줄이기 위한 parameter 조정 방향

## 1차시 주요 개념

- Feature: 모델이 입력으로 받는 값
- Feature Engineering: 원본 데이터에서 문제 해결에 도움이 되는 새로운 입력값을 설계하거나 계산하는 작업
- Logistic Regression: 선형 점수를 sigmoid에 통과시켜 binary classification의 확률처럼 해석하는 모델
- Sigmoid: 임의의 실수값을 0과 1 사이 값으로 변환하는 함수
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
- Prompt: 모델이 어떤 맥락에서 어떤 출력을 생성할지 결정하는 입력
- In-context Learning: prompt 안의 예시와 문맥으로 문제 의도를 추정하는 방식
- Chain-of-thought: 바로 답을 내기보다 중간 추론 단계를 거치게 하는 방식
- Hallucination: 자연스럽지만 사실과 다른 내용을 생성하는 현상
- AI Infrastructure: LLM 실행을 위한 GPU, CPU, 메모리, 네트워크, 데이터센터 등 운영 기반
- State-Space Model: self-attention 비용 문제를 줄이려는 대안 시퀀스 모델 계열
- Masked Self-Attention: 현재 token이 미래 token을 보지 못하도록 가리는 attention 구조
- Gated DeltaNet: 긴 token 의존성과 효율성을 다루기 위한 sequence modeling 구조
- Qwen3-Next: 강의자료 기준 Gated DeltaNet과 masked self-attention을 3:1 비율로 섞는 hybrid 구조
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
