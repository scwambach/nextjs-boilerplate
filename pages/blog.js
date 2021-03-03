import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@/styles/bits';
import Wrapper from '@/components/tools/Wrapper';
import Layout from '../components/Layout';
import { getClient } from '../utils/sanity';
import Post from '../components/Post';

const BlogPage = ({ content, site }) => {
  const [loadNum, setLoadNum] = useState(5);
  return (
    <Layout page staticTitle="Blog" site={site}>
      <BlogLayout>
        <Wrapper>
          {content.slice(0, loadNum).map((post) => (
            <Post key={post._id} {...post} />
          ))}
          {content.length >= loadNum && (
            <a
              href={null}
              className="load-more"
              onClick={() => {
                setLoadNum(loadNum + 5);
              }}
            >
              Load More
            </a>
          )}
        </Wrapper>
      </BlogLayout>
    </Layout>
  );
};

export async function getStaticProps() {
  const content = await getClient().fetch(
    `*[_type == "posts"][0]{
      "content": *[_type == "post"] | order(publishedAt desc),
      "site": {
        "events": *[_type == "event"],
        "settings":  *[_type == "siteSettings"][0],
        "menus": *[_type == "menu"],
        "placeholders": *[_type == "sanity.imageAsset"] {
          "_id": _id,
          "lqip": metadata.lqip,
          "palette": metadata.palette,
          "dimensions": metadata.dimensions
        }
      }
    }`
  );

  return { props: content };
}

export default BlogPage;

const BlogLayout = styled.section`
  padding: 100px 0;

  .load-more {
    ${Button};
    display: block;
    max-width: 200px;
    margin: 100px auto 0;
  }
`;
