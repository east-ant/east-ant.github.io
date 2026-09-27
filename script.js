// 유리 커서: 마우스를 부드럽게 따라가고, 링크/버튼 위에서 커짐
(() => {
  const cursor = document.querySelector(".cursor");
  if (!cursor || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  let targetX = -100, targetY = -100, x = targetX, y = targetY;

  window.addEventListener("mousemove", (e) => {
    targetX = e.clientX; targetY = e.clientY;
    cursor.classList.add("visible");
  });
  document.addEventListener("mouseleave", () => cursor.classList.remove("visible"));
  window.addEventListener("mousedown", () => cursor.classList.add("down"));
  window.addEventListener("mouseup", () => cursor.classList.remove("down"));

  const hoverTargets = "a, button, .project-card, .mini-projects li";
  document.addEventListener("mouseover", (e) => {
    cursor.classList.toggle("hover", !!e.target.closest(hoverTargets));
  });

  (function follow() {
    x += (targetX - x) * 0.18;
    y += (targetY - y) * 0.18;
    cursor.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(follow);
  })();
})();

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

// 프로젝트 썸네일 video 로드 실패 시 → GIF → placeholder 순으로 대체
document.querySelectorAll("video.project-thumb[data-fallback]").forEach((video) => {
  const source = video.querySelector("source");
  source.addEventListener("error", () => {
    const img = document.createElement("img");
    img.className = "project-thumb";
    img.alt = video.dataset.alt || "";
    img.src = video.dataset.fallback;
    img.onerror = () => {
      img.onerror = null;
      img.src = `https://placehold.co/800x480?text=${encodeURIComponent(img.alt.split(" ")[0] || "Project")}`;
    };
    video.replaceWith(img);
  });
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
