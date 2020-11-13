import React from 'react';
import GridLoader from 'react-spinners/GridLoader';
import styled from 'styled-components';
import { colors } from '../styles/settings';

const Loader = ({ bg }) => (
  <SLoader bg={bg}>
    <GridLoader size={30} color={colors.white} />
  </SLoader>
);

export default Loader;

export const SLoader = styled.div`
  position: fixed;
  z-index: 999;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  &:before {
    ${({ bg }) => bg && `background-color: ${colors.blackOverlay};`}
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    opacity: 0.96;
  }
`;
