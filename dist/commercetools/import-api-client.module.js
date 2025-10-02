"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ImportApiClientModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportApiClientModule = exports.IMPORT_API_ROOT = void 0;
const common_1 = require("@nestjs/common");
const importapi_sdk_1 = require("@commercetools/importapi-sdk");
const ts_client_1 = require("@commercetools/ts-client");
exports.IMPORT_API_ROOT = 'ImportApiRoot';
let ImportApiClientModule = ImportApiClientModule_1 = class ImportApiClientModule {
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
        const importApiRoot = (0, importapi_sdk_1.createApiBuilderFromCtpClient)(client).withProjectKeyValue({
            projectKey,
        });
        const apiRootProvider = {
            provide: exports.IMPORT_API_ROOT,
            useValue: importApiRoot,
        };
        return {
            module: ImportApiClientModule_1,
            providers: [apiRootProvider],
            exports: [apiRootProvider],
            global: true,
        };
    }
};
exports.ImportApiClientModule = ImportApiClientModule;
exports.ImportApiClientModule = ImportApiClientModule = ImportApiClientModule_1 = __decorate([
    (0, common_1.Module)({})
], ImportApiClientModule);
//# sourceMappingURL=import-api-client.module.js.map