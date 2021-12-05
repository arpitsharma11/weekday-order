import { Controller, Get, Body } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get()
  createOrder(@Body() createOrderArray: CreateOrderDto[]): string[] {
    return this.orderService.checkOrder(createOrderArray);
  }
}
