"use strict";
// const h1 = document.querySelector('h1');
// console.log(h1);
// let input = document.querySelector('input')!;
// console.log(input.name);
// const headingOne = document.querySelector(".headingOne") as HTMLHeadingElement;
// console.log(headingOne);
class Car {
    constructor(a, b, c) {
        this.name = a;
        this.color = b;
        this.price = c;
    }
    format() {
        return `${this.name}'s color is ${this.color}, and it's price ${this.price} so'm`;
    }
}
;
const carOne = new Car("Lacetti", "Black", 75000000);
const carTwo = new Car("Cobalt", "White", 70000000);
const carThree = new Car("Damas", "White", 50000000);
// carOne.name = "Gentra";
// console.log(carOne, carTwo, carThree);
let cars = [];
cars.push(carOne);
cars.push(carTwo);
cars.push(carThree);
// console.log(carOne.format());
console.log(carOne.name);
