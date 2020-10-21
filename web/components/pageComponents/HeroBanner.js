import React from 'react';
import SanityBgImage, { BackgroundContainer } from '../../tools/SanityBgImage';
import RichText from '../RichText';
import Wrapper, { SWrapper } from '../../tools/Wrapper';
import styled from 'styled-components';
import { colors, breakpoints } from '../../styles/settings';
import LinkObject from '../../tools/LinkObject';
import { Button, SectionStyle } from '../../styles/bits';

const HeroBanner = (props) => {
  return (
    <SHeroBanner>
      <SanityBgImage src={props.mainImage} video={props.vimeoVideoId}>
        <Wrapper>
          {props.heading && <h1>{props.heading}</h1>}
          {props.copy && <RichText content={props.copy} />}

          {props.links && (
            <>
              {props.links.map((link) => (
                <LinkObject key={link._key} {...link} />
              ))}
            </>
          )}
        </Wrapper>
      </SanityBgImage>
    </SHeroBanner>
  );
};

export default HeroBanner;

const SHeroBanner = styled.section`
  ${SectionStyle};
  text-align: center;
  color: ${colors.white};
  position: relative;

  ${BackgroundContainer} {
    padding: 80px 0;

    @media screen and (min-width: ${breakpoints.ipadPort}px) {
      padding: 200px 0;
    }
  }

  a {
    ${Button};

    + a {
      margin-left: 10px;
    }
  }

  ${SWrapper} {
    position: relative;
    z-index: 1;
  }
`;
