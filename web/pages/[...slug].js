import sanityClient from '../client';
import Layout from '../components/Layout';

const Post = ({ content, site }) => {
  return (
    <Layout pageContent={content} content={site}>
      {content ? (
        <code>
          <pre
            style={{
              fontFamily: 'monospace',
              display: 'block',
              padding: '50px',
              color: '#88ffbf',
              backgroundColor: 'black',
              textAlign: 'left',
              whiteSpace: 'pre-wrap',
            }}
          >
            {JSON.stringify(content, null, '    ')}
          </pre>
        </code>
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
        "images": *[_type == "sanity.imageAsset"],
        "menus": *[_type == "menu"],
      },
      "assetPlaceholder": *[_type == "sanity.imageAsset"] {
        "_id": _id,
        "lqip": metadata.lqip,
        "palette": metadata.palette,
        "dimensions": metadata.dimensions
      },
      "references": *[references(^._id)]
  }`,
    { slug: `/${slug.join('/')}` }
  );

  return { props: content };
}

export default Post;
