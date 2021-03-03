import React from 'react';
import Wrapper from '@/components/tools/Wrapper';
import HeroBanner from '../pageComponents/HeroBanner';
import RichText from '../RichText';

const PostContent = (content) => (
  <>
    <HeroBanner index={0} post={content} mainImage={content.mainImage} />
    <section>
      <Wrapper narrow>
        <RichText content={content.body} />
      </Wrapper>
    </section>
  </>
);

export default PostContent;
