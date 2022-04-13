import { BadRequestException, Injectable } from '@nestjs/common';
import { ProductsServiceContract } from 'src/products/contracts/products-service.contract';
import { PurchaseRepositoryContract } from './contracts/purchase-repository.contract';
import { PurchaseServiceContract } from './contracts/purchase-service.contract';
import { PurchaseDto } from './dtos/new-purchase-respose.dto';
import { NewPurchaseDto } from './dtos/new-purchase.dto';
import { PurchaseEntity } from './entities/purchase.entity';

@Injectable()
export class PurchaseService implements PurchaseServiceContract {
  constructor(
    private productService: ProductsServiceContract,
    private purchaseRepository: PurchaseRepositoryContract,
  ) {}

  createNewPurchase(body: NewPurchaseDto): PurchaseDto {
    try {
      const items = body.items.map((item) => ({
        product: this.productService.getProductById(item.productId),
        quantity: item.quantity,
      }));

      const purchase = new PurchaseEntity(items);

      items.forEach((item) => {
        this.productService.decreaseStock(item.product.id, item.quantity);
      });

      return this.purchaseRepository.create(purchase);
    } catch (error) {
      throw new BadRequestException('Items not available');
    }
  }

  getPurchases(): PurchaseDto[] {
    return this.purchaseRepository.find();
  }
}
