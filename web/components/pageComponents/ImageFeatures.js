import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import RichText from '../RichText';
import SanityBgImage, { SSanityBgImage } from '../../tools/SanityBgImage';
import { breakpoints, colors } from '../../styles/settings';
import Wrapper from '../../tools/Wrapper';
import LinkObject from '../../tools/LinkObject';
import { SectionStyle } from '../../styles/bits';
import FdPlayCircle from '@meronex/icons/fd/FdPlayCircle';
import YouTubeVideo, { SYouTubeVideo } from '../../tools/YouTubeVideo';

export const ImageFeatureContext = React.createContext();

const SingleFeature = (props) => {
  const { contained, reverse } = useContext(ImageFeatureContext);
  const [toggleVideo, setToggleVideo] = useState(false);
  return (
    <SSingleFeature
      contained={contained}
      reverse={reverse ? props.index % 2 === 0 : props.index % 2 !== 0}
    >
      {props.video ? (
        toggleVideo ? (
          <YouTubeVideo title={props.heading} videoId={props.video} />
        ) : (
          <>
            <SanityBgImage src={props.image}>
              <a
                href={null}
                onClick={() => {
                  setToggleVideo(true);
                }}
              >
                <FdPlayCircle />
              </a>
            </SanityBgImage>
          </>
        )
      ) : (
        <SanityBgImage src={props.image} />
      )}
      <div>
        <div>
          {props.heading && <h2>{props.heading}</h2>}
          {props.copy && <RichText content={props.copy} />}
          {props.link && <LinkObject key={props.link._key} {...props.link} />}
        </div>
      </div>
    </SSingleFeature>
  );
};

const ImageFeatures = (props) => {
  return (
    <ImageFeatureContext.Provider
      value={{
        reverse: props.flipImageSide,
        contained: props.contained,
      }}
    >
      <SImageFeatures layout={props.componentLayout}>
        {props.contained ? (
          <Wrapper>
            {props.features.map((feature, index) => (
              <SingleFeature key={feature._key} {...feature} index={index} />
            ))}
          </Wrapper>
        ) : (
          props.features.map((feature, index) => (
            <SingleFeature key={feature._key} {...feature} index={index} />
          ))
        )}
      </SImageFeatures>
    </ImageFeatureContext.Provider>
  );
};

export default ImageFeatures;

const SImageFeatures = styled.section`
  ${SectionStyle};
`;

const SSingleFeature = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  justify-content: ${({ reverse }) => (reverse ? 'end' : 'flex-start')};
  align-items: center;

  > div {
    width: 50%;

    &:nth-child(2) {
      padding: 30px 50px;
      max-width: ${breakpoints.pageWidth / 2}px;
    }
  }

  ${SSanityBgImage} {
    min-height: 600px;
    position: relative;

    > a {
      position: absolute;
      top: 0;
      left: 0;
      font-size: 150px;
      color: ${colors.gray};
      opacity: 0.6;
      height: 100%;
      width: 100%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      transition-duration: 0.3s;
      transition-timing-function: ease-in-out;

      &:hover {
        opacity: 1;
      }
    }
  }

  ${SYouTubeVideo} {
    padding-bottom: 27%;
  }
`;
