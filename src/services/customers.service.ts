import {
  ByProjectKeyRequestBuilder,
  Customer,
  CustomerSetCustomTypeAction,
  CustomerSignin,
  CustomerSignInResult,
  CustomerUpdateAction,
} from '@commercetools/platform-sdk';
import { Inject, Injectable } from '@nestjs/common';
import { API_ROOT } from 'src/commercetools/api-client.module';
import { CustomerAuthenticateDto, CustomFieldsUpdateDto } from 'src/dtos/customers.dto';
import { CUSTOM_TYPE_KEY } from './extensions.service';

@Injectable()
export class CustomersService {
  constructor(
    @Inject(API_ROOT) private readonly apiRoot: ByProjectKeyRequestBuilder,
  ) {}


  authenticateCustomer(
    customerAuthenticationDetails: CustomerAuthenticateDto,
  ): Promise<CustomerSignInResult> {
    const { email, password, anonymousCartId, storeKey } =
      customerAuthenticationDetails;

    const customerSignIn: CustomerSignin = {
      email,
      password,
      ...(anonymousCartId && {
        anonymousCart: {
          id: anonymousCartId,
          typeId: 'cart',
        },
        // anonymousCartSignInMode: 'UseAsNewActiveCustomerCart',
      }),
    };

    return this.apiRoot
      .inStoreKeyWithStoreKeyValue({ storeKey })
      .login()
      .post({
        body: customerSignIn,
      })
      .execute()
      .then((response) => response.body);
  }

  async updateCustomerCustomFields(
    customFieldsDetails: CustomFieldsUpdateDto,
  ): Promise<Customer> {
    const { customerKey, points, storeKey } = customFieldsDetails;

    let customer = await this.getCustomerByKey(customerKey, storeKey);
    console.log('Points:', points);
    const updateCustomerCustomFields: CustomerSetCustomTypeAction = {
      action: 'setCustomType',
      type: {
        key: CUSTOM_TYPE_KEY,
        typeId: 'type',
      },
      fields: {
        points: 0 // TODO: set actual points
      },
    };

    const customerUpdateActions: CustomerUpdateAction[] = [];
    customerUpdateActions.push(updateCustomerCustomFields);

    return this.apiRoot
      .inStoreKeyWithStoreKeyValue({ storeKey })
      .customers()
      .withKey({ key: customerKey })
      .post({
        body: {
          version: customer.version,
          actions: customerUpdateActions,
        },
      })
      .execute()
      .then((response) => response.body);
  }

  private getCustomerByKey(
    key: string,
    storeKey: string,
  ): Promise<Customer> {
    return this.apiRoot
      .inStoreKeyWithStoreKeyValue({ storeKey })
      .customers()
      .withKey({ key })
      .get()
      .execute()
      .then((response) => response.body);
  }
}
