# Github의 Public Repository의 Issue 찾기
---
## 프로젝트 설정 및 실행 방법
### 설정 및 환경 구성
- React, TypeScript, React Router, Vite, Axios, Eslint
- IDE : Webstorm
### 실행 방법
```
npm install
npm run dev
```
- 브라우저에서 http://localhost:5173 으로 볼 수 있음

---
## 요구사항
1. 검색창에서 Repository명을 입력해서 검색

2. 검색된 Public Repository 등록
- 등록 개수 최대 4개 제한
- 최대 개수 초과 등록 시 사용자에게 알림
- LocalStorage에 저장

3. 등록된 Repository 삭제

4. 등록된 Public Repository의 Issue 보기
- Issue 제목, Repository 명 필수 표현
- Issue 클릭 시 상세 페이지로 이동
- Pagination로 Issue 보기

---
