import React from 'react';

import PropTypes from 'prop-types';

import { useRouter } from 'next/router';

import { useTranslation } from '../../i18n';

import { NextSeo, SocialProfileJsonLd } from 'next-seo';

const Meta = ({ title, description }) => {
  const {
    i18n: { language },
    t,
  } = useTranslation('miscellaneous');
  const { pathname: untrimmedPathname } = useRouter();

  const pathname = untrimmedPathname.replace(/\/$/, '');

  return (
    <>
      <SocialProfileJsonLd
        type="Organization"
        name="CDL-BOT"
        url={'https://www.cdl-bot.at'}
        sameAs={
          [
            // TODO
          ]
        }
      />
      <NextSeo
        title={title}
        description={description}
        languageAlternates={[
          {
            hrefLang: 'de',
            href: 'https://www.cdl-bot.at/de' + pathname,
          },
          {
            hrefLang: 'en',
            href: 'https://www.cdl-bot.at/en' + pathname,
          },
        ]}
        openGraph={{
          type: 'website',
          locale: language,
          url: 'https://www.cdl-bot.at/' + language + pathname,
          site_name: t('website-name'),
          title: title,
          titleTemplate: '%s | CDL-BOT',
          description: description,
          images: [
            {
              url: 'https://www.cdl-bot.at/theme/images/open-graph-image.png',
              alt: 'CDL-BOT Logo',
            },
          ],
        }}
      />
    </>
  );
};

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Meta;