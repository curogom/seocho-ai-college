# 08. Retrieval-Augmented Generation for LLMs

## 3줄 요약

- Vector Database는 content와 query를 embedding vector로 표현하고, Approximate Nearest Neighbor Search로 의미적으로 가까운 후보를 빠르게 찾는 RAG의 검색 기반이다.
- RAG는 indexing, retrieval, generation으로 구성되며, chunking, metadata, reranking이 최종 답변에 들어갈 근거의 품질을 결정한다.
- 최근 RAG는 query rewriting, hybrid retrieval, active retrieval, self-critique를 통해 언제 무엇을 검색할지 동적으로 선택하는 방향으로 확장된다.

## Instructor

KAIST 전산학부 이재길 교수  
Jae-Gil Lee  
Professor  
School of Computing, KAIST

## Core Flow

Vector Database -> Embedding -> Query -> Similarity Search -> Cosine Similarity -> Approximate Nearest Neighbor Search -> PQ / LSH / HNSW -> RAG -> Chunking -> Indexing -> Retriever -> Top-k Context -> Generation -> Naive RAG -> Advanced RAG -> Query Rewriting -> HyDE -> Reranking -> Cross-Encoder -> ColBERT -> Modular RAG -> Active Retrieval -> DeepRAG -> Corrective RAG -> Adaptive RAG -> Self-RAG -> Self-Knowledge Guided Retrieval Augmentation -> Hybrid Retrieval -> QuDAR

## Visual Notes

- `/session-visuals/session-08-rag-pipeline.svg`
- `/session-visuals/session-08-adaptive-rag.svg`

문서를 검색 가능한 근거로 준비하는 과정과, 질문마다 검색 전략을 조절하는 확장 흐름을 함께 정리한다.

## Notes

Vector Database는 텍스트, 이미지, 음악처럼 서로 다른 content를 embedding vector로 저장하고 유사한 항목을 찾는 저장소다. 핵심은 content와 query를 같은 embedding model로 변환해 의미적으로 가까운 항목이 vector space에서도 가깝게 놓이도록 만드는 데 있다. 실제 vector는 수백 차원 이상이 일반적이며, 각 차원에 사람이 해석 가능한 이름이 붙는 것은 아니다.

Similarity Search는 query vector와 저장된 document vector의 거리를 비교해 후보를 찾는다. Cosine Similarity는 두 vector의 방향이 얼마나 비슷한지 보는 대표 metric이며, inner product와 L2 distance도 사용된다. 하지만 수백 차원의 vector 수백만 개를 매 query마다 모두 비교할 수는 없으므로, Vector Database는 Approximate Nearest Neighbor Search를 사용한다.

강의에서는 ANN search를 빠르게 만드는 대표 전략으로 Product Quantization, Locality-Sensitive Hashing, HNSW를 소개했다. Product Quantization은 vector를 압축해 memory와 비교 비용을 줄이고, Locality-Sensitive Hashing은 가까운 vector가 같은 bucket에 들어갈 가능성을 높여 검색 범위를 줄인다. HNSW는 가까운 vector를 graph edge로 연결해 이웃을 따라 탐색한다. 이 지점에서 정확도, latency, memory cost의 절충이 생긴다.

RAG는 LLM의 파라미터 지식만으로 답하지 않고, 답변 시점에 외부 문서를 검색해 prompt에 함께 넣는 접근이다. Indexing에서는 원천 문서를 load하고 적절한 chunk로 나눈 뒤 embedding과 metadata를 저장한다. Retrieval에서는 query와 관련된 top-k chunk를 찾는다. Generation에서는 질문과 검색 근거를 함께 LLM에 넣어 답변을 생성한다. Indexing은 주로 offline에서, retrieval과 generation은 사용자의 질문이 들어온 run time에 실행된다.

Chunking은 단순한 전처리 세부 사항이 아니다. Chunk가 너무 크면 서로 다른 주제가 섞여 retrieval precision이 낮아지고 context window를 많이 쓴다. 너무 작으면 답변에 필요한 조건과 근거가 분리돼 문맥이 끊긴다. Chunk 크기, overlap, metadata filter는 retrieval recall, citation 가능성, generation quality를 함께 좌우한다.

