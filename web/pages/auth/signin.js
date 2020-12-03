import sanityClient from '../../client';
import React from 'react';
import { csrfToken } from 'next-auth/client';
import Layout from '../../components/Layout';
import Wrapper from '../../tools/Wrapper';
import { Section } from '../../styles/Section';

export default function SignIn({ props, csrfToken }) {
  return (
    <Layout page site={props.site} staticTitle="Login">
      <Section style={{ margin: '200px 0' }}>
        <Wrapper narrow>
          <form
            style={{ maxWidth: '400px', margin: '0 auto' }}
            method="post"
            action="/api/auth/callback/credentials"
          >
            <h2>Login</h2>
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <label>
              Username
              <input name="username" type="text" />
            </label>
            <label>
              Password
              <input name="password" type="text" />
            </label>
            <button type="submit">Sign in</button>
          </form>
        </Wrapper>
      </Section>
    </Layout>
  );
}

SignIn.getInitialProps = async (context) => {
  const content = await sanityClient.fetch(
    `*[_type == "homePage"][0]{
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
  return {
    props: content,
    csrfToken: await csrfToken(context),
  };
};
