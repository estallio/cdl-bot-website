import React from 'react';

import { useTranslation } from '../i18n';

import { fetchResearchData } from '../miscellaneous/dataFetcher';

import Layout from '../components/Layout';

import styles from './index.module.sass';

const Research = ({ researchData }) => {
  const {
    i18n: { language },
  } = useTranslation('research');

  return (
    <Layout>
      <div className={styles.research}>
        {researchData.map((entry, i) => {
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
  );
};

Research.defaultProps = {
  i18nNamespaces: ['research', 'miscellaneous', 'footer'],
};

export async function getServerSideProps() {
  const researchData = fetchResearchData();

  return {
    props: {
      researchData,
    },
  };
}

export default Research;
