import React from 'react';
import styled from 'styled-components';
import RichText from '../RichText';
import Grid from '../../tools/grid/Grid';
import GridItem, { SGridItem } from '../../tools/grid/GridItem';
import SanityBgImage, { SSanityBgImage } from '../../tools/SanityBgImage';
import { breakpoints } from '../../styles/settings';
import Wrapper from '../../tools/Wrapper';

const SingleFeature = (props) => (
  <SSingleFeature contained={props.contained} reverse={props.index % 2 !== 0}>
    <SanityBgImage src={props.image} />
    <div>
      <div>
        {props.heading && <h3>{props.heading}</h3>}
        {props.copy && <RichText content={props.copy} />}
      </div>
    </div>
  </SSingleFeature>
);

const ImageFeatures = (props) => {
  return (
    <SImageFeatures layout={props.componentLayout}>
      {props.componentLayout === 'contained' ? (
        <Wrapper>
          {props.features.map((feature, index) => (
            <SingleFeature
              contained={props.componentLayout === 'contained'}
              {...feature}
              index={index}
            />
          ))}
        </Wrapper>
      ) : (
        props.features.map((feature, index) => (
          <SingleFeature {...feature} index={index} />
        ))
      )}
      {/* Data Dump */}
      <code>
        <pre
          style={{
            fontFamily: 'monospace',
            display: 'block',
            padding: '50px',
            color: '#88ffbf',
            backgroundColor: 'black',
            textAlign: 'left',
            whiteSpace: 'pre-wrap',
          }}
        >
          {JSON.stringify(props, null, '    ')}
        </pre>
      </code>
      {/* Data Dump End */}
    </SImageFeatures>
  );
};

export default ImageFeatures;

const SImageFeatures = styled.section``;

const SSingleFeature = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  justify-content: ${({ reverse }) => (reverse ? 'end' : 'flex-start')};
  align-items: center;

  > div {
    width: 50%;

    &:nth-child(2) {
      padding: 30px;
      max-width: ${breakpoints.pageWidth / 2}px;
    }
  }

  ${SSanityBgImage} {
    min-height: ${({ contained }) => (contained ? '40vh' : '60vh')};
  }
`;
