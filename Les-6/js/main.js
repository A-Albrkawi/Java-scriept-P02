const main = document.querySelector("main");

// opdracht 1

// const person = [
//   { firstName: "max", lastName: "max2", hobby: "tennis" },
//   { firstName: "rob", lastName: "rob2", hobby: "football" }
// ];
// console.log(main);
// for (let i = 0; i < person.length; i++) {
//   const element = person[i];
//   main.innerHTML +=`
//   <div class="person">${element.firstName + ` ` + element.lastName + ` ` + element.hobby}</div>
//   `;
// }

// opdracht2

// const cars = [
//   {
//     merk: "Toyota",
//     model: "Corolla",
//     bouwjaar: 2022,
//     prijs: 25000,
//   },

//   {
//     merk: "Ford",
//     model: "Mustang",
//     bouwjaar: 2021,
//     prijs: 45000,
//   },
// ];

// let totaal;
// for (let i = 0; i < cars.length; i++) {
//   const car = cars[i];
//   main.innerHTML += ` <div class="person">${car.merk} ${car.model} ${car.bouwjaar} ${car.prijs}$</div>`;
//   let totaal = car.prijs + car.prijs;
//   console.log(totaal);
// }

// const cars = [
//     {
//         merk: "Toyota",
//         model: "Corolla",
//         bouwjaar: 2022,
//         prijs: 25000,
//     },
//     {
//         merk: "Ford",
//         model: "Mustang",
//         bouwjaar: 2021,
//         prijs: 45000,
//     }
// ]

// let totalPrice = 0;

// for (let index = 0; index < cars.length; index++) {
//     const element = cars[index];
//     totalPrice += element.prijs;
//     main.innerHTML += `<div class="person">${element.merk} ${element.model}</div>`
// }
// main.innerHTML += `<div class="person">${totalPrice}$</div>`

// opdracht 3

// let myArray = [];
// function opdrachtDrie(a, b, c) {
//   main.innerHTML = ``;
//   myArray.push({ firstName: a, klas: b, course: c });
//   for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     main.innerHTML += `<div>Voornaam: ${element.firstName} Achternaam: ${element.klas} Opleiding: ${element.course}</div>
//         `;
//   }
// }
// opdrachtDrie("max", "b1l", "ict");
// opdrachtDrie("rob", "b2l", "sd");
// opdrachtDrie("jesse", "b3l", "it");

// opdracht 4

// fetch("https://meme-api.com/gimme/5")
//   .then((myData) => myData.json())
//   .then((jsonData) => {
//     const memes = jsonData.memes;
//     console.log(memes);

//     for (let i = 0; i < memes.length; i++) {
//       const element = memes[i];
//       main.innerHTML += createCard(element);
//     }
//   });

// function createCard(eo) {
//   const code = `<div class="card"><div>${eo.postLink}</div>
//   <p>${eo.title}</p><img src=${eo.url}></div>`;
//   return code;
// }

// opdracht 5

fetch("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
.then(myData => myData.text())
.then(textData => {
  
});

function showInConsole(data) {
    console.log(data);
}