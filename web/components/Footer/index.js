import React from 'react';

import FooterLogo from '../FooterLogo';
import FooterContact from '../FooterContact';
import FooterImprint from '../FooterImprint';

import styles from './Footer.module.sass';

const Footer = ({ contact, imprintDe, imprintEn }) => (
  <div className={styles.footer}>
    <div className={styles.inner}>
      <div className={styles.footerLogoWrapper}>
        <FooterLogo />
      </div>
      <div className={styles.footerContactWrapper}>
        <FooterContact contact={contact} />
      </div>
      <div className={styles.footerImpressWrapper}>
        <FooterImprint imprintDe={imprintDe} imprintEn={imprintEn} />
      </div>
    </div>
  </div>
);

export default Footer;
