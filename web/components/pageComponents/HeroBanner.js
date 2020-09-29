import React from 'react';
import SanityBgImage from '../../tools/SanityBgImage';
import BlockContent from '@sanity/block-content-to-react';
import RichText from '../RichText';
import Wrapper from '../../tools/Wrapper';

const HeroBanner = (props) => {
  return (
    <div>
      <SanityBgImage src={props.mainImage}>
        <Wrapper>
          <h1>{props.heading}</h1>
          <RichText content={props.copy} />
        </Wrapper>
      </SanityBgImage>
    </div>
  );
};

export default HeroBanner;
