import React from 'react';

import Head from 'next/head';

import { useRouter } from 'next/router';

import Header from '../Header';
import Footer from '../Footer';

import styles from './Layout.module.sass';

const Layout = ({ children }) => {
  const { pathname } = useRouter();

  return (
    <>
      <HeadDependencies pathname={pathname} />
      <div className={styles.site}>
        <Header />
        <div id="main" className={styles.main}>
          <div className={styles.center}>{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

const HeadDependencies = ({ pathname }) => (
  <Head>
    {/* For responsiveness */}
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    {/* For google fonts */}
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Kanit:wght@500&family=Open+Sans:wght@600&display=swap"
      rel="stylesheet"
      /*
        font-family: 'Kanit', sans-serif;
        font-family: 'Open Sans', sans-serif;
      */
    />
    <link
      rel="alternate"
      hrefLang="de"
      href={'http://www.cdl-bot.at/de' + pathname}
    />
    <link
      rel="alternate"
      hrefLang="en"
      href={'http://www.cdl-bot.at/en' + pathname}
    />
    {/* Favicon for old IEs */}
    <link rel="shortcut icon" href="/theme/favicons/favicon.ico" />
    {/* Favicon for new browsers - multisize ico */}
    <link
      rel="icon"
      type="image/x-icon"
      sizes="16x16 32x32"
      href="/theme/favicons/favicon.ico"
    />
    {/* Favicon for iPad with high-resolution Retina display running iOS ≥ 7: */}
    <link
      rel="apple-touch-icon"
      sizes="152x152"
      href="/theme/favicons/favicon-152-precomposed.png"
    />
    {/* Favicon for iPad with high-resolution Retina display running iOS ≤ 6: */}
    <link
      rel="apple-touch-icon"
      sizes="144x144"
      href="/theme/favicons/favicon-144-precomposed.png"
    />
    {/* Favicon for iPhone with high-resolution Retina display running iOS ≥ 7: */}
    <link
      rel="apple-touch-icon"
      sizes="120x120"
      href="/theme/favicons/favicon-120-precomposed.png"
    />
    {/* Favicon for iPhone with high-resolution Retina display running iOS ≤ 6: */}
    <link
      rel="apple-touch-icon"
      sizes="114x114"
      href="/theme/favicons/favicon-114-precomposed.png"
    />
    {/* Favicon for iPhone 6+ */}
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/theme/favicons/favicon-180-precomposed.png"
    />
    {/* Favicon for first- and second-generation iPad: */}
    <link
      rel="apple-touch-icon"
      sizes="72x72"
      href="/theme/favicons/favicon-72-precomposed.png"
    />
    {/* Favicon for non-Retina iPhone, iPod Touch, and Android 2.1+ devices: */}
    <link
      rel="apple-touch-icon"
      sizes="57x57"
      href="/theme/favicons/favicon-57.png"
    />
    {/* Favicon for Old Chrome */}
    <link rel="icon" sizes="32x32" href="/theme/favicons/favicon-32.png" />
    {/* Favicon for IE10 Metro */}
    <meta name="msapplication-TileColor" content="#FFFFFF" />
    <meta name="msapplication-TileImage" content="favicon-144.png" />
    <meta name="theme-color" content="#ffffff" />
    {/* Favicon for Chrome for Android */}
    <link rel="manifest" href="/theme/favicons/manifest.json" />
    <link rel="icon" sizes="192x192" href="/theme/favicons/favicon-192.png" />
  </Head>
);
