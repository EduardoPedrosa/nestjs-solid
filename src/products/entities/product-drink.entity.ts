import { ProductEntity } from './product.entity';

export class ProductDrinkEntity extends ProductEntity {
  constructor(
    name: string,
    price: number,
    quantity: number,
    public volume: number,
  ) {
    super(name, price, quantity);
  }
}
