import React from 'react';

import { useTranslation } from '../i18n';

import { fetchImprint } from '../lib/api';

import ExtendedBlockContent from '../lib/ExtendedBlockContent';

import Layout from '../components/Layout';

import styles from './index.module.sass';

const Imprint = ({ imprint }) => {
  const {
    i18n: { language },
    t,
  } = useTranslation('publications');

  return (
    <>
      <Layout>
        <h1>
          <span className={styles.pageHeading}>
            {language === 'de' ? 'Impressum' : 'Imprint'}
          </span>
        </h1>
        <ExtendedBlockContent
          blocks={
            language === 'de'
              ? imprint.imprintContentGe
              : imprint.imprintContentEn || []
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
  const { imprint } = await fetchImprint();
  return {
    props: {
      imprint,
    },
  };
}

export default Imprint;
