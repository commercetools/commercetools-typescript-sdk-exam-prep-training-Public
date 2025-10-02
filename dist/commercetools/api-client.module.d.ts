import { DynamicModule } from '@nestjs/common';
import { APIClientModuleOptions } from './api-client.constant';
export declare const API_ROOT = "ApiRoot";
export declare class ApiClientModule {
    static forRoot(options: APIClientModuleOptions): DynamicModule;
}
