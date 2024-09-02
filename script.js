
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

//cards
const container = document.querySelector(".card_container");

const getProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const result = await response.json();
  return result;
};

const createCards = async (productList) => {
  for (let product of productList) {
    console.log(product);
    let card = document.createElement("div");
    card.classList.add("card");
    let cardImg = document.createElement("img");
    cardImg.src = product.image;
    cardImg.classList.add("imgCard");
    let title = document.createElement("p");
    title.classList.add("p_midlle")
    title.textContent = product.title;
    let price = document.createElement("p");
    price.textContent = product.price + "$";
    price.classList.add("p_midlle")
    card.append(cardImg, title, price)
    container.appendChild(card);
  }
  createCards();

};
const renderCards = async () => {
  const products = await getProducts();
  createCards(products);
};
renderCards();

//sort
const sort = document.getElementById("filter");
sort.addEventListener("change", async (e) => {
  const products = await getProducts();
  console.log(products);
  const filteredProducts = products.filter((product) => product.category === e.target.value);
  console.log(filteredProducts);
  container.innerHTML = "";
  if (e.target.value === "all") {
    // If "All" is selected, render all products
    createCards(products);
  } else {
    // Otherwise, filter by category
    const filteredProducts = products.filter(
      (product) => product.category === e.target.value
    );
    createCards(filteredProducts);
  }
  createCards(filteredProducts);
});

