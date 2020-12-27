import { getClient, usePreviewSubscription } from '../utils/sanity';
import React from 'react';
import Layout from '../components/Layout';
import AboutContent from '../components/docTypes/AboutContent';
import { useRouter } from 'next/router';
import { groq } from 'next-sanity';

const query = groq`*[_type == "aboutPage"][0]{
  "content": *[_type == "aboutPage"][0],
}`;

const AboutPage = ({ doc, preview }) => {
  const router = useRouter();
  if (!router.isFallback && !doc) {
    return <Error statusCode={404} />;
  }

  const { data = {} } = usePreviewSubscription(query, {
    initialData: doc,
    enabled: router.query.preview === '',
  });

  return (
    <Layout page staticTitle="About" site={doc.site}>
      <AboutContent {...data.content} />
    </Layout>
  );
};

export async function getStaticProps({ query, preview = false }) {
  const doc = await getClient(query?.preview === '').fetch(
    `*[_type == "aboutPage"][0]{
      "content": *[_type == "aboutPage"][0],
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
export default AboutPage;
