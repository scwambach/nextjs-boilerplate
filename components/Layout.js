import React, { useState } from 'react';
import NextNprogress from 'nextjs-progressbar';
import Header from './Header';
import DocHead from './DocHead';
import Footer from './Footer';
import GlobalStyle from '../styles/globalStyles';
import { colors } from '../styles/settings';

export const LayoutContext = React.createContext();

const Layout = ({ page, site, staticTitle, children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <LayoutContext.Provider
      value={{
        menuOpen,
        setMenuOpen,
        settings: site.settings,
        events: site.events,
        logo: site.settings.mainLogo,
        menus: site.menus,
        placeholders: site.placeholders,
      }}
    >
      <NextNprogress
        color={colors.green}
        options={{
          easing: 'ease',
          speed: 500,
        }}
      />
      <DocHead page={page} staticTitle={staticTitle} />
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutContext.Provider>
  );
};

export default Layout;
