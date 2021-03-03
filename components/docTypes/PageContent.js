import React from 'react';
import Wrapper from '@/components/tools/Wrapper';
import ImageFeatures from '../pageComponents/ImageFeatures';
import RichText from '../RichText';
import HeroBanner from '../pageComponents/HeroBanner';
import ImageGallery from '../pageComponents/ImageGallery';

const PageContent = (content) =>
  content.pageContent.map((component, index) => (
    <React.Fragment key={component._key}>
      {component._type === 'imageFeatures' && <ImageFeatures {...component} />}
      {component._type === 'richText' && (
        <section>
          <Wrapper narrow>
            <RichText content={component.copy} />
          </Wrapper>
        </section>
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

export default PageContent;