Naive RAG는 indexing, retrieval, generation을 순서대로 실행한다. Advanced RAG는 검색 전 단계에서 Query Rewriting이나 HyDE를 통해 query를 검색 친화적으로 바꾸고, 검색 후 단계에서 Reranking, summary, fusion으로 최종 context를 다듬는다. Modular RAG는 retrieve, rewrite, read, rerank, memory, routing 같은 기능을 필요에 따라 조합하거나 반복할 수 있도록 확장한다.

HyDE는 query에 대한 가상 답변 문서를 먼저 생성한 뒤 그 문서의 embedding으로 retrieval하는 Query Rewriting 방식이다. 사용자의 짧은 질문보다 답변 형태의 문서가 관련 document와 의미적으로 더 가깝게 놓일 수 있다는 점을 활용한다. 다만 원래 query에 들어 있던 정확한 entity나 용어가 확장 과정에서 흐려질 수 있으므로, 모든 query에 항상 유리하다고 볼 수는 없다.

Reranking은 초기 retrieval 후보를 query-document 관련성으로 다시 점수화해, LLM에 넣을 근거의 순서와 수를 정하는 단계다. Bi-encoder retrieval은 query와 document를 각각 embedding하므로 빠르고, Cross-encoder는 둘을 함께 Transformer에 넣어 더 정밀하게 점수화하지만 비용이 크다. ColBERT는 document representation을 미리 계산하고 late interaction을 사용해 이 둘 사이의 절충을 시도한다. 강의에서는 긴 context의 시작과 끝에 있는 정보가 더 잘 활용될 수 있는 Lost in the Middle 문제도 reranking이 필요한 이유로 다루었다.

기본 RAG에는 세 가지 한계가 있다. 긴 답변에서는 생성 도중에도 추가 근거가 필요할 수 있다. 복잡한 질문은 하위 질문으로 분해해 여러 단계의 reasoning과 retrieval을 결합해야 할 수 있다. 또 관련성이 낮거나 실제 답변에 도움이 되지 않는 문서를 고정 개수만큼 넣으면 LLM의 판단을 방해할 수 있다. 이 한계가 Active Retrieval, DeepRAG, Corrective RAG, Adaptive RAG, Self-RAG, Self-Knowledge Guided Retrieval Augmentation으로 이어진다.

Active Retrieval은 생성 중 낮은 확신의 token이나 다음 문장의 정보 필요성을 신호로 추가 검색을 수행한다. DeepRAG는 복잡한 질문을 하위 질문으로 나누고, 각 단계에서 모델의 내부 지식을 쓸지 외부 문서를 검색할지 선택하는 trajectory를 학습한다. Corrective RAG는 retrieval 결과의 confidence에 따라 보완이나 재검색을 수행한다. Adaptive RAG는 질문 복잡도에 따라 no retrieval, single retrieval, iterative retrieval 전략을 선택한다.

Self-RAG는 retrieval 필요성, 가져온 문서의 관련성, 생성 답변이 문서에 의해 뒷받침되는지를 self-critique로 점검한다. Self-Knowledge Guided Retrieval Augmentation도 관련 있어 보이는 문서가 실제 답을 푸는 데 유용한지를 구분하려 한다. 즉 검색 결과의 relevance와 답변을 위한 usefulness는 같은 지표가 아니다.

QuDAR는 강의에서 소개된 질의별 hybrid retrieval 사례다. 원본 query와 확장 query, keyword-based retrieval과 dense retrieval의 네 가지 결과를 질의별로 결합한다. reciprocal rank fusion, confidence-based weighting, LLM-based scoring 같은 방식으로 최종 순서를 만든다. 핵심은 하나의 retriever나 하나의 query form이 모든 질문에 최적이라고 가정하지 않는 데 있다.

## 핵심 비교

