import React from 'react';
import Header from './Header';

export const LayoutContext = React.createContext();

const Layout = ({ content: { settings, menus }, children }) => {
  return (
    <LayoutContext.Provider value={{ ...settings }}>
      <Header />
      {children}
    </LayoutContext.Provider>
  );
};

export default Layout;
