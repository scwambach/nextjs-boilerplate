import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import Image from './tools/Image';

const RichText = ({ content }) => {
  const serializers = {
    types: {
      image: ({ node }) => <Image src={node} />,
    },
  };
  return (
    <BlockContent
      projectId={process.env.GATSBY_SANITY_ID}
      dataset={process.env.SANITY_DATASET}
      serializers={serializers}
      blocks={content}
    />
  );
};

export default RichText;
