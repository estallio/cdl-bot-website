import { client } from './sanity';

export { imageBuilder } from './sanity';

const fetchTeam = async () => {
  return await client.fetch(
    `*[!(_id in path("drafts.**")) && _type == 'team'] { ..., 'pictureUrl': picture.asset->url }`
  );
};

const fetchNews = async () => {
  return await client.fetch(`*[!(_id in path("drafts.**")) && _type == "news"] {
    ...,
    newsEntryEn[]{
      ...,
      "imageUrl": asset->url
      // also 'asset->' is possible to join the asset and gets all information like url etc.
    }
  }`);
};

const fetchPublications = async () => {
  const result = await client.fetch(
    `*[!(_id in path("drafts.**")) && _type == 'publications']`
  );

  return result[0];
};

export { fetchTeam, fetchNews, fetchPublications };
