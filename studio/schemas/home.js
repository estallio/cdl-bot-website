export default {
  title: 'Home',
  name: 'home',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      title: 'Welcome',
      type: 'object',
      name: 'welcome',
      options: {
        collapsible: true,
        collapsed: true,
        columns: 2
      },
      fields: [
        {
          title: 'Welcome title blue background English',
          name: 'welcomeTitleBlueBackgroundEn',
          type: 'string'
        },
        {
          title: 'Welcome title blue background German',
          name: 'welcomeTitleBlueBackgroundDe',
          type: 'string'
        },
        {
          title: 'Welcome title English',
          name: 'welcomeTitleEn',
          type: 'string'
        },
        {
          title: 'Welcome title German',
          name: 'welcomeTitleDe',
          type: 'string'
        },
        {
          title: 'Welcome text English',
          name: 'welcomeTextEn',
          type: 'richEditor',
        },
        {
          title: 'Welcome text German',
          name: 'welcomeTextDe',
          type: 'richEditor',
        },
        {
          title: 'Welcome image',
          name: 'welcomeImage',
          type: 'image',
        },
      ]
    },
    {
      title: 'Research',
      type: 'object',
      name: 'research',
      options: {
        collapsible: true,
        collapsed: true,
        columns: 2
      },
      fields: [
        {
          title: 'Research title English',
          name: 'researchTitleEn',
          type: 'string'
        },
        {
          title: 'Research title German',
          name: 'researchTitleDe',
          type: 'string'
        },
        {
          title: 'Research text English',
          name: 'researchTextEn',
          type: 'richEditor',
        },
        {
          title: 'Research text German',
          name: 'researchTextDe',
          type: 'richEditor',
        },
        {
          title: 'Research image',
          name: 'researchImage',
          type: 'image',
        },
      ]
    },
    {
      title: 'Supporters and partners',
      type: 'object',
      name: 'supportersAndPartners',
      options: {
        collapsible: true,
        collapsed: true,
        columns: 2
      },
      fields: [
        {
          title: 'Supporters and partners title English',
          name: 'supportersAndPartnersTitleEn',
          type: 'string'
        },
        {
          title: 'Supporters and partners title German',
          name: 'supportersAndPartnersTitleDe',
          type: 'string'
        },
        {
          title: 'Supporters and partners text English',
          name: 'supportersAndPartnersTextEn',
          type: 'richEditor',
        },
        {
          title: 'Supporters and partners text German',
          name: 'supportersAndPartnersTextDe',
          type: 'richEditor',
        },
        {
          title: 'Supporters and partners',
          name: 'supportersAndPartners',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'supporterOrPartner',
              fields: [
                {
                  title: 'name',
                  name: 'name',
                  type: 'string',
                },
                {
                  name: 'href',
                  type: 'url',
                  title: 'URL'
                },
                {
                  title: 'Logo',
                  type: 'image',
                  name: 'logo',
                },
              ]
            }
          ]
        }
      ]
    },
  ],
}
