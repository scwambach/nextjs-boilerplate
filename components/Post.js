import React from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';
import styled from 'styled-components';
import SanityExcerpt from '@/components/SanityExcerpt';
import Image from './tools/Image';

const Post = (post) => (
  <SPost>
    <div className="image">
      <Image crop src={post.mainImage} width={500} height={400} />
    </div>
    <div className="copy">
      <h2>{post.title}</h2>
      {dayjs(post.publishedAt).format('MMMM D, YYYY')}
      <SanityExcerpt content={post.body} />
      <Link
        aria-label={`Read More ${post.title}`}
        href={`/${post.slug.current}`}
      >
        <a>Read More</a>
      </Link>
    </div>
  </SPost>
);

export default Post;

const SPost = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;

  .image {
    width: 100%;
    max-width: 500px;
  }

  .copy {
    width: calc(100% - 525px);
  }

  h2 {
    margin-top: 0;
  }
`;
