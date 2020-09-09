import Head from 'next/head';
import urlFor from '../js/urlFor';

const DocHead = ({ page, site }) => {
  return (
    <Head>
      <title>
        {page
          ? page.title !== 'Home'
            ? `${page.title} | ${site.title}`
            : site.title
          : `404 Page Not Found | ${site.title}`}
      </title>
      <link rel="icon" href={urlFor(site.favicon).width(600).quality(100)} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta
        property="og:image"
        content={urlFor(page ? page.mainImage : site.siteImage)
          .width(600)
          .quality(100)
          .auto('format')}
      />
      <meta
        property="og:image:secure_url"
        content={urlFor(page ? page.mainImage : site.siteImage)
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
              ? `${page.title} | ${site.title}`
              : site.title
            : `404 Page Not Found | ${site.title}`
        }
      />
      <meta property="og:site_name" content={site.title} />
    </Head>
  );
};

export default DocHead;
