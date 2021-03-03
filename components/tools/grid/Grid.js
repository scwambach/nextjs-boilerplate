import React from 'react';
import styled from 'styled-components';
import { ItemWrapper } from './GridItem';
import { breakpoints } from '../../../styles/settings';

const Grid = ({ children, gutter, reverse, breakThird }) => (
  <GridContainer gutter={gutter} reverse={reverse} breakThird={breakThird}>
    <Row>{children}</Row>
  </GridContainer>
);

export default Grid;

export const Row = styled.div`
  overflow-x: hidden;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const GridContainer = styled.div`
  overflow-x: hidden;

  ${Row} {
    margin-right: -${({ gutter }) => gutter || '30'}px;
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  }

  ${ItemWrapper} {
    padding-right: ${({ gutter }) => gutter || '30'}px;

    @media (max-width: ${breakpoints.ipadLand -
      1}px) and (min-width: ${breakpoints.ipadPort}px) {
      width: ${({ breakThird }) => (breakThird ? '33.333%' : '50%')};
    }
  }
`;
