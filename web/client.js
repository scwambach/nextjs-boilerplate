import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: process.env.SANITY_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: true,
});

export const previewClient = sanityClient({
  projectId: process.env.SANITY_ID,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_TOKEN,
  ignoreBrowserTokenWarning: true,
  useCdn: false,
});

// export const previewClient = sanityClient({
//   projectId: process.env.SANITY_ID,
//   dataset: process.env.SANITY_DATASET,
//   useCdn: false,
//   withCredentials: true,
// });
