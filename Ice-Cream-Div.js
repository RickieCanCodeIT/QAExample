export default function makeIceCreamDiv(iceCream) {
    return `
        <div class="iceCreamDiv" id=${iceCream.id}>
            <h1>${iceCream.flavor}</h1>
            <p class="iceCreamInfo">This is ${iceCream.type} and has ${iceCream.toppings} on it and has been purchased ${iceCream.timesPurchased}</p>
        </div>
    `
}