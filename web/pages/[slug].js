import sanityClient from '../client';
import Layout from '../components/Layout';
import ImageFeatures from '../components/pageComponents/ImageFeatures';
import { Section } from '../styles/Section';
import Wrapper from '../tools/Wrapper';
import RichText from '../components/RichText';
import HeroBanner from '../components/pageComponents/HeroBanner';

const PageBuilder = ({ content, site }) => {
  return (
    <Layout page={content} site={site}>
      {content
        ? content.pageContent.map((component) => (
            <>
              {component._type === 'imageFeatures' && (
                <ImageFeatures {...component} />
              )}
              {component._type === 'richText' && (
                <Section>
                  <Wrapper narrow>
                    <RichText content={component.copy} />
                  </Wrapper>
                </Section>
              )}
              {component._type === 'heroBanner' && (
                <HeroBanner
                  {...component}
                  mainImage={component.backgroundImage || content.mainImage}
                />
              )}
            </>
          ))
        : '404 Page Not Found'}
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { slug = '' } = context.query;
  const content = await sanityClient.fetch(
    `*[slug.current == $slug][0]{
      "content": *[slug.current == $slug][0],
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
      "references": *[references(^._id)]
  }`,
    { slug: slug }
  );

  return { props: content };
}

export default PageBuilder;
