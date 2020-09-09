import React from 'react';
import Layout from '../components/Layout';
import sanityClient from '../client';

const FourOhFour = ({ site }) => {
  return (
    <Layout site={site}>
      {/* Data Dump */}
      <code>
        <pre
          style={{
            fontFamily: 'monospace',
            display: 'block',
            padding: '50px',
            color: '#88ffbf',
            backgroundColor: 'black',
            textAlign: 'left',
            whiteSpace: 'pre-wrap',
          }}
        >
          {JSON.stringify(site, null, '    ')}
        </pre>
      </code>
      {/* Data Dump End */}
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const content = await sanityClient.fetch(
    `*[_type == "siteSettings"][0] {
      "site": {
        "settings":  *[_type == "siteSettings"][0],
        "menus": *[_type == "menu"],
        "placeholders": *[_type == "sanity.imageAsset"] {
          "_id": _id,
          "lqip": metadata.lqip,
          "dimensions": metadata.dimensions
        }
      },
    }`
  );

  return { props: content };
}

export default FourOhFour;
