import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

import { useTranslation } from '../../i18n';

import Link from '../Link';

import styles from './MainNavigation.module.sass';

const MainNavigation = () => {
  const {
    i18n: { language, changeLanguage },
  } = useTranslation();
  const { pathname } = useRouter();

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
          href="/news"
          defaultClass={styles.navItem}
          activeClass={styles.active}
        >
          <a>
            <span>News</span>
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
          href="/publications"
          defaultClass={styles.navItem}
          activeClass={styles.active}
        >
          <a>
            <span>{language === 'de' ? 'Publikationen' : 'Publications'}</span>
          </a>
        </Link>
        <div className={styles.languageSwitcher}>
          {language !== 'en' ? (
            <Link href={pathname} key="en">
              <a
                onClick={() => {
                  changeLanguage('en');
                }}
              >
                English
              </a>
            </Link>
          ) : (
            <span>English</span>
          )}
          {language !== 'de' ? (
            <Link href={pathname} key="de">
              <a
                onClick={() => {
                  changeLanguage('de');
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
