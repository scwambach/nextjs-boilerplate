import React from 'react';
import { useRouter } from 'next/router';
import { groq } from 'next-sanity';
import Error from 'next/error';
import Layout from '@/components/Layout';
import { getClient, usePreviewSubscription } from '@/utils/sanity';
import BodyContent from '@/components/BodyContent';
import HeroBanner from '@/components/pageComponents/HeroBanner';
import PageContent from '@/components/docTypes/PageContent';
import Wrapper from '@/tools/Wrapper';

const pageQuery = groq`*[slug.current == $slug][0]{
  "content": *[slug.current == $slug][0],
}`;

export default function PageBuilder({ doc }) {
  const router = useRouter();
  if (!router.isFallback && !doc) {
    return <Error statusCode={404} />;
  }

  const { data = {} } = usePreviewSubscription(pageQuery, {
    params: { slug: doc?.content.slug.current },
    initialData: doc,
    enabled: router.query.preview === '',
  });

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    data && (
      <Layout page={data.content} site={doc.site}>
        {data.content._type === 'post' ? (
          <>
            <HeroBanner
              index={0}
              post={data.content}
              mainImage={data.content.mainImage}
            />
            <Wrapper narrow>
              <BodyContent
                mainImage={data.content.mainImage}
                content={data.content.bodyContent}
              />
            </Wrapper>
          </>
        ) : (
          <PageContent {...data.content} />
        )}
      </Layout>
    )
  );
}

export async function getStaticPaths() {
  const res = await getClient().fetch('*[_type == "page" || _type == "post"]');
  const docs = await res;
  const paths = docs.map((doc) => ({
    params: { slug: doc.slug.current.split('/') },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params, preview = false }) {
  const { slug = '' } = params;

  const doc = await getClient().fetch(
    `*[slug.current == $slug][0]{
    "content": *[slug.current == $slug][0],
    "references": *[references(^._slug)],
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
    {
      slug: `${slug.join('/')}`,
    }
  );

  return { props: { doc, preview } };
}
