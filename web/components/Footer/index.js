import React from 'react';

import FooterLogo from '../FooterLogo';
import FooterImprint from '../FooterImprint';

import styles from './Footer.module.sass';
import FooterPolicy from '../FooterPolicy';

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.inner}>
      <div className={styles.footerLogoWrapper}>
        <FooterLogo />
      </div>
      <div className={styles.footerPrivacyPolicyWrapper}>
        <FooterPolicy />
      </div>
      <div className={styles.footerImpressWrapper}>
        <FooterImprint />
      </div>
    </div>
  </div>
);

export default Footer;
