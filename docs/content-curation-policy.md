# Content Curation Policy

## 원칙

이 프로젝트는 강의 내용을 복습 가능한 학습 노트로 정리한다. 전사문이나 수업 중 발화를 그대로 노출하지 않고, 학습에 필요한 개념만 추출해 중립적인 문장으로 재작성한다.

## Source Priority

1. 강의자료 PDF
2. 사용자의 수업 노트
3. 강의 전사문

전사문은 ASR 오류와 강의 외 발화가 섞일 수 있으므로 raw 파일로만 보관한다.

## 반영할 내용

- AI / Machine Learning / Deep Learning 포함 관계
- Classification / Classifier
- Feature Engineering
- Logistic Regression / Odds / Log Odds / Logit / Sigmoid
- Decision Boundary
- Representation Learning
- DNN / Hidden Layer / Parameter
- Training / Inference
- Loss / Gradient Descent / Local Minimum
- CNN / Filter / Convolution
- RNN / Language Modeling
- Token / Embedding
- Transformer / Self-Attention / Masked Self-Attention
- BERT / GPT / Next Token Prediction
- Prefill / Decoding / Autoregressive Generation
- Prompt / In-context Learning
- Chain-of-thought / Hallucination
- AI Infrastructure
- State-Space Model / Qwen3-Next
- Discrete Diffusion Language Model
- Scientific Foundation Model
- Graph / Node / Edge / Relation
- Knowledge Graph / Ontology / Triplet
- Knowledge Graph Completion
- Graph Representation Learning
- Graph Embedding / Node Embedding
- Graph Neural Network / Graph Convolutional Network
- Message Passing / Neighborhood Aggregation
- k-hop Neighbor
- Node Classification / Link Prediction / Graph Classification
- Fraud Detection / Spatio-Temporal Graph

## 2차시 정리 기준

- Transformer는 self-attention 기반 architecture로 설명하고, 모든 Transformer가 양방향이라고 쓰지 않는다.
- Encoder self-attention은 문장 전체를 평균으로 압축하는 방식이 아니라 token별 context-aware representation을 만드는 과정으로 설명한다.
- GPT는 decoder-only Transformer로 설명하고, prompt 처리는 encoder가 아니라 prefill 단계로 표현한다.
- BERT output은 분류, QA, NLI, 감성 분석 같은 이해 task에 쓰이는 contextual representation으로 설명한다.
- LPU는 NVIDIA 공식 대표 용어로 단정하지 않는다.
- Qwen3-Next-80B는 강의자료 기준 Gated DeltaNet과 masked self-attention을 3:1 비율로 interleave하는 hybrid architecture로 정리한다.

## 3차시 정리 기준

- Graph는 x-y chart가 아니라 객체 간 관계성을 표현하는 자료 구조로 설명한다.
- Knowledge Graph는 사람의 지식을 graph로 표현한 것이며, ontology와 relation schema 관점까지 함께 정리한다.
- Graph Representation Learning은 이산적인 graph 구조를 feature vector로 바꾸는 흐름으로 설명한다.
- GCN은 target node가 neighbor representation을 aggregate해 node embedding을 업데이트하는 구조로 설명한다.
- 3차시 복습 범위는 GCN 기본 구조, graph task, fraud detection, spatio-temporal graph, financial domain applications까지로 둔다.
- Knowledge Graph Embedding 상세는 다음 범위로 남기고, 3차시에서는 concept-level 연결만 제공한다.

## 제외할 내용

- 특정 국가, 인종, 이민, 영주권 관련 장황한 발화
- 특정 기업 또는 리더에 대한 감정적 평가
- 정치·사회비평성 발화
- 교수 개인사와 가족사 중심의 긴 에피소드
- 강의자 개인 이메일, 전화번호 등 직접 연락처
- 주식·투자 판단처럼 보일 수 있는 발화
- 비속어, 농담, 사담
- 강의 주제와 직접 연결되지 않는 조직문화 평가

## 전사문 처리 방식

```text
원문 발화
-> 개념 추출
-> 중립적 설명
-> 학습자용 문장으로 재작성
```

예시:

```text
Feature Engineering은 원본 데이터에서 문제 해결에 도움이 되는 새로운 값을 계산해 모델 입력으로 추가하는 작업이다.
```

## 시각 노트

시각 노트는 수업에서 다룬 개념 구조를 복습하기 쉬운 도식, 요약 이미지, flow diagram으로 정리한다.

이미지에는 다음 기준을 적용한다.

- 수식, 모델 구조, 개념 간 관계처럼 학습에 필요한 구조만 재작성한다.
- 도식은 사이트의 학습 노트 톤과 시각 체계에 맞춰 자체 제작한다.
- 이미지 alt text를 제공한다.
