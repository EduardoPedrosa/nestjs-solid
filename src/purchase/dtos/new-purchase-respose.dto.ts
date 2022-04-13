import { ApiProperty } from '@nestjs/swagger';
import { ProductDto } from 'src/products/dtos/product.dto';

abstract class PurchaseItem {
  quantity: number;
  product: ProductDto;
}

export class PurchaseDto {
  @ApiProperty()
  total: number;

  @ApiProperty({ type: PurchaseItem, isArray: true })
  items: PurchaseItem[];
}
