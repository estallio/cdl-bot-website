import React from 'react';

import { useTranslation } from '../../i18n';

import styles from './FooterImprint.module.sass';

const FooterImprint = ({ imprintDe, imprintEn }) => {
  const {
    i18n: { language },
    t,
  } = useTranslation('miscellaneous');

  return (
    <div className={styles.footerImprint}>
      <ul>
        <li>
          <span>{t('imprint-heading')}</span>
        </li>
        <li>
          <p className={styles.imprint}>
            {language === 'de' ? imprintDe : imprintEn}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default FooterImprint;
