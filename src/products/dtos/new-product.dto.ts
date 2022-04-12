import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { ProductType } from '../enums/product-type.enum';

export class NewProductDto {
  @IsNotEmpty()
  @ApiProperty({ type: 'string', enum: ProductType })
  type: ProductType;

  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @ApiProperty()
  quantity: number;

  @IsNotEmpty()
  @ApiProperty()
  price: number;

  @ApiProperty()
  weight?: number;

  @ApiProperty()
  volume?: number;
}
