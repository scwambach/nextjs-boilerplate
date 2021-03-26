import React from 'react';
import styled from 'styled-components';
import Grid from '@/tools/grid/Grid';
import GridItem from '@/tools/grid/GridItem';
import Wrapper from '@/tools/Wrapper';
import BodyContent from '@/components/BodyContent';

const TwoColumnCopy = ({ columnOneCopy, columnTwoCopy }) => (
  <ScTwoColumnCopy>
    <Wrapper>
      <Grid gutter={50}>
        <GridItem width="half">
          <BodyContent content={columnOneCopy} />
        </GridItem>
        <GridItem width="half">
          <BodyContent content={columnTwoCopy} />
        </GridItem>
      </Grid>
    </Wrapper>
  </ScTwoColumnCopy>
);

export default TwoColumnCopy;

const ScTwoColumnCopy = styled.section``;
