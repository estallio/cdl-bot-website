export default {
  title: 'Imprint',
  name: 'imprint',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      title: 'Imprint English',
      name: 'imprintContentEn',
      type: 'richEditor'
    },
    {
      title: 'Imprint German',
      name: 'imprintContentGe',
      type: 'richEditor'
    },
  ],
}
