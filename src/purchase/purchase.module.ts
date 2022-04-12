import { Module } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { PurchaseController } from './purchase.controller';
import { PurchaseServiceContract } from './contracts/purchase-service.contract';
import { PurchaseRepositoryContract } from './contracts/purchase-repository.contract';
import { PurchaseRepository } from './purchase.repository';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [PurchaseController],
  providers: [
    { provide: PurchaseServiceContract, useClass: PurchaseService },
    { provide: PurchaseRepositoryContract, useClass: PurchaseRepository },
  ],
})
export class PurchaseModule {}
