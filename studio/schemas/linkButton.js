import React from 'react'
import { AiOutlineLink } from 'react-icons/ai';

export default {
  name: 'linkButton',
  title: 'Link button',
  type: 'object',
  icon: AiOutlineLink,
  preview: {
    select: {
      title: 'title'
    },
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
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
};
