import React from 'react'
import client from 'part:@sanity/base/client'
import urlBuilder from '@sanity/image-url'

const urlFor = source => urlBuilder(client).image(source)

export const galleryPreview = ({ value = {} }) => {
  return (
    <div style={{ marginTop: 5 }}>
      {value && value.images &&
        value.images.map(image => {
          return (
            <div
              key={image._key}
              style={{ display: 'inline-block' }}
            >
              <img
                src={urlFor(image)
                  .height(100)
                  .url()}
                style={{ marginLeft: 5, marginRight: 5, height: 100 }}
              />
          </div>
        );}
      )}
    </div>
  )
}
