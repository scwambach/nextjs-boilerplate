import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '@/styles/settings';
import { ItemWrapper } from '@/tools/grid/GridItem';

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
    margin-right: -${({ gutter }) => gutter || '30'}px !important;
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  }

  ${ItemWrapper} {
    padding-right: ${({ gutter }) => gutter || '30'}px !important;

    @media (max-width: ${breakpoints.ipadLand -
      1}px) and (min-width: ${breakpoints.ipadPort}px) {
      width: ${({ breakThird }) => (breakThird ? '33.333%' : '50%')};
    }

    + ${ItemWrapper} {
      @media screen and (max-width: ${breakpoints.ipadLand}px) {
        margin-top: ${({ gutter }) => gutter || '30'}px;
      }

      &:nth-child(1),
      &:nth-child(2) {
        @media (max-width: ${breakpoints.ipadLand -
          1}px) and (min-width: ${breakpoints.ipadPort}px) {
          margin-top: 0px;
        }
      }
      &:nth-child(3) {
        @media (max-width: ${breakpoints.ipadLand -
          1}px) and (min-width: ${breakpoints.ipadPort}px) {
          margin-top: ${({ breakThird, gutter }) =>
            breakThird ? '0' : gutter || '30'}px;
        }
      }
    }
  }
`;
