# 02. Large Language Models

## 3줄 요약

- 2차시는 RNN에서 Transformer로 넘어간 이유, BERT와 GPT의 차이, GPT의 prefill/decoding 구조를 다룬다.
- BERT는 encoder-only 구조로 문장 이해에 강하고, GPT는 decoder-only 구조로 이전 token을 조건으로 다음 token을 생성한다.
- 후반부에서는 Transformer의 self-attention 비용 문제를 줄이기 위한 State-Space Model, Qwen3-Next의 hybrid architecture, Scientific Foundation Model 흐름을 다룬다.

## Instructor

- KAIST 전산학부 박노성 교수
- Noseong Park
- Tenured Associate Professor
- School of Computing, KAIST

## Core Flow

RNN -> Token / Embedding -> Transformer / Self-Attention -> BERT -> GPT -> Prefill / Decoding -> Autoregressive Generation -> Prompt / In-context Learning -> Chain-of-thought / Hallucination -> AI Infrastructure -> State-Space Model -> Qwen3-Next -> Discrete Diffusion Language Model -> Scientific Foundation Model

## Notes

### 1. RNN과 Transformer

RNN은 token을 순차적으로 읽으며 hidden state를 업데이트한다. 그래서 긴 sequence를 처리할 때 병렬화가 어렵고, 오래된 정보가 희미해질 수 있다.

Transformer는 self-attention을 통해 token 간 관계를 병렬적으로 계산한다. 다만 모든 Transformer가 양방향인 것은 아니다. BERT는 encoder-only 구조라 양방향 문맥 이해에 가깝고, GPT는 decoder-only 구조라 masked self-attention을 사용하며 이전 token만 보고 다음 token을 생성한다.

### 2. Token과 Embedding

자연어는 그대로 모델이 계산할 수 없으므로 숫자 벡터로 바꿔야 한다. Token embedding은 token을 vector space의 특정 위치에 배치하는 작업이다. 의미가 비슷한 token은 비슷한 위치나 방향을 갖도록 학습된다.

Word와 token은 다르다. 하나의 word가 여러 token으로 쪼개질 수 있고, token은 subword 단위일 수 있다.

### 3. Transformer와 Self-Attention

Transformer는 2017년 Google의 기계 번역 연구에서 제안된 neural network architecture다. Attention은 문장 안의 token들이 서로 어떤 관계를 갖는지 계산하는 메커니즘이다. Self-attention은 같은 문장 안의 token들끼리 서로를 참고한다.

Encoder self-attention은 문장 전체를 하나의 평균값으로 압축하는 것이 아니라, 각 token을 문맥이 반영된 representation으로 갱신하는 과정이다.

### 4. BERT

BERT는 encoder-only Transformer 기반 language understanding model이다. 문장을 생성하기보다는 입력 문장의 문맥 표현을 만들고, 이를 분류, QA, NLI, 감성 분석 같은 이해 task에 사용한다.

### 5. GPT

GPT는 decoder-only Transformer다. 이전 token들을 조건으로 다음 token을 예측한다.

```text
Pr(next token | previous tokens)
```

GPT의 동작은 크게 두 단계로 볼 수 있다.

1. Prefill: 사용자의 prompt를 먼저 처리하고 이후 생성을 위한 KV cache를 준비한다.
2. Decoding: 이전 token들을 조건으로 다음 token을 하나씩 생성한다.

Prompt를 처리하는 prefill 단계는 병렬화가 가능하지만, 생성 단계는 이전 token이 다음 token의 조건이 되므로 순차적으로 진행된다.

### 6. Prompt와 In-context Learning

LLM은 prompt를 조건으로 다음 token 후보들의 확률분포를 계산한다. In-context learning 관점에서는 prompt 안의 예시와 문맥을 보고 사용자의 의도나 latent concept을 추정한 뒤 그에 맞는 출력을 생성한다고 볼 수 있다.

### 7. Chain-of-thought와 Hallucination

Chain-of-thought는 모델이 바로 답을 내기보다 중간 추론 단계를 거치게 하는 방식이다. 복잡한 문제에서는 성능을 높일 수 있지만, 항상 정답을 보장하지는 않는다. 또한 추론 단계를 길게 돌리면 비용과 latency가 증가한다.

Hallucination은 모델이 그럴듯하지만 사실과 다른 내용을 생성하는 현상이다. 자연스러운 문장이라고 해서 사실이라는 보장은 없다.

### 8. AI Infrastructure

LLM 서비스의 비용은 모델 크기, context 길이, prefill 비용, decoding 비용, GPU 메모리, 네트워크, latency 요구사항에 영향을 받는다.

AI 회사들의 경쟁축은 모델 구조뿐 아니라 GPU, CPU, 메모리, 네트워크, 서버 랙, 데이터센터 구조까지 포함한 전체 stack 최적화로 확장되고 있다. LPU라는 표현은 특정 회사의 공식 대표 용어로 단정하지 않고, LLM inference accelerator 일반 흐름으로 이해한다.

### 9. State-Space Models

State-Space Model은 Transformer의 self-attention 비용 문제를 줄이려는 대안 계열이다. Transformer self-attention은 token 간 pairwise 관계를 계산하므로 긴 sequence에서 비용이 커진다.

State-Space Model은 RNN처럼 상태를 업데이트하는 관점을 갖지만, 특정 수학적 구조를 이용해 병렬화하거나 convolution 형태로 계산할 수 있도록 만든다.

### 10. Qwen3-Next

Qwen3-Next는 기존 Transformer-only 접근과 다르게, Gated DeltaNet과 masked self-attention을 섞는 hybrid architecture로 이해할 수 있다.

강의자료 기준으로 Qwen3-Next-80B는 다음 구조를 3:1 비율로 interleave한다.

```text
Gated DeltaNet : Masked Self-Attention = 3 : 1
```

Gated DeltaNet은 긴 token 의존성, 긴 문맥 처리, 효율성을 담당하고, masked self-attention은 정밀한 reasoning과 token 간 세밀한 상호작용을 담당한다고 볼 수 있다.

### 11. Discrete Diffusion Language Models

Autoregressive LLM은 이전 token을 조건으로 다음 token을 하나씩 생성한다. 이 방식은 안정적이지만 긴 답변을 생성할 때 순차 생성 비용이 발생한다.

Discrete Diffusion Language Model은 문장을 점진적으로 복원하는 방식으로 language generation을 바라보려는 접근이다.

강의에서는 D3PM과 BERT식 mask 복원 구조의 연결도 함께 다룬다.

### 12. Scientific Foundation Model

Scientific Foundation Model은 LLM의 구조적 아이디어를 과학·공학 문제에 적용하려는 흐름이다.

LLM이 자연어 prompt에서 latent concept을 추정하고 적절한 출력을 생성하듯, Scientific Foundation Model은 관측 데이터에서 그 현상을 지배하는 PDE나 물리 법칙을 추정하고 forward/inverse problem을 풀려는 방향으로 볼 수 있다.

핵심 차이는 데이터다. LLM은 인터넷 텍스트, 논문, 코드 등을 대규모로 학습하지만, SFM은 PDE 해, 시뮬레이션, 관측 데이터, 실험 데이터가 중요하다.

과학 영역에서는 관측 데이터가 제한적일 수 있으므로 random PDE 조합, PINN, FNO, neural operator 같은 접근도 함께 논의된다.
