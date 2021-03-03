import React from 'react';
import EventListing from '@/components/pageComponents/EventsListing';
import Layout from '@/components/Layout';
import { getClient } from '../utils/sanity';

const events = (props) => (
  <Layout page staticTitle="Events" site={props}>
    <EventListing />
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

export default events;
