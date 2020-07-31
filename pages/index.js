import sanityClient from '../client';
import Layout from '../components/Layout';

const Index = ({ site }) => {
  return (
    <Layout content={site && site}>
      <p>Hello world!</p>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const content = await sanityClient.fetch(
    `*[slug.current == "/"][0]{
      "content": *[slug.current == "/"][0],
      "site": {
        "settings":  *[_type == "siteSettings"][0],
        "images": *[_type == "sanity.imageAsset"],
        "menus": *[_type == "menu"],
      }
    }`
  );

  return { props: content };
}

export default Index;
