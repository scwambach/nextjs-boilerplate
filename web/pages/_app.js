// import App from 'next/app'

import { useState } from 'react';
// import Head from 'next/head';
import GlobalStyle from '../styles/globalStyles';
import Reset from '../styles/reset';

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
      <Reset />
      <GlobalStyle />
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
