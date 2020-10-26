import sanityClient from '../client';
import Layout from '../components/Layout';
import PageContent from '../components/docTypes/PageContent';
import PostContent from '../components/docTypes/PostContent';

const PageBuilder = ({ content, site }) => {
  return (
    <Layout page={content} site={site}>
      {content ? (
        content._type === 'page' ? (
          <PageContent {...content} />
        ) : (
          <PostContent {...content} />
        )
      ) : (
        '404 Page Not Found'
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
    { slug: `${slug.join('/')}` }
  );

  return { props: content };
}

export default PageBuilder;
