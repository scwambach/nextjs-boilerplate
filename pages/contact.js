import React from 'react';
import Wrapper from '@/components/tools/Wrapper';
import Layout from '../components/Layout';
import { getClient } from '../utils/sanity';
import ContactForm from '../components/forms/ContactForm';

const ContactPage = (props) => (
  <Layout page staticTitle="Contact" site={props}>
    <Wrapper narrow>
      <ContactForm />
    </Wrapper>
  </Layout>
);

export async function getStaticProps() {
  const content = await getClient().fetch(
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
