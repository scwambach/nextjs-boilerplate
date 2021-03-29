import React from 'react';
import ImageFeatures from '@/components/pageComponents/ImageFeatures';
import HeroBanner from '@/components/pageComponents/HeroBanner';
import ImageGallery from '@/components/pageComponents/ImageGallery';
import TwoColumnCopy from '@/components/pageComponents/TwoColumnCopy';
import FormCreator from '@/components/pageComponents/FormCreator';
import EventListing from '@/components/pageComponents/EventsListing';

const PageContent = (content) =>
  content.pageContent.map((component, index) => (
    <React.Fragment key={component._key}>
      {component._type === 'imageFeatures' && <ImageFeatures {...component} />}
      {component._type === 'heroBanner' && (
        <HeroBanner
          {...component}
          index={index}
          mainImage={component.backgroundImage || content.mainImage}
        />
      )}
      {component._type === 'eventsList' && <EventListing {...component} />}
      {component._type === 'imageGallery' && <ImageGallery {...component} />}
      {component._type === 'twoColCopy' && <TwoColumnCopy {...component} />}
      {component._type === 'formCreator' && <FormCreator {...component} />}
    </React.Fragment>
  ));

export default PageContent;
