import { colors } from '@/styles/settings';
import Grid from '@/tools/grid/Grid';
import GridItem, { SGridItem } from '@/tools/grid/GridItem';
import LinkObject from '@/tools/LinkObject';
import Wrapper from '@/tools/Wrapper';
import React from 'react';

import styled from 'styled-components';

const TiledLinks = ({ tiles }) => (
  <ScTiledLinks>
    <Wrapper>
      <Grid gutter={25}>
        {tiles.map(({ _key, subTitle, title, link }) => (
          <GridItem width="third" key={_key}>
            <Tile>
              {subTitle && <sup>{subTitle}</sup>}
              <h4>{title}</h4>
              <LinkObject {...link} />
            </Tile>
          </GridItem>
        ))}
      </Grid>
    </Wrapper>
  </ScTiledLinks>
);

export default TiledLinks;

export const Tile = styled.div`
  padding: 20px;
  color: ${colors.white};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  a {
    text-decoration: underline;
    color: ${colors.white};
  }
`;

export const ScTiledLinks = styled.div`
  ${Tile} {
    background-color: ${colors.black};
  }

  ${SGridItem} {
    height: 100%;
  }
`;
