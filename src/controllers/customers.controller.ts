import { Body, Controller, HttpCode, Param, Post } from '@nestjs/common';
import { CustomersService } from '../services/customers.service';
import {
  CustomFieldsUpdateBodyDto,
  CustomFieldsUpdateParamsDto,
  CustomerAuthenticateBodyDto,
  CustomerAuthenticateParamsDto,
} from '../dtos/customers.dto';

@Controller('/api/in-store/:storeKey/customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post('login')
  @HttpCode(200)
  authenticateCustomer(
    @Param() customerAuthenticationParams: CustomerAuthenticateParamsDto,
    @Body() customerAuthenticationData: CustomerAuthenticateBodyDto,
  ) {
    return this.customersService.authenticateCustomer({
      ...customerAuthenticationParams,
      ...customerAuthenticationData,
    });
  }

  @Post(':customerKey/custom-fields')
  @HttpCode(200)
  updateCustomerCustomFields(
    @Param() customFieldsParams: CustomFieldsUpdateParamsDto,
    @Body() customFieldsData: CustomFieldsUpdateBodyDto,
  ) {
    return this.customersService.updateCustomerCustomFields({
      ...customFieldsParams,
      ...customFieldsData,
    });
  }
}
