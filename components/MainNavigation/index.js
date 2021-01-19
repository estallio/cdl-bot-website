import React, { useEffect } from 'react';

import Link from '../Link';

import styles from './MainNavigation.module.sass';

const MainNavigation = () => {
  useEffect(() => {
    const menuBtn = document.getElementsByClassName(styles.menuToggle)[0];
    const nav = document.getElementsByClassName(styles.mainNavigation)[0];

    menuBtn.addEventListener(
      'click',
      () => {
        nav.classList.toggle(styles.open);
      },
      false
    );

    return () => {};
  }, []);

  return (
    <div className={styles.mainNavigation}>
      <div className={styles.menuToggle}></div>
      <nav className={styles.nav}>
        <Link
          href="/"
          defaultClass={styles.navItem}
          activeClass={styles.active}
        >
          <a>
            <span>Home</span>
          </a>
        </Link>
        <Link
          href="/team"
          defaultClass={styles.navItem}
          activeClass={styles.active}
        >
          <a>
            <span>Team</span>
          </a>
        </Link>
        <Link
          href="/research"
          defaultClass={styles.navItem}
          activeClass={styles.active}
        >
          <a>
            <span>Research</span>
          </a>
        </Link>
        <div className={styles.languageSwitcher}>
          <span>English</span>
          <span>Deutsch</span>
        </div>
      </nav>
    </div>
  );
};

export default MainNavigation;
