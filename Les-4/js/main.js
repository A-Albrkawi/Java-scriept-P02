const ul = document.querySelector("ul");

fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    const products = data.products;
    console.log(products);

    for (let i = 0; i < products.length; i++) {
      const element = products[i];
      ul.innerHTML += createCard(element);
    }
  });
function createCard(param) {
  const code = `<div class="card-container">
      <img src=${param.thumbnail} alt="">
      <div class="card-p">${param.title}</div>
      <p>Prijs: ${param.price}</p>
      <p>description: ${param.description}</p>
      </div>`;
  return code;
}
