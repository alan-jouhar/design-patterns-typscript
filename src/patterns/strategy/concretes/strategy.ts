import IquackBehaviour from "../interfaces/strategy";

export class SimpleQuacking implements IquackBehaviour {
	quack() {
		console.log("I quack simply.");
	}
}
