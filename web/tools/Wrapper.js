import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../styles/settings';

const Wrapper = ({ children, narrow }) => {
  return <SWrapper narrow={narrow}>{children}</SWrapper>;
};

export default Wrapper;

export const SWrapper = styled.div`
  width: 100%;
  padding: 0 30px;
  margin: 0 auto;
  max-width: ${({ narrow }) =>
    narrow ? breakpoints.pageWidthNarrow : breakpoints.pageWidth}px;
`;
