import React from 'react';
import EventListing from '../components/pageComponents/EventsListing';
import Layout from '../components/Layout';
import { getClient } from '../utils/sanity';

const events = (props) => {
  return (
    <Layout page staticTitle="Events" site={props}>
      <EventListing />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { slug = '' } = context.query;
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

  if (slug[0] === 'admin' || slug[0] === 'login' || slug[0] === 'studio') {
    context.res.writeHead(307, {
      Location: 'https://cms.developersdonating.com/',
    });
    context.res.end();
  }

  return { props: content };
}

export default events;
