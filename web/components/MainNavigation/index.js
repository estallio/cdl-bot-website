import React, { useEffect, useRef } from 'react';

import { useRouter } from 'next/router';

import { useTranslation } from '../../i18n';

import Link from '../Link';

import styles from './MainNavigation.module.sass';

const MainNavigation = () => {
  const {
    i18n: { language, changeLanguage },
  } = useTranslation();
  const { pathname: untrimmedPathname } = useRouter();
  const nav = useRef(null);
  const menuBtn = useRef(null);

  const pathname = untrimmedPathname.replace(/\/$/, '');

  useEffect(() => {
    menuBtn.current.addEventListener(
      'click',
      () => {
        nav.current.classList.toggle(styles.open);
      },
      false
    );

    return () => {};
  }, []);

  return (
    <div ref={nav} className={styles.mainNavigation}>
      <div ref={menuBtn} className={styles.menuToggle}></div>
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
            <Link href={'/en' + pathname} unlocalized>
              <a
                title="English"
                onClick={() => {
                  changeLanguage('en');
                  nav.current.classList.remove(styles.open);
                  document.documentElement.setAttribute('lang', 'en');
                }}
              >
                English
              </a>
            </Link>
          ) : (
            <span>English</span>
          )}
          {language !== 'de' ? (
            <Link href={'/de' + pathname} unlocalized>
              <a
                title="Deutsch"
                onClick={() => {
                  changeLanguage('de');
                  nav.current.classList.remove(styles.open);
                  document.documentElement.setAttribute('lang', 'de');
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
