import { ByProjectKeyRequestBuilder, ProductPagedSearchResponse } from '@commercetools/platform-sdk';
import { ProductsSearchDto } from 'src/dtos/products.dto';
import { StoresService } from './stores.service';
export declare class ProductsService {
    private readonly apiRoot;
    private readonly storesService;
    constructor(apiRoot: ByProjectKeyRequestBuilder, storesService: StoresService);
    searchProducts(searchDetails: ProductsSearchDto): Promise<ProductPagedSearchResponse>;
    private getStoreId;
}
