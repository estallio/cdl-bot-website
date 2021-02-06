import React from 'react';

import moment from 'moment';

import { useTranslation } from '../i18n';

import { fetchNews } from '../lib/api';

import ExtendedBlockContent from '../lib/ExtendedBlockContent';

import Meta from '../components/Meta';

import Layout from '../components/Layout';

import styles from './index.module.sass';

const News = ({ news, seo, footer }) => {
  const {
    i18n: { language },
  } = useTranslation('miscellaneous');

  return (
    <>
      <Meta seo={seo} />
      <Layout footer={footer}>
        <h1>
          <span className={styles.pageHeading}>News</span>
        </h1>
        <div className={styles.news}>
          {news.map((entry, i) => {
            const date = entry.date;
            const info =
              language === 'de' ? entry.newsEntryDe : entry.newsEntryEn;

            return (
              <div className={styles.entry} key={i}>
                <div className={styles.date}>
                  {date && <span>{moment(date).format('DD.MM.YYYY')}</span>}
                </div>
                <div className={styles.info}>
                  <ExtendedBlockContent blocks={info} />
                </div>
              </div>
            );
          })}
        </div>
      </Layout>
    </>
  );
};

News.defaultProps = {
  i18nNamespaces: ['miscellaneous'],
};

export async function getServerSideProps() {
  const { news, seo, footer } = await fetchNews();

  return {
    props: {
      news,
      seo,
      footer,
    },
  };
}

export default News;
