import React from 'react';

import { useTranslation } from '../i18n';

import { fetchPublications } from '../lib/api';

import ExtendedBlockContent from '../lib/ExtendedBlockContent';

import Meta from '../components/Meta';

import Layout from '../components/Layout';

import styles from './index.module.sass';

const Publications = ({ publications }) => {
  const {
    i18n: { language },
    t,
  } = useTranslation('publications');

  return (
    <>
      <Meta title={t('title')} description={t('description')} />
      <Layout>
        <h1>
          <span className={styles.pageHeading}>
            {language === 'de' ? 'Publikationen' : 'Publications'}
          </span>
        </h1>
        <ExtendedBlockContent blocks={publications.content || []} />
      </Layout>
    </>
  );
};

Publications.defaultProps = {
  i18nNamespaces: ['publications', 'miscellaneous', 'footer'],
};

export async function getServerSideProps() {
  const publications = await fetchPublications();

  return {
    props: {
      publications,
    },
  };
}

export default Publications;
