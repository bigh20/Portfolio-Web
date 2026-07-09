document.addEventListener("DOMContentLoaded", () => {
  console.log("Site Gladstone-style chargé !");
});

document.addEventListener("scroll", () => {
  document.querySelectorAll(".fade-in").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});

// Animation au scroll
document.addEventListener("scroll", () => {
  document.querySelectorAll(".fade-in").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.animationPlayState = "running";
    }
  });
});
