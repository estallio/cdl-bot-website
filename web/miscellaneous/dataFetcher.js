import fs from 'fs';
import path from 'path';

const contentDirectory = path.join(process.cwd(), 'public', 'content');

const teamDataContentFile = path.join(contentDirectory, 'team.json');
const fetchTeamData = () => {
  const fileContents = fs.readFileSync(teamDataContentFile, 'utf8');
  return JSON.parse(fileContents).team;
};

const newsDataContentFile = path.join(contentDirectory, 'news.json');
const fetchNewsData = () => {
  const fileContents = fs.readFileSync(newsDataContentFile, 'utf8');
  return JSON.parse(fileContents).news;
};

const publicationsDataContentFile = path.join(
  contentDirectory,
  'publications.json'
);
const fetchPublicationsData = () => {
  const fileContents = fs.readFileSync(publicationsDataContentFile, 'utf8');
  return JSON.parse(fileContents).publications;
};

export { fetchTeamData, fetchNewsData, fetchPublicationsData };
