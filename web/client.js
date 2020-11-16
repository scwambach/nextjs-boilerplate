import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: process.env.SANITY_ID, // you can find this in sanity.json
  dataset: process.env.SANITY_DATASET, // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
});

export const previewClient = sanityClient({
  projectId: process.env.SANITY_ID, // you can find this in sanity.json
  dataset: process.env.SANITY_DATASET, // or the name you chose in step 1
  token: process.env.SANITY_TOKEN,
  ignoreBrowserTokenWarning: true,
  useCdn: false, // `false` if you want to ensure fresh data
});
