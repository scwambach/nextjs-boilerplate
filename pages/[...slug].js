import sanityClient from '../client';
import Layout from '../components/Layout';

const Post = (props) => {
  return (
    <Layout content={props && props.site}>
      {props.content ? (
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
            {JSON.stringify(props && props.content, null, '    ')}
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
      }
  }`,
    { slug: `/${slug.join('/')}` }
  );

  return { props: content };
}

export default Post;
