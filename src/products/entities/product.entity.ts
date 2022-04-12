import { randomUUID } from 'crypto';

export abstract class ProductEntity {
  id: string;

  constructor(
    public name: string,
    public price: number,
    public quantity: number,
  ) {
    this.id = randomUUID();
  }
}
