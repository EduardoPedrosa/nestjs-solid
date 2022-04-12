import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { PurchaseServiceContract } from './contracts/purchase-service.contract';
import { PurchaseDto } from './dtos/new-purchase-respose.dto';
import { NewPurchaseDto } from './dtos/new-purchase.dto';

@Controller('purchases')
export class PurchaseController {
  constructor(private purchaseService: PurchaseServiceContract) {}

  @Post('/')
  @ApiBody({ type: NewPurchaseDto })
  @ApiResponse({ type: PurchaseDto })
  async createPurchase(@Body() body: NewPurchaseDto): Promise<PurchaseDto> {
    return this.purchaseService.createNewPurchase(body);
  }

  @Get('/')
  @ApiResponse({ type: PurchaseDto, isArray: true })
  async getProducts(): Promise<PurchaseDto[]> {
    return this.purchaseService.getPurchases();
  }
}
