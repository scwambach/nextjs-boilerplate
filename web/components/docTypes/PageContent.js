import React from 'react';
import ImageFeatures from '../pageComponents/ImageFeatures';
import { Section } from '../../styles/Section';
import Wrapper from '../../tools/Wrapper';
import RichText from '../RichText';
import HeroBanner from '../pageComponents/HeroBanner';
import ImageGallery from '../pageComponents/ImageGallery';

const PageContent = (content) => {
  return content.pageContent.map((component, index) => (
    <React.Fragment key={component._key}>
      {component._type === 'imageFeatures' && <ImageFeatures {...component} />}
      {component._type === 'richText' && (
        <Section>
          <Wrapper narrow>
            <RichText content={component.copy} />
          </Wrapper>
        </Section>
      )}
      {component._type === 'heroBanner' && (
        <HeroBanner
          {...component}
          index={index}
          mainImage={component.backgroundImage || content.mainImage}
        />
      )}
      {component._type === 'imageGallery' && <ImageGallery {...component} />}
    </React.Fragment>
  ));
};

export default PageContent;
