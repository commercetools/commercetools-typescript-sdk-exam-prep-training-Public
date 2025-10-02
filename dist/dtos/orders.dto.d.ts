export declare class OrderCreateBodyDto {
    cartId: string;
    cartVersion: number;
}
export declare class OrderCreateParamsDto {
    storeKey: string;
}
declare const OrderCreateDto_base: import("@nestjs/mapped-types").MappedType<OrderCreateBodyDto & OrderCreateParamsDto>;
export declare class OrderCreateDto extends OrderCreateDto_base {
}
export {};
