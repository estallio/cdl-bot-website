import defaultEditorSettings from './defaultEditorSettings';

export default {
  title: 'Team',
  name: 'team',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'create', 'delete'],
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Picture',
      name: 'picture',
      type: 'image',
      description: 'The face should be visible in a 3:4 portrait mode box in the center of the image. The image scales up to the available place on the page with it\'s smalles side - the rest is cut off and not visible.'
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
    },
    {
      title: 'Info English',
      name: 'infoEn',
      type: 'array',
      of: [
        defaultEditorSettings(true),
      ],
    },
    {
      title: 'Info German',
      name: 'infoDe',
      type: 'array',
      of: [
        defaultEditorSettings(true),
      ],
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true,
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'picture',
    }
  },
  orderings: [
    {
      title: 'sort order',
      name: 'sortOrder',
      by: [
        { field: 'order', direction: 'asc' }
      ]
    },
    {
      title: 'name',
      name: 'nameOrder',
      by: [
        { field: 'name', direction: 'asc' }
      ]
    }
  ]
}
