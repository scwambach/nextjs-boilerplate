import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '@/styles/settings';

const GridItem = ({ children, width }) => (
  <ItemWrapper width={width}>
    <SGridItem>{children}</SGridItem>
  </ItemWrapper>
);

export default GridItem;

export const ItemWrapper = styled.div`
  width: 100%;

  @media screen and (min-width: ${breakpoints.ipadLand}px) {
    width: ${({ width }) =>
      width === 'half'
        ? '50'
        : width === 'third'
        ? '33.333'
        : width === 'third2'
        ? '66.666'
        : width === 'fourth'
        ? '25'
        : width === 'fourth3'
        ? '75'
        : width === 'fifth'
        ? '20'
        : width === 'fifth2'
        ? '40'
        : width === 'fifth3'
        ? '60'
        : width === 'sixth'
        ? '16.666'
        : width === 'sixth5'
        ? '83.333'
        : '100'}%;
  }
`;

export const SGridItem = styled.div`
  display: block;
`;
