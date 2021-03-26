module.exports = {
  env: {
    SANITY_ID: process.env.SANITY_ID,
    SANITY_DATASET: process.env.SANITY_DATASET,
    SANITY_TOKEN: process.env.SANITY_TOKEN,
    CMS_URL: process.env.CMS_URL,
    SITE_URL: process.env.SITE_URL,
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
};
