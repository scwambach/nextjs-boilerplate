import React, { useState } from 'react';
import NextNprogress from 'nextjs-progressbar';
import GlobalStyle from '@/styles/globalStyles';
import { colors } from '@/styles/settings';
import Header from '@/components/Header';
import DocHead from '@/components/DocHead';
import Footer from '@/components/Footer';

export const LayoutContext = React.createContext();

const Layout = ({ page, site, staticTitle, children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <LayoutContext.Provider
      value={{
        menuOpen,
        setMenuOpen,
        events: site.events,
        menus: site.menus,
        members: site.members,
        socials: site.socials,
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
