import client from '../client';

const Post = props => {
  return (
    <article>
      {/* Data Dump */}
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
          {JSON.stringify(props, null, '    ')}
        </pre>
      </code>
      {/* Data Dump End */}
    </article>
  );
};

Post.getInitialProps = async function(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.query;
  return await client.fetch(`*[slug.current == $slug][0]`, {
    slug: `/${slug.join('/')}`,
  });
};

export default Post;
