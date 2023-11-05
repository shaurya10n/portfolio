const li = document.querySelectorAll(".lines");
const mt = document.querySelectorAll(".menu-text");
let sec = document.querySelectorAll("section");

function setActiveMenu() {
  const scrollY = window.scrollY;

  sec = document.querySelectorAll("section"); // Add this line to update the sections

  sec.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionBottom) {
      li.forEach((ltx) => ltx.classList.remove("active"));
      li[index].classList.add("active");

      mt.forEach((ltx) => ltx.classList.remove("active"));
      mt[index].classList.add("active");
    }
  });
}

setActiveMenu();
window.addEventListener("scroll", setActiveMenu);
