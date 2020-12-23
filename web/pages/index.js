import { getClient } from '../utils/sanity';
import Layout from '../components/Layout';
import HomeContent from '../components/docTypes/HomeContent';
// import { gql } from '@apollo/client';
// import { wpClient } from '../client';

const Index = (props) => {
  return (
    <Layout page site={props.site}>
      <HomeContent {...props.content} />
    </Layout>
  );
};

export async function getStaticProps() {
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

  const content = await getClient().fetch(
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

  return { props: { ...content } };
}

export default Index;
