import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsRepository } from './products.repository';
import { ProductsService } from './products.service';
import { ProductsRepositoryContract } from './contracts/products-repository.contract';
import { ProductsServiceContract } from './contracts/products-service.contract';

@Module({
  controllers: [ProductsController],
  providers: [
    { provide: ProductsServiceContract, useClass: ProductsService },
    { provide: ProductsRepositoryContract, useClass: ProductsRepository },
  ],
  exports: [ProductsServiceContract],
})
export class ProductsModule {}
