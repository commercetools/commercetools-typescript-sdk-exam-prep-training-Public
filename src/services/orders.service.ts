import { Inject, Injectable } from '@nestjs/common';
import { OrderCreateDto } from 'src/dtos/orders.dto';
import {
  ByProjectKeyRequestBuilder,
  Order,
  OrderFromCartDraft,
} from '@commercetools/platform-sdk';
import { API_ROOT } from 'src/commercetools/api-client.module';

const orderNamePrefix = 'TT';

@Injectable()
export class OrdersService {
  constructor(
    @Inject(API_ROOT) private readonly apiRoot: ByProjectKeyRequestBuilder,
  ) {}

  createOrder(orderDetails: OrderCreateDto): Promise<Order> {
    const { cartId, cartVersion, storeKey } = orderDetails;

    const orderFromCartDraft: OrderFromCartDraft = {
      version: cartVersion,
      cart: {
        id: cartId,
        typeId: 'cart',
      },
      orderNumber: orderNamePrefix + '_' + Date.now().toString(36),
    };

    return this.apiRoot
      .inStoreKeyWithStoreKeyValue({ storeKey })
      .orders()
      .post({
        body: orderFromCartDraft,
      })
      .execute()
      .then((response) => response.body);
  }
}
