import React from 'react';
import PropTypes from 'prop-types';

import { withTranslation } from '../i18n';

import Layout from '../components/Layout';

import styles from './index.module.sass';

const Research = ({ t }) => (
  <Layout>
    <div className={styles.research}>
      <div className={styles.entry}>
        <div className={styles.date}>
          <span>11.11.2010</span>
        </div>
        <div className={styles.info}>
          <h3>Entry 1</h3>
          <p>Text</p>
          <ul>
            <li>1st price somewhere 1st price somewhere 1st price somewhere</li>
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
          <p>Text Text Text Text Text Text Text Text Text Text Text Text Text TextText Text Text Text Text Text TextText Text Text Text Text Text TextText Text Text Text Text Text Text</p>
          <ul>
            <li>1st price somewhere</li>
          </ul>
          <a className={styles.download}>Download</a>
        </div>
      </div>
    </div>
  </Layout>
);

Research.getInitialProps = async () => ({
  namespacesRequired: ['research', 'miscellaneous', 'footer'],
});

Research.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('research')(Research);
