export default {
  title: 'Footer',
  name: 'footer',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      title: 'Contact',
      name: 'contact',
      type: 'object',
      fields: [
        {
          title: 'First line',
          name: 'firstLine',
          type: 'string'
        },
        {
          title: 'Second line',
          name: 'secondLine',
          type: 'string'
        },
        {
          title: 'Third line',
          name: 'thirdLine',
          type: 'string'
        },
        {
          title: 'Fourth line',
          name: 'fourthLine',
          type: 'string'
        }
      ]
    },
    {
      title: 'Imprint English',
      name: 'imprintEn',
      type: 'text'
    },
    {
      title: 'Imprint German',
      name: 'imprintDe',
      type: 'text'
    }
  ],
}
