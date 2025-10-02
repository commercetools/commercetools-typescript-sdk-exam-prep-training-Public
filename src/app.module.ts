import { Module } from '@nestjs/common';
import { join } from 'path';
import { ApiClientModule } from './commercetools/api-client.module';
import { ImportApiClientModule } from './commercetools/import-api-client.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { CartsController } from './controllers/carts.controller';
import { CustomersController } from './controllers/customers.controller';
import { ExtensionsController } from './controllers/extensions.controller';
import { OrdersController } from './controllers/orders.controller';
import { ProductsController } from './controllers/products.controller';
import { ShippingMethodsController } from './controllers/shipping-methods.controller';
import { AppService } from './app.service';
import { CartsService } from './services/carts.service';
import { CustomersService } from './services/customers.service';
import { ExtensionsService } from './services/extensions.service';
import { OrdersService } from './services/orders.service';
import { ProductsService } from './services/products.service';
import { ShippingMethodsService } from './services/shipping-methods.service';
import { StoresService } from './services/stores.service';
import { StoresController } from './controllers/stores.controller';
import { ProjectSettingsController } from './controllers/project-settings.controller';
import { ProjectSettingsService } from './services/project-settings.service';

@Module({
  imports: [
    ApiClientModule.forRoot({
      clientId: process.env.CTP_CLIENT_ID!,
      clientSecret: process.env.CTP_CLIENT_SECRET!,
      projectKey: process.env.CTP_PROJECT_KEY!,
      apiUrl: process.env.CTP_API_URL!,
      authUrl: process.env.CTP_AUTH_URL!,
    }),
    ImportApiClientModule.forRoot({
      clientId: process.env.CTP_CLIENT_ID!,
      clientSecret: process.env.CTP_CLIENT_SECRET!,
      projectKey: process.env.CTP_PROJECT_KEY!,
      apiUrl: process.env.CTP_IMPORT_API_URL!,
      authUrl: process.env.CTP_AUTH_URL!,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'), // Change to your static files directory
      exclude: ['/api*'], // Ensures API routes are not overridden
    }),
  ],
  controllers: [
    AppController,
    ShippingMethodsController,
    ProductsController,
    CartsController,
    CustomersController,
    OrdersController,
    ExtensionsController,
    StoresController,
    ProjectSettingsController,
  ],
  providers: [
    AppService,
    StoresService,
    ShippingMethodsService,
    ProductsService,
    CartsService,
    CustomersService,
    OrdersService,
    ExtensionsService,
    ProjectSettingsService,
  ],
})
export class AppModule {}
