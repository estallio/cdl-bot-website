import {
  linkIcon,
  linkRenderer,
  fileIcon,
  fileRenderer,
  blueBoxLinkIcon,
  blueBoxLinkRender,
  blueBoxFileIcon,
  blueBoxFileRender
} from './textInputUtils';

export default () => ({
  type: 'block',
  styles: [
    { title: 'Normal', value: 'normal' },
  ],
  // lists: [],
  marks: {
    decorators: [
      { title: 'Strong', value: 'strong' },
      { title: 'Underline', value: 'underline' },
      { title: 'Strike', value: 'strike-through' },
      { title: 'Emphasis', value: 'em' },
      { title: 'Code', value: 'code' },
    ],
    annotations: [
      {
        name: 'link',
        type: 'object',
        title: 'Link',
        blockEditor: {
          icon: linkIcon,
          render: linkRenderer,
        },
        fields: [
          {
            name: 'href',
            type: 'url',
            title: 'URL'
          },
          {
            title: 'Open link in same tab',
            name: 'sameTab',
            type: 'boolean',
          },
        ]
      },
      {
        name: 'file',
        type: 'file',
        title: 'File',
        blockEditor: {
          icon: fileIcon,
          render: fileRenderer,
        },
      },
      {
        name: 'blueBoxLink',
        type: 'object',
        title: 'Link with blue background',
        blockEditor: {
          icon: blueBoxLinkIcon,
          render: blueBoxLinkRender
        },
        fields: [
          {
            name: 'href',
            type: 'url',
            title: 'URL'
          },
          {
            title: 'Open link in same tab',
            name: 'sameTab',
            type: 'boolean',
          },
        ]
      },
      {
        name: 'blueBoxFile',
        type: 'file',
        title: 'File with blue background',
        blockEditor: {
          icon: blueBoxFileIcon,
          render: blueBoxFileRender
        },
      }
    ],
  }
});
