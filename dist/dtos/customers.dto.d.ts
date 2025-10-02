export declare class CustomerAuthenticateBodyDto {
    email: string;
    password: string;
    anonymousCartId?: string;
}
export declare class CustomerAuthenticateParamsDto {
    storeKey: string;
}
declare const CustomerAuthenticateDto_base: import("@nestjs/mapped-types").MappedType<CustomerAuthenticateBodyDto & CustomerAuthenticateParamsDto>;
export declare class CustomerAuthenticateDto extends CustomerAuthenticateDto_base {
}
export declare class CustomFieldsUpdateBodyDto {
    points: number;
}
export declare class CustomFieldsUpdateParamsDto {
    storeKey: string;
    customerKey: string;
}
declare const CustomFieldsUpdateDto_base: import("@nestjs/mapped-types").MappedType<CustomFieldsUpdateBodyDto & CustomFieldsUpdateParamsDto>;
export declare class CustomFieldsUpdateDto extends CustomFieldsUpdateDto_base {
}
export {};
