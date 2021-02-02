import React from 'react';

import { useTranslation } from '../i18n';

import { fetchPublicationsData } from '../miscellaneous/dataFetcher';

import Meta from '../components/Meta';

import Layout from '../components/Layout';

import styles from './index.module.sass';

const Publications = ({ publicationsData }) => {
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
        <ol className={styles.publications}>
          {publicationsData.map((entry, i) => {
            const text = entry.text;
            const abstract = entry.abstract;
            const paper = entry.paper;
            const preprint = entry.preprint;

            return (
              <li className={styles.publication} key={i}>
                {text && text}
                {abstract && (
                  <>
                    <span>&nbsp;</span>
                    <a
                      alt={'Link to Abstract'}
                      target="_blank"
                      rel="noreferrer"
                      href={abstract}
                      className={styles.paper}
                    >
                      Abstract
                    </a>
                  </>
                )}
                {paper && (
                  <>
                    <span>&nbsp;</span>
                    <a
                      alt={'Link to Paper'}
                      target="_blank"
                      rel="noreferrer"
                      href={paper}
                      className={styles.paper}
                    >
                      Paper
                    </a>
                  </>
                )}
                {preprint && (
                  <>
                    <span>&nbsp;</span>
                    <a
                      alt={'Link to Preprint'}
                      target="_blank"
                      rel="noreferrer"
                      href={preprint}
                      className={styles.paper}
                    >
                      Preprint
                    </a>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </Layout>
    </>
  );
};

Publications.defaultProps = {
  i18nNamespaces: ['publications', 'miscellaneous', 'footer'],
};

export async function getServerSideProps() {
  const publicationsData = fetchPublicationsData();

  return {
    props: {
      publicationsData,
    },
  };
}

export default Publications;
