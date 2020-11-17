import sanityClient from '../client';
import Layout from '../components/Layout';
import HomeContent from '../components/docTypes/HomeContent';

const Index = ({ site, content }) => {
  return (
    <Layout page site={site}>
      <HomeContent {...content} />
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
      Location: 'https://cms.developersdonating.com/',
    });
    context.res.end();
  }

  return { props: content };
}

export default Index;
