import {
  ByProjectKeyRequestBuilder,
  CustomObject,
  CustomObjectDraft,
  Type,
  TypeDraft,
} from '@commercetools/platform-sdk';
import { Inject, Injectable } from '@nestjs/common';
import { API_ROOT } from '../commercetools/api-client.module';
import { CustomObjectCreateUpdateBodyDto } from '../dtos/extensions.dto';

export const CUSTOM_TYPE_KEY = 'tt-loyalty-extension';
export const CUSTOM_OBJECT_CONTAINER = 'schemas';
export const CUSTOM_OBJECT_KEY = 'tt-loyalty-schema';

@Injectable()
export class ExtensionsService {
  constructor(
    @Inject(API_ROOT) private readonly apiRoot: ByProjectKeyRequestBuilder,
  ) {}

  getCustomObject(): Promise<CustomObject> {
    return this.apiRoot
      .customObjects()
      .withContainerAndKey({
        container: CUSTOM_OBJECT_CONTAINER,
        key: CUSTOM_OBJECT_KEY,
      })
      .get()
      .execute()
      .then((response) => response.body);
  }

  async createUpdateCustomObject(
    customObjectDetails: CustomObjectCreateUpdateBodyDto,
  ) {
    const { json } = customObjectDetails;

    const customObjectDraft: CustomObjectDraft = {
      container: CUSTOM_OBJECT_CONTAINER,
      key: CUSTOM_OBJECT_KEY,
      value: json,
    };

    return this.apiRoot
      .customObjects()
      .post({ body: customObjectDraft })
      .execute()
      .then((response) => response.body);
  }

  createCustomType(): Promise<Type> {
    const typeDraft: TypeDraft = {
      key: CUSTOM_TYPE_KEY,
      name: {
        'de-DE': 'TT Loyalty Scheme',
        'en-US': 'TT Loyalty Scheme',
        'en-GB': 'TT Loyalty Scheme',
      },
      resourceTypeIds: ['order'], // TODO: confirm resource types
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
}
