import Addon from "../abstracts/addon";
import Beverage from "../abstracts/beverage";

export class ChocolateDecorator extends Addon {
	private beverage: Beverage;
	constructor(beverage: Beverage) {
		super();
		this.beverage = beverage;
	}
	getDescription() {
		return this.beverage.getDescription() + " with Chocolate addon";
	}
	cost() {
		return this.beverage.cost() + 0.75;
	}
}
