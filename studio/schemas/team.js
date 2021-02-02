import defaultEditorSettings from './defaultEditorSettings';

export default {
  title: 'Team',
  name: 'team',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'create', 'delete'],
  fields: [
    {
      title: 'Picture',
      name: 'picture',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
    },
    {
      title: 'Description English',
      name: 'descriptionEn',
      type: 'array',
      of: [
        defaultEditorSettings(true),
      ],
    },
    {
      title: 'Description German',
      name: 'descriptionDe',
      type: 'array',
      of: [
        defaultEditorSettings(true),
      ],
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'picture',
    }
  }
}
