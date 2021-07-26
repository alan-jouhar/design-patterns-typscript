import { SimpleQuacking } from "./concretes/strategy";
import Duck from "./strategy";

let duck = new Duck(new SimpleQuacking());

duck.quack();
