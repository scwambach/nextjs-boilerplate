import sanityClient from '../client';
import Layout from '../components/Layout';
import SanityImage from '../tools/SanityImage';
import SanityBgImage from '../tools/SanityBgImage';
import HtmlKitchenSink from '../components/HtmlKitchenSink';
import Grid from '../tools/grid/Grid';
import GridItem from '../tools/grid/GridItem';
import Wrapper from '../tools/Wrapper';
import HeroBanner from '../components/pageComponents/HeroBanner';
import RichText from '../components/RichText';
import SectionHeading from '../components/pageComponents/SectionHeading';
import ImageFeatures from '../components/pageComponents/ImageFeatures';

const Index = ({ site, content }) => {
  return (
    <Layout page={content} site={site}>
      <HeroBanner {...content.staticHeroBanner} mainImage={content.mainImage} />
      <section>
        <Wrapper narrow>
          <RichText content={content.richText.copy} />
        </Wrapper>
      </section>
      <section>
        <SectionHeading {...content.sectionHeading} />
      </section>
      <ImageFeatures {...content.imageFeatures} />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const content = await sanityClient.fetch(
    `*[_type == "homePage"][0]{
      "content": *[_type == "homePage"][0],
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
