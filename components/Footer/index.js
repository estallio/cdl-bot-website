import React from 'react';

import FooterLogo from '../FooterLogo';
import FooterContact from '../FooterContact';
import FooterImpress from '../FooterImprint';

import styles from './Footer.module.sass';

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.inner}>
      <div className={styles.footerLogoWrapper}>
        <FooterLogo />
      </div>
      <div className={styles.footerContactWrapper}>
        <FooterContact />
      </div>
      <div className={styles.footerImpressWrapper}>
        <FooterImpress />
      </div>
    </div>
  </div>
);

export default Footer;
