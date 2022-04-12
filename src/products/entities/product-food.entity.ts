import { ProductEntity } from './product.entity';

export class ProductFoodEntity extends ProductEntity {
  constructor(
    name: string,
    price: number,
    quantity: number,
    public weight: number,
  ) {
    super(name, price, quantity);
  }
}
