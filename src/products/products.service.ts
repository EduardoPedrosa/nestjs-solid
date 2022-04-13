import { Injectable } from '@nestjs/common';
import { NewProductDto } from './dtos/new-product.dto';
import { ProductType } from './enums/product-type.enum';
import { ProductDrinkEntity } from './entities/product-drink.entity';
import { ProductsServiceContract } from './contracts/products-service.contract';
import { ProductFoodEntity } from './entities/product-food.entity';
import { ProductDto } from './dtos/product.dto';
import { ProductEntity } from './entities/product.entity';
import { ProductsRepositoryContract } from './contracts/products-repository.contract';

@Injectable()
export class ProductsService implements ProductsServiceContract {
  constructor(private productsRepository: ProductsRepositoryContract) {}

  createNewProduct(body: NewProductDto): ProductDto {
    let newProduct: ProductEntity = null;
    const productTypes: Record<ProductType, any> = {
      [ProductType.FOOD]: () => {
        newProduct = new ProductFoodEntity(
          body.name,
          body.price,
          body.quantity,
          body.weight,
        );
      },
      [ProductType.DRINK]: () => {
        newProduct = new ProductDrinkEntity(
          body.name,
          body.price,
          body.quantity,
          body.volume,
        );
      },
    };

    productTypes[body.type]();

    return this.productsRepository.create(newProduct);
  }

  getProducts(): ProductDto[] {
    return this.productsRepository.find();
  }

  getProductById(id: string): ProductEntity {
    const product = this.productsRepository.findById(id);

    if (!product) throw new Error('Product not found');

    return product;
  }

  decreaseStock(id: string, quantity: number): void {
    const product = this.productsRepository.findById(id);
    if (!product) throw new Error('Product not found');
    if (product.quantity < quantity) throw new Error('Product not available');

    this.productsRepository.updateQuantity(id, product.quantity - quantity);
  }
}
