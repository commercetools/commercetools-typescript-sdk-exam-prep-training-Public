"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const api_client_module_1 = require("./commercetools/api-client.module");
const import_api_client_module_1 = require("./commercetools/import-api-client.module");
const serve_static_1 = require("@nestjs/serve-static");
const app_controller_1 = require("./app.controller");
const carts_controller_1 = require("./controllers/carts.controller");
const customers_controller_1 = require("./controllers/customers.controller");
const extensions_controller_1 = require("./controllers/extensions.controller");
const orders_controller_1 = require("./controllers/orders.controller");
const products_controller_1 = require("./controllers/products.controller");
const shipping_methods_controller_1 = require("./controllers/shipping-methods.controller");
const app_service_1 = require("./app.service");
const carts_service_1 = require("./services/carts.service");
const customers_service_1 = require("./services/customers.service");
const extensions_service_1 = require("./services/extensions.service");
const orders_service_1 = require("./services/orders.service");
const products_service_1 = require("./services/products.service");
const shipping_methods_service_1 = require("./services/shipping-methods.service");
const stores_service_1 = require("./services/stores.service");
const stores_controller_1 = require("./controllers/stores.controller");
const project_settings_controller_1 = require("./controllers/project-settings.controller");
const project_settings_service_1 = require("./services/project-settings.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            api_client_module_1.ApiClientModule.forRoot({
                clientId: process.env.CTP_CLIENT_ID,
                clientSecret: process.env.CTP_CLIENT_SECRET,
                projectKey: process.env.CTP_PROJECT_KEY,
                apiUrl: process.env.CTP_API_URL,
                authUrl: process.env.CTP_AUTH_URL,
            }),
            import_api_client_module_1.ImportApiClientModule.forRoot({
                clientId: process.env.CTP_CLIENT_ID,
                clientSecret: process.env.CTP_CLIENT_SECRET,
                projectKey: process.env.CTP_PROJECT_KEY,
                apiUrl: process.env.CTP_IMPORT_API_URL,
                authUrl: process.env.CTP_AUTH_URL,
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'static'),
                exclude: ['/api*'],
            }),
        ],
        controllers: [
            app_controller_1.AppController,
            shipping_methods_controller_1.ShippingMethodsController,
            products_controller_1.ProductsController,
            carts_controller_1.CartsController,
            customers_controller_1.CustomersController,
            orders_controller_1.OrdersController,
            extensions_controller_1.ExtensionsController,
            stores_controller_1.StoresController,
            project_settings_controller_1.ProjectSettingsController,
        ],
        providers: [
            app_service_1.AppService,
            stores_service_1.StoresService,
            shipping_methods_service_1.ShippingMethodsService,
            products_service_1.ProductsService,
            carts_service_1.CartsService,
            customers_service_1.CustomersService,
            orders_service_1.OrdersService,
            extensions_service_1.ExtensionsService,
            project_settings_service_1.ProjectSettingsService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map