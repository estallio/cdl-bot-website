export default {
  title: 'Team',
  name: 'team',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      title: 'Persons',
      name: 'persons',
      type: 'array',
      of: [ { type: 'person' } ],
    }
  ]
}
