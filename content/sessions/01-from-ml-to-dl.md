# 01. From Machine Learning to Deep Learning

## 3줄 요약

- 전통 ML은 사람이 좋은 feature를 설계하고, 모델은 그 feature를 기준으로 분류나 예측을 수행했다.
- Deep Learning은 여러 hidden layer를 통해 feature representation 자체를 모델이 학습하도록 만든 흐름이다.
- Logistic Regression, DNN, CNN, RNN은 입력을 표현으로 바꾸고 예측한다는 큰 구조로 연결된다.

## Instructor

KAIST 전산학부 박노성 교수  
Noseong Park  
Tenured Associate Professor  
School of Computing, KAIST

## Core Flow

AI -> Machine Learning -> Feature Engineering -> Logistic Regression -> Sigmoid / Probability -> Deep Learning -> Representation Learning -> DNN -> CNN -> RNN

## Visual Notes

- `/session-visuals/session-01-ml-to-dl-flow.svg`
- `/session-visuals/session-01-logistic-sigmoid.svg`

수업에서 다룬 핵심 구조를 복습용 도식으로 정리한다.

## Notes

Machine Learning은 사람이 규칙을 직접 작성하는 대신, 데이터로부터 원하는 task를 수행하는 함수를 학습하는 방식이다.

전통적인 Applied ML에서는 좋은 feature를 만드는 일이 성능을 크게 좌우한다. Deep Learning은 여러 hidden layer를 통해 입력 데이터를 더 분리하기 쉬운 표현 공간으로 변환한다.

전통 ML 흐름에서는 input x, label y, prediction y-hat, parameter theta, weight w, bias b를 구분해 모델을 이해한다. Feature vector는 모델이 계산할 수 있도록 정리된 입력 표현이고, ground truth는 학습 또는 평가에서 기준이 되는 실제 정답이다.

Logistic Regression은 feature vector를 선형 점수 z = w^T x + b로 바꾼 뒤 sigmoid를 통과시켜 binary classification의 확률처럼 해석한다. Decision boundary는 모델이 class를 나누는 기준선이며, sigmoid output이 0.5를 넘는지 같은 threshold와 연결된다.

Training은 loss를 줄이기 위해 parameter를 업데이트하는 과정이다. Loss는 prediction과 label의 차이를 수치화하고, gradient descent는 loss가 줄어드는 방향으로 weight와 bias를 조금씩 조정한다.

Inference는 학습이 끝난 parameter를 고정한 상태에서 새로운 input에 대한 prediction을 계산하는 과정이다. 실제 서비스에서는 training 비용과 inference latency를 분리해서 생각해야 한다.
