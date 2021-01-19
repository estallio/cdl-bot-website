import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

import Link from '../Link';

import styles from './MainNavigation.module.sass';

const MainNavigation = () => {
  const { pathname, locale } = useRouter();

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
          {locale !== 'en' ? (
            <Link href={`/en${pathname}`} locale="en" key="en">
              <a
                onClick={() => {
                  document.cookie = 'NEXT_LOCALE=en';
                }}
              >
                English
              </a>
            </Link>
          ) : (
            <span>English</span>
          )}
          {locale !== 'de' ? (
            <Link href={`/de${pathname}`} locale="de" key="de">
              <a
                onClick={() => {
                  document.cookie = 'NEXT_LOCALE=de';
                }}
              >
                Deutsch
              </a>
            </Link>
          ) : (
            <span>Deutsch</span>
          )}
        </div>
      </nav>
    </div>
  );
};

export default MainNavigation;
