import { Body, Controller, Param, Post } from '@nestjs/common';
import { OrderCreateBodyDto, OrderCreateParamsDto } from 'src/dtos/orders.dto';
import { OrdersService } from '../services/orders.service';


@Controller('api/in-store/:storeKey/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  createOrder(
    @Param() orderParams: OrderCreateParamsDto,
    @Body() orderData: OrderCreateBodyDto,
  ) {
    return this.ordersService.createOrder({
      ...orderParams,
      ...orderData,
    });
  }

  
}
