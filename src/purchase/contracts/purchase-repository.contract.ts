import { Injectable } from '@nestjs/common';
import { PurchaseEntity } from '../entities/purchase.entity';

@Injectable()
export abstract class PurchaseRepositoryContract {
  abstract create(newPurchse: PurchaseEntity): PurchaseEntity;
  abstract find(): PurchaseEntity[];
}
