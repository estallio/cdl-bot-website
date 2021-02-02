import defaultEditorSettings from './defaultEditorSettings';

export default {
  title: 'Publications',
  name: 'publications',
  type: 'document',
  __experimental_actions: ['update', 'publish' /* 'create', 'delete' */],
  fields: [
    {
      title: 'Publications',
      name: 'publications',
      type: 'array',
      of: [
        defaultEditorSettings(),
        {
          type: 'image'
        },
        {
          type: 'code'
        }
      ],
    },
  ],
}
