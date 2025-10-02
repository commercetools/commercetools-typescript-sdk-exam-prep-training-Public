import { CartsService } from '../services/carts.service';
import { CartCreateBodyDto, CartCreateParamsDto, CartGetParamsDto, LineItemsAddBodyDto, LineItemsAddParamsDto, ShippingAddressUpdateBodyDto, ShippingAddressUpdateParamsDto, ShippingMethodUpdateBodyDto, ShippingMethodUpdateParamsDto } from '../dtos/carts.dto';
export declare class CartsController {
    private readonly cartsService;
    constructor(cartsService: CartsService);
    getCart(cartParams: CartGetParamsDto): Promise<import("@commercetools/platform-sdk").Cart>;
    createAnonymousCart(cartParams: CartCreateParamsDto, cartData: CartCreateBodyDto): Promise<import("@commercetools/platform-sdk").Cart>;
    addLineItems(lineItemsParams: LineItemsAddParamsDto, lineItemsData: LineItemsAddBodyDto): Promise<import("@commercetools/platform-sdk").Cart>;
    updateShippingAddress(shippingAddressParams: ShippingAddressUpdateParamsDto, shippingAddressData: ShippingAddressUpdateBodyDto): Promise<import("@commercetools/platform-sdk").Cart>;
    updateShippingMethod(shippingMethodParams: ShippingMethodUpdateParamsDto, shippingMethodData: ShippingMethodUpdateBodyDto): Promise<import("@commercetools/platform-sdk").Cart>;
}
