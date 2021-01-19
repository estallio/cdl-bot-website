import React from 'react';

import { useRouter } from 'next/router';

import Link from '../Link';

import styles from './Logo.module.sass';

const Logo = () => {
  const { locale } = useRouter();
  
  return (
    <div className={styles.logo}>
      <Link href={locale + '/'}>
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
