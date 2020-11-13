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
      "references": *[references(^._id)]
  }`,
    { slug: `${slug.join('/')}` }
  );

  if (slug[0] === 'admin' || slug[0] === 'login' || slug[0] === 'studio') {
    context.res.writeHead(307, {
      Location: 'https://scw-starter.sanity.studio/',
    });
    context.res.end();
  }

  return { props: content };
}

export default PageBuilder;
