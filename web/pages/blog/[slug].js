import sanityClient from '../../client';
import Layout from '../../components/Layout';
import HeroBanner from '../../components/pageComponents/HeroBanner';
import RichText from '../../components/RichText';
import { Section } from '../../styles/Section';
import Wrapper from '../../tools/Wrapper';

const Post = ({ content, site }) => {
  return (
    <Layout page={content} site={site}>
      {content ? (
        <>
          <HeroBanner post={content} mainImage={content.mainImage} />
          <Section>
            <Wrapper narrow>
              {content.categories.map((category) => (
                <p>{}</p>
              ))}
              <RichText content={content.body} />
            </Wrapper>
          </Section>
        </>
      ) : (
        '404 not found'
      )}
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

export default Post;
