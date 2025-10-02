"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ApiClientModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiClientModule = exports.API_ROOT = void 0;
const common_1 = require("@nestjs/common");
const platform_sdk_1 = require("@commercetools/platform-sdk");
const ts_client_1 = require("@commercetools/ts-client");
exports.API_ROOT = 'ApiRoot';
let ApiClientModule = ApiClientModule_1 = class ApiClientModule {
    static forRoot(options) {
        const { clientId, clientSecret, projectKey, apiUrl, authUrl } = options;
        const client = new ts_client_1.ClientBuilder()
            .withClientCredentialsFlow({
            credentials: {
                clientId,
                clientSecret,
            },
            projectKey,
            host: authUrl,
        })
            .withHttpMiddleware({
            host: apiUrl,
        })
            .build();
        const apiRoot = (0, platform_sdk_1.createApiBuilderFromCtpClient)(client).withProjectKey({
            projectKey,
        });
        const apiRootProvider = {
            provide: exports.API_ROOT,
            useValue: apiRoot,
        };
        return {
            module: ApiClientModule_1,
            providers: [apiRootProvider],
            exports: [apiRootProvider],
            global: true,
        };
    }
};
exports.ApiClientModule = ApiClientModule;
exports.ApiClientModule = ApiClientModule = ApiClientModule_1 = __decorate([
    (0, common_1.Module)({})
], ApiClientModule);
//# sourceMappingURL=api-client.module.js.map