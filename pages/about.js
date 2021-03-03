import React from 'react';
import { useRouter } from 'next/router';
import Error from 'next/error';
import { groq } from 'next-sanity';
import Layout from '../components/Layout';
import { getClient, usePreviewSubscription } from '../utils/sanity';
import HeroBanner from '../components/pageComponents/HeroBanner';
import { Section } from '../styles/Section';
import Wrapper from '../tools/Wrapper';
import RichText from '../components/RichText';
import ImageFeatures from '../components/pageComponents/ImageFeatures';

const pageQuery = groq`*[_type == "aboutPage"][0]{
  "content": *[_type == "aboutPage"][0],
}`;

const AboutPage = ({ doc }) => {
  const router = useRouter();
  if (!router.isFallback && !doc) {
    return <Error statusCode={404} />;
  }

  const { data = {} } = usePreviewSubscription(pageQuery, {
    initialData: doc,
    enabled: router.query.preview === '',
  });

  return (
    <Layout page staticTitle="About" site={doc.site}>
      <HeroBanner
        index={0}
        {...data.content.staticHeroBanner}
        mainImage={data.content.mainImage}
      />
      <Section>
        <Wrapper narrow>
          <RichText content={data.content.richText.copy} />
        </Wrapper>
      </Section>
      <ImageFeatures {...data.content.imageFeatures} />
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
