import { OrderCreateBodyDto, OrderCreateParamsDto } from 'src/dtos/orders.dto';
import { OrdersService } from '../services/orders.service';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    createOrder(orderParams: OrderCreateParamsDto, orderData: OrderCreateBodyDto): Promise<import("@commercetools/platform-sdk").Order>;
}
