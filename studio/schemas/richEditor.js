import React from 'react'
import { BsImage, BsCode } from 'react-icons/bs';
import richText from './richText';

export default {
  name: 'richEditor',
  title: 'richEditor',
  type: 'array',
  of: [
    richText(),
    {
      type: 'image',
      icon: BsImage,
    },
    {
      type: 'gallery',
    },
    {
      type: 'linkButton',
    },
    {
      type: 'downloadButton',
    },
    {
      type: 'code',
      icon: BsCode
    }
  ]
}

export function richEditorToPlainText(blocks = []) {
  return blocks
  .map(block => {
    if (block._type === 'block' && block.children) {
      return block.children.map(child => child.text).join('');
    }

    return '';
  })
  .join('\n\n');
}
