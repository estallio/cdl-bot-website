export default (isTeam = false) => ({
  type: 'block',
  styles: [
    {title: 'Normal', value: 'normal'},
    {title: 'Heading', value: 'h2'},
  ],
  ...(isTeam ? { lists: [] } : {
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' }
      ]
    }
  ),
  marks: {
    decorators: [
      { title: 'Strong', value: 'strong' },
      { title: 'Underline', value: 'underline' },
      { title: "Strike", value: "strike-through" },
      { title: 'Emphasis', value: 'em' },
      { title: 'Code', value: 'code' },
    ],
    annotations: [
      {
        name: 'link',
        type: 'object',
        title: 'Link',
        fields: [
          {
            name: 'href',
            type: 'url',
            title: 'URL'
          },
          {
            title: 'Show this link in a blue box',
            name: 'withBlueBox',
            type: 'boolean',
          },
          {
            title: 'Show this link in a big box',
            name: 'withBigBox',
            type: 'boolean',
          },
          {
            title: 'Open link in same tab',
            name: 'sameTab',
            type: 'boolean',
          }
        ]
      }
    ],
  }
});
