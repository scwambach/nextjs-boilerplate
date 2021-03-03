import React from 'react';
import styled from 'styled-components';
import { colors, breakpoints } from '@/styles/settings';
import { Button, SectionStyle } from '@/styles/bits';
import SanityBgImage, {
  SSanityBgImage,
} from '@/components/tools/SanityBgImage';
import Wrapper, { SWrapper } from '@/components/tools/Wrapper';
import LinkObject from '@/components/tools/LinkObject';
import RichText from '../RichText';
import dateToNiceString from '../../utils/dateToNiceString';

const HeroBanner = (props) => (
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
