import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBusinessHours extends Struct.ComponentSchema {
  collectionName: 'components_shared_business_hours';
  info: {
    displayName: 'business-hours';
  };
  attributes: {
    endTime: Schema.Attribute.Time & Schema.Attribute.DefaultTo<'00:00:00.000'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    startTime: Schema.Attribute.Time &
      Schema.Attribute.DefaultTo<'16:00:00.000'>;
  };
}

export interface SharedContact extends Struct.ComponentSchema {
  collectionName: 'components_shared_contacts';
  info: {
    displayName: 'contact';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface SharedSocials extends Struct.ComponentSchema {
  collectionName: 'components_shared_socials';
  info: {
    displayName: 'socials';
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
      'shared.contact': SharedContact;
      'shared.link': SharedLink;
      'shared.socials': SharedSocials;
    }
  }
}
