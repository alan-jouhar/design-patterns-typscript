import IquackBehaviour from "./interfaces/strategy";

class Duck {
	private iQuackBehaviour: IquackBehaviour;
	constructor(iQuackBehaviour: IquackBehaviour) {
		this.iQuackBehaviour = iQuackBehaviour;
	}
	quack(): void {
		this.iQuackBehaviour.quack();
	}
}

export default Duck;
