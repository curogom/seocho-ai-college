# 08. Retrieval-Augmented Generation for LLMs

## 3줄 요약

- RAG는 LLM이 학습 시점 이후의 정보나 비공개 문서에 답할 수 있도록, 질문과 관련된 외부 근거를 검색해 prompt에 넣는 방식이다.
- Vector Database는 문서와 질문을 embedding vector로 표현하고, similarity search와 Approximate Nearest Neighbor Search로 관련 후보를 빠르게 찾는 기반이다.
- 최근 RAG는 단순 top-k 검색을 넘어 Query Rewriting, Reranking, Active Retrieval, Corrective RAG, Adaptive RAG, Self-RAG처럼 검색 여부와 검색 품질을 조절하는 흐름으로 확장된다.

## Instructor

KAIST 전산학부 이재길 교수  
Jae-Gil Lee  
Professor  
School of Computing, KAIST

## Core Flow

Vector Database -> Embedding -> Similarity Search -> Approximate Nearest Neighbor Search -> RAG -> Chunking -> Indexing -> Retriever -> Top-k Context -> Generation -> Naive RAG -> Advanced RAG -> Query Rewriting -> HyDE -> Reranking -> Modular RAG -> Active Retrieval -> DeepRAG -> Corrective RAG -> Adaptive RAG -> Self-RAG -> QuDAR

## Visual Notes

- `/session-visuals/session-08-rag-pipeline.svg`
- `/session-visuals/session-08-adaptive-rag.svg`

문서 준비 단계와 질의 시점의 검색-생성 단계를 나누고, 검색 품질을 조절하는 확장 구조까지 미리 연결한다.

## Notes

Vector Database는 문서, 이미지, 기타 객체를 다차원 vector로 저장하고 유사한 항목을 찾는 데 특화된 저장소다. RAG에서는 문서 chunk와 질문을 embedding model로 vector로 바꾼다. 의미가 가까운 문서와 질문은 vector space에서 가까워지도록 표현되므로, cosine similarity, inner product, L2 distance 같은 metric으로 관련 후보를 검색할 수 있다.

문서가 많아지면 질문 vector와 모든 문서를 정확히 비교하는 비용이 커진다. Approximate Nearest Neighbor Search는 hashing, quantization, graph-based index 같은 방법으로 검색 속도와 정확도를 절충한다. RAG 시스템은 보통 이 단계에서 넓은 후보를 빠르게 찾은 뒤, 필요하면 더 정교한 모델로 후보를 다시 정렬한다.

Retrieval-Augmented Generation은 LLM의 파라미터 지식만으로 답하지 않고, 답변 시점에 외부 문서를 검색해 prompt에 함께 넣는 접근이다. 기본 흐름은 세 단계다. Indexing에서는 문서를 chunk로 나누고 embedding과 metadata를 저장한다. Retrieval에서는 질문과 가까운 top-k chunk를 가져온다. Generation에서는 질문과 검색 근거를 함께 입력해 LLM이 답변을 생성한다.

Chunking은 단순한 전처리 세부 사항이 아니다. Chunk가 너무 크면 서로 다른 주제가 섞여 검색 정확도가 떨어지고 context window를 많이 쓴다. 너무 작으면 문맥이 끊겨 답변에 필요한 조건과 근거가 분리될 수 있다. Chunk 크기, overlap, metadata는 retrieval recall과 generation quality를 함께 좌우한다.

Naive RAG는 indexing, retrieval, generation을 순서대로 실행한다. Advanced RAG는 검색 전 단계에서 Query Rewriting이나 HyDE로 질문을 검색 친화적으로 바꾸고, 검색 후 단계에서 Reranking, summary, fusion으로 최종 context를 다듬는다. Modular RAG는 retrieve, rewrite, rerank, read, memory, routing 같은 모듈을 상황에 맞게 조합하거나 반복할 수 있게 확장한다.

Reranking은 초기 검색 결과를 그대로 LLM에 넣지 않고, query와 각 문서의 관련성을 다시 점수화해 순서를 조정하는 과정이다. 긴 context에서 모델이 입력의 시작과 끝에 놓인 정보에 더 민감해질 수 있으므로, 관련 근거를 앞쪽에 배치하고 불필요한 문서를 줄이는 일은 답변 정확도와 비용 모두에 중요하다.

최근 흐름은 검색을 항상 수행하는 고정 단계로 보지 않는다. Active Retrieval은 생성 중 불확실한 지점에서 추가 검색을 수행한다. DeepRAG는 복잡한 질문을 하위 질문으로 분해하고, 각 단계에서 모델의 내부 지식을 쓸지 외부 문서를 검색할지 선택한다. Corrective RAG는 검색 결과의 신뢰도에 따라 보완이나 재검색을 수행하며, Adaptive RAG는 질문 복잡도에 따라 no retrieval, single retrieval, iterative retrieval을 고른다. Self-RAG는 retrieval 필요성, 근거 유용성, 답변 자체를 self-critique로 점검한다.

QuDAR는 질의별로 keyword-based retrieval과 dense retrieval, 원본 query와 확장 query에서 나오는 여러 신호를 결합해 검색 전략을 조절하는 사례다. 핵심은 하나의 embedding model이나 retrieval 방식이 모든 질문에서 최선이라고 가정하지 않는 데 있다.

## 핵심 비교

| 구분 | Naive RAG | Advanced RAG | Modular RAG |
|---|---|---|---|
| 기본 구조 | Indexing -> Retrieval -> Generation | 기본 구조 전후에 최적화 추가 | 기능 모듈을 조합하고 반복 |
| 검색 전 | 원본 질문 사용 | Query Rewriting, HyDE | Routing, Rewrite 등 선택 |
| 검색 후 | Top-k context를 그대로 사용 | Reranking, Summary, Fusion | Read, Rerank, Memory 등 선택 |
| 강점 | 단순하고 빠르게 시작 가능 | 검색과 context 품질 개선 | 복잡한 질의에 유연하게 대응 |
| 주의점 | 관련 없는 근거가 섞일 수 있음 | 단계 증가에 따른 latency와 운영 복잡도 | routing과 평가 설계가 중요 |

## 사전 학습 체크포인트

| 개념 | 먼저 알고 있으면 좋은 이유 |
|---|---|
| Embedding | 질문과 문서를 같은 의미 공간의 vector로 표현하는 기반이다 |
| Similarity Search | 검색 결과가 왜 키워드 일치보다 의미적 관련성에 가까워질 수 있는지 이해한다 |
| Approximate Nearest Neighbor Search | 대규모 검색에서 속도와 정확도를 왜 절충하는지 이해한다 |
| Chunking | 검색 단위와 LLM context 단위가 왜 연결되는지 이해한다 |
| Reranking | 초기 후보와 최종 context를 분리해서 보는 감각을 잡는다 |
| Adaptive Retrieval | 검색을 매번 같은 방식으로 수행하지 않아야 하는 이유를 이해한다 |

## Reflection

- RAG가 Fine-tuning과 다른 점은 무엇이며, 각각 어떤 문제에 더 적합한가?
- 문서를 지나치게 크게 또는 작게 Chunking하면 어떤 문제가 생길 수 있는가?
- 초기 vector search 뒤에 Reranking이 필요한 이유는 무엇인가?
- 긴 context에 관련 문서를 많이 넣는 것이 항상 유리하지 않은 이유는 무엇인가?
- Adaptive RAG가 no retrieval, single retrieval, iterative retrieval을 나누는 기준은 무엇일 수 있는가?
- 사내 문서 RAG를 만든다면 metadata filter, access control, 출처 표기를 어느 단계에 넣어야 하는가?
