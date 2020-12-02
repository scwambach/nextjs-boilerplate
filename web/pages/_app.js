import App from 'next/app';
import { useState } from 'react';
import Reset from '../styles/reset';
export const AppContext = React.createContext();
import { Provider } from 'next-auth/client';
function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <AppContext.Provider>
        <Reset />
        <Component {...pageProps} />
      </AppContext.Provider>
    </Provider>
  );
}

export default MyApp;
