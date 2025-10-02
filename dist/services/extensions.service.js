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
exports.ExtensionsService = exports.CUSTOM_OBJECT_KEY = exports.CUSTOM_OBJECT_CONTAINER = exports.CUSTOM_TYPE_KEY = void 0;
const platform_sdk_1 = require("@commercetools/platform-sdk");
const common_1 = require("@nestjs/common");
const api_client_module_1 = require("../commercetools/api-client.module");
exports.CUSTOM_TYPE_KEY = 'tt-loyalty-extension';
exports.CUSTOM_OBJECT_CONTAINER = 'schemas';
exports.CUSTOM_OBJECT_KEY = 'tt-loyalty-schema';
let ExtensionsService = class ExtensionsService {
    constructor(apiRoot) {
        this.apiRoot = apiRoot;
    }
    getCustomObject() {
        return this.apiRoot
            .customObjects()
            .withContainerAndKey({
            container: exports.CUSTOM_OBJECT_CONTAINER,
            key: exports.CUSTOM_OBJECT_KEY,
        })
            .get()
            .execute()
            .then((response) => response.body);
    }
    async createUpdateCustomObject(customObjectDetails) {
        const { json } = customObjectDetails;
        const customObjectDraft = {
            container: exports.CUSTOM_OBJECT_CONTAINER,
            key: exports.CUSTOM_OBJECT_KEY,
            value: json,
        };
        return this.apiRoot
            .customObjects()
            .post({ body: customObjectDraft })
            .execute()
            .then((response) => response.body);
    }
    createCustomType() {
        const typeDraft = {
            key: exports.CUSTOM_TYPE_KEY,
            name: {
                'de-DE': 'TT Loyalty Scheme',
                'en-US': 'TT Loyalty Scheme',
                'en-GB': 'TT Loyalty Scheme',
            },
            resourceTypeIds: ['customer', 'order'],
            fieldDefinitions: [
                {
                    type: {
                        name: 'Number',
                    },
                    name: 'points',
                    label: {
                        'de-DE': 'Punkte',
                        'en-US': 'Points',
                        'en-GB': 'Points',
                    },
                    required: true,
                },
            ],
        };
        return this.apiRoot
            .types()
            .post({
            body: typeDraft,
        })
            .execute()
            .then((response) => response.body);
    }
};
exports.ExtensionsService = ExtensionsService;
exports.ExtensionsService = ExtensionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(api_client_module_1.API_ROOT)),
    __metadata("design:paramtypes", [platform_sdk_1.ByProjectKeyRequestBuilder])
], ExtensionsService);
//# sourceMappingURL=extensions.service.js.map