import ColorfullProductFactory from "./concretes/colorfullProductGenerator";

let factory = new ColorfullProductFactory();
let product = factory.getPoduct();
console.log(product.whatIsYourColor());
let anotherProduct = factory.getPoduct();
console.log(anotherProduct.whatIsYourColor());
