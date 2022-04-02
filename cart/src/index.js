import faker from "faker";

let htmlElement = "";

    const number = faker.random.number();
    htmlElement += `<div>Number of items ${number} in your cart.</div>`;

document.querySelector("#dev-content-cart").innerHTML = htmlElement;