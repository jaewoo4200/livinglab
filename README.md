# 혼자ON 2차 MVP 데모

이 폴더에는 **반응형 웹 기반 생활 운영 플랫폼** `혼자ON 2차 MVP`의 정적 프로토타입이 들어 있습니다.

## 파일 구성

- `index.html` : 메인 페이지
- `styles.css` : 반응형 스타일시트
- `app.js` : 화면 렌더링, 페르소나 전환, 체크리스트 저장, 도움 요청 템플릿 복사 등 인터랙션

## 실행 방법

### 가장 쉬운 방법
- `index.html` 파일을 브라우저에서 바로 열기

### 권장 방법
```bash
cd honjaon_mvp2_demo
python3 -m http.server 8000
```
그 뒤 브라우저에서 `http://localhost:8000` 접속

## 데모 포인트

- 4개 페르소나 전환
- 1차 MVP vs 2차 MVP 비교
- 온보딩 체크리스트 진행률 저장 (`localStorage`)
- 도움 요청 시나리오별 템플릿 복사
- 안심 귀가 타이머 시뮬레이션
- 외국인 유학생 다국어 표현 카드
- 독거노인용 케어 모드 화면

## 확장 제안

실제 개발 시에는 아래 방식으로 확장하면 됩니다.

- Next.js + TypeScript + Tailwind + shadcn/ui
- Supabase / Firebase 기반 인증·DB
- Kakao Map / Naver Map 연동
- 알림(PWA Push) 추가
- 학교 국제처 / 지역 복지관 / 관리실 파트너 데이터 연동
