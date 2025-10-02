import { ByProjectKeyRequestBuilder, CustomObject, Type } from '@commercetools/platform-sdk';
import { CustomObjectCreateUpdateBodyDto } from '../dtos/extensions.dto';
export declare const CUSTOM_TYPE_KEY = "tt-loyalty-extension";
export declare const CUSTOM_OBJECT_CONTAINER = "schemas";
export declare const CUSTOM_OBJECT_KEY = "tt-loyalty-schema";
export declare class ExtensionsService {
    private readonly apiRoot;
    constructor(apiRoot: ByProjectKeyRequestBuilder);
    getCustomObject(): Promise<CustomObject>;
    createUpdateCustomObject(customObjectDetails: CustomObjectCreateUpdateBodyDto): Promise<CustomObject>;
    createCustomType(): Promise<Type>;
}
