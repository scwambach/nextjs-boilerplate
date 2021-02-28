import React from 'react';
import Reset from '../styles/reset';
export const AppContext = React.createContext();
function MyApp({ Component, pageProps }) {
  return (
    <AppContext.Provider>
      <Reset />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
