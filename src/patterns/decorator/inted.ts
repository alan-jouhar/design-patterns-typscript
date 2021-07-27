import { Coffee, Tea } from "./concretes/coffee";
import { ChocolateDecorator } from "./concretes/chocolate";

let cupOfCoffee = new Coffee();
let cupOffTea = new Tea();

let decoratedCupOfCoffee = new ChocolateDecorator(cupOfCoffee);
let decoratedCupOfTea = new ChocolateDecorator(cupOffTea);

console.log(decoratedCupOfCoffee.getDescription());
console.log(decoratedCupOfCoffee.cost());
console.log(decoratedCupOfTea.getDescription());
console.log(decoratedCupOfTea.cost());
