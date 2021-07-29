import Product from "../abstracts/product";

class ColorfullProduct extends Product {
	private color: string;
	constructor(color: string) {
		super();
		this.color = color;
	}
	whatIsYourColor(): string {
		return this.color;
	}
}

export default ColorfullProduct;
