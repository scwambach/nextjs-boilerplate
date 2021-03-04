import React from 'react';
import Reset from '@/styles/reset';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Reset />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
