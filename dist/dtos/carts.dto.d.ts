export declare class CartCreateBodyDto {
    sessionId?: string;
    sku: string;
    quantity?: number;
    country: string;
    currency: string;
}
export declare class CartCreateParamsDto {
    storeKey: string;
}
declare const CartCreateDto_base: import("@nestjs/mapped-types").MappedType<CartCreateBodyDto & CartCreateParamsDto>;
export declare class CartCreateDto extends CartCreateDto_base {
}
export declare class CartGetParamsDto {
    storeKey: string;
    id: string;
}
export declare class LineItemsAddBodyDto {
    sku: string;
    quantity?: number;
    supplyChannelKey?: string;
    distributionChannelKey?: string;
}
export declare class LineItemsAddParamsDto {
    storeKey: string;
    id: string;
}
declare const LineItemsAddDto_base: import("@nestjs/mapped-types").MappedType<LineItemsAddBodyDto & LineItemsAddParamsDto>;
export declare class LineItemsAddDto extends LineItemsAddDto_base {
}
export declare class DiscountCodeApplyBodyDto {
    discountCode: string;
}
export declare class ShippingAddressUpdateBodyDto {
    firstName?: string;
    lastName?: string;
    country: string;
    email: string;
}
export declare class ShippingAddressUpdateParamsDto {
    storeKey: string;
    id: string;
}
declare const ShippingAddressUpdateDto_base: import("@nestjs/mapped-types").MappedType<ShippingAddressUpdateBodyDto & ShippingAddressUpdateParamsDto>;
export declare class ShippingAddressUpdateDto extends ShippingAddressUpdateDto_base {
}
export declare class ShippingMethodUpdateParamsDto {
    storeKey: string;
    id: string;
}
export declare class ShippingMethodUpdateBodyDto {
    shippingMethodId: string;
}
declare const ShippingMethodUpdateDto_base: import("@nestjs/mapped-types").MappedType<ShippingMethodUpdateParamsDto & ShippingMethodUpdateBodyDto>;
export declare class ShippingMethodUpdateDto extends ShippingMethodUpdateDto_base {
}
export {};
