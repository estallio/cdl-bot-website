import React from 'react';

import { useTranslation } from '../i18n';

import { fetchImprint } from '../lib/api';

import ExtendedBlockContent from '../lib/ExtendedBlockContent';

import Layout from '../components/Layout';

import styles from './index.module.sass';

const Imprint = ({ imprint, footer }) => {
  const {
    i18n: { language },
    t,
  } = useTranslation('publications');

  return (
    <>
      <Layout footer={footer}>
        <h1>
          <span className={styles.pageHeading}>
            {language === 'de' ? 'Impressum' : 'Imprint'}
          </span>
        </h1>
        <ExtendedBlockContent
          blocks={
            language === 'de'
              ? imprint.imprintContentEn
              : imprint.imprintContentGe || []
          }
        />
      </Layout>
    </>
  );
};

Imprint.defaultProps = {
  i18nNamespaces: ['miscellaneous'],
};

export async function getServerSideProps() {
  const { imprint, footer } = await fetchImprint();
  return {
    props: {
      imprint,
      footer,
    },
  };
}

export default Imprint;
