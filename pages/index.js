import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import { withTranslation } from '../i18n';

import Layout from '../components/Layout';

import styles from './index.module.sass';

const Home = ({ t }) => (
  <Layout>
    <div className={styles.container}>
      <div className={classNames(styles.box, styles.textBox, styles.oneThird)}>
        <h1>
          <span className={styles.welcome}>
            {t('welcome-heading-first-part')}
          </span>
          <br />
          <span>{t('welcome-heading-second-part')}</span>
        </h1>
        <p>{t('welcome-text')}</p>
      </div>
      <div
        className={classNames(
          styles.box,
          styles.imageBox,
          styles.twoThird,
          styles.imageOne
        )}
      >
        <img src="/images/blockchain-communication.jpg" />
      </div>
    </div>
    <div className={styles.container}>
      <div
        className={classNames(
          styles.box,
          styles.imageBox,
          styles.twoThird,
          styles.imageBorderPaddingRight
        )}
      >
        <img src="/images/internet-of-things.jpg" />
      </div>
      <div
        className={classNames(
          styles.box,
          styles.textBox,
          styles.oneThird,
          styles.mobileOrderMinusOne
        )}
      >
        <h2 className={styles.researchFields}>
          <span>{t('research-fields-heading')}</span>
        </h2>
        <p>{t('research-fields-text')}</p>
      </div>
    </div>
    <div className={classNames(styles.container)}>
      <div className={classNames(styles.box, styles.textBox, styles.oneHalf)}>
        <h2 className={styles.supportersAndPartners}>
          <span>{t('supporters-heading')}</span>
        </h2>
        <p>{t('supporters-text')}</p>
      </div>
      <div
        className={classNames(styles.box, styles.supporterBox, styles.oneHalf)}
      >
        <a
          href="https://www.cdg.ac.at/"
          alt="Christian Doppler Forschungsgesellschaft Link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/supporters-and-partners/christian-doppler-forschungsgesellschaft.jpg"
            alt="Christian Doppler Forschungsgesellschaft Logo"
          />
          <p>Christian Doppler Forschungsgesellschaft</p>
        </a>
      </div>
      <div
        className={classNames(styles.box, styles.supporterBox, styles.oneHalf)}
      >
        <a
          href="https://pantos.io/"
          alt="Pantos Link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/supporters-and-partners/pantos.jpg"
            alt="Pantos Logo"
          />
          <p>Pantos</p>
        </a>
      </div>
      <div
        className={classNames(styles.box, styles.supporterBox, styles.oneHalf)}
      >
        <a
          href="https://www.iota.org/"
          alt="IOTA Foundation Link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/supporters-and-partners/iota-foundation.jpg"
            alt="IOTA Foundation Logo"
          />
          <p>IOTA Foundation</p>
        </a>
      </div>
      <div
        className={classNames(styles.box, styles.supporterBox, styles.oneHalf)}
      >
        <a
          href="https://www.bmdw.gv.at/"
          alt="Bundesministerium Digitalisierung und Wirtschaftsstandort Link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/supporters-and-partners/bundesministerium-digitalisierung-und-wirtschaftsstandort.jpg"
            alt="Bundesministerium Digitalisierung und Wirtschaftsstandort Logo"
          />
          <p>Bundesministerium Digitalisierung und Wirtschaftsstandort</p>
        </a>
      </div>
      <div
        className={classNames(
          styles.box,
          styles.supporterBox,
          styles.oneHalf,
          styles.informatics
        )}
      >
        <a
          href="https://informatics.tuwien.ac.at/"
          alt="TU Wien Informatics Link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/supporters-and-partners/tu-wien-informatics.jpg"
            alt="TU Wien Informatics Logo"
          />
          <p>TU Wien Informatics</p>
        </a>
      </div>
    </div>
  </Layout>
);

Home.getInitialProps = async () => ({
  namespacesRequired: ['home', 'miscellaneous', 'footer'],
});

Home.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('home')(Home);
