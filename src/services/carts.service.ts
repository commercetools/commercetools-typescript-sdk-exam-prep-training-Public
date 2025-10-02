import {
  ByProjectKeyRequestBuilder,
  Cart,
  CartAddLineItemAction,
  CartDraft,
  CartSetCustomerEmailAction,
  CartSetShippingAddressAction,
  CartSetShippingMethodAction,
  CartUpdateAction,
} from '@commercetools/platform-sdk';
import { Inject, Injectable } from '@nestjs/common';
import {
  CartCreateDto,
  CartGetParamsDto,
  LineItemsAddDto,
  ShippingAddressUpdateDto,
  ShippingMethodUpdateDto,
} from '../dtos/carts.dto';

import { API_ROOT } from 'src/commercetools/api-client.module';

@Injectable()
export class CartsService {
  constructor(
    @Inject(API_ROOT) private readonly apiRoot: ByProjectKeyRequestBuilder,
  ) {}

  async createCart(cartDetails: CartCreateDto): Promise<Cart> {
    const { storeKey, sessionId, sku, quantity, currency, country } =
      cartDetails;

    const cartDraft: CartDraft = {
      anonymousId: sessionId,
      currency,
      country,
      deleteDaysAfterLastModification: 30,
      lineItems: [
        {
          sku,
          quantity: quantity ?? 1,
        },
      ],
    };

    return this.apiRoot
      .inStoreKeyWithStoreKeyValue({ storeKey })
      .carts()
      .post({
        body: cartDraft,
      })
      .execute()
      .then((response) => response.body);
  }

  async addLineItemsToCart(lineItemsDetails: LineItemsAddDto): Promise<Cart> {
    const {
      id,
      storeKey,
      sku,
      quantity,
      supplyChannelKey,
      distributionChannelKey,
    } = lineItemsDetails;

    const cart = await this.getCartById({ id, storeKey });
    const cartVersion = cart.version;

    const cartUpdateActions: CartUpdateAction[] = [];

    const addLineItemUpdateAction: CartAddLineItemAction = {
      action: 'addLineItem',
      sku,
      quantity,
      ...(supplyChannelKey && {
        supplyChannel: {
          typeId: 'channel',
          key: supplyChannelKey,
        },
      }),
      ...(distributionChannelKey && {
        distributionChannel: {
          typeId: 'channel',
          key: distributionChannelKey,
        },
      })
    };
    
    cartUpdateActions.push(addLineItemUpdateAction);
    
    // // TODO: Add custom fields as needed
    // let earnedPoints = await this.calculateBonusPoints(cart.totalPrice.centAmount);

    // const addCustomLineItemUpdateAction: CartAddCustomLineItemAction = {
    //   action: 'addCustomLineItem',
    //   name: { 'en-US': 'Bonus Points: ' + earnedPoints },
    //   money: {
    //     centAmount: 0,
    //     currencyCode: 'EUR',
    //   },
    //   slug: 'bonus-points-custom-line-item',
    //   quantity: 1,
    // };

    // cartUpdateActions.push(addCustomLineItemUpdateAction);

    return this.apiRoot
      .inStoreKeyWithStoreKeyValue({ storeKey })
      .carts()
      .withId({ ID: id })
      .post({
        body: {
          version: cartVersion,
          actions: cartUpdateActions,
        },
      })
      .execute()
      .then((response) => response.body);
  }

  async updateCartShippingAddress(
    shippingAddressDetails: ShippingAddressUpdateDto,
  ): Promise<Cart> {
    const { id, storeKey, firstName, lastName, country, email } =
      shippingAddressDetails;

    let cart = await this.getCartById({ id, storeKey });
    let cartVersion = cart.version;

    const cartUpdateActions: CartUpdateAction[] = [];

    const setShippingAddressUpdateAction: CartSetShippingAddressAction = {
      action: 'setShippingAddress',
      address: {
        firstName,
        lastName,
        country,
        email,
      },
    };

    const setCustomerEmailUpdateAction: CartSetCustomerEmailAction = {
      action: 'setCustomerEmail',
      email,
    };

    cartUpdateActions.push(setShippingAddressUpdateAction);
    cartUpdateActions.push(setCustomerEmailUpdateAction);

    return this.apiRoot
      .inStoreKeyWithStoreKeyValue({ storeKey })
      .carts()
      .withId({ ID: id })
      .post({
        body: {
          version: cartVersion,
          actions: cartUpdateActions,
        },
      })
      .execute()
      .then((response) => response.body);
  }

  async updateCartShippingMethod(
    shippingMethodDetails: ShippingMethodUpdateDto,
  ): Promise<Cart> {
    const { id, storeKey, shippingMethodId } = shippingMethodDetails;

    const cart = await this.getCartById({ id, storeKey });
    const cartVersion = cart.version;

    const cartUpdateActions: CartUpdateAction[] = [];

    const setShippingMethodUpdateAction: CartSetShippingMethodAction = {
      action: 'setShippingMethod',
      shippingMethod: {
        typeId: 'shipping-method',
        id: shippingMethodId,
      },
    };

    cartUpdateActions.push(setShippingMethodUpdateAction);

    return this.apiRoot
      .inStoreKeyWithStoreKeyValue({ storeKey })
      .carts()
      .withId({ ID: id })
      .post({
        body: {
          version: cartVersion,
          actions: cartUpdateActions,
        },
      })
      .execute()
      .then((response) => response.body);
  }

  public getCartById(params: CartGetParamsDto): Promise<Cart> {
    const { id, storeKey } = params;
    return this.apiRoot
      .inStoreKeyWithStoreKeyValue({ storeKey })
      .carts()
      .withId({ ID: id })
      .get()
      .execute()
      .then((response) => response.body);
  }
}

//   private calculateBonusPoints = async (
//     cartTotal: number
//   ): Promise<number> => {

//     let bonusPoints = 0;

//     const query = `
//       query ($customObjectContainer: String!) {
//         customObjects (container: $customObjectContainer) { results { key value } }
//       }
//     `;

//     var graphQLResponse =  await this.apiRoot.graphql() 
//         .post({
//             body: {
//             query,
//             variables: {customObjectContainer: 'schemas'}
//             }
//         })
//         .execute();

//     let customObject = graphQLResponse.body.data.customObjects.results[0].value;

//     Object.entries(customObject).forEach(block => {
//         let { minCartValue, maxCartValue, factor, addon } = block[1] as cartValues;
//         if(cartTotal >= minCartValue && cartTotal <= maxCartValue){
//             bonusPoints = (cartTotal/100) * factor + addon;
//         }
//     })
//     return bonusPoints;
//   }

// }

// export interface cartValues {
//     minCartValue: number; maxCartValue: number; factor: number; addon: number;
// }
