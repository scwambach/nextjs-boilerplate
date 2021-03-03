import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import LinkObject from './tools/LinkObject';
import { LayoutContext } from './Layout';

const Menu = ({ name }) => {
  const { menus } = useContext(LayoutContext);
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSubIndex, setActiveSubIndex] = useState(null);

  return (
    <SMenu>
      {menus
        .find(({ title }) => title === name)
        .items.map(({ _key, subItems, link: { newTab, copy, url } }, index) => (
          <li
            key={_key}
            className={`${subItems ? 'hasSub' : ''} ${
              activeIndex === index ? 'open' : ''
            } ${activeSubIndex === index ? 'sub-open' : ''}`}
            onMouseLeave={() => {
              setActiveIndex(null);
            }}
          >
            {newTab ? (
              <a
                aria-label={copy}
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
                  aria-label={copy}
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
            {subItems && (
              <a
                aria-label={copy}
                className="toggle"
                href={null}
                onClick={() => {
                  setActiveSubIndex(activeSubIndex === index ? null : index);
                }}
              >
                {activeSubIndex === index ? '-' : '+'}
              </a>
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
