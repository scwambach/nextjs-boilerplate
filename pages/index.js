import React from 'react';
import { useRouter } from 'next/router';
import { groq } from 'next-sanity';
import Error from 'next/error';
import Layout from '@/components/Layout';
import { getClient, usePreviewSubscription } from '@/utils/sanity';
import BodyContent from '@/components/BodyContent';

const pageQuery = groq`*[_type == "homePage"][0]{
  "content": *[_type == "homePage"][0],
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
}`;

const Index = ({ doc }) => {
  const router = useRouter();
  if (!router.isFallback && !doc) {
    return <Error statusCode={404} />;
  }

  const { data = {} } = usePreviewSubscription(pageQuery, {
    initialData: doc,
    enabled: router.query.preview === '',
  });

  return (
    <Layout page site={doc.site}>
      <BodyContent
        mainImage={data.content.mainImage}
        content={data.content.bodyContent}
      />
    </Layout>
  );
};

export async function getStaticProps({ query, preview = false }) {
  const doc = await getClient(query?.preview === '').fetch(
    `*[_type == "homePage"][0]{
      "content": *[_type == "homePage"][0],
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

  return { props: { doc, preview } };
}

export default Index;