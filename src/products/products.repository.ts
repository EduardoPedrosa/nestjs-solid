import { ProductEntity } from './entities/product.entity';
import { ProductsRepositoryContract } from './contracts/products-repository.contract';
import { ProductFoodEntity } from './entities/product-food.entity';
import { ProductDrinkEntity } from './entities/product-drink.entity';

export class ProductsRepository implements ProductsRepositoryContract {
  private products: ProductEntity[] = [];

  constructor() {
    const product1 = new ProductFoodEntity('Carne', 50, 50, 10);
    const product2 = new ProductFoodEntity('Pão', 10, 30, 1);
    const product3 = new ProductDrinkEntity('Suco', 2, 100, 2);
    this.products.push(product1, product2, product3);
  }

  create(newProduct: ProductEntity): ProductEntity {
    this.products.push(newProduct);
    return newProduct;
  }

  find(): ProductEntity[] {
    return this.products;
  }

  findById(id: string): ProductEntity {
    return this.products.find((product) => product.id === id);
  }

  updateQuantity(id: string, quantity: number): ProductEntity {
    const productIndex = this.products.findIndex(
      (product) => product.id === id,
    );
    this.products[productIndex].quantity = quantity;
    return this.products[productIndex];
  }
}
