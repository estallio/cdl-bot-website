import React from 'react';

import { useTranslation } from '../i18n';

import { fetchNewsData } from '../miscellaneous/dataFetcher';

import Meta from '../components/Meta';

import Layout from '../components/Layout';

import styles from './index.module.sass';

const News = ({ newsData }) => {
  const {
    i18n: { language },
    t,
  } = useTranslation('news');

  return (
    <>
      <Meta title={t('title')} description={t('description')} />
      <Layout>
        <h1>
          <span className={styles.pageHeading}>News</span>
        </h1>
        <div className={styles.news}>
          {newsData.map((entry, i) => {
            const title = entry[language + '-title'] || entry.title;
            const info = entry[language + '-info'] || entry.info;
            const announcements =
              entry[language + '-announcements'] || entry.announcements;

            return (
              <div className={styles.entry} key={i}>
                <div className={styles.date}>
                  <span>{entry.date}</span>
                </div>
                <div className={styles.info}>
                  <h3>{title}</h3>
                  <p>{info}</p>
                  {announcements && (
                    <ul>
                      {announcements.map((announcement, j) => (
                        <li key={'announcement' + j}>{announcement}</li>
                      ))}
                    </ul>
                  )}
                  {entry.download && (
                    <a
                      alt={title + ' Download'}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.download}
                    >
                      Download
                    </a>
                  )}
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
  i18nNamespaces: ['news', 'miscellaneous', 'footer'],
};

export async function getServerSideProps() {
  const newsData = fetchNewsData();

  return {
    props: {
      newsData,
    },
  };
}

export default News;
