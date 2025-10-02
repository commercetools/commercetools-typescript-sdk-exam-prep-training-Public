import { DynamicModule } from '@nestjs/common';
import { APIClientModuleOptions } from './api-client.constant';
export declare const IMPORT_API_ROOT = "ImportApiRoot";
export declare class ImportApiClientModule {
    static forRoot(options: APIClientModuleOptions): DynamicModule;
}
