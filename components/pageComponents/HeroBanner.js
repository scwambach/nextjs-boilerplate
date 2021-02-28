import React from 'react';
import SanityBgImage, { SSanityBgImage } from '../../tools/SanityBgImage';
import RichText from '../RichText';
import Wrapper, { SWrapper } from '../../tools/Wrapper';
import styled from 'styled-components';
import { colors, breakpoints } from '../../styles/settings';
import LinkObject from '../../tools/LinkObject';
import { Button, SectionStyle } from '../../styles/bits';
import dateToNiceString from '../../js/dateToNiceString';

const HeroBanner = (props) => {
  return (
    <SHeroBanner>
      <SanityBgImage src={props.mainImage} video={props.vimeoVideoId}>
        <Wrapper narrow>
          {(props.heading || props.post) && props.index === 0 ? (
            <h1>{props.heading || props.post?.title}</h1>
          ) : (
            <h2>{props.heading || props.post?.title}</h2>
          )}
          {props.copy && <RichText content={props.copy} />}
          {props.post && (
            <p>{dateToNiceString(new Date(props.post.publishedAt))}</p>
          )}
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

  ${SSanityBgImage} {
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
