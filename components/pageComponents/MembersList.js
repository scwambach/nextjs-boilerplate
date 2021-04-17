import BackgroundImage, { ScBackgroundImage } from '@/tools/BackgroundImage';
import Grid, { Row } from '@/tools/grid/Grid';
import GridItem from '@/tools/grid/GridItem';
import Wrapper from '@/tools/Wrapper';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { colors } from '@/styles/settings';
import { SectionStyle } from '@/styles/bits';
import { LayoutContext } from '../Layout';

const MemberListing = ({ backgroundColor, heading }) => {
  const { members } = useContext(LayoutContext);
  return (
    <ScMemberListing bgColor={backgroundColor?.color}>
      {heading && <h2>{heading}</h2>}
      <Wrapper width={1250}>
        <Grid gutter={30}>
          {members.map(({ _key, name, headshot, description }) => (
            <GridItem width="third" key={_key}>
              <BackgroundImage overlay src={headshot}>
                <p>
                  <strong>{name}</strong>
                  {description}
                </p>
              </BackgroundImage>
            </GridItem>
          ))}
        </Grid>
      </Wrapper>
    </ScMemberListing>
  );
};

export default MemberListing;

export const ScMemberListing = styled.section`
  ${SectionStyle};

  h2 {
    text-align: center;
    font-size: 60px;
    margin: 0 0 65px;
  }

  ${Row} {
    justify-content: flex-start;
  }

  ${ScBackgroundImage} {
    height: 330px;
    position: relative;
    margin-bottom: 30px;

    p {
      text-align: center;
      position: absolute;
      width: 100%;
      color: ${colors.white};
      left: 0;
      bottom: 0;
      z-index: 1;
      text-transform: uppercase;
      line-height: 1.3;
      letter-spacing: 1px;
      font-size: 16px;

      strong {
        display: block;
        font-size: 18px;
        letter-spacing: 2px;
      }
    }
  }
`;
