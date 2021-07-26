import Subject from "../interfaces/subject";
import Observer from "../interfaces/observer";

class ConcreteSubject implements Subject {
	private observers: Observer[];
	private state: number;
	constructor() {
		this.observers = [];
		this.state = 0;
	}
	addObserver(observer: Observer): void {
		this.observers.push(observer);
	}
	removeObserver(observer: Observer): void {
		this.observers = this.observers.filter((e) => e !== observer);
	}
	notifyObservers(): void {
		this.observers.forEach((observer) => observer.update(this.state));
	}
	generateRandomNums(): void {
		setInterval(() => {
			this.state = Math.ceil(Math.random() * 100);
			this.notifyObservers();
		}, 3000);
	}
}

export default ConcreteSubject;
