import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBusinessHours extends Struct.ComponentSchema {
  collectionName: 'components_shared_business_hours';
  info: {
    displayName: 'business-hours';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.business-hours': SharedBusinessHours;
      'shared.link': SharedLink;
    }
  }
}
