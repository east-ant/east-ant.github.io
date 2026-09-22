# Portfolio

andrewborstein.com 구조를 참고한 개인 포트폴리오 정적 사이트.

## 구조

- `index.html` — 페이지 전체 (Nav → Hero → About → Experience → Projects → Skills → Awards → Education → Contact → Footer)
- `style.css` — 스타일 (라이트/다크 자동, 반응형)
- `script.js` — 모바일 메뉴, 현재 섹션 하이라이트
- `assets/` — 프로필 사진(`profile.png`), 프로젝트 스크린샷(`project-1.png` …)
- `resume.pdf` — 이력서 (직접 추가)

## 로컬에서 보기

`index.html`을 브라우저로 열면 됩니다. (빌드 불필요)

## 배포 (GitHub Pages)

1. GitHub에 `<username>.github.io` 저장소 생성 (또는 아무 이름)
2. `git remote add origin https://github.com/<username>/<repo>.git`
3. `git push -u origin main`
4. 저장소 Settings → Pages → Source: `Deploy from a branch`, Branch: `main` / `/ (root)` → Save
5. 1~2분 후 `https://<username>.github.io/<repo>/` 접속
