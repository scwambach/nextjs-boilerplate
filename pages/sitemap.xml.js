import React from 'react';
import { getClient } from '@/utils/sanity';
import { sitemapQuery } from '@/utils/queries';

const createSitemap = (posts) => `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${posts
      .map(
        ({ slug, _type, _updatedAt }) => `
          <url>
            <loc>${`${process.env.SITE_URL}/${
              _type === 'homePage'
                ? ''
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
    const request = await getClient().fetch(sitemapQuery);

    res.setHeader('Content-Type', 'text/xml');
    res.write(createSitemap(request));
    res.end();
  }
}

export default Sitemap;
