import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import FdPlayCircle from '@meronex/icons/fd/FdPlayCircle';
import { colors } from '@/styles/settings';
import Wrapper from '@/components/tools/Wrapper';
import LinkObject from '@/components/tools/LinkObject';
import YouTubeVideo from '@/components/tools/YouTubeVideo';
import RichText from '@/components/RichText';
import Grid, { Row } from '@/components/tools/grid/Grid';
import GridItem from '@/components/tools/grid/GridItem';
import { SectionStyle } from '@/styles/bits';
import BackgroundImage, { ScBackgroundImage } from '../tools/BackgroundImage';

export const ImageFeatureContext = React.createContext();

const ImageFeatures = (props) => (
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

export default ImageFeatures;

const SingleFeature = (props) => {
  const { contained, reverse } = useContext(ImageFeatureContext);
  const [toggleVideo, setToggleVideo] = useState(false);
  return (
    <SSingleFeature
      contained={contained}
      reverse={reverse ? props.index % 2 === 0 : props.index % 2 !== 0}
    >
      <Grid
        gutter={50}
        reverse={reverse ? props.index % 2 === 0 : props.index % 2 !== 0}
      >
        <GridItem width="half">
          {props.video ? (
            toggleVideo ? (
              <YouTubeVideo title={props.heading} videoId={props.video} />
            ) : (
              props.image && (
                <BackgroundImage
                  alt={props.heading || 'imageFeature'}
                  src={props.image}
                  width={650}
                  height={400}
                >
                  <a
                    href={null}
                    onClick={() => {
                      setToggleVideo(true);
                    }}
                  >
                    <FdPlayCircle />
                  </a>
                </BackgroundImage>
              )
            )
          ) : (
            props.image && (
              <BackgroundImage
                alt={props.heading || 'imageFeature'}
                src={props.image}
                width={650}
                height={400}
              />
            )
          )}
        </GridItem>
        <GridItem width="half">
          <div>
            <div>
              {props.heading && <h2>{props.heading}</h2>}
              {props.copy && <RichText content={props.copy} />}
              {props.link && (
                <LinkObject key={props.link._key} {...props.link} />
              )}
            </div>
          </div>
        </GridItem>
      </Grid>
    </SSingleFeature>
  );
};

const SImageFeatures = styled.section`
  ${SectionStyle};
`;

const SSingleFeature = styled.div`
  ${ScBackgroundImage} {
    min-height: 400px;
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

  ${Row} {
    align-items: center;
  }
`;
