# 06-2. Data Science for Infectious Disease Response

## 3줄 요약

- 감염병 대응 데이터 사이언스는 검역, 재난지원금, 역학조사를 서로 다른 예측 문제로 나누어 다룬다.
- Hi-COVIDNet은 해외 국가별 Infection Risk와 Inbound Flow를 X로 보고 Imported Case 수를 Y로 예측하는 흐름으로 이해할 수 있다.
- COVID-EENet과 Pincette 사례는 경제 피해 예측과 POI Reconstruction에서 세밀한 단위의 feature, 집계 데이터, privacy-aware 설계가 중요하다는 점을 보여준다.

## Instructor

KAIST 전산학부 이재길 교수  
Jae-Gil Lee  
Professor  
School of Computing, KAIST

## Core Flow

Infectious Disease Data Science -> Imported Case Prediction -> Infection Risk -> Inbound Flow -> Hi-COVIDNet -> Transformer / LSTM -> Fine-Grained EEM -> COVID-EENet -> District-Business Pair -> Economy / Geography / Epidemic View -> Microscopic Encoder -> Macroscopic Aggregator -> Digital Contact Tracing -> Cellular Trajectory -> POI Reconstruction -> Pincette -> Efficiency / Periodicity / Popularity View -> Privacy-Preserving Data Science

## Visual Notes

- `/session-visuals/session-06-infectious-disease-response-flow.svg`
- `/session-visuals/session-06-contact-tracing-flow.svg`

검역, 지역경제, 역학조사 사례를 문제 구조와 데이터 흐름 중심으로 정리한다.

## Notes

Imported Case Prediction은 해외에서 유입될 확진자 수와 추세를 예측하는 task다. X는 출발 국가의 감염 상황, 유입 흐름, 출발지-도착지 환경 같은 설명 변수이고, Y는 질병관리 통계에서 확인되는 해외 유입 확진자 수다. 감염병이 해외 유입으로 시작될 수 있기 때문에 제한된 검역 자원을 어디에 배치할지 판단하려면 국가별 감염 위험과 국내 유입량을 함께 봐야 한다.

Hi-COVIDNet은 country-level representation과 continent-level representation을 구성한다. Country-level encoder는 감염 추세와 유입 흐름을 결합하고, Transformer와 LSTM을 통해 위험한 시점과 시간적 추세를 반영한다.

COVID-EENet은 Fine-Grained Economic-Epidemiological Modeling을 목표로 한다. 개인 거래 내역을 직접 노출하는 방식이 아니라 지역, 업종, 성별, 연령대, 시간 단위로 집계된 카드 통계를 활용한다. 2020년 매출을 2019년 같은 시점과 비교한 감소 폭을 예측 대상으로 두고, 경제 활동 데이터와 집단감염 데이터를 결합해 district-business pair 단위의 매출 변화 추세를 예측한다. Economy-view, Geography-view, Epidemic-view feature가 함께 사용된다.

Digital Contact Tracing 영역에서는 기지국 궤적처럼 거친 위치 데이터에서 실제 방문 POI를 재구성하려 한다. 정밀 GPS나 카드 사용 내역을 모두 확인하면 정확도는 높아질 수 있지만 사생활 침해가 커진다. Pincette는 사람들이 효율적인 이동 경로를 선호한다는 Efficiency View, 반복 방문 패턴을 보는 Periodicity View, 인기 장소를 반영하는 Popularity View를 함께 활용해 프라이버시 부담을 줄이면서 필요한 추정을 수행하려는 접근이다.

## 현재 활용 관점

감염병 대응은 예측 정확도만으로 충분하지 않다. 데이터가 사람의 이동, 소비, 건강 위험과 연결되기 때문에 목적 제한, 데이터 최소 수집, 익명화, 설명 가능성, 사후 검증이 함께 필요하다.

## 사전 학습 체크포인트

| 개념 | 먼저 알고 있으면 좋은 이유 |
|---|---|
| Spatio-Temporal Data | 감염 위험은 시간과 공간을 동시에 따라 움직인다 |
| Transformer / LSTM | 감염 추세와 유입 흐름의 시간 의존성을 모델링한다 |
| Feature Engineering | 경제, 지리, 감염병 관점을 분리해 입력 feature를 만든다 |
| POI Reconstruction | 거친 위치 신호에서 실제 방문 장소를 추정한다 |
| Privacy-Preserving Data Science | 감염병 대응 데이터는 공익과 개인 권리의 균형이 중요하다 |
| X / Y Definition | 무엇을 입력으로 보고 무엇을 예측할지 먼저 정해야 한다 |

## Reflection

- Imported Case Prediction에서 Infection Risk와 Inbound Flow를 함께 봐야 하는 이유는 무엇인가?
- COVID-EENet이 지역과 업종을 묶은 district-business pair 단위로 예측하는 이유는 무엇인가?
- 카드 데이터를 개인 거래 내역이 아니라 집계 통계로 다루는 이유는 무엇인가?
- Economy-view, Geography-view, Epidemic-view feature는 각각 어떤 정보를 담는가?
- 기지국 기반 궤적으로 POI를 추정할 때 효율성, 주기성, 대중성이 왜 필요한가?
- 감염병 대응 데이터 사이언스에서 프라이버시 설계가 모델 성능만큼 중요한 이유는 무엇인가?
