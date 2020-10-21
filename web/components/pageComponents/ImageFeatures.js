import React, { useContext } from 'react';
import styled from 'styled-components';
import RichText from '../RichText';
import SanityBgImage, { SSanityBgImage } from '../../tools/SanityBgImage';
import { breakpoints } from '../../styles/settings';
import Wrapper from '../../tools/Wrapper';
import LinkObject from '../../tools/LinkObject';
import { SectionStyle } from '../../styles/bits';

export const ImageFeatureContext = React.createContext();

const SingleFeature = (props) => {
  const { contained, reverse } = useContext(ImageFeatureContext);
  return (
    <SSingleFeature
      contained={contained}
      reverse={reverse ? props.index % 2 === 0 : props.index % 2 !== 0}
    >
      <SanityBgImage src={props.image} />
      <div>
        <div>
          {props.heading && <h3>{props.heading}</h3>}
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
  }
`;