| 구분 | Naive RAG | Advanced RAG | Modular RAG |
|---|---|---|---|
| 기본 구조 | Indexing -> Retrieval -> Generation | 기본 체인 전후에 최적화 추가 | 기능 모듈을 조합하고 반복 |
| 검색 전 | 원본 query 사용 | Query Rewriting, HyDE | Routing, Rewrite 등을 필요에 따라 선택 |
| 검색 후 | Top-k context를 바로 사용 | Reranking, Summary, Fusion | Read, Rerank, Memory 등을 조합 |
| 강점 | 단순하고 빠르게 시작 가능 | 검색과 context 품질 개선 | 복잡한 질의에 유연하게 대응 |
| 주의점 | 관련 없는 근거가 섞일 수 있음 | latency와 운영 복잡도 증가 | routing과 평가 설계가 중요 |

## ANN 색인과 재순위화

| 단계 | 대표 방식 | 역할 | 절충점 |
|---|---|---|---|
| 후보 검색 | PQ / LSH / HNSW | 고차원 vector에서 가까운 후보를 빠르게 탐색 | exact search보다 근사 오차 가능 |
| 빠른 관련성 계산 | Bi-encoder | query와 document를 각각 encoding | 빠르지만 세밀한 상호작용은 제한적 |
| 정밀 재순위화 | Cross-encoder | query-document 쌍을 함께 읽고 점수화 | 후보마다 inference 비용 발생 |
| 속도-정확도 절충 | ColBERT | precomputed document representation과 late interaction | index와 비교 로직이 더 복잡 |

## 적응형 검색 전략

| 접근 | 검색을 조절하는 방식 |
|---|---|
| Active Retrieval | 생성 중 불확실성에 따라 추가 검색 |
| DeepRAG | 하위 질문마다 내부 지식과 외부 검색을 선택 |
| Corrective RAG | retrieval confidence에 따라 보완 또는 재검색 |
| Adaptive RAG | 질문 복잡도에 따라 no/single/iterative retrieval 선택 |
| Self-RAG | retrieval 필요성, 근거, 답변을 self-critique로 점검 |
| QuDAR | query form과 retriever 조합을 질의별로 hybridize |

## 실습 참고

- Chroma 기반 Embedding Retrieval 실습 (Google Colab): https://colab.research.google.com/drive/1DU-dg8vs6cuYNoLbD8qnLO_GY-wc6tVu?usp=sharing

SciQ 과학 문제의 support 문서를 Chroma collection에 적재하고, 질문과 의미적으로 가까운 근거를 찾는 embedding retrieval 실습이다. RAG에서 generation 이전의 retrieval 단계를 코드로 확인할 수 있다.

### 실습에서 확인할 코드 흐름

1. dataset의 support 문서 100개를 ids와 metadata로 collection.add()에 넣고, question을 query_texts로 전달해 가장 가까운 support를 찾는다.
2. 강의 노트의 기본 all-MiniLM-L6-v2와 all-MiniLM-L12-v2를 비교해 보고, 새 collection에는 cosine 거리 기반 HNSW 공간을 지정해 결과와 distances가 어떻게 달라지는지 확인한다.
3. n_results를 1에서 2 이상으로 늘려 정답 support가 포함되는지, distances가 낮아도 실제 질문에 답하는 근거인지 직접 비교한다.
4. SciQ support 대신 문서 chunk를 넣고 metadata에 출처, 문서 버전, 권한 정보를 기록한다. 운영 환경에서는 기본 ephemeral client 대신 영속 저장소와 문서 갱신 절차를 함께 설계한다.

## Reflection

- Vector Database가 exact nearest neighbor search 대신 ANN index를 쓰는 이유는 무엇인가?
- Chunk size와 overlap은 retrieval precision, context completeness, token cost에 각각 어떤 영향을 주는가?
- HyDE가 원래 query보다 유리할 수 있는 상황과 불리할 수 있는 상황은 무엇인가?
- Bi-encoder retrieval 뒤에 Cross-encoder reranking을 붙이는 이유는 무엇인가?
- 관련 있는 문서가 실제 답변에는 도움이 되지 않을 수 있는 이유는 무엇인가?
- 복잡한 질문에서 DeepRAG의 retrieval trajectory가 단일 검색보다 유리한 이유는 무엇인가?
- 사내 문서 RAG를 만든다면 권한, 최신성, citation을 어느 단계에서 검증해야 하는가?
