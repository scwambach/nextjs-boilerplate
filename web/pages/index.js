import sanityClient from '../client';
import Layout from '../components/Layout';
import Wrapper from '../tools/Wrapper';
import HeroBanner from '../components/pageComponents/HeroBanner';
import RichText from '../components/RichText';
import ImageFeatures from '../components/pageComponents/ImageFeatures';
import { Section } from '../styles/Section';

const Index = ({ site, content }) => {
  return (
    <Layout page site={site}>
      <HeroBanner {...content.staticHeroBanner} mainImage={content.mainImage} />
      <Section>
        <Wrapper narrow>
          <RichText content={content.richText.copy} />
        </Wrapper>
      </Section>
      <ImageFeatures {...content.imageFeatures} />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { slug = '' } = context.query;
  const content = await sanityClient.fetch(
    `*[_type == "homePage"][0]{
      "content": *[_type == "homePage"][0],
    }`
  );

  if (slug[0] === 'admin' || slug[0] === 'login' || slug[0] === 'studio') {
    context.res.writeHead(307, {
      Location: 'https://scw-starter.sanity.studio/',
    });
    context.res.end();
  }

  return { props: content };
}

export default Index;
