import makeIceCreamDiv from "./Ice-Cream-Div";
import IceCream from "./iceCream.js";

const flavorEle = document.querySelector(".flavor"),
    typeEle = document.querySelector(".type"),
    toppingsEle = document.querySelector(".toppings"),
    submitEle = document.querySelector(".submitButton"),
    availableIceCream = document.querySelector(".availableIceCream");
let idCounter = 0;

let buttonArray = [];
let iceCreamParaArray = [];
let iceCreamArray = [];

submitEle.addEventListener('click', () => {
    console.log(availableIceCream);
    let newIceCream = new IceCream(flavorEle.value, typeEle.value, toppingsEle.value, "IceCream" + idCounter);

    let purchaseButton = document.createElement('button');
    let iceCreamDiv = document.createElement('div'),
        iceCreamHeader = document.createElement('h1'),
        iceCreamPara = document.createElement('p');

    iceCreamHeader.innerText = newIceCream.flavor;
    iceCreamDiv.appendChild(iceCreamHeader);

    iceCreamPara.classList += 'iceCreamInfo';
    iceCreamPara.innerText = 'This is ' + newIceCream.Type + ' and has ' +
        newIceCream.toppings + ' on it and has been purchased' + newIceCream.timesPurchased;
    iceCreamDiv.appendChild(iceCreamPara);

    purchaseButton.innerText = "Purchase";
    iceCreamDiv.appendChild(purchaseButton);
    idCounter++;

    availableIceCream.appendChild(iceCreamDiv);

    purchaseButton.addEventListener('click', () => {


        newIceCream.purchase();
        iceCreamPara.innerText = 'This is ' + newIceCream.type + ' and has ' +
            newIceCream.toppings + ' on it and has been purchased' + newIceCream.timesPurchased;

    })

})