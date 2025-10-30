import {
  ByProjectKeyRequestBuilder,
  ShippingMethod,
  ShippingMethodPagedQueryResponse,
} from '@commercetools/platform-sdk';
import { Inject, Injectable } from '@nestjs/common';
import { isSDKError } from '../types/error.type';
import { ObjectNotFoundException } from '../errors/object-not-found.error';
import { RequestParamMalformedException } from '../errors/request-param-malformed.error';
import { API_ROOT } from 'src/commercetools/api-client.module';

@Injectable()
export class ShippingMethodsService {
  constructor(
    @Inject(API_ROOT) private readonly apiRoot: ByProjectKeyRequestBuilder,
  ) {}

  getAllShippingMethods(): Promise<ShippingMethodPagedQueryResponse> {
    return this.apiRoot
      .shippingMethods()
      .get({
        queryArgs: { expand: 'zoneRates[*].zone' },
      })
      .execute()
      .then((response) => response.body);
  }

  getShippingMethodByKey(key: string): Promise<any> {
    return this.apiRoot
      .shippingMethods()
      .get({
        queryArgs: { expand: 'zoneRates[*].zone' },
      })
      .execute()
      .then((response) => response.body)
      .catch((error) => {
        if (isSDKError(error) && error.statusCode === 404) {
          throw new ObjectNotFoundException(
            `Shipping method with key '${key}' not found`,
          );
        }
        throw error;
      });
  }

  checkShippingMethodExists(key: string): Promise<void> {
    // TODO: implement check logic
    return Promise.resolve();
  }

  getShippingMethodsByLocation(
    countryCode: string,
  ): Promise<ShippingMethodPagedQueryResponse> {
    return this.apiRoot
      .shippingMethods()
      .matchingLocation()
      .get({
        queryArgs: {
          country: countryCode,
          expand: 'zoneRates[*].zone',
        },
      })
      .execute()
      .then((response) => response.body)
      .catch((error) => {
        if (isSDKError(error) && error.statusCode === 400) {
          throw new RequestParamMalformedException(
            `Country code '${countryCode}' is malformed`,
          );
        }
        throw error;
      });
  }

  getMatchingShippingMethods(
    storeKey: string,
    cartId: string,
  ): Promise<ShippingMethodPagedQueryResponse> {
    return this.apiRoot
      .inStoreKeyWithStoreKeyValue({ storeKey })
      .shippingMethods()
      .matchingCart()
      .get({
        queryArgs: {
          cartId,
          expand: 'zoneRates[*].zone',
        },
      })
      .execute()
      .then((response) => response.body);
  }
}
