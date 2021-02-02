import React from 'react';

import { useTranslation } from '../i18n';

import { fetchNews } from '../lib/api';

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
            const download = entry.download;

            return (
              <div className={styles.entry} key={i}>
                <div className={styles.date}>
                  <span>{entry.date}</span>
                </div>
                <div className={styles.info}>
                  {title && <h3>{title}</h3>}
                  {info && <p>{info}</p>}
                  {announcements && (
                    <ul style={{ paddingBottom: 20 }}>
                      {announcements.map((announcement, j) => (
                        <li key={'announcement' + j}>{announcement}</li>
                      ))}
                    </ul>
                  )}
                  {download && (
                    <a
                      alt={title + ' Download'}
                      target="_blank"
                      href={download}
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
  const newsData = await fetchNews();

  return {
    props: {
      newsData,
    },
  };
}

export default News;
