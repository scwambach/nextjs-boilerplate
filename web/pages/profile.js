import { useSession, signOut } from 'next-auth/client';
import sanityClient from '../client';
import { PrismaClient } from '@prisma/client';
import GrUserAdmin from '@meronex/icons/gr/GrUserAdmin';

import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Wrapper from '../tools/Wrapper';

const secret = (props) => {
  const [session, loading] = useSession();
  const [content, setContent] = useState();
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [error, setError] = useState(false);

  const fetchData = async () => {
    const res = await fetch('/api/profile');
    const json = await res.json();

    if ((json, content)) {
      setContent(json.content);
    }
  };

  const updateData = async () => {
    fetch('/api/profile/update', {
      method: 'POST',
      body: JSON.stringify({
        user: {
          id: props.user.id,
          name: userName || props.user.name,
          email: userEmail || props.user.email,
        },
      }),
    }).then((res) => {
      if (res.status === 500) {
        setError(true);
      } else if (res.status === 201) {
        window.location.reload();
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, [session]);
  if (typeof window !== undefined && loading) return null;
  return (
    <Layout page site={props.content.site}>
      <section style={{ margin: '100px 0' }}>
        <Wrapper narrow>
          {session ? (
            <>
              <h1 style={{ display: 'flex', alignItems: 'center' }}>
                {props.user.image && (
                  <img
                    src={props.user.image}
                    alt={props.user.name}
                    width="70"
                    height="70"
                    style={{
                      marginRight: '20px',
                      borderRadius: '100%',
                    }}
                  />
                )}
                {props.user.isAdmin && (
                  <GrUserAdmin
                    style={{
                      fontSize: '40px',
                      marginRight: '15px',
                    }}
                  />
                )}
                <span>{session.user.name}</span>
              </h1>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  updateData();
                }}
              >
                <label htmlFor="name">
                  Name
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={userName || props.user.name || null}
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                  />
                </label>
                <label htmlFor="email">
                  Email
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={userEmail || props.user.email || null}
                    onChange={(e) => {
                      setUserEmail(e.target.value);
                    }}
                  />
                </label>
                {error && <p style={{ color: 'red' }}>Something went wrong.</p>}
                <input type="submit" value="Update" />
              </form>

              <button onClick={signOut}>Sign out</button>
            </>
          ) : (
            <h1>Login Please</h1>
          )}
        </Wrapper>
      </section>
    </Layout>
  );
};
export default secret;

export async function getServerSideProps() {
  const prisma = new PrismaClient();
  const session = await prisma.session.findFirst();
  const users = await prisma.user.findMany();
  const posts = await prisma.post.findMany();
  const content = await sanityClient.fetch(
    `*[_type == "siteSettings"][0]{
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

  if (session) {
    return {
      props: {
        content,
        user: JSON.parse(JSON.stringify(users)).find(
          (u) => u.id === JSON.parse(JSON.stringify(session)).userId
        ),
        posts: JSON.parse(JSON.stringify(posts)),
      },
    };
  } else {
    return {
      props: {
        content,
      },
    };
  }
}
