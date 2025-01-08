import React from 'react';
import { useTranslation } from '../i18n';
import { fetchTeam } from '../lib/api';
import ExtendedBlockContent from '../lib/ExtendedBlockContent';
import Meta from '../components/Meta';
import Layout from '../components/Layout';
import styles from './index.module.sass';

const Team = ({ team, seo }) => {
  const {
    i18n: { language },
  } = useTranslation();

  console.log('Team Data:', JSON.stringify(team, null, 2));

  return (
    <>
      <Meta seo={seo.seoTeam} />
      <Layout>
        <h1>
          <span className={styles.pageHeading}>Team</span>
        </h1>
        <div className={styles.teamSection}>
  <h2 className={styles.sectionTitle}>
  {language === 'de' ? 'Aktuelle Teammitglieder' : 'Current Team Members'}</h2>
  <div className={styles.people}>
    {team.persons && team.persons.length > 0 ? (
      team.persons.map((person, i) => {
        if (!person) return null; // Add this check to handle null or undefined person
        const name = person.name || 'No Name'; // Default value if name is null
        const pictureUrl = person.pictureUrl;
        const info = language === 'de' && person.infoDe ? person.infoDe : person.infoEn || [];
        const email = person.email;

        return (
          <div className={styles.person} key={i}>
            {pictureUrl && (
              <a href={pictureUrl} target="_blank" rel="noreferrer">
                <img
                  src={pictureUrl + '?w=432&h=576&fit=crop&auto=format'}
                  alt={
                    name &&
                    (language === 'de' ? 'Bild von ' : 'Picture of ') + name
                  }
                />
              </a>
            )}
            {name && <h3>{name}</h3>}
            {email && <p className={styles.email}>{email}</p>}
            {info && <ExtendedBlockContent blocks={info} />}
          </div>
        );
      })
    ) : (
      <p>No team members found.</p>
    )}
  </div>
</div>
<div className={styles.alumniSection}>
  <h2 className={styles.sectionTitle}>
  {language === 'de' ? 'Ehemalige Teammitglieder' : 'Former Team Members'}</h2>
  <div className={styles.people}>
    {team.alumni && team.alumni.length > 0 ? (
      team.alumni.map((person, i) => {
        if (!person) return null; // Add this check to handle null or undefined person
        const name = person.name || 'No Name'; // Default value if name is null
        const pictureUrl = person.pictureUrl;
        const info = language === 'de' ? person.infoDe : person.infoEn;
        const email = person.email;

        return (
          <div className={styles.person} key={i}>
            {pictureUrl && (
              <a href={pictureUrl} target="_blank" rel="noreferrer">
                <img
                  src={pictureUrl + '?w=432&h=576&fit=crop&auto=format'}
                  alt={
                    name &&
                    (language === 'de' ? 'Bild von ' : 'Picture of ') + name
                  }
                />
              </a>
            )}
            {name && <h3>{name}</h3>}
            {email && <p className={styles.email}>{email}</p>}
            {info && <ExtendedBlockContent blocks={info} />}
          </div>
        );
      })
    ) : (
      <p>No alumni members found.</p>
    )}
  </div>
</div>
      </Layout>
    </>
  );
};

Team.defaultProps = {
  i18nNamespaces: ['miscellaneous'],
};

export async function getServerSideProps() {
  const { seo, team } = await fetchTeam();

  return {
    props: {
      team,
      seo,
    },
  };
}

export default Team;