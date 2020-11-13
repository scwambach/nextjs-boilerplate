import App from 'next/app';
import { useState } from 'react';
import Reset from '../styles/reset';
import NextNprogress from 'nextjs-progressbar';
import { colors } from '../styles/settings';
import sanityClient from '../client';
export const AppContext = React.createContext();

function MyApp({ Component, pageProps, settings, menus, placeholders }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <AppContext.Provider
      value={{
        menuOpen,
        setMenuOpen,
        settings,
        logo: settings.mainLogo,
        menus,
        placeholders,
      }}
    >
      <NextNprogress
        color={colors.green}
        options={{
          easing: 'ease',
          speed: 500,
        }}
      />
      <Reset />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  //
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  const content = await sanityClient.fetch(
    `*[_type == "siteSettings"][0]{
      "settings":  *[_type == "siteSettings"][0],
      "menus": *[_type == "menu"],
      "placeholders": *[_type == "sanity.imageAsset"] {
        "_id": _id,
        "lqip": metadata.lqip,
        "palette": metadata.palette,
        "dimensions": metadata.dimensions
      }
    }`
  );

  return { ...appProps, ...content };
};

export default MyApp;
