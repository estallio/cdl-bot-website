import React from 'react';
import PropTypes from 'prop-types';

import Error from 'next/error';

import { useTranslation } from '../i18n';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Link from '../components/Link';

import styles from './index.module.sass';

const ErrorPage = ({ statusCode }) => {
  const { t } = useTranslation('miscellaneous');

  const code = statusCode || 500;

  let title = '';

  if (code === 404) {
    title = t('error-title-404');
  } else if (code === 500) {
    title = t('error-title-500');
  }

  return (
    <div className={styles.error}>
      <Error statusCode={code} title={title} />
      <Link href="/">
        <a
          style={{
            position: 'absolute',
            top: '50%',
            textAlign: 'center',
            display: 'block',
            width: '100%',
            paddingTop: 50,
          }}
          className={styles.more}
        >
          <p>
            {t('back-to-homepage')}
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{
                marginLeft: 5,
                width: 15,
                height: 15,
                marginTop: 15,
              }}
            />
          </p>
        </a>
      </Link>
    </div>
  );
};

ErrorPage.getInitialProps = async ({ res, err }) => {
  let statusCode = null;

  if (res) {
    ({ statusCode } = res);
  } else if (err) {
    ({ statusCode } = err);
  }

  return {
    statusCode,
  };
};

ErrorPage.defaultProps = {
  statusCode: null,
  i18nNamespaces: ['miscellaneous', 'footer'],
};

ErrorPage.propTypes = {
  statusCode: PropTypes.number,
};

export default ErrorPage;
