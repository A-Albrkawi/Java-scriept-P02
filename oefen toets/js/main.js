console.log("hosi");
// //Opdracht 1 2
 

// opdracht3

// const temps = [1, 11, 22, 23, 34, 1, 6, 10];
// let highst = 0;

// for (let i = 0; i < temps.length; i++) {
//   const temp = temps[i];

//   if (temp > highst) {
//     highst = temp;
//   }
// }
// console.log(highst);

// //Opdracht 4
// const body = document.querySelector("body");

// const monthTemps = [
//   { temp: 10, month: "jan" },
//   { temp: 11, month: "feb" },
//   { temp: 20, month: "maa" },
// ];
// for (let i = 0; i < monthTemps.length; i++) {
//   const monthTemp = monthTemps[i];

//   body.innerHTML+=`<li>${monthTemp.temp}: ${monthTemp.month} </li>`
// }
//Opdracht 5
// const body = document.querySelector("body");
// const table = document.querySelector("table");

// const monthTemps = [
//   { temp: 10, month: "jan" },
//   { temp: 11, month: "feb" },
//   { temp: 20, month: "maa" },
// ];
// for (let i = 0; i < monthTemps.length; i++) {
//   const monthTemp = monthTemps[i];
//   table.innerHTML +=`

//   <tr>
//    <td>${monthTemp.temp}</td>
//    <td>${monthTemp.month}</td>
//   </tr>

//   `;
// }

//Opdracht 6
// const btn = document.querySelector(".btn");
// const container = document.querySelector(".container");

// btn.addEventListener("click", function () {
//   let input = prompt("saasccsXx kufX HJVjhxhICKV");
//   container.innerHTML += `
{
  /* <div class="card">${input}</div>`; */
}
// });
// const counteriesInfo = [
//   { hoofdstad: "hoofdstad-1", land: "land1", duur: 17000000 },
//   { hoofdstad: "hoofdstad-2", land: "land2", duur: 27000000 },
//   { hoofdstad: "hoofdstad-3", land: "land3", duur: 37000000 },
// ];

// let highst = 0;

// for (let i = 0; i < counteriesInfo.length; i++) {
//      const element = counteriesInfo[i];
//   if (element.duur > highst) {
//     highst = element.duur;
//   }
// }

// console.log(highst);

// opdracht 8
const container = document.querySelector(".container");
const counteryInfo = document.querySelector(".countery-info");

const counteriesInfo = [
  { hoofdstad: "hoofdstad-1", land: "land1", duur: 17000000 },
  { hoofdstad: "hoofdstad-2", land: "land2", duur: 27000000 },
  { hoofdstad: "hoofdstad-3", land: "land3", duur: 37000000 },
];

for (let i = 0; i < counteriesInfo.length; i++) {
  const info = counteriesInfo[i];
  console.log(info);
}
function htmlInfo(info) {
  const html = `<div class="card">${info}</div>;`
  return html;
}
container.innerHTML = htmlInfo;
