import React from 'react';

import { useTranslation } from '../../i18n';

import styles from './FooterPolicy.module.sass';
import Link from '../Link';

const FooterPolicy = () => {
  const {
    i18n: { language },
    t,
  } = useTranslation('miscellaneous');

  return (
    <div className={styles.footerPolicy}>
      <Link
        href="/policy"
        defaultClass={styles.navItem}
        activeClass={styles.active}
      >
        <a>
          <span>{t('privacy-policy')}</span>
        </a>
      </Link>
    </div>
  );
};

export default FooterPolicy;
