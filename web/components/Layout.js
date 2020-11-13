import React, { useState } from 'react';
import Header from './Header';
import DocHead from './DocHead';
import Footer from './Footer';
import GlobalStyle from '../styles/globalStyles';
export const LayoutContext = React.createContext();

const Layout = ({ page, staticTitle, children }) => {
  return (
    <>
      <DocHead page={page} staticTitle={staticTitle} />
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
