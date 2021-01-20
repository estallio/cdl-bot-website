import React from 'react';

import { useTranslation } from '../i18n';

import { fetchTeamData } from '../miscellaneous/dataFetcher';

import Meta from '../components/Meta';

import Layout from '../components/Layout';

import styles from './index.module.sass';

const Team = ({ teamData }) => {
  const {
    i18n: { language },
    t,
  } = useTranslation('team');

  return (
    <>
      <Meta title={t('title')} description={t('description')} />
      <Layout>
        <div className={styles.people}>
          {teamData.map((person, i) => {
            const name = person[language + '-name'] || person.name;
            const info = person[language + '-info'] || person.info;

            return (
              <div className={styles.person} key={i}>
                <img src={person.imagePath} />
                <h3>{name}</h3>
                <p>{info}</p>
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
  const teamData = fetchTeamData();

  return {
    props: {
      teamData,
    },
  };
}

export default Team;
