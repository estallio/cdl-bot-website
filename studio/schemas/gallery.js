import React from 'react'
import { BsImages } from 'react-icons/bs';

import { galleryPreview } from './galleryPreview';

export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'object',
  icon: BsImages,
  preview: {
    select: {
      images: 'images'
    },
    component: galleryPreview
  },
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          name: 'image',
          title: 'Image',
          type: 'image'
        }
      ]
    }
  ]
};
