// import App from 'next/app'

import { useState } from 'react';

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
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
