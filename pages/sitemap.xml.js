import React from 'react';
import { getClient } from '@/utils/sanity';

const EXTERNAL_DATA_URL = 'https://nextjs-boilerplate-six.vercel.app';

const createSitemap = (posts) => `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${posts
      .map(
        ({ slug, _type, _updatedAt }) => `
          <url>
            <loc>${`${EXTERNAL_DATA_URL}/${
              _type === 'homePage'
                ? ''
                : _type === 'aboutPage'
                ? 'about'
                : _type === 'post'
                ? `blog/${slug}`
                : slug
            }`}</loc>
            <lastmod>${_updatedAt}</lastmod>
            <priority>0.80</priority>
          </url>
      `
      )
      .join('')}
  </urlset>
  `;

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    const request = await getClient()
      .fetch(`*[_type in ["post", "page", "homePage", "aboutPage"]] {
      "slug": slug.current,
      _type,
      _updatedAt
    }`);

    res.setHeader('Content-Type', 'text/xml');
    res.write(createSitemap(request));
    res.end();
  }
}

export default Sitemap;
