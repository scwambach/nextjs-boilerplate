import React from 'react';
import HeroBanner from '../pageComponents/HeroBanner';
import { Section } from '../../styles/Section';
import Wrapper from '../../tools/Wrapper';
import RichText from '../RichText';
import ImageFeatures from '../pageComponents/ImageFeatures';

const AboutContent = (content) => {
  return (
    <>
      <HeroBanner
        index={0}
        {...content.staticHeroBanner}
        mainImage={content.mainImage}
      />
      <Section>
        <Wrapper narrow>
          <RichText content={content.richText.copy} />
        </Wrapper>
      </Section>
      <ImageFeatures {...content.imageFeatures} />
    </>
  );
};

export default AboutContent;
