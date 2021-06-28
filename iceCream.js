export default class IceCream {
    constructor(flavor, type, toppings, id) {
        this.flavor = flavor;
        this.type = type;
        this.toppings = toppings;
        this.id = id;
        this.timesPurchased = 0;
    }

    purchase() {
        this.timesPurchased++;
    }
}