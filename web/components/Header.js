import React, { useContext } from 'react';
import urlFor from '../js/urlFor';
import { LayoutContext } from './Layout';
import Link from 'next/link';
import styled from 'styled-components';
import Menu from './Menu';
import { colors } from '../styles/settings';

const Header = () => {
  const { logo } = useContext(LayoutContext);
  return (
    <SHeader>
      <Link href="/">
        <a>
          <img src={urlFor(logo).width(200)} />
        </a>
      </Link>
      <nav>
        <Menu name="Main Menu" />
      </nav>
    </SHeader>
  );
};

export default Header;

const SHeader = styled.header`
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${colors.white};
  overflow-y: hidden;
  overflow-y: visible;

  nav {
    ul,
    li {
      margin: 0;
    }

    > ul {
      display: flex;

      > li {
        position: relative;

        + li {
          margin-left: 10px;
        }

        &.open,
        &:hover {
          ul {
            display: block;
          }
        }

        ul {
          width: 200px;
          display: none;
          background-color: ${colors.white};
          position: absolute;
          right: 0;
          box-shadow: 0 5px 15px -5px;
          top: 100%;

          li {
            + li {
              border-top: 1px solid ${colors.gray};
            }
          }
        }
      }

      a {
        display: block;
        padding: 20px;
      }
    }
  }
`;
