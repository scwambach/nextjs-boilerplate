import React, { useContext } from 'react';
import urlFor from '../js/urlFor';
import { LayoutContext } from './Layout';
import Link from 'next/link';
import styled from 'styled-components';

const Header = () => {
  const props = useContext(LayoutContext);
  return (
    <SHeader>
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

const SHeader = styled.div`
  img {
    max-width: 100px;
  }
`;
