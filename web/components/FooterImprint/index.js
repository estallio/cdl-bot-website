import React from 'react';

import { useTranslation } from '../../i18n';

import styles from './FooterImprint.module.sass';
import Link from '../Link';

const FooterImprint = ({ imprintDe, imprintEn }) => {
  const {
    i18n: { language },
    t,
  } = useTranslation('miscellaneous');

  return (
    <div className={styles.footerImprint}>
      <Link
        href="/imprint"
        defaultClass={styles.navItem}
        activeClass={styles.active}
      >
        <a>
          <span>{t('imprint-heading')}</span>
        </a>
      </Link>
    </div>
  );
};

export default FooterImprint;
