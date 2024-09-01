
//burger menu
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

//slider
const sliderImg = document.getElementsByClassName("slider");
const right = document.getElementById("left");
const left = document.getElementById("right");

let activeIndex = 0;

const unvisible = (index) => {
  sliderImg[index].classList.remove("visible");
};

const visible = (index) => {
  sliderImg[index].classList.add("visible");
};

right.addEventListener("click", () => {
  unvisible(activeIndex);
  if (activeIndex == sliderImg.length - 1) {
    activeIndex = 0;
  } else {
    activeIndex += 1;
  }
  visible(activeIndex);
});

left.addEventListener("click", () => {
  unvisible(activeIndex);
  if (activeIndex == 0) {
    activeIndex = sliderImg.length - 1;
  } else {
    activeIndex -= 1;
  }
  visible(activeIndex);
});

