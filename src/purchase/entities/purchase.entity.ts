import { PurchaseItem } from './purchase.entity.types';

export class PurchaseEntity {
  public total = 0;

  constructor(public items: PurchaseItem[]) {
    this.items.forEach((item) => {
      if (item.quantity > item.product.quantity) {
        throw new Error(
          `Item ${item.product.name} is not available for this quantity`,
        );
      }

      this.items.forEach((item) => {
        this.total += item.product.price * item.quantity;
      });
    });
  }
}
