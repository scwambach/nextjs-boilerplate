import sanityClient from '../client';
import React from 'react';
import Layout from '../components/Layout';
import HeroBanner from '../components/pageComponents/HeroBanner';
import Wrapper from '../tools/Wrapper';
import RichText from '../components/RichText';
import ImageFeatures from '../components/pageComponents/ImageFeatures';
import { Section } from '../styles/Section';

const AboutPage = ({ content, site }) => {
  return (
    <Layout page={content} staticTitle="About" site={site}>
      <HeroBanner {...content.staticHeroBanner} mainImage={content.mainImage} />
      <Section>
        <Wrapper narrow>
          <RichText content={content.richText.copy} />
        </Wrapper>
      </Section>
      <ImageFeatures {...content.imageFeatures} />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const content = await sanityClient.fetch(
    `*[_type == "aboutPage"][0]{
      "content": *[_type == "aboutPage"][0],
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
