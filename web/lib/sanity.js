import sanityClient from '@sanity/client';
import sanityImage from '@sanity/image-url';

const options = {
  // Find your project ID and dataset in `sanity.json` in your studio project
  dataset: 'cdl-bot',
  projectId: 'ii4f9qqe',
  apiVersion: '2023-01-01',
  useCdn: false, // Always fetch the freshest data
  //seCdn: process.env.NODE_ENV === 'production',
  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  // Set this to false if your application require the freshest possible
  // data always (potentially slightly slower and a bit more expensive).
};

export const client = sanityClient(options);
export const imageBuilder = sanityImage(client);
