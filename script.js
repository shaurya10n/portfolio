const li = document.querySelectorAll(".lines");
const sec = document.querySelectorAll("section");

function activeMenu() {
  let len = sec.length;
  while (--len && window.scrollY + 97 < sec[len].offsetTop) {}
  li.forEach((ltx) => ltx.classList.remove("active"));
  li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

const mt = document.querySelectorAll(".menu-text");

function activeMenuText() {
  let len = sec.length;
  while (--len && window.scrollY + 97 < sec[len].offsetTop) {}
  mt.forEach((ltx) => ltx.classList.remove("active"));
  mt[len].classList.add("active");
}
activeMenuText();
window.addEventListener("scroll", activeMenuText);
