import React from 'react';

import styles from './FooterPolicy.module.sass';
import { useTranslation } from '../../i18n';

const FooterPolicy = () => {
  const {
    i18n: { language },
    t,
  } = useTranslation('miscellaneous');
  return (
    <a
      href={
        language === 'de'
          ? 'https://www.tuhh.de/tuhh/ueber-uns/datenschutz.html'
          : 'https://www.tuhh.de/alt/tuhh/about-us/data-privacy.html'
      }
      className={styles.footerPolicy}
    >
      <a>
        <span>{t('privacy-policy')}</span>
      </a>
    </a>
  );
};

export default FooterPolicy;
