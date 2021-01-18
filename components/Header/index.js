import React from 'react';

import Logo from '../Logo';
import MainNavigation from '../MainNavigation';

import styles from './Header.module.sass';

const Header = () => (
  <>
    <div className={styles.inner}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.menu}>
        <MainNavigation />
      </div>
    </div>
  </>
);

export default Header;
