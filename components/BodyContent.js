import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import Link from 'next/link';
import Image from '@/tools/Image';
import ImageFeatures from './pageComponents/ImageFeatures';
import HeroBanner from './pageComponents/HeroBanner';
import ImageGallery from './pageComponents/ImageGallery';
import TwoColCopy from './pageComponents/TwoColCopy';
import EventsList from './pageComponents/EventsList';
import FormCreator from './pageComponents/FormCreator';

const BodyContent = ({ content, mainImage }) => {
  const serializers = {
    types: {
      image: ({ node }) => <Image src={node} />,
      imageFeatures: ({ node }) => <ImageFeatures {...node} />,
      imageGallery: ({ node }) => <ImageGallery {...node} />,
      heroBanner: ({ node }) => (
        <HeroBanner mainImage={node.backgroundImage || mainImage} {...node} />
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
  return (
    <BlockContent
      projectId={process.env.GATSBY_SANITY_ID}
      dataset={process.env.SANITY_DATASET}
      serializers={serializers}
      renderContainerOnSingleChild
      blocks={content}
    />
  );
};

export default BodyContent;
