import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { LayoutContext } from './Layout';
import LinkObject from '../tools/LinkObject';

const Menu = ({ name }) => {
  const { menus } = useContext(LayoutContext);
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <SMenu>
      {menus
        .find(({ title }) => title === name)
        .items.map(({ _key, subItems, link: { newTab, copy, url } }, index) => (
          <li
            key={_key}
            className={`${subItems ? 'hasSub' : ''} ${
              activeIndex === index ? 'open' : ''
            }`}
            onMouseLeave={() => {
              setActiveIndex(null);
            }}
          >
            {newTab ? (
              <a
                onFocus={() => {
                  subItems ? setActiveIndex(index) : setActiveIndex(null);
                }}
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                {copy}
              </a>
            ) : (
              <Link href={url}>
                <a
                  onFocus={() => {
                    subItems ? setActiveIndex(index) : setActiveIndex(null);
                  }}
                >
                  {copy}
                </a>
              </Link>
            )}

            {subItems && (
              <ul>
                {subItems.map((subItem) => (
                  <li key={subItem._key}>
                    <LinkObject {...subItem} />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
    </SMenu>
  );
};

export default Menu;

const SMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`;