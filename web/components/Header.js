import React, { useContext } from 'react';
import urlFor from '../js/urlFor';
import { LayoutContext } from './Layout';
import Link from 'next/link';
import styled from 'styled-components';

const Header = () => {
  const { logo, menus } = useContext(LayoutContext);
  return (
    <SHeader>
      <Link href="/">
        <a>
          <img src={urlFor(logo).width(100)} />
        </a>
      </Link>

      {menus
        .find(({ title }) => title === 'Main Menu')
        .items.map(({ _key, link: { copy, url } }) => (
          <Link key={_key} href={url}>
            <a>{copy}</a>
          </Link>
        ))}
    </SHeader>
  );
};

export default Header;

const SHeader = styled.header`
  img {
    max-width: 100px;
  }
`;
