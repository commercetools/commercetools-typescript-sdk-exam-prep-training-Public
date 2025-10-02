import { CustomersService } from '../services/customers.service';
import { CustomFieldsUpdateBodyDto, CustomFieldsUpdateParamsDto, CustomerAuthenticateBodyDto, CustomerAuthenticateParamsDto } from '../dtos/customers.dto';
export declare class CustomersController {
    private readonly customersService;
    constructor(customersService: CustomersService);
    authenticateCustomer(customerAuthenticationParams: CustomerAuthenticateParamsDto, customerAuthenticationData: CustomerAuthenticateBodyDto): Promise<import("@commercetools/platform-sdk").CustomerSignInResult>;
    updateCustomerCustomFields(customFieldsParams: CustomFieldsUpdateParamsDto, customFieldsData: CustomFieldsUpdateBodyDto): Promise<import("@commercetools/platform-sdk").Customer>;
}
