// // opdracht 1/2

// const box = document.querySelector(".box");
// const btn = document.querySelector(".run");
// const change = document.querySelector(".change");

// btn.addEventListener("click", (eo) => {
//   box.classList.add("error");
// });

// change.addEventListener("click", (eo) => {
//   box.classList.remove("error");
// });

// opdracht 3

// const box = document.querySelector(".box");
// const toggle = document.querySelector(".toggle");

// toggle.addEventListener("click", () => {
//   if (!box.classList.contains("error")) {
//     box.classList.add("error");
//   } else if (box.classList.contains("error")) {
//     box.classList.remove("error");
//   }
// });

// opdracht 4

// const box = document.querySelector(".box");
// function myFunction() {
//     box.classList.toggle("error");
//  }

// opdracht 5

// const box = document.querySelector(".box");
// const toggle = document.querySelector(".toggle");

// toggle.addEventListener("click", (eo) => {
//   box.classList.add("blinker");
// });

// opdracht 6/7

const box = document.querySelector(".box");

function myFunction() {
    box.classList.toggle("blinker");
    box.classList.toggle("font-family");
 }