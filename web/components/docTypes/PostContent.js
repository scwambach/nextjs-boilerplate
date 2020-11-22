import React from 'react';
import HeroBanner from '../pageComponents/HeroBanner';
import { Section } from '../../styles/Section';
import Wrapper from '../../tools/Wrapper';
import RichText from '../RichText';

const PostContent = (content) => {
  return (
    <>
      <HeroBanner index={0} post={content} mainImage={content.mainImage} />
      <Section>
        <Wrapper narrow>
          <RichText content={content.body} />
        </Wrapper>
      </Section>
    </>
  );
};

export default PostContent;
