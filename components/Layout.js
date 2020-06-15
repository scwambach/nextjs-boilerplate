import React from 'react';
import Header from './Header';

export const LayoutContext = React.createContext();

const Layout = ({ content: { settings, menus } }) => {
  return (
    <LayoutContext.Provider value={{ ...settings }}>
      <Header />

      {/* Data Dump */}
      <code>
        <pre
          style={{
            fontFamily: 'monospace',
            display: 'block',
            padding: '50px',
            color: '#88ffbf',
            backgroundColor: 'black',
            textAlign: 'left',
            whiteSpace: 'pre-wrap',
          }}
        >
          {JSON.stringify(settings, null, '    ')}
        </pre>
      </code>
      {/* Data Dump End */}
    </LayoutContext.Provider>
  );
};

export default Layout;
