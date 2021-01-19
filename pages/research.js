import React from 'react';

import useTranslation from 'next-translate/useTranslation';

import Layout from '../components/Layout';

import styles from './index.module.sass';

const Research = () => {
  const { t } = useTranslation('research');

  return (
    <Layout>
      <div className={styles.research}>
        <div className={styles.entry}>
          <div className={styles.date}>
            <span>11.11.2010</span>
          </div>
          <div className={styles.info}>
            <h3>
              Entry 1 Entry 1 Entry 1Entry 1Entry 1Entry
              1Entry1Entry1Entry1Entry11Entry 1Entry 1Entry
              1Entry1Entry1Entry1Entry11Entry 1Entry 1Entry
              1Entry1Entry1Entry1Entry1
            </h3>
            <p>Text</p>
            <ul>
              <li>1st price somewhere 1st price somewhere 1st price somewhere
              </li>
              <li>
                1st price somewhere 1st price somewhere 1st price somewhere1st
                price somewhere 1st price somewhere 1st price somewhere1st price
                somewhere 1st price somewhere 1st price somewhere
              </li>
              <li>1st price somewhere 1st price somewhere 1st price somewhere
              </li>
            </ul>
            <a className={styles.download}>Download</a>
          </div>
        </div>
        <div className={styles.entry}>
          <div className={styles.date}>
            <span>11.11.2010</span>
          </div>
          <div className={styles.info}>
            <h3>Entry 1 Entry 1 Entry 1 Entry 1 Entry 1</h3>
            <p>
              Text Text Text Text Text Text Text Text Text Text Text Text Text
              TextText Text Text Text Text Text TextText Text Text Text Text
              Text
              TextText Text Text Text Text Text Text
            </p>
            <ul>
              <li>1st price somewhere</li>
            </ul>
            <a className={styles.download}>Download</a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Research;
