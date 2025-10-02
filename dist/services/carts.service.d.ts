import { ByProjectKeyRequestBuilder, Cart } from '@commercetools/platform-sdk';
import { CartCreateDto, CartGetParamsDto, LineItemsAddDto, ShippingAddressUpdateDto, ShippingMethodUpdateDto } from '../dtos/carts.dto';
export declare class CartsService {
    private readonly apiRoot;
    constructor(apiRoot: ByProjectKeyRequestBuilder);
    createCart(cartDetails: CartCreateDto): Promise<Cart>;
    addLineItemsToCart(lineItemsDetails: LineItemsAddDto): Promise<Cart>;
    updateCartShippingAddress(shippingAddressDetails: ShippingAddressUpdateDto): Promise<Cart>;
    updateCartShippingMethod(shippingMethodDetails: ShippingMethodUpdateDto): Promise<Cart>;
    getCartById(params: CartGetParamsDto): Promise<Cart>;
}
