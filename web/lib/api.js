import { client } from './sanity';

export { imageBuilder } from './sanity';

export const filterDrafts = (entries) => {
  return entries.filter((entry) => !entry._id.startsWith('drafts.'));
};

const fetchTeam = async () => {
  const result = filterDrafts(await client.fetch(`*[_type == 'team']`));

  return result;
};

const fetchNews = async () => {
  const result = filterDrafts(await client.fetch(`*[_type == 'news']`));

  return result;
};

const fetchPublications = async () => {
  const result = filterDrafts(await client.fetch(`*[_type == 'publications']`));

  return result[0];
};

export { fetchTeam, fetchNews, fetchPublications };
