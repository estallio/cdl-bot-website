import React from 'react';
import BlockContent from '@sanity/block-content-to-react';

import classNames from 'classnames';

import styles from '../pages/index.module.sass';

// Helper to render links with the respective properties when the blank-field in the sanity studio is set
// This is like an extension for the structured-text approach of Sanity
const serializers = {
  marks: {
    link: ({ mark, children }) => {
      const { sameTab, href, withBlueBox, withBigBox } = mark;
      const className = classNames({
        [styles.withBlueBox]: withBlueBox,
        [styles.withBigBox]: withBigBox,
      });

      return sameTab ? (
        <a href={href} className={className}>
          <span>{children}</span>
        </a>
      ) : (
        <a href={href} target="_blank" rel="noreferrer" className={className}>
          <span>{children}</span>
        </a>
      );
    },
  },
  types: {
    image: ({ node: { imageUrl } }) => {
      return (
        <a href={imageUrl} target="_blank" rel="noreferrer">
          <img src={imageUrl + '?w=1500&h=1000&fit=clip&auto=format'} />
        </a>
      );
    },
  },
};

const ExtendedBlockContent = ({ blocks }) => (
  <div className={styles.blockContent}>
    <BlockContent blocks={blocks} serializers={serializers} />
  </div>
);

export default ExtendedBlockContent;
