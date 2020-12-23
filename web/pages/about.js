import { getClient } from '../utils/sanity';
import React from 'react';
import Layout from '../components/Layout';
import AboutContent from '../components/docTypes/AboutContent';

const AboutPage = ({ content, site }) => {
  return (
    <Layout page staticTitle="About" site={site}>
      <AboutContent {...content} />
    </Layout>
  );
};

export async function getStaticProps() {
  const content = await getClient().fetch(
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

  return { props: content };
}
export default AboutPage;
