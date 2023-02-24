# Github의 Public Repository의 Issue 찾기
---
## 프로젝트 설정 및 실행 방법
### 설정 및 환경 구성
- React, TypeScript, React Router, Vite, Axios, Eslint, [Ant Design](https://ant.design/components/overview)
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

![image](https://user-images.githubusercontent.com/10824092/221197282-9df2a647-e53d-4736-8ef1-d93a36755844.png)

2. 검색된 Public Repository 등록
- 등록 개수 최대 4개 제한
- 최대 개수 초과 등록 시 사용자에게 알림
- LocalStorage에 저장

![image](https://user-images.githubusercontent.com/10824092/221197390-41fd3a0e-4f6e-4a1c-8c0a-3241c42b71ec.png)

3. 등록된 Repository 삭제

![image](https://user-images.githubusercontent.com/10824092/221197462-56d134ac-5aa3-48c7-b3d5-08761c99a2af.png)

4. 등록된 Public Repository의 Issue 보기
- Issue 제목, Repository 명 필수 표현
- Issue 클릭 시 상세 페이지로 이동
- Pagination로 Issue 보기

![image](https://user-images.githubusercontent.com/10824092/221197556-764bfbd8-b672-414f-80b6-aef5774914b6.png)
![image](https://user-images.githubusercontent.com/10824092/221198144-1b0ce833-1cd7-4860-b885-179837ddae4a.png)

---
## 특이사항
### 디자인 UI 컴포넌트 라이브러리는 Ant Design을 사용
- Pagination은 직접 구현
### Github API는 REST API를 사용
- 사용된 Github API의 Response Model 파일은 공식문서의 Response schema를 [json-schema-to-typescript](https://github.com/bcherny/json-schema-to-typescript)를 사용하여 Interface로 변환

