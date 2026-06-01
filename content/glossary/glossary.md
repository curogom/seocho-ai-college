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

## 2차시 예고 용어

- Transformer: Self-attention을 중심으로 token 간 관계를 계산하는 시퀀스 모델 구조
- GPT: Decoder-only Transformer 기반 autoregressive language model 계열
- Masked Self-Attention: 현재 token이 미래 token을 보지 못하도록 가리는 attention 구조
- Qwen3-Next: Gated DeltaNet과 masked self-attention을 섞는 hybrid 구조
- Gated DeltaNet: 긴 token 의존성과 효율성을 다루기 위한 sequence modeling 구조
