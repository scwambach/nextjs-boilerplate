import React from 'react';
import { useRouter } from 'next/router';
import Error from 'next/error';
import Layout from '@/components/Layout';
import { getClient, usePreviewSubscription } from '@/utils/sanity';
import PageContent from '@/components/docTypes/PageContent';
import { homePreviewQuery, homeQuery } from '@/utils/queries';

const pageQuery = homePreviewQuery;

const Index = ({ doc }) => {
  const router = useRouter();
  if (!router.isFallback && !doc) {
    return <Error statusCode={404} />;
  }

  const { data = {} } = usePreviewSubscription(pageQuery, {
    initialData: doc,
    enabled: router.query.preview === '',
  });

  return (
    <Layout page site={doc.site}>
      <PageContent {...data.content} />
    </Layout>
  );
};

export async function getStaticProps({ query, preview = false }) {
  const doc = await getClient(query?.preview === '').fetch(homeQuery);

  return { props: { doc, preview } };
}

export default Index;
