import { ByProjectKeyRequestBuilder } from '@commercetools/platform-sdk';
export declare class ProjectSettingsService {
    private readonly apiRoot;
    constructor(apiRoot: ByProjectKeyRequestBuilder);
    getCountries(): Promise<Array<string>>;
}
