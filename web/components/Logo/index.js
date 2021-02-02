import React from 'react';

import Link from '../Link';

import styles from './Logo.module.sass';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <a>
          <img
            style={{ width: '105%' }}
            src="/theme/images/logo.png"
            alt="CDL-BOT Logo"
          />
        </a>
      </Link>
    </div>
  );
};

export default Logo;
