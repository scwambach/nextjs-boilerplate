import React, { useContext } from 'react';
import urlFor from '../js/urlFor';
import { LayoutContext } from './Layout';
import Link from 'next/link';

const Header = () => {
  const props = useContext(LayoutContext);
  return (
    <SHeader>
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
          {JSON.stringify(props.mainLogo, null, '    ')}
        </pre>
      </code>
      {/* Data Dump End */}

      <Link href="/">
        <a>
          <img src={urlFor(props.mainLogo).width(100)} />
        </a>
      </Link>
      <Link href="/other-page">
        <a>Other Page</a>
      </Link>
      <Link href="/broken-page">
        <a>broken Page</a>
      </Link>
    </SHeader>
  );
};

export default Header;

import styled from 'styled-components';

const SHeader = styled.div`
  img {
    max-width: 100px;
  }
`;
