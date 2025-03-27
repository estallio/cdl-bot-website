import React from 'react';

import { useTranslation } from '../i18n';

import { fetchPublications } from '../lib/api';

import ExtendedBlockContent from '../lib/ExtendedBlockContent';

import Meta from '../components/Meta';

import Layout from '../components/Layout';

import styles from './index.module.sass';

const Publications = ({ publications, seo }) => {
  const {
    i18n: { language },
    t,
  } = useTranslation('publications');
  
  const getSortedPublications = (content = []) => {
    const sorted = [];
    let currentYearBlock = null;
    let currentEntries = [];

    const pushYearGroup = () => {
      if (currentYearBlock) {
        // Sort entries alphabetically based on their first author text
        currentEntries.sort((a, b) => {
          const aText = a.children?.map(c => c.text).join('') || '';
          const bText = b.children?.map(c => c.text).join('') || '';
          return aText.localeCompare(bText);
        });
        sorted.push(currentYearBlock, ...currentEntries);
      }
    };

    for (const block of content) {
      if (block._type === 'block' && block.style === 'h3') {
        // This is a year heading like "2025"
        pushYearGroup();
        currentYearBlock = block;
        currentEntries = [];
      } else if (block._type === 'block' && block.style === 'normal') {
        // This is a publication entry
        currentEntries.push(block);
      } else {
        // Other block types just go into the sorted array as-is
        sorted.push(block);
      }
    }

    pushYearGroup(); // push the final group
    return sorted;
  };


  return (
    <>
      <Meta seo={seo.seoPublications} />
      <Layout>
        <h1>
          <span className={styles.pageHeading}>
            {language === 'de' ? 'Publikationen' : 'Publications'}
          </span>
        </h1>
        <ExtendedBlockContent blocks={getSortedPublications(publications.content)} />

      </Layout>
    </>
  );
};

Publications.defaultProps = {
  i18nNamespaces: ['miscellaneous'],
};

export async function getServerSideProps() {
  const { publications, seo } = await fetchPublications();

  return {
    props: {
      publications,
      seo,
    },
  };
}

export default Publications;
