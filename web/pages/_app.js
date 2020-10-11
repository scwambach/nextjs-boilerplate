// import App from 'next/app'

import { useState } from 'react';
// import Head from 'next/head';
import Reset from '../styles/reset';
import NextNprogress from 'nextjs-progressbar';
import { colors } from '../styles/settings';

export const AppContext = React.createContext();

function MyApp({ Component, pageProps }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <AppContext.Provider
      value={{
        menuOpen,
        setMenuOpen,
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

// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
