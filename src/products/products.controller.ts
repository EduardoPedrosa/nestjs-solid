import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { ProductDto } from './dtos/product.dto';
import { NewProductDto } from './dtos/new-product.dto';
import { ProductsServiceContract } from './contracts/products-service.contract';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsServiceContract) {}

  @Post('/')
  @ApiBody({ type: NewProductDto })
  @ApiResponse({ type: ProductDto })
  async createNewProduct(@Body() body: NewProductDto): Promise<ProductDto> {
    return this.productsService.createNewProduct(body);
  }

  @Get('/')
  @ApiResponse({ type: ProductDto, isArray: true })
  async getProducts(): Promise<ProductDto[]> {
    return this.productsService.getProducts();
  }
}
