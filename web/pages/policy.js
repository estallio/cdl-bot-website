import React from 'react';

import { useTranslation } from '../i18n';

import { fetchPolicy } from '../lib/api';

import ExtendedBlockContent from '../lib/ExtendedBlockContent';

import Layout from '../components/Layout';

import styles from './index.module.sass';

const Policy = ({ policy }) => {
  const {
    i18n: { language },
    t,
  } = useTranslation('publications');

  return (
    <>
      <Layout>
        <h1>
          <span className={styles.pageHeading}>
            {language === 'de' ? 'Datenschutz' : 'Privacy Policy'}
          </span>
        </h1>
        <ExtendedBlockContent
          blocks={
            language === 'de'
              ? policy.privacyPolicyContentGe
              : policy.privacyPolicyContentEn || []
          }
        />
      </Layout>
    </>
  );
};

Policy.defaultProps = {
  i18nNamespaces: ['miscellaneous'],
};

export async function getServerSideProps() {
  const { policy } = await fetchPolicy();
  return {
    props: {
      policy,
    },
  };
}

export default Policy;
