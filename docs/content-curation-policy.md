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
- Transformer / GPT / Next Token Prediction
- State-Space Model / Qwen3-Next
- Discrete Diffusion Language Model
- Scientific Foundation Model

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

## 강의자료 기반 이미지

공개 웹앱에는 강의자료 원본 슬라이드 캡처나 PDF 페이지 이미지를 그대로 싣지 않는다. 필요한 경우 강의자료의 개념 구조를 바탕으로 학습용 도식, 요약 이미지, flow diagram을 새로 제작해 사용한다.

이미지에는 다음 기준을 적용한다.

- 원본 슬라이드의 레이아웃, 장식, 페이지 이미지를 그대로 복제하지 않는다.
- 수식, 모델 구조, 개념 간 관계처럼 학습에 필요한 구조만 재작성한다.
- 출처가 강의자료임을 설명하되, 공개 가능한 파생 학습 노트임을 분명히 한다.
- 이미지 alt text를 제공한다.
