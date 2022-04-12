import { Injectable } from '@nestjs/common';
import { PurchaseDto } from '../dtos/new-purchase-respose.dto';
import { NewPurchaseDto } from '../dtos/new-purchase.dto';

@Injectable()
export abstract class PurchaseServiceContract {
  abstract createNewPurchase(body: NewPurchaseDto): PurchaseDto;
  abstract getPurchases(): PurchaseDto[];
}
