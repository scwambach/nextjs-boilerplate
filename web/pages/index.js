import sanityClient from '../client';
import Layout from '../components/Layout';
import HomeContent from '../components/docTypes/HomeContent';
import { signIn, signOut, useSession } from 'next-auth/client';

const Index = (props) => {
  const [session, loading] = useSession();

  return (
    <Layout page site={props.site}>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={signIn}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.name || session.user.email} <br />
          <button onClick={signOut}>Sign out</button>
        </>
      )}
      <HomeContent {...props.content} />
    </Layout>
  );
};

export async function getStaticProps() {
  const content = await sanityClient.fetch(
    `*[_type == "homePage"][0]{
      "content": *[_type == "homePage"][0],
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
    }`
  );

  return { props: content };
}

export default Index;
