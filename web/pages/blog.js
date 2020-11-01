import React from 'react';
import Layout from '../components/Layout';
import sanityClient from '../client';
import Link from 'next/link';
import SanityExcerpt from '../components/SanityExcerpt';
import Wrapper from '../tools/Wrapper';
import Post from '../components/Post';

const BlogPage = ({ content, site }) => {
  return (
    <Layout page={content} staticTitle="Blog" site={site}>
      <Wrapper>
        {content.map((post) => (
          <Post key={post._id} {...post} />
        ))}
      </Wrapper>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { slug = '' } = context.query;
  const content = await sanityClient.fetch(
    `*[_type == "posts"][0]{
      "content": *[_type == "post"],
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
