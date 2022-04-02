import faker from "faker";

let productList = "";

for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    productList += `<div>${name}</div>`;
}

document.querySelector("#dev-content").innerHTML = productList;