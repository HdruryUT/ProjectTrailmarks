/* Gulo — shared interactivity */

// Mobile nav toggle
document.addEventListener("click", (e) => {
  const toggle = e.target.closest(".nav__toggle");
  if (toggle) {
    document.querySelector(".nav__links")?.classList.toggle("open");
  }
});

// Highlight current page in nav
(function markCurrent() {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav__links a").forEach((a) => {
    if (a.getAttribute("href") === path) a.setAttribute("aria-current", "page");
  });
})();

// Gallery lightbox
(function lightbox() {
  const gallery = document.querySelector(".gallery");
  if (!gallery) return;

  const box = document.createElement("div");
  box.className = "lightbox";
  box.innerHTML =
    '<button class="lightbox__close" aria-label="Close">&times;</button><img alt="">';
  document.body.appendChild(box);
  const boxImg = box.querySelector("img");

  gallery.addEventListener("click", (e) => {
    const fig = e.target.closest("figure");
    const img = fig?.querySelector("img");
    if (!img) return;
    boxImg.src = img.src;
    boxImg.alt = img.alt;
    box.classList.add("open");
  });
  const close = () => box.classList.remove("open");
  box.addEventListener("click", (e) => {
    if (e.target === box || e.target.closest(".lightbox__close")) close();
  });
  document.addEventListener("keydown", (e) => e.key === "Escape" && close());
})();

// Catch log filters
(function catchFilters() {
  const filters = document.querySelector(".filters");
  if (!filters) return;
  filters.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    filters.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.dataset.filter;
    document.querySelectorAll(".catch").forEach((c) => {
      const show = f === "all" || c.dataset.angler === f || c.dataset.type === f;
      c.style.display = show ? "" : "none";
    });
  });
})();

// Catch scoreboard tally
(function scoreboard() {
  const board = document.querySelector(".scoreboard");
  if (!board) return;
  const catches = document.querySelectorAll(".catch");
  const counts = {};
  catches.forEach((c) => {
    const a = c.dataset.angler;
    counts[a] = (counts[a] || 0) + 1;
  });
  board.querySelectorAll("[data-score]").forEach((el) => {
    const key = el.dataset.score;
    el.textContent = key === "total" ? catches.length : (counts[key] || 0);
  });
})();

// Season standings — highlight the leader in each category and crown a champion
(function standings() {
  const rows = document.querySelectorAll(".standings__row");
  if (!rows.length) return;
  let hWins = 0, mWins = 0;
  rows.forEach((row) => {
    const h = parseFloat(row.dataset.h), m = parseFloat(row.dataset.m);
    const sides = row.querySelectorAll(".standings__side");
    if (h > m) { sides[0].classList.add("win"); hWins++; }
    else if (m > h) { sides[1].classList.add("win"); mWins++; }
  });
  const champ = document.getElementById("champName");
  if (champ) {
    champ.textContent = hWins > mWins ? "Haiden 🏆"
      : mWins > hWins ? "Mario 🏆"
      : (hWins === 0 ? "Not started yet" : "Dead heat 🤝");
  }
})();

// Dark mode toggle (sun/moon in the header)
(function theme() {
  const btn = document.getElementById("themeToggle");
  if (!btn) return;
  const paint = () => {
    const dark = document.documentElement.getAttribute("data-theme") === "dark";
    btn.textContent = dark ? "☀️" : "🌙";
    btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  };
  paint();
  btn.addEventListener("click", () => {
    const dark = document.documentElement.getAttribute("data-theme") === "dark";
    if (dark) document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", "dark");
    try { localStorage.setItem("gulo-theme", dark ? "light" : "dark"); } catch (e) {}
    paint();
  });
})();

// Footer year
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});
