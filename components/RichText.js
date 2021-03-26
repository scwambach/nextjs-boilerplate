import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import Link from 'next/link';
import Image from '@/tools/Image';
import Wrapper from '@/tools/Wrapper';
import ImageFeatures from './pageComponents/ImageFeatures';

const RichText = ({ content }) => {
  const serializers = {
    types: {
      image: ({ node }) => <Image src={node} />,
      imageFeatures: ({ node }) => <ImageFeatures {...node} />,
      block: (props) => (
        <Wrapper narrow>
          {BlockContent.defaultSerializers.types.block(props)}
        </Wrapper>
      ),
    },
    list: (props) =>
      props.type === 'bullet' ? (
        <Wrapper narrow>
          <ul>{props.children}</ul>
        </Wrapper>
      ) : (
        <Wrapper narrow>
          <ol>{props.children}</ol>
        </Wrapper>
      ),

    marks: {
      code: (props) => (
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
            {props.children}
          </pre>
        </code>
      ),
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

export default RichText;
