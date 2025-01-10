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
    t,
  } = useTranslation('miscellaneous');

  return (
    <>
      <Meta seo={seo.seoTeam} />
      <Layout>
        <h1>
          <span className={styles.pageHeading}>Team</span>
        </h1>
        <div className={styles.teamSection}>
          <h2 className={styles.sectionTitle}>
            {language === 'de' ? 'Aktuelle Teammitglieder' : 'Current Team Members'}
          </h2>
          <div className={styles.people}>
            {team.persons && team.persons.length > 0 ? (
              team.persons.map((person, i) => {
                if (!person) return null;
                const name = person.name || 'No Name';
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
            {language === 'de' ? 'Ehemalige Teammitglieder' : 'Former Team Members'}
          </h2>
          <div className={styles.people}>
            {team.alumni && team.alumni.length > 0 ? (
              team.alumni.map((person, i) => {
                if (!person) return null;
                const name = person.name || 'No Name';
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
        <div className={styles.supportTeamSection}>
  <h2 className={styles.sectionTitle}>
    {language === 'de'
      ? 'Ehemalige Verwaltungs- und Studierendenteammitglieder'
      : 'Former Administrative and Student Team Members'}
  </h2>
  <ul className={styles.supportTeamList}>
    {team.supportTeam && team.supportTeam.length > 0 ? (
      team.supportTeam.map((member, i) => {
        if (!member) return null;
        const name = member.name;
        const university = member.university;

        return (
          <li key={i}>
           {name && <span style={{ fontWeight: 'bold' }}>{name}</span>}
           {university && `, ${university}`}
          </li>
        );
      })
    ) : (
      <p>No support team members found.</p>
    )}
  </ul>
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