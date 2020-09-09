import sanityClient from '../client';
import Layout from '../components/Layout';
import SanityImage from '../tools/SanityImage';
import SanityBgImage from '../tools/SanityBgImage';

const Index = ({ site, content }) => {
  return (
    <Layout page={content} site={site}>
      <p>Hello world!</p>
      <SanityBgImage src={content.pageContent[1].features[0].image}>
        <h1 style={{ padding: '200px', color: '#fff' }}>
          BACKGROUND IMAGE!!!!
        </h1>
      </SanityBgImage>
      {content && (
        <SanityImage src={content.pageContent[1].features[0].image} />
      )}
    </Layout>
  );
};

export async function getStaticProps(context) {
  const content = await sanityClient.fetch(
    `*[slug.current == "/"][0]{
      "content": *[slug.current == "/"][0],
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

export default Index;
