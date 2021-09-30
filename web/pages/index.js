import React from 'react';

import classNames from 'classnames';

import { useTranslation } from '../i18n';

import Meta from '../components/Meta';

import Layout from '../components/Layout';

import { fetchHome } from '../lib/api';

import styles from './index.module.sass';
import ExtendedBlockContent from '../lib/ExtendedBlockContent';

const Home = ({ home, seo }) => {
  const {
    i18n: { language },
  } = useTranslation('miscellaneous');

  return (
    <>
      <Meta seo={seo.seoHome} />
      <Layout>
        <div className={styles.container}>
          <div
            className={classNames(styles.box, styles.textBox, styles.oneThird)}
          >
            <h1>
              <span className={styles.welcome}>
                {language === 'de'
                  ? home.welcome.welcomeTitleBlueBackgroundDe
                  : home.welcome.welcomeTitleBlueBackgroundEn}
              </span>
              <br />
              <span>
                {language === 'de'
                  ? home.welcome.welcomeTitleDe
                  : home.welcome.welcomeTitleEn}
              </span>
            </h1>
            <ExtendedBlockContent
              blocks={
                language === 'de'
                  ? home.welcome.welcomeTextDe
                  : home.welcome.welcomeTextEn
              }
            />
          </div>
          <div
            className={classNames(
              styles.box,
              styles.imageBox,
              styles.twoThird,
              styles.imageOne
            )}
          >
            <img
              src={
                home.welcome.imageUrl + '?w=1500&h=1000&fit=clip&auto=format'
              }
              alt={home.welcome.altText}
            />
          </div>
        </div>
        <div className={styles.container}>
          <div
            className={classNames(
              styles.box,
              styles.imageBox,
              styles.twoThird,
              styles.imageBorderPaddingRight
            )}
          >
            <img
              src={
                home.research.imageUrl + '?w=1500&h=1000&fit=clip&auto=format'
              }
              alt={home.research.altText}
            />
          </div>
          <div
            className={classNames(
              styles.box,
              styles.textBox,
              styles.oneThird,
              styles.mobileOrderMinusOne
            )}
          >
            <h2 className={styles.researchFields}>
              <span>
                {language === 'de'
                  ? home.research.researchTitleDe
                  : home.research.researchTitleEn}
              </span>
            </h2>
            <ExtendedBlockContent
              blocks={
                language === 'de'
                  ? home.research.researchTextDe
                  : home.research.researchTextEn
              }
            />
          </div>
        </div>
        <div className={classNames(styles.container)}>
          <div
            className={classNames(styles.box, styles.textBox, styles.oneHalf)}
          >
            <h2 className={styles.supportersAndPartners}>
              <span>
                {language === 'de'
                  ? home.supportersAndPartners.supportersAndPartnersTitleDe
                  : home.supportersAndPartners.supportersAndPartnersTitleEn}
              </span>
            </h2>
            <ExtendedBlockContent
              blocks={
                language === 'de'
                  ? home.supportersAndPartners.supportersAndPartnersTextDe
                  : home.supportersAndPartners.supportersAndPartnersTextEn
              }
            />
          </div>
          {home.supportersAndPartners.supportersAndPartners.map(
            (supporterOrPartner, i) => (
              <div
                key={i}
                className={classNames(
                  styles.box,
                  styles.supporterBox,
                  styles.oneHalf
                )}
              >
                <a
                  href={supporterOrPartner.linkUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={
                      supporterOrPartner.imageUrl +
                      '?w=1500&h=1000&fit=clip&auto=format'
                    }
                    alt={supporterOrPartner.altText}
                  />
                  <p>{supporterOrPartner.name}</p>
                </a>
              </div>
            )
          )}
        </div>
      </Layout>
    </>
  );
};

Home.defaultProps = {
  i18nNamespaces: ['miscellaneous'],
};

export async function getServerSideProps() {
  const { home, seo } = await fetchHome();

  return {
    props: {
      home,
      seo,
    },
  };
}

export default Home;
