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
    let currentGroupBlock = null;
    let currentEntries = [];
  
    const pushGroup = () => {
      if (currentGroupBlock) {
        // Sort entries alphabetically by text content
        currentEntries.sort((a, b) => {
          const aText = a.children?.map(c => c.text).join('') || '';
          const bText = b.children?.map(c => c.text).join('') || '';
          return aText.localeCompare(bText);
        });
        sorted.push(currentGroupBlock, ...currentEntries);
      }
    };
  
    for (const block of content) {
      if (block._type === 'block' && block.style === 'normal') {
        const firstText = block.children?.[0]?.text?.trim();
  
        const isBoldOnly =
          block.children?.length === 1 &&
          block.children[0].marks?.includes('strong');
  
        const isYearHeading = isBoldOnly && /^\d{4}:$/.test(firstText);
        const isSpecialSection =
          isBoldOnly &&
          (
            firstText === 'Further Publications (Prior to the Start of CDL-BOT):' ||
            firstText === 'White Papers and Unrefereed Papers:'
          );
  
        if (isYearHeading || isSpecialSection) {
          pushGroup();
          currentGroupBlock = block;
          currentEntries = [];
        } else {
          currentEntries.push(block);
        }
      } else {
        // Non-standard block
        sorted.push(block);
      }
    }
  
    pushGroup(); // push final group
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
