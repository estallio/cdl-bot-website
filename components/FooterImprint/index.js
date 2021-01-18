import React from 'react';

import { withTranslation } from '../../i18n';

import styles from './FooterImprint.module.sass';

const FooterImprint = ({ t }) => (
  <div className={styles.footerImprint}>
    <ul>
      <li>
        <span>{t('impress-heading')}</span>
      </li>
      <li>
        <p className={styles.imprint}>{t('impress-text')}</p>
      </li>
    </ul>
  </div>
);

export default withTranslation('footer')(FooterImprint);
