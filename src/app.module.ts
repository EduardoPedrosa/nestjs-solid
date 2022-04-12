import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { PurchaseModule } from './purchase/purchase.module';

@Module({
  imports: [ProductsModule, PurchaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
