export class ShoppingCart {
  private readonly products: Product[] = [];

  addProducts(...products: Product[]): void {
    this.products.push(...products);
  }

  productQuantity(): number {
    return this.products.length;
  }

  totalValue(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }
}

export class Product {
  constructor(public name: string, public price: number) {}
}

const product1 = new Product('Shirt', 19.9);
const product2 = new Product('Shirt', 19.9);
const product3 = new Product('Short', 20);

const shoppingCart = new ShoppingCart();
shoppingCart.addProducts(product1, product2, product3);
console.log(shoppingCart.totalValue());
