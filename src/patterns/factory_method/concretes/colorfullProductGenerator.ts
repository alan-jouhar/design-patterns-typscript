import FactoryMethod from "../abstracts/factory";
import ColorfullProduct from "./product";

class ColorfullProductFactory extends FactoryMethod {
	getPoduct(): ColorfullProduct {
		let colorCode = this.randomColorGenerator();
		let product = new ColorfullProduct(colorCode);
		return product;
	}

	private randomColorGenerator(): string {
		const MAX_COLOR_CODE = 16777216;
		let randomColorCode = Math.floor(Math.random() * MAX_COLOR_CODE);
		let colorCodeString = `#${randomColorCode.toString(16)}`;
		return colorCodeString;
	}
}

export default ColorfullProductFactory;
