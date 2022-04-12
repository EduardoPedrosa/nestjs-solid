import { PurchaseRepositoryContract } from './contracts/purchase-repository.contract';
import { PurchaseEntity } from './entities/purchase.entity';

export class PurchaseRepository implements PurchaseRepositoryContract {
  private purchases: PurchaseEntity[] = [];

  create(newPurchase: PurchaseEntity): PurchaseEntity {
    this.purchases.push(newPurchase);
    return newPurchase;
  }

  find(): PurchaseEntity[] {
    return this.purchases;
  }
}
