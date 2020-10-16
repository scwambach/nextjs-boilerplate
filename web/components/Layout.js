import React, { useState } from 'react';
import Header from './Header';
import DocHead from './DocHead';
import Footer from './Footer';
import GlobalStyle from '../styles/globalStyles';
export const LayoutContext = React.createContext();

const Layout = ({
  page,
  staticTitle,
  site: { menus, settings, placeholders },
  children,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <LayoutContext.Provider
      value={{
        menus,
        menuOpen,
        setMenuOpen,
        settings,
        logo: settings.mainLogo,
        placeholders: placeholders,
      }}
    >
      <DocHead page={page} staticTitle={staticTitle} site={settings} />
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutContext.Provider>
  );
};

export default Layout;
