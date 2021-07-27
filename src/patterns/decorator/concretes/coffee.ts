import Beverage from "../abstracts/beverage";

export class Coffee extends Beverage {
	getDescription() {
		return "Coffee";
	}
	cost() {
		return 3.5;
	}
}

export class Tea extends Beverage {
	getDescription() {
		return "Tea";
	}
	cost() {
		return 3;
	}
}
