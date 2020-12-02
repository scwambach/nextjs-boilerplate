import React from 'react';
import Layout from '../components/Layout';
import Wrapper from '../tools/Wrapper';
import sanityClient from '../client';
import FormSpree from '../components/forms/FormSpree';

const ContactPage = (props) => {
  return (
    <Layout page staticTitle="Contact" site={props}>
      <Wrapper narrow>
        <FormSpree />
      </Wrapper>
    </Layout>
  );
};

export async function getStaticProps() {
  const content = await sanityClient.fetch(
    `*[_type == "siteSettings"][0] {
      "events": *[_type == "event"],
      "settings":  *[_type == "siteSettings"][0],
      "menus": *[_type == "menu"],
      "placeholders": *[_type == "sanity.imageAsset"] {
        "_id": _id,
        "lqip": metadata.lqip,
        "palette": metadata.palette,
        "dimensions": metadata.dimensions
      }
    }`
  );

  return { props: content };
}

export default ContactPage;
