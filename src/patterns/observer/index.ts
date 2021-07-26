import ConcreteSubject from "./concretes/concreteSubject";
import ConcretObserver from "./concretes/concreteObserver";

let observalble = new ConcreteSubject();
let observer_one = new ConcretObserver(observalble);
let observer_two = new ConcretObserver(observalble);
observalble.addObserver(observer_one);
observalble.addObserver(observer_two);
setTimeout(() => {
	observalble.removeObserver(observer_two);
	setTimeout(() => {
		observalble.removeObserver(observer_one);
	}, 15000);
}, 12000);
observalble.generateRandomNums();
