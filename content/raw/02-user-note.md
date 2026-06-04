# 02 User Note

2차시 주제는 Large Language Models입니다.

핵심 흐름:

RNN -> Token / Embedding -> Transformer / Self-Attention -> BERT -> GPT -> Prefill / Decoding -> Autoregressive Generation -> Prompt / In-context Learning -> Chain-of-thought / Hallucination -> AI Infrastructure -> State-Space Model -> Qwen3-Next -> Discrete Diffusion Language Model -> Scientific Foundation Model

정리 기준:

- Transformer는 architecture이며 항상 양방향이라고 설명하지 않는다.
- Encoder self-attention은 문장을 평균으로 압축하는 것이 아니라 token별 context-aware representation을 만든다.
- GPT는 decoder-only 구조이며 prompt 처리는 prefill 단계로 설명한다.
- BERT의 output은 이해 task에 쓰이는 contextual representation으로 설명한다.
- LPU는 NVIDIA 공식 대표 용어처럼 단정하지 않는다.
- Qwen3-Next-80B는 강의자료 기준 Gated DeltaNet과 Masked Self-Attention을 3:1 비율로 interleave하는 구조로 정리한다.

이 파일은 원자료 보관용이며 웹 페이지에는 정제된 차시 노트만 연결한다.
