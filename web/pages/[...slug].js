import sanityClient from '../client';
import Layout from '../components/Layout';
import PageContent from '../components/docTypes/PageContent';
import PostContent from '../components/docTypes/PostContent';

const PageBuilder = (props) => {
  return (
    <Layout page={props.content} site={props.site}>
      {props.content ? (
        props.content._type === 'page' ? (
          <PageContent {...props.content} />
        ) : (
          <PostContent {...props.content} />
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
      "references": *[references(^._id)],
      "site": {
        "events": *[_type == "event"],
        "settings":  *[_type == "siteSettings"][0],
        "menus": *[_type == "menu"],
        "placeholders": *[_type == "sanity.imageAsset"] {
          "_id": _id,
          "lqip": metadata.lqip,
          "palette": metadata.palette,
          "dimensions": metadata.dimensions
        }
      }
  }`,
    { slug: `${slug.join('/')}` }
  );

  if (slug[0] === 'admin' || slug[0] === 'login' || slug[0] === 'studio') {
    context.res.writeHead(307, {
      Location: 'https://cms.developersdonating.com/',
    });
    context.res.end();
  }

  return { props: content };
}

export default PageBuilder;
