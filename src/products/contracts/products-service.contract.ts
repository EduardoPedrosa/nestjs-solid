import { Injectable } from '@nestjs/common';
import { ProductDto } from '../dtos/product.dto';
import { NewProductDto } from '../dtos/new-product.dto';
import { ProductEntity } from '../entities/product.entity';

@Injectable()
export abstract class ProductsServiceContract {
  abstract createNewProduct(body: NewProductDto): ProductDto;
  abstract getProducts(): ProductDto[];

  abstract getProductById(id: string): ProductEntity;
  abstract decreaseStock(id: string, quantity: number): void;
}
