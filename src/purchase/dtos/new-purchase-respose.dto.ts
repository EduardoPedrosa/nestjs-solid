import { ApiProperty } from '@nestjs/swagger';
import { ProductDto } from 'src/products/dtos/product.dto';

abstract class PurchaseResponseItem {
  quantity: number;
  product: ProductDto;
}

export class PurchaseDto {
  @ApiProperty()
  total: number;

  @ApiProperty({ type: PurchaseResponseItem, isArray: true })
  items: PurchaseResponseItem[];
}
