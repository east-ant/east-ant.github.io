// 푸터 연도 자동 갱신
document.getElementById("year").textContent = new Date().getFullYear();

// 모바일 메뉴 토글
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
links.addEventListener("click", (e) => {
  if (e.target.tagName === "A") links.classList.remove("open");
});

// 스크롤 위치에 따라 현재 섹션 내비 링크 강조
const sections = document.querySelectorAll("main section[id]");
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navAnchors.forEach((a) =>
        a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`)
      );
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);
sections.forEach((s) => observer.observe(s));
