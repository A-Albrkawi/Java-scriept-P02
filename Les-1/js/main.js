// <!--=================================================== opdracht 1====================================================================-->

// function calculateNewSalary() {
//     const result = document.querySelector(".result");
//     const oldSalary = 2000;
//     const increasePercentage = 0.05;
//     const salaryIncrease = oldSalary * increasePercentage;
//     const newSalary = salaryIncrease + oldSalary;
//     result.innerHTML = newSalary;
// }
// calculateNewSalary();

// <!--=================================================== opdracht 2====================================================================-->
// function homePriceCalulater() {
//     const result = document.querySelector(".result");
//     const oldHomePrice = 400000;
//     const increasePercentage = 0.025;
//     const homePriceIncrease = oldHomePrice * increasePercentage;
//     result.innerHTML = homePriceIncrease;
// }
// homePriceCalulater();

// <!--=================================================== opdracht 3====================================================================-->

// function jacketPriceCalulater() {
//   const result = document.querySelector(".result");
//   const priceExl = 100;
//   const btw = 0.21;
//   const btwInMoney = priceExl * btw;
//   const newJacketPice = btwInMoney+priceExl
//   result.innerHTML = newJacketPice;
// }
// jacketPriceCalulater();

// <!--=================================================== opdracht 4====================================================================-->
// const person = prompt("Voer een persoon in: Docent, Student, Directeur");
// let message = "";
// switch (person) {
//   case "Docent":
//     message = "Je bent een Docent  ";
//     break;
//   case "Directuer":
//     message = "Je bent een Directuer  ";
//     break;
//   case "Student":
//     message = "Je bent een Student  ";
//     break;
//   case "":
//     message = "vul iets in";
//     break;
//   default:
//     message = "Je bent gek!";
// }

// console.log(message);

// <!--=================================================== opdracht 5====================================================================-->
// const euro = prompt("Voer het bedrag in euro's in:");
// const cryptoType = prompt("Voer het type crypto in (BTC, ETH, XRP, DOG, SOL):");
// let BTC = 35050;
// let ETH = 1887;
// let XRP = 0.7;
// let DOG = 0.07;
// let SOL = 40.26;

// if (cryptoType === "BTC") {
//   const btcResult = euro / BTC;
//   alert(btcResult);
// } else if (cryptoType === "DOG") {
//   const dogResult = euro / DOG;
//   alert(dogResult);
// } else if (cryptoType === "ETH") {
//   const ethResult = euro / ETH;
//   alert(ethResult);
// } else if (cryptoType === "XRP") {
//   const xrpResult = euro / XRP;
//   alert(xrpResult);
// } else if (cryptoType === "SOL") {
//   const solResult = euro / SOL;
//   alert(solResult);
// } else {
//   alert("crypto is onbekend");
// }

// <!--=================================================== opdracht 6====================================================================-->
// for (let index = 0; index <= 9; index++) {
//     console.log(index);
//     if(index ==9){
//         console.log("einde programma");
//     }

// }

// <!--=================================================== opdracht 7====================================================================-->

// let index = 0;

// while (index <= 20) {
//   console.log(index);

//   if (index <= 10) {
//     console.log("zin 1");
//     console.log("zin 2");
//   } else if (index < 20) {
//     console.log("zin 1");
//   } else if (index === 20) {
//     console.log("Einde programma");
//   }

//   index++;
// }

// <!--=================================================== opdracht 8====================================================================-->?????????????
// let count = 0;

// while (count < 20) {
//   console.log("Loop");

//   count++;

//   if (count == 10) {
//     break;
//   }
// }

// <!--=================================================== opdracht 9====================================================================-->
// const colors = document.querySelector(".colors");
// const colorsArray = ["rood", "groen", "geel", "blauw", "roze"];

// colors.innerHTML=colorsArray

// <!--=================================================== opdracht 11====================================================================-->????????????????

// const add = document.querySelector(".add");
// const clear = document.querySelector(".clear");
// const input = document.querySelector("#input");
// const ul = document.querySelector("ul");

// add.addEventListener("click", function () {
//   const userInput = input.value;
//   if (userInput !== "") {
//     ul.innerHTML += `<li>${userInput}</li>`;}
// });

// clear.addEventListener("click", function () {
//   // Wis alle items in de ul-lijst
//   ul.innerHTML = "";
// });

// <!--=================================================== opdracht 12====================================================================-->

// function showMessage (test) {
//     console.log("test");
// }
// showMessage()

// <!--=================================================== opdracht 13====================================================================-->
// function showSome(number1, number2) {
//   number1 = 7;
//   number2 = 7;
//   const some = number1 * number2;
//   console.log(some);
// }
// showSome()

// <!--=================================================== opdracht 14====================================================================-->??????????????????????????????????
// const colors = ["rood", "groen", "geel", "blauw", "roze"];
// function showArray(colors) {
//   for (let i = 0; i < colors.length; i++) {
//     const element = colors[i];
//     console.log(element);
//   }
// }
// showArray(colors);
