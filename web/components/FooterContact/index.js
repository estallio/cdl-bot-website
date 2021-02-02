import React from 'react';

import styles from './FooterContact.module.sass';

const FooterContact = () => (
  <div className={styles.footerContact}>
    <ul>
      <li>
        <span>TU Wien: CDL-BOT</span>
      </li>
      <li>
        <span>Argentinierstr. 8 / 194-02</span>
      </li>
      <li>
        <span>A - 1040 Wien</span>
      </li>
      <li>
        <span>contact@cdl-bot.at</span>
      </li>
    </ul>
  </div>
);

export default FooterContact;
