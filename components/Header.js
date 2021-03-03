import React, { useContext } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import FaHamburger from '@meronex/icons/fa/FaHamburger';
import GrClose from '@meronex/icons/gr/GrClose';
import { colors, breakpoints } from '@/styles/settings';
import urlFor from '@/utils/urlFor';
import Menu from './Menu';
import { LayoutContext } from './Layout';

const Header = () => {
  const { settings, logo, menuOpen, setMenuOpen } = useContext(LayoutContext);

  return (
    <SHeader open={menuOpen}>
      <Link href="/">
        <a aria-label={settings.title}>
          <img alt={settings.title} src={urlFor(logo).width(200)} />
        </a>
      </Link>
      <nav>
        <Menu name="Main Menu" />
      </nav>
      <Toggle
        open={menuOpen}
        href={null}
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        {menuOpen ? <GrClose /> : <FaHamburger />}
      </Toggle>
    </SHeader>
  );
};

export default Header;

const Toggle = styled.a`
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  height: 20px;
  width: 20px;
  display: block;

  @media screen and (min-width: ${breakpoints.ipadPort}px) {
    display: none;
  }

  svg {
    height: 20px;
  }
`;

const SHeader = styled.header`
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${colors.white};
  overflow-y: hidden;
  overflow-y: visible;
  position: relative;
  z-index: 3;

  @media screen and (max-width: ${breakpoints.ipadPort - 1}px) {
    padding: 10px 30px;
  }

  > a {
    @media screen and (max-width: ${breakpoints.ipadPort - 1}px) {
      position: relative;
      z-index: 100;
      left: ${({ open }) => (open ? '20%' : '0')};
      transition-duration: 0.3s;
      transition-timing-function: ease-in-out;
    }
  }

  ${Toggle} {
    position: absolute;
    top: calc(50% - 10px);
    right: 30px;
    left: auto;
    transform: ${({ open }) => (open ? 'rotate(360deg)' : 'rotate(0deg)')};
  }

  nav {
    @media screen and (max-width: ${breakpoints.ipadPort - 1}px) {
      position: fixed;
      top: 0;
      right: ${({ open }) => (open ? '0%' : '-80%')};
      box-shadow: ${({ open }) => (open ? colors.shadow : '0 0')};
      background-color: ${colors.white};
      width: 80%;
      text-align: right;
      height: 100%;
      padding-top: 40px;
      transition-duration: 0.3s;
      transition-timing-function: ease-in-out;
    }

    ul,
    li {
      margin: 0;
    }

    > ul {
      display: flex;

      @media screen and (min-width: ${breakpoints.ipadPort}px) {
        margin-right: -20px;
      }

      @media screen and (max-width: ${breakpoints.ipadPort - 1}px) {
        flex-direction: column;
      }

      > li {
        position: relative;

        + li {
          @media screen and (min-width: ${breakpoints.ipadPort}px) {
            margin-left: 10px;
          }
        }

        &.open,
        &:hover {
          ul {
            @media screen and (min-width: ${breakpoints.ipadPort}px) {
              display: block;
            }
          }
        }

        &.sub-open {
          ul {
            @media screen and (max-width: ${breakpoints.ipadPort - 1}px) {
              display: block;
            }
          }
        }

        ul {
          display: none;
          background-color: ${colors.white};

          @media screen and (min-width: ${breakpoints.ipadPort}px) {
            width: 200px;
            position: absolute;
            right: 0;
            box-shadow: 0 5px 15px -5px;
            top: 100%;
          }

          @media screen and (max-width: ${breakpoints.ipadPort - 1}px) {
            margin-right: -40px;
            background-color: ${colors.gray};
          }

          li {
            + li {
              border-top: 1px solid ${colors.gray};
            }
          }
        }

        &.hasSub {
          @media screen and (max-width: ${breakpoints.ipadPort - 1}px) {
            padding-right: 40px;
            position: relative;
          }

          .toggle {
            @media screen and (min-width: ${breakpoints.ipadPort}px) {
              display: none;
            }

            @media screen and (max-width: ${breakpoints.ipadPort - 1}px) {
              width: 40px;
              position: absolute;
              top: 0;
              right: 0;
            }
          }
        }
      }

      a {
        display: block;
        padding: 20px 15px;

        @media screen and (min-width: ${breakpoints.ipadPort}px) {
          padding: 20px;
        }
      }
    }
  }
`;
