import { randomUUID } from 'crypto';
import { NewProductDto } from '../dtos/new-product.dto';
import { ProductType } from '../enums/product-type.enum';
import { ProductDrinkEntity } from './product-drink.entity';
import { ProductFoodEntity } from './product-food.entity';

export abstract class ProductEntity {
  id: string;

  constructor(
    public name: string,
    public price: number,
    public quantity: number,
  ) {
    this.id = randomUUID();
  }

  static create(data: NewProductDto): ProductEntity {
    let newProduct: ProductEntity = null;

    const productTypes: Record<ProductType, any> = {
      [ProductType.FOOD]: () => {
        newProduct = new ProductFoodEntity(
          data.name,
          data.price,
          data.quantity,
          data.weight,
        );
      },
      [ProductType.DRINK]: () => {
        newProduct = new ProductDrinkEntity(
          data.name,
          data.price,
          data.quantity,
          data.volume,
        );
      },
    };

    productTypes[data.type]();

    return newProduct;
  }

  isAvailable(desiredQuantity: number) {
    return desiredQuantity <= this.quantity;
  }
}
