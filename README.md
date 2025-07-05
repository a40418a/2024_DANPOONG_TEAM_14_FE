<p align="center">
  <!-- 로고 이미지 (원하시면 URL 넣어주세요) -->
</p>

<h1 align="center">동그라ME</h1>

<p align="center">
이동약자를 위한 여행지도 웹서비스입니다.<br/>
여행지 정보와 접근성을 시각적으로 쉽게 확인할 수 있도록 제작하였습니다.
</p>

---

## ✨ Features

- 이동약자를 위한 접근성 중심의 여행지 정보 제공
- 지도, 상세 정보, 북마크, 리뷰, 정보수정 페이지로 구분된 정보 구조
- TailwindCSS 기반의 일관된 반응형 디자인
- JWT 기반 사용자 인증 및 로그인 상태 관리
- Vercel을 통한 배포 자동화

---

## 📹 Screenshots

<p align="center">
  <!-- 캡쳐 이미지 URL 교체 -->
</p>

---

## 🛠️ Skills & Tech Stack

### 🖥️ Deploy

![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

### 💻 Develop

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

### 🎨 Design

![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

---

## 👫🏻 Contributors

| 이름   | 역할       |
| ------ | ---------- |
| 박민지 | 기획       |
| 박보영 | 디자인     |
| 최승아 | 프론트엔드 |
| 우진용 | 프론트엔드 |
| 송재훈 | 백엔드     |
| 김민준 | 백엔드     |

---

## 📦 주요 패키지

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

---

## 📂 디렉토리 구조

```
src/
├── api/
├── assets/
│   └── images/
├── components/
│   ├── ActionButtons/
│   ├── BookmarkItem/
│   ├── CategoryItem/
│   ├── CheckPopup/
│   ├── CheckboxInput/
│   ├── InputItem/
│   ├── KakaoMap/
│   ├── LocationItem/
│   ├── MarketInfo/
│   ├── MyCollection/
│   ├── ReviewDetailItem/
│   ├── ReviewItem/
│   ├── StoreInfoItem/
│   └── TypeSelectItem/
├── hooks/
├── layout/
│   ├── footer/
│   └── header/
├── pages/
│   ├── 01-login/
│   ├── 02-accept/
│   ├── 03-done/
│   ├── 03-exploreType/
│   ├── 03-type/
│   ├── 04-main/
│   ├── 05-bookmark/
│   ├── 05-market/
│   ├── 06-myReview/
│   ├── 06-reviewDetail/
│   ├── 06-submit/
│   ├── 08-category/
│   ├── 08-edit/
│   ├── 08-explore/
│   ├── 08-exploreTheme/
│   ├── 08-profile/
│   └── _404/
├── routes/
└── styles/
```

---

## 🌐 로컬에서 실행 방법

**배포 종료**

> 로컬에서 실행하려면 아래 명령어를 사용하세요:

```bash
git clone https://github.com/a40418a/2024_DANPOONG_TEAM_14_FE.git
cd 024_DANPOONG_TEAM_14_FE
npm install
npm run dev
```

---

## 🗄️ 백엔드 구조

API를 호출하여 데이터를 제공합니다.<br/>
인증 및 데이터 통신은 Vercel 배포 환경에서 관리됩니다.
