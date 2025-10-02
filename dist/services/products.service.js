"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const platform_sdk_1 = require("@commercetools/platform-sdk");
const error_type_1 = require("../types/error.type");
const object_not_found_error_1 = require("../errors/object-not-found.error");
const api_client_module_1 = require("../commercetools/api-client.module");
const stores_service_1 = require("./stores.service");
let ProductsService = class ProductsService {
    constructor(apiRoot, storesService) {
        this.apiRoot = apiRoot;
        this.storesService = storesService;
    }
    async searchProducts(searchDetails) {
        const { keyword, storeKey, facets: useFacets, currency, country, locale, } = searchDetails;
        let searchQuery;
        if (storeKey || keyword) {
            let storeQueryExpression;
            let fullTextQueryExpression;
            if (storeKey) {
                const storeId = await this.getStoreId(storeKey);
                storeQueryExpression = {
                    exact: { field: 'stores', value: storeId },
                };
            }
            if (keyword) {
                fullTextQueryExpression = {
                    fullText: {
                        field: 'name',
                        language: locale ?? 'en-US',
                        value: keyword,
                        mustMatch: 'any',
                        caseInsensitive: true,
                    },
                };
            }
            if (storeQueryExpression && fullTextQueryExpression) {
                searchQuery = { and: [storeQueryExpression, fullTextQueryExpression] };
            }
            else {
                searchQuery = storeQueryExpression || fullTextQueryExpression;
            }
        }
        const facets = useFacets ? createFacets(locale) : undefined;
        const productSearchRequest = {
            query: searchQuery,
            facets,
            sort: [
                {
                    field: 'variants.prices.centAmount',
                    order: 'asc',
                    mode: 'min',
                    filter: {
                        and: [
                            {
                                exact: {
                                    field: 'variants.prices.country',
                                    value: country,
                                },
                            },
                            {
                                exact: {
                                    field: 'variants.prices.currencyCode',
                                    value: currency,
                                },
                            },
                        ],
                    },
                },
            ],
            markMatchingVariants: true,
            productProjectionParameters: {
                priceCurrency: currency,
                priceCountry: country,
                storeProjection: storeKey,
                localeProjection: [locale],
            },
        };
        return this.apiRoot
            .products()
            .search()
            .post({ body: productSearchRequest })
            .execute()
            .then((response) => response.body);
    }
    async getStoreId(storeKey) {
        try {
            const store = await this.storesService.getStoreByKey(storeKey);
            return store.id;
        }
        catch (error) {
            if ((0, error_type_1.isSDKError)(error) && error.statusCode === 404) {
                throw new object_not_found_error_1.ObjectNotFoundException(`Store with key '${storeKey}' not found`);
            }
            throw error;
        }
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(api_client_module_1.API_ROOT)),
    __metadata("design:paramtypes", [platform_sdk_1.ByProjectKeyRequestBuilder,
        stores_service_1.StoresService])
], ProductsService);
function createFacets(locale) {
    return [
        {
            distinct: {
                name: 'Color',
                field: 'variants.attributes.search-color.label',
                fieldType: 'lenum',
                language: locale,
                level: 'variants',
                scope: 'query',
            },
        },
        {
            distinct: {
                name: 'Finish',
                field: 'variants.attributes.search-finish.label',
                fieldType: 'lenum',
                language: locale,
                level: 'variants',
                scope: 'query',
            },
        },
    ];
}
//# sourceMappingURL=products.service.js.map