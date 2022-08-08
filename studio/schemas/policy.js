export default {
  title: 'Privacy Policy',
  name: 'policy',
  type: 'document',
  __experimental_actions: ['create','update', 'publish'],
  fields: [
    {
      title: 'Privacy Policy English',
      name: 'privacyPolicyContentEn',
      type: 'richEditor'
    },
    {
      title: 'Privacy Policy German',
      name: 'privacyPolicyContentGe',
      type: 'richEditor'
    },
  ],
}
