import React, { useContext } from 'react';
import styled from 'styled-components';
import { LayoutContext } from './Layout';
import { colors } from '../styles/settings';

const Footer = () => {
  const { settings } = useContext(LayoutContext);
  const year = new Date().getFullYear();
  return (
    <SFooter>
      <p>&copy;{` ${settings.title} ${year}`}</p>
      <p>
        Site by{' '}
        <a href="https://scottwamba.ch" target="_blank" rel="noreferrer">
          Scott Wambach
        </a>
      </p>
    </SFooter>
  );
};

export default Footer;

const SFooter = styled.footer`
  background-color: ${colors.gray};
  text-align: center;
  padding: 50px 0;
`;
