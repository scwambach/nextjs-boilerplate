import React from 'react';
import Header from './Header';

import DocHead from './DocHead';

export const LayoutContext = React.createContext();

const Layout = (props) => {
  return (
    <LayoutContext.Provider
      value={{
        menus: props.site.menus,
        logo: props.site.settings.mainLogo,
        placeholders: props.site.placeholders,
      }}
    >
      <DocHead page={props.page} site={props.site.settings} />
      <Header />
      {props.children}
    </LayoutContext.Provider>
  );
};

export default Layout;
