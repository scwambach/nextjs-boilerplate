import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import { previewClient } from '../client';
import PageContent from '../components/docTypes/PageContent';
import PostContent from '../components/docTypes/PostContent';

const PreviewPage = ({ content }) => {
  const contentId = content._id;
  const isDraft = contentId.split('.')[0] === 'drafts';

  const [liveData, setLiveData] = useState(content);

  useEffect(() => {
    const query = `*[_id == $id][0]{
      "content": *[_id == $id][0],
      "references": *[references(^._id)]
     }`;

    if (isDraft) {
      const params = { id: contentId };

      previewClient.listen(query, params).subscribe((update) => {
        if (update.result && update.result.title) {
          setLiveData(update.result);
          console.log('result', liveData);
        }
      });
    }
  }, []);

  return (
    <Layout page staticTitle="Preview">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      {liveData ? (
        liveData._type === 'page' ? (
          <PageContent {...liveData} />
        ) : (
          <PostContent {...liveData} />
        )
      ) : (
        '404 Page Not Found'
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
