import { OrderCreateDto } from 'src/dtos/orders.dto';
import { ByProjectKeyRequestBuilder, Order } from '@commercetools/platform-sdk';
import { CustomersService } from './customers.service';
export declare class OrdersService {
    private readonly apiRoot;
    private readonly customersService;
    constructor(apiRoot: ByProjectKeyRequestBuilder, customersService: CustomersService);
    createOrder(orderDetails: OrderCreateDto): Promise<Order>;
}
