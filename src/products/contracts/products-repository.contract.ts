import { Injectable } from '@nestjs/common';
import { ProductEntity } from '../entities/product.entity';

@Injectable()
export abstract class ProductsRepositoryContract {
  abstract create(newProduct: ProductEntity): ProductEntity;
  abstract find(): ProductEntity[];
  abstract findById(id: string): ProductEntity;
}
