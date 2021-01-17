import Layout from '../components/Layout';
import PageContent from '../components/docTypes/PageContent';
import { useRouter } from 'next/router';
import { groq } from 'next-sanity';
import PostContent from '../components/docTypes/PostContent';
import { getClient, usePreviewSubscription } from '../utils/sanity';

const query = groq`*[slug.current == $slug][0]{
  "content": *[slug.current == $slug][0],
}`;

export default function PageBuilder({ doc }) {
  const router = useRouter();
  if (!router.isFallback && !doc) {
    return <Error statusCode={404} />;
  }

  const { data = {} } = usePreviewSubscription(query, {
    params: { slug: doc.content.slug.current },
    initialData: doc,
    enabled: router.query.preview === '',
  });

  return (
    data && (
      <Layout page={data && data.content} site={doc.site}>
        {data.content._type === 'page' ? (
          <PageContent {...data.content} />
        ) : (
          <PostContent {...data.content} />
        )}
      </Layout>
    )
  );
}

export async function getStaticPaths() {
  const res = await getClient().fetch(`*[_type == "page" || _type == "post"]`);
  const docs = await res;
  const paths = docs.map((doc) => ({
    params: { slug: doc.slug.current.split('/') },
  }));
  console.log(paths);

  return { paths, fallback: false };
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
