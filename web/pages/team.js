import React from 'react';

import { useTranslation } from '../i18n';

import { fetchTeam } from '../lib/api';

import ExtendedBlockContent from '../lib/ExtendedBlockContent';

import Meta from '../components/Meta';

import Layout from '../components/Layout';

import styles from './index.module.sass';

const Team = ({ team }) => {
  const {
    i18n: { language },
    t,
  } = useTranslation('team');

  return (
    <>
      <Meta title={t('title')} description={t('description')} />
      <Layout>
        <h1>
          <span className={styles.pageHeading}>Team</span>
        </h1>
        <div className={styles.people}>
          {team.map((person, i) => {
            const name = person.name;
            const pictureUrl = person.pictureUrl;
            const info = language === 'de' ? person.infoDe : person.infoEn;
            const email = person.email;

            return (
              <div className={styles.person} key={i}>
                {pictureUrl && (
                  <a href={pictureUrl} target="_blank" rel="noreferrer">
                    <img
                      src={pictureUrl + '?w=360&h=480&fit=crop&auto=format'}
                    />
                  </a>
                )}
                {name && <h3>{name}</h3>}
                {email && <p className={styles.email}>{email}</p>}
                {info && <ExtendedBlockContent blocks={info} />}
              </div>
            );
          })}
        </div>
      </Layout>
    </>
  );
};

Team.defaultProps = {
  i18nNamespaces: ['team', 'miscellaneous', 'footer'],
};

export async function getServerSideProps() {
  const team = await fetchTeam();

  return {
    props: {
      team,
    },
  };
}

export default Team;
