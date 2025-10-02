import { ByProjectKeyRequestBuilder, Customer, CustomerSignInResult } from '@commercetools/platform-sdk';
import { CustomerAuthenticateDto, CustomFieldsUpdateDto } from 'src/dtos/customers.dto';
export declare class CustomersService {
    private readonly apiRoot;
    constructor(apiRoot: ByProjectKeyRequestBuilder);
    authenticateCustomer(customerAuthenticationDetails: CustomerAuthenticateDto): Promise<CustomerSignInResult>;
    updateCustomerCustomFields(customFieldsDetails: CustomFieldsUpdateDto): Promise<Customer>;
    private getCustomerByKey;
}
