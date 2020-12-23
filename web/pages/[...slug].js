import Layout from '../components/Layout';
import PageContent from '../components/docTypes/PageContent';
import { useRouter } from 'next/router';
import { groq } from 'next-sanity';
import PostContent from '../components/docTypes/PostContent';
import { getClient, usePreviewSubscription } from '../utils/sanity';

const query = groq`*[slug.current == $slug][0]{
  "content": *[slug.current == $slug][0],
}`;

export default function PageBuilder({ doc, preview }) {
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
    <Layout page={data.content} site={doc.site}>
      {data ? (
        data.content._type === 'page' ? (
          <PageContent {...data.content} />
        ) : (
          <PostContent {...data.content} />
        )
      ) : (
        '404 Page Not Found'
      )}
    </Layout>
  );
}

export async function getServerSideProps({
  query,
  params = {},
  preview = false,
}) {
  const { slug = '' } = params;

  const doc = await getClient(query.preview === '').fetch(
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
    {
      slug: `${slug.join('/')}`,
    }
  );

  if (slug[0] === 'admin' || slug[0] === 'login' || slug[0] === 'studio') {
    context.res.writeHead(307, {
      Location: 'https://cms.developersdonating.com/',
    });
    context.res.end();
  }

  return { props: { doc, preview } };
}
