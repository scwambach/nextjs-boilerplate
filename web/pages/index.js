import { getClient, usePreviewSubscription } from '../utils/sanity';
import Layout from '../components/Layout';
import HomeContent from '../components/docTypes/HomeContent';
import { useRouter } from 'next/router';
import { groq } from 'next-sanity';
// import { gql } from '@apollo/client';
// import { wpClient } from '../client';
const query = groq`*[_type == "homePage"][0]{
  "content": *[_type == "homePage"][0],
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
}`;

const Index = ({ doc, preview }) => {
  const router = useRouter();
  if (!router.isFallback && !doc) {
    return <Error statusCode={404} />;
  }

  const { data = {} } = usePreviewSubscription(query, {
    initialData: doc,
    enabled: router.query.preview === '',
  });

  return (
    <Layout page site={doc.site}>
      <HomeContent {...data.content} />
    </Layout>
  );
};

export async function getStaticProps({ query, preview = false }) {
  // const { data } = await wpClient.query({
  //   query: gql`
  //     {
  //       posts(first: 9999) {
  //         nodes {
  //           title
  //         }
  //       }
  //     }
  //   `,
  // });

  const doc = await getClient(query?.preview === '').fetch(
    `*[_type == "homePage"][0]{
      "content": *[_type == "homePage"][0],
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

export default Index;
