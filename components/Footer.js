import React from 'react';
import styled from 'styled-components';
import { colors } from '@/styles/settings';
import Socials from './Socials';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <SFooter>
      <p>
        &copy;
        {` SandBachs ${year}`}
      </p>
      <p>
        Site by&nbsp;
        <a
          href="https://scottwamba.ch"
          aria-label="Scott Wambach"
          target="_blank"
          rel="noreferrer"
        >
          Scott Wambach
        </a>
      </p>
      <Socials />
    </SFooter>
  );
};

export default Footer;

const SFooter = styled.footer`
  background-color: ${colors.gray};
  text-align: center;
  padding: 50px 0;
`;
