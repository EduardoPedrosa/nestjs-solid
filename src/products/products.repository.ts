import { ProductEntity } from './entities/product.entity';
import { ProductsRepositoryContract } from './contracts/products-repository.contract';

export class ProductsRepository implements ProductsRepositoryContract {
  private products: ProductEntity[] = [];

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
}
