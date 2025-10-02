import { ExtensionsService } from '../services/extensions.service';
import { CustomObjectCreateUpdateBodyDto } from '../dtos/extensions.dto';
export declare class ExtensionsController {
    private readonly extensionsService;
    constructor(extensionsService: ExtensionsService);
    createType(): Promise<import("@commercetools/platform-sdk").Type>;
    createUpdateCustomObject(customObjectCreateUpdateBodyDto: CustomObjectCreateUpdateBodyDto): Promise<import("@commercetools/platform-sdk").CustomObject>;
    getCustomObject(): Promise<import("@commercetools/platform-sdk").CustomObject>;
}
