import React from 'react';
import ImageFeatures from '@/components/pageComponents/ImageFeatures';
import ImageGallery from '@/components/pageComponents/ImageGallery';
import Image from '@/tools/Image';
import HeroBanner from '@/components/pageComponents/HeroBanner';
import EventsList from '@/components/pageComponents/EventsList';
import TwoColCopy from '@/components/pageComponents/TwoColCopy';
import FormCreator from '@/components/pageComponents/FormCreator';
import Link from 'next/link';

const serializers = {
  types: {
    image: ({ node }) => <Image src={node} />,
    imageFeatures: ({ node }) => <ImageFeatures {...node} />,
    imageGallery: ({ node }) => <ImageGallery {...node} />,
    heroBanner: ({ node }) => (
      <HeroBanner mainImage={node.backgroundImage} {...node} />
    ),
    eventsList: ({ node }) => <EventsList {...node} />,
    twoColCopy: ({ node }) => <TwoColCopy {...node} />,
    formCreator: ({ node }) => <FormCreator {...node} />,
  },

  marks: {
    link: ({ mark, children }) => {
      const { blank, href } = mark;
      return blank ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <Link href={href}>
          <a>{children}</a>
        </Link>
      );
    },
  },
};

export default serializers;
