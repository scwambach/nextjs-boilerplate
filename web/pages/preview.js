import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import { previewClient } from '../client';
import PageContent from '../components/docTypes/PageContent';
import PostContent from '../components/docTypes/PostContent';
import Wrapper from '../tools/Wrapper';
import HomeContent from '../components/docTypes/HomeContent';
import AboutContent from '../components/docTypes/AboutContent';

const PreviewPage = ({ content }) => {
  return (
    <Layout page staticTitle="Preview">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      {content ? (
        content._type === 'page' ? (
          <PageContent {...content} />
        ) : content._type === 'post' ? (
          <PostContent {...content} />
        ) : content._type === 'homePage' ? (
          <HomeContent {...content} />
        ) : content._type === 'aboutPage' ? (
          <AboutContent {...content} />
        ) : (
          ''
        )
      ) : (
        <Wrapper narrow>
          <p style={{ fontSize: '20px', padding: '100px 0' }}>
            Sorry, nothing seems match the content type you're trying to view.
          </p>
        </Wrapper>
      )}
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { docid = '' } = context.query;

  const content = await previewClient.fetch(
    `*[_id == $id][0]{
      "content": *[_id == $id][0],
      "references": *[references(^._id)]
  }`,
    { id: docid }
  );

  return { props: content };
}

export default PreviewPage;
