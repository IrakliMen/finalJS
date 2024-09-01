
let burger = document.querySelector(".burger");
let xmark = document.querySelector(".xmark");
let mobileMenu = document.querySelector(".nav_header");

burger.addEventListener("click", () => {
  mobileMenu.classList.add("show");
  xmark.style.display = "block";
  burger.style.display = "none";
});

xmark.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
  xmark.style.display = "none";
  burger.style.display = "block";
});
