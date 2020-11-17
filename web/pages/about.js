import sanityClient from '../client';
import React from 'react';
import Layout from '../components/Layout';
import AboutContent from '../components/docTypes/AboutContent';

const AboutPage = ({ content }) => {
  return (
    <Layout page staticTitle="About">
      <AboutContent {...content} />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { slug = '' } = context.query;
  const content = await sanityClient.fetch(
    `*[_type == "aboutPage"][0]{
      "content": *[_type == "aboutPage"][0],
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
export default AboutPage;
