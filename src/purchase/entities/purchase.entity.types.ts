import { ProductEntity } from 'src/products/entities/product.entity';

export interface PurchaseItem {
  quantity: number;
  product: ProductEntity;
}
