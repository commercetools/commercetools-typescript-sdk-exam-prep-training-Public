import { ProductsService } from '../services/products.service';
import { ProductsSearchDto } from 'src/dtos/products.dto';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    searchProducts(searchParams: ProductsSearchDto): Promise<import("@commercetools/platform-sdk").ProductPagedSearchResponse>;
}
