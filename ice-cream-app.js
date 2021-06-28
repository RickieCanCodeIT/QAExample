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
    let iceCreamDiv = makeIceCreamDiv(newIceCream);
    availableIceCream.innerHTML += iceCreamDiv;
    let newIceCreamDiv = availableIceCream.querySelector("#" + newIceCream.id);
    let purchaseButton = document.createElement('button');
    purchaseButton.innerText = "Purchase";
    newIceCreamDiv.appendChild(purchaseButton);
    let iceCreamInfoPara = newIceCreamDiv.querySelector('p');
    idCounter++;
    iceCreamArray.push(newIceCream);
    iceCreamParaArray.push(iceCreamInfoPara);
    buttonArray.push(purchaseButton);
    for (let i = 0; i < buttonArray.length; i++) {
        buttonArray[i].addEventListener('click', () => {
            console.log(buttonArray);
            console.log(iceCreamParaArray);
            console.log(iceCreamArray);

            iceCreamArray[i].purchase();
            iceCreamParaArray[i].innerHTML = `
            <p class="iceCreamInfo">This is ${iceCreamArray[i].type} and has ${iceCreamArray[i].toppings} on it and has been purchased ${iceCreamArray[i].timesPurchased}</p>
            `;
        })
    }

})