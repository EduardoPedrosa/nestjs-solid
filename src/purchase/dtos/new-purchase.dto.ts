import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

abstract class PurchaseItem {
  productId: string;
  quantity: number;
}

export class NewPurchaseDto {
  @IsNotEmpty()
  @ApiProperty({ type: PurchaseItem, isArray: true })
  items: PurchaseItem[];
}
