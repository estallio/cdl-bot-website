import React from 'react';

import styles from './FooterContact.module.sass';

const FooterContact = ({ contact }) => (
  <div className={styles.footerContact}>
    <ul>
      <li>
        <span>{contact.firstLine}</span>
      </li>
      <li>
        <span>{contact.secondLine}</span>
      </li>
      <li>
        <span>{contact.thirdLine}</span>
      </li>
      <li>
        <span>{contact.fourthLine}</span>
      </li>
    </ul>
  </div>
);

export default FooterContact;
