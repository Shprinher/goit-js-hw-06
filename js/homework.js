//   завдання 1

const firstTaskEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${firstTaskEl.length}`);
firstTaskEl.forEach((elem) => {
  console.log(`Category:${elem.firstElementChild.textContent}`);
  console.log(
    `Elements:${elem.lastElementChild.querySelectorAll("li").length}`
  );
});

// _______________________________________________________
// завдання 2

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientList = document.querySelector("#ingredients");
const itemsList = ingredients.map((element) => {
  const item = document.createElement("li");
  item.textContent = element;
  item.classList.add("item");
  return item;
});
ingredientList.append(...itemsList);

// ___________________________________________________________
// завдання 3

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const gallery = document.querySelector(".gallery");

const galleryItems = images
  .map((image) => {
    return `<li class="gallery-item"><img src="${image.url}" alt="${image.alt}" class="gallery-img"></li>`;
  })
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryItems);

// ___________________________________________________________
// завдання 4

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueSpan = document.getElementById("value");

let counterValue = 0;

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
});

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  valueSpan.textContent = counterValue;
});

// ___________________________________________________________
// завдання 5

const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", () => {
  if (inputName.value.trim() === "") {
    outputName.textContent = "Anonymous";
  } else {
    outputName.textContent = inputName.value;
  }
});

// ___________________________________________________________
// завдання 6

const inputLength = document.querySelector("#validation-input");

inputLength.addEventListener("blur", () => {
  const dataLength = parseInt(inputLength.getAttribute("data-length"));
  const inputValueLength = inputLength.value.length;
  if (inputValueLength === dataLength) {
    inputLength.classList.add("valid");
    inputLength.classList.remove("invalid");
  } else {
    inputLength.classList.add("invalid");
    inputLength.classList.remove("valid");
  }
});

// ___________________________________________________________
// завдання 7

const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizeControl.addEventListener("input", () => {
  const fontSize = fontSizeControl.value + "px";
  text.style.fontSize = fontSize;
  // console.log(fontSize);
});

// ___________________________________________________________
// завдання 8

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;

  if (email === "" || password === "") {
    alert("Всі поля повинні бути заповнені!");
  } else {
    const formData = {
      email: email,
      password: password,
    };
    console.log(formData);
    loginForm.reset();
  }
});

// ___________________________________________________________
// завдання 9

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const colorSpan = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
});
// ___________________________________________________________
// завдання 10
