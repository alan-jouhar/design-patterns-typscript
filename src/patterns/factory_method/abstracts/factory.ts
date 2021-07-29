import Product from "./product";

abstract class FactoryMethod {
	protected abstract getPoduct(): Product;
}

export default FactoryMethod;
