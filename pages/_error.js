import React from 'react';
import PropTypes from 'prop-types';

import Error from 'next/error';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { withTranslation } from '../i18n';

import Link from '../components/Link';
import styles from './index.module.sass';

const ErrorPage = ({ statusCode, t }) => {
  const code = statusCode || 500;

  return (
    <div>
      <Error statusCode={code} />
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
    namespacesRequired: ['miscellaneous'],
    statusCode,
  };
};

ErrorPage.defaultProps = {
  statusCode: null,
};

ErrorPage.propTypes = {
  statusCode: PropTypes.number,
  t: PropTypes.func.isRequired,
};

export default withTranslation('miscellaneous')(ErrorPage);
