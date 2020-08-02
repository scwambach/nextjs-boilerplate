import React from 'react';
import Header from './Header';
import Head from 'next/head';
import urlFor from '../js/urlFor';

export const LayoutContext = React.createContext();

const Layout = ({ pageContent, content: { settings, menus }, children }) => {
  return (
    <LayoutContext.Provider value={{ ...settings }}>
      <Head>
        <title>
          {pageContent.title !== 'Home'
            ? `${pageContent.title} | ${settings.title}`
            : settings.title}
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
          content={urlFor(pageContent.mainImage)
            .width(600)
            .quality(100)
            .auto('format')}
        />
        <meta
          property="og:image:secure_url"
          content={urlFor(pageContent.mainImage)
            .width(600)
            .quality(100)
            .auto('format')}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={
            pageContent.title !== 'Home'
              ? `${pageContent.title} | ${settings.title}`
              : settings.title
          }
        />
        <meta property="og:site_name" content={settings.title} />
      </Head>
      <code>
        <pre
          style={{
            fontFamily: 'monospace',
            display: 'block',
            padding: '50px',
            color: '#88ffbf',
            backgroundColor: 'black',
            textAlign: 'left',
            whiteSpace: 'pre-wrap',
          }}
        >
          {JSON.stringify(settings, null, '    ')}
        </pre>
      </code>

      <Header />
      {children}
    </LayoutContext.Provider>
  );
};

export default Layout;
