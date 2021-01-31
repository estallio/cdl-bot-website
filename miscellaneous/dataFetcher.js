import fs from 'fs';
import path from 'path';

const contentDirectory = path.join(process.cwd(), 'public', 'content');

const teamDataContentFile = path.join(contentDirectory, 'team.json');
const fetchTeamData = () => {
  const fileContents = fs.readFileSync(teamDataContentFile, 'utf8');
  return JSON.parse(fileContents).team;
};

const researchDataContentFile = path.join(contentDirectory, 'research.json');
const fetchResearchData = () => {
  const fileContents = fs.readFileSync(researchDataContentFile, 'utf8');
  return JSON.parse(fileContents).research;
};

const publicationsDataContentFile = path.join(
  contentDirectory,
  'publications.json'
);
const fetchPublicationsData = () => {
  const fileContents = fs.readFileSync(publicationsDataContentFile, 'utf8');
  return JSON.parse(fileContents).publications;
};

export { fetchTeamData, fetchResearchData, fetchPublicationsData };
