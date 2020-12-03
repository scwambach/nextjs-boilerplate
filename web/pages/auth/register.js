import sanityClient from '../../client';
import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Wrapper from '../../tools/Wrapper';
import { Section } from '../../styles/Section';
import bcrypt from 'bcryptjs';

export default function SignIn({ props }) {
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [confirmPass, setConfirmPass] = useState(null);
  const [isMatch, setIsMatch] = useState(false);
  const [error, setError] = useState(true);
  const [userProfile, setUserProfile] = useState(true);
  const [hashPass, setHashPass] = useState(null);

  const checkError = () => {
    if (
      !userName ||
      !userName ||
      !userEmail ||
      !userPassword ||
      !confirmPass ||
      !isMatch
    ) {
      setError(true);
    } else {
      setError(false);

      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(userPassword, 10, function (err, hash) {
          setHashPass(hash);
        });
      });

      setUserProfile({
        username: userName,
        email: userEmail,
        password: hashPass,
      });
    }
  };

  async function createUserRequest() {
    const response = await fetch('/api/users/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: userProfile }),
    });

    const data = await response.json();
    return data;
  }

  return (
    <Layout page site={props.site} staticTitle="Login">
      <Section style={{ margin: '200px 0' }}>
        <Wrapper narrow>
          {userPassword}
          <br />
          {confirmPass}
          <br />
          {console.log(hashPass)}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              checkError();

              if (!error) {
                createUserRequest();
              }
            }}
            style={{ maxWidth: '400px', margin: '0 auto' }}
          >
            <h2>Register</h2>
            <br />
            <label>
              Username
              <input
                name="username"
                type="text"
                onKeyUp={(e) => {
                  setUserName(e.target.value);
                  checkError();
                }}
              />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                onKeyUp={(e) => {
                  setUserEmail(e.target.value);
                  checkError();
                }}
              />
            </label>
            <label>
              Password
              <input
                name="password"
                type="password"
                onKeyUp={(e) => {
                  setUserPassword(e.target.value);
                  if (userPassword === confirmPass) {
                    setIsMatch(true);
                  } else {
                    setIsMatch(false);
                  }
                  checkError();
                }}
              />
            </label>
            <label>
              Verify Password
              <input
                name="password_confirm"
                type="password"
                onKeyUp={(e) => {
                  setConfirmPass(e.target.value);
                  if (userPassword === confirmPass) {
                    setIsMatch(true);
                  } else {
                    setIsMatch(false);
                  }
                  checkError();
                }}
              />
            </label>
            <button disabled={error} type="submit">
              Sign in
            </button>
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
  };
};
