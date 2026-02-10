// burger menu
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

if (burger && menu) {
  burger.addEventListener("click", () => {
    menu.classList.toggle("open");
  });

  // zamykanie po kliknięciu linku (na mobile)
  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => menu.classList.remove("open"));
  });
}

// rok w stopce
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
