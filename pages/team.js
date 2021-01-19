import React from 'react';
import PropTypes from 'prop-types';

import { withTranslation } from '../i18n';

import Layout from '../components/Layout';

import styles from './index.module.sass';

const Team = ({ t }) => (
  <Layout>
    <div className={styles.people}>
      <div className={styles.person}>
        <img src="/images/supporters-and-partners/pantos.jpg" />
        <h3>Lorem ipsum dolor sit</h3>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      </div>
      <div className={styles.person}>
        <img src="/images/supporters-and-partners/pantos.jpg" />
        <h3>Lorem ipsum dolor sit</h3>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      </div>
      <div className={styles.person}>
        <img src="/images/supporters-and-partners/pantos.jpg" />
        <h3>Lorem ipsum dolor sit</h3>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      </div>
      <div className={styles.person}>
        <img src="/images/supporters-and-partners/pantos.jpg" />
        <h3>Lorem ipsum dolor sit</h3>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      </div>
      <div className={styles.person}>
        <img src="/images/supporters-and-partners/pantos.jpg" />
        <h3>Lorem ipsum dolor sit</h3>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      </div>
      <div className={styles.person}>
        <img src="/images/supporters-and-partners/pantos.jpg" />
        <h3>Lorem ipsum dolor sit</h3>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      </div>
      <div className={styles.person}>
        <img src="/images/supporters-and-partners/pantos.jpg" />
        <h3>Lorem ipsum dolor sit</h3>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      </div>
      <div className={styles.person}>
        <img src="/images/supporters-and-partners/pantos.jpg" />
        <h3>Lorem ipsum dolor sit</h3>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  </Layout>
);

Team.getInitialProps = async () => ({
  namespacesRequired: ['team', 'miscellaneous', 'footer'],
});

Team.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('team')(Team);
