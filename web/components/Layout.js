import React from 'react';
import Header from './Header';

import DocHead from './DocHead';

export const LayoutContext = React.createContext();

const Layout = ({
  page,
  site: { menus, settings, placeholders },
  children,
}) => {
  return (
    <LayoutContext.Provider
      value={{
        menus: menus,
        logo: settings.mainLogo,
        placeholders: placeholders,
      }}
    >
      <DocHead page={page} site={settings} />
      <Header />
      {children}
    </LayoutContext.Provider>
  );
};

export default Layout;
