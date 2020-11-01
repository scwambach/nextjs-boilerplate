import React from 'react';
import SanityExcerpt from './SanityExcerpt';
import Link from 'next/link';
import dayjs from 'dayjs';

const Post = (post) => {
  return (
    <SPost>
      <div className="image">
        <SanityImage src={post.mainImage} width={350} height={200} />
      </div>
      <div className="copy">
        <h2>{post.title}</h2>
        {dayjs(post.publishedAt).format('MMMM D, YYYY')}
        <SanityExcerpt content={post.body} />
        <Link href={`/${post.slug.current}`}>
          <a>Read More</a>
        </Link>
      </div>
    </SPost>
  );
};

export default Post;

import styled from 'styled-components';
import SanityImage from '../tools/SanityImage';
import dateToNiceString from '../js/dateToNiceString';

const SPost = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  .image {
    width: 350px;
  }

  .copy {
    width: calc(100% - 375px);
  }

  h2 {
    margin-top: 0;
  }
`;