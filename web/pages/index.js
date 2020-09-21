import sanityClient from '../client';
import Layout from '../components/Layout';
import SanityImage from '../tools/SanityImage';
import SanityBgImage from '../tools/SanityBgImage';
import HtmlKitchenSink from '../components/HtmlKitchenSink';
import Grid from '../tools/grid/Grid';
import GridItem from '../tools/grid/GridItem';
import Wrapper from '../tools/Wrapper';

const Index = ({ site, content }) => {
  return (
    <Layout page={content} site={site}>
      <Wrapper narrow>
        <SanityBgImage src={content.mainImage}>
          <h1 style={{ padding: '200px', color: '#fff' }}>
            BACKGROUND IMAGE!!!!
          </h1>
        </SanityBgImage>
        {content && <SanityImage src={content.mainImage} />}
        <Grid gutter="10">
          <GridItem width="third">Dolor ante est</GridItem>
          <GridItem width="third2">Dolor ante est</GridItem>
        </Grid>

        <Grid gutter="10" breakThird>
          <GridItem width="sixth">Dolor ante est</GridItem>
          <GridItem width="sixth">Dolor ante est</GridItem>
          <GridItem width="sixth">Dolor ante est</GridItem>
          <GridItem width="sixth">Dolor ante est</GridItem>
          <GridItem width="sixth">Dolor ante est</GridItem>
          <GridItem width="sixth">Dolor ante est</GridItem>
        </Grid>

        <Grid>
          <GridItem>test</GridItem>
        </Grid>

        <HtmlKitchenSink />
      </Wrapper>
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
