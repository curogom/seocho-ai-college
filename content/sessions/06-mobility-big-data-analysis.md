# 06. Mobility Big Data Analysis

## 3줄 요약

- 모빌리티 빅데이터는 스마트폰, 스마트카드, WiFi/Beacon, 내비게이션, 센서, 항적 기록처럼 시간에 따른 이동경로를 남기는 데이터에서 출발한다.
- 교통카드와 매장 실내 동선 사례는 이동 규칙성, 체류 시간, 구역별 관심, 재방문 가능성을 feature로 바꾸는 과정이 중요하다는 점을 보여준다.
- 차량 운행기록과 비행항적 사례는 실시간 공간 스트림 처리와 이상치 탐지를 통해 위험 상황을 조기에 감지하는 방향으로 확장된다.

## Instructor

KAIST 전산학부 이재길 교수  
Jae-Gil Lee  
Professor  
School of Computing, KAIST

## Core Flow

Mobility Big Data -> Trajectory Data Sources -> Smart Card Data -> Location Inference -> Mobility Regularity -> In-store Trajectory -> Dwell Time / Zone Ratio -> Revisit Prediction -> Spatial Stream Processing -> Complex Event Processing -> Digital Tachograph -> Tactical Trajectory -> Feature Engineering -> Latent Space -> Anomaly Detection -> Digital Twin / Data Governance

## Visual Notes

- `/session-visuals/session-06-mobility-data-flow.svg`
- `/session-visuals/session-06-risk-detection-flow.svg`

수업 자료의 사례를 원본 슬라이드 그대로 옮기지 않고, 복습용 데이터 흐름과 모델링 흐름으로 다시 정리한다.

## Notes

Mobility Big Data는 이동 주체의 위치가 시간 순서대로 기록된 데이터다. 실외에서는 스마트폰, 스마트카드, 카메라, 내비게이션, SNS가 원천이 될 수 있고, 실내에서는 WiFi나 Beacon 기반 센서가 동선 데이터를 만든다.

Smart Card Data 사례에서는 승하차 기록을 시간대별 위치 리스트로 바꾸고, 관측되지 않은 시간대의 위치를 주변 승하차 기록으로 추정한다. 같은 시간대에 같은 장소를 반복 방문하는 정도는 Mobility Regularity로 볼 수 있다.

In-store Trajectory 사례에서는 매장 안 구역별 Dwell Time, Zone Ratio, 방문 시간, 매장 외부 감지 빈도, 유사 동선 여부를 feature로 사용해 Revisit Prediction을 수행한다.

Spatial Stream Processing 사례에서는 위치와 속도가 계속 들어오는 stream에서 규칙에 맞는 이벤트를 감지한다. Complex Event Processing은 실시간 위치 stream과 polygon 같은 공간 조건을 결합해 호출 빈번 지역이나 이상 상황을 찾는 데 활용될 수 있다.

Tactical Trajectory 사례에서는 항적, 지형, 기상 정보를 함께 보고 위험 여부를 판단한다. 모델이 학습한 정상 이동 패턴에서 벗어나는 입력은 Latent Space에서 낮은 확률을 갖는 Anomaly로 볼 수 있다.

## 현재 활용 관점

모빌리티 데이터는 교통, 리테일, 국방·안보, 디지털 트윈에서 활용도가 높다. 다만 이동경로는 개인의 생활 패턴을 강하게 드러내므로 익명화, 보존 기간, 접근 권한, 목적 제한 같은 Data Governance를 함께 설계해야 한다.

## 사전 학습 체크포인트

| 개념 | 먼저 알고 있으면 좋은 이유 |
|---|---|
| Time Series | 위치가 시간 순서로 쌓이므로 시간 축 해석이 필요하다 |
| Feature Engineering | 원천 위치 로그를 모델 입력으로 바꾸는 과정이 성능을 좌우한다 |
| Classification | 재방문 여부나 위험 여부를 class로 예측한다 |
| Anomaly Detection | 정상 이동 패턴에서 벗어난 데이터를 위험 신호로 본다 |
| Data Governance | 위치 데이터는 프라이버시와 운영 책임을 함께 고려해야 한다 |

## Reflection

- 이동경로 데이터를 단순 좌표 목록이 아니라 feature로 바꾸려면 어떤 전처리가 필요한가?
- Mobility Regularity는 어떤 상황에서 유용하고, 어떤 상황에서 오해를 만들 수 있는가?
- 실내 동선에서 체류 시간이 길다는 사실은 항상 구매 의도와 연결되는가?
- 공간 스트림 처리에서 batch 분석과 다른 어려움은 무엇인가?
- 위험 예측에서 Anomaly Detection을 사용할 때 전문가 기준치가 필요한 이유는 무엇인가?
