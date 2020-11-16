import Head from 'next/head';
import urlFor from '../js/urlFor';
import { useContext } from 'react';
import { AppContext } from '../pages/_app';

const DocHead = ({ page, staticTitle }) => {
  const { settings } = useContext(AppContext);
  return (
    <Head>
      <title>
        {staticTitle || page
          ? page
            ? `${page.title} | ${settings.title}`
            : staticTitle
            ? `${staticTitle} | ${settings.title}`
            : settings.title
          : `404 Page Not Found | ${settings.title}`}
      </title>
      <link
        rel="icon"
        href={urlFor(settings.favicon).width(600).quality(100)}
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta
        property="og:image"
        content={urlFor(page ? page.mainImage : settings.siteImage)
          .width(600)
          .quality(100)
          .auto('format')}
      />
      <meta
        property="og:image:secure_url"
        content={urlFor(page ? page.mainImage : settings.siteImage)
          .width(600)
          .quality(100)
          .auto('format')}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={
          page
            ? page.title !== 'Home'
              ? `${page.title} | ${settings.title}`
              : settings.title
            : `404 Page Not Found | ${settings.title}`
        }
      />
      <meta property="og:site_name" content={settings.title} />
    </Head>
  );
};

export default DocHead;
