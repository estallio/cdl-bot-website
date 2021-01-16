import React from 'react';

import PropTypes from 'prop-types';

import { withTranslation } from '../i18n';

import { NextSeo, SocialProfileJsonLd } from 'next-seo';

const Meta = ({ t, title, description }) => (
  <>
    <SocialProfileJsonLd
      type="Organization"
      name={t('website-name')}
      url="https://www.cdl-bot.at"
    />
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        type: 'website',
        locale: 'de_AT',
        url: 'https://www.cdl-bot.at',
        site_name: t('website-name'),
        title: title,
        titleTemplate: '%s | CDL-BOT',
        description: description,
        images: [
          {
            url: 'https://www.cdl-bot.at/theme/images/logo.jpg',
            alt: 'Logo CDL-BOT',
          },
        ],
      }}
    />
  </>
);

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default withTranslation(Meta);
