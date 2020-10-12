import sanityClient from '../client';
import React from 'react';
import Layout from '../components/Layout';
import Wrapper from '../tools/Wrapper';
import { Section } from '../styles/Section';

const AboutPage = ({ site }) => {
  return (
    <Layout staticTitle="store" site={site}>
      <Section>
        <Wrapper>
          <h1>Store</h1>
        </Wrapper>
      </Section>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const content = await sanityClient.fetch(
    `*[_type == "siteSettings"][0]{
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

  return { props: content };
}
export default AboutPage;
