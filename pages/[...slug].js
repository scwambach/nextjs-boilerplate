import sanityClient from '../client';
import Layout from '../components/Layout';

const Post = ({ content, site }) => {
  return <Layout content={site}>{content.slug.current}</Layout>;
};

Post.getInitialProps = async function(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.query;
  return await sanityClient.fetch(
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
};

export default Post;
