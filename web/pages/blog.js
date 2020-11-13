import React, { useState } from 'react';
import Layout from '../components/Layout';
import sanityClient from '../client';
import Wrapper from '../tools/Wrapper';
import Post from '../components/Post';

const BlogPage = ({ content, site }) => {
  const [loadNum, setLoadNum] = useState(5);
  return (
    <Layout page={content} staticTitle="Blog" site={site}>
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

export async function getServerSideProps(context) {
  const { slug = '' } = context.query;
  const content = await sanityClient.fetch(
    `*[_type == "posts"][0]{
      "content": *[_type == "post"] | order(publishedAt desc),
      "site": {
        "settings":  *[_type == "siteSettings"][0],
        "menus": *[_type == "menu"],
        "placeholders": *[_type == "sanity.imageAsset"] {
          "_id": _id,
          "lqip": metadata.lqip,
          "palette": metadata.palette,
          "dimensions": metadata.dimensions
        }
      },
    }`
  );

  if (slug[0] === 'admin' || slug[0] === 'login' || slug[0] === 'studio') {
    context.res.writeHead(307, {
      Location: 'https://scw-starter.sanity.studio/',
    });
    context.res.end();
  }

  return { props: content };
}

export default BlogPage;

import styled from 'styled-components';
import { Button } from '../styles/bits';

const BlogLayout = styled.section`
  padding: 100px 0;

  .load-more {
    ${Button};
    display: block;
    max-width: 200px;
    margin: 100px auto 0;
  }
`;
