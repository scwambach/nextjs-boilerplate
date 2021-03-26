import React from 'react';
import styled from 'styled-components';
import { colors, breakpoints } from '@/styles/settings';
import { Button, SectionStyle } from '@/styles/bits';
import Wrapper, { SWrapper } from '@/tools/Wrapper';
import LinkObject from '@/tools/LinkObject';
import BackgroundImage, { ScBackgroundImage } from '@/tools/BackgroundImage';
import dateToNiceString from '@/utils/dateToNiceString';
import RichText from '@/components//RichText';

const HeroBanner = (props) => (
  <SHeroBanner>
    <BackgroundImage
      src={props.mainImage}
      alt={props.heading || props.post?.title}
      video={props.vimeoVideoId}
    >
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
    </BackgroundImage>
  </SHeroBanner>
);

export default HeroBanner;

const SHeroBanner = styled.section`
  ${SectionStyle};
  text-align: center;
  color: ${colors.white};
  position: relative;

  ${ScBackgroundImage} {
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
