import React from 'react';
import Head from 'next/head';
import urlFor from '@/utils/urlFor';

const DocHead = ({ page }) => (
  <Head>
    <title>{page.title ? `${page.title} | SandBachs` : 'SandBachs'}</title>
    <link rel="icon" href="/favicon.png" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta
      name="description"
      content={page.pageDescription ? page.pageDescription : 'Lorem Ipsum'}
    />
    <meta
      property="og:description"
      content={page.pageDescription ? page.pageDescription : 'Lorem Ipsum'}
    />
    <meta
      property="og:image"
      content={
        page.mainImage
          ? urlFor(page.mainImage).width(600).quality(100).auto('format')
          : '/siteImage.jpg'
      }
    />
    <meta
      property="og:image:secure_url"
      content={
        page.mainImage
          ? urlFor(page.mainImage).width(600).quality(100).auto('format')
          : '/siteImage.jpg'
      }
    />
    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      content={page.title ? `${page.title} | SandBachs` : 'SandBachs'}
    />
    <meta property="og:site_name" content="SandBachs" />
    <meta name="robots" content="noindex" />
  </Head>
);

export default DocHead;
