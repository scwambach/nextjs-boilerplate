import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { colors, font } from '../../styles/settings';

const Message = ({ children }) => (
  <div
    style={{
      color: colors.cream,
      fontSize: '40px',
      lineHeight: '1.2',
      textShadow: colors.textShadow,
      fontFamily: font.primary,
    }}
  >
    {children}
  </div>
);

const FormSpree = () => {
  const [status, setStatus] = useState(null);
  const [honeypot, setHoneypot] = useState(false);
  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus('SUCCESS');
      } else {
        setStatus('ERROR');
      }
    };
    xhr.send(data);
  };

  return (
    <FormContainer>
      {status === 'SUCCESS' ? (
        <Message>
          Thank you for getting in touch! I&apos;ll get back to you very soon!
        </Message>
      ) : status === 'ERROR' ? (
        <p>
          Oops! Looks like something was wonky there. Don&apos;t give up! Try
          contacting me later!
        </p>
      ) : (
        <form
          onSubmit={(e) => {
            submitForm(e);
          }}
          action="https://formspree.io/f/xjvpeple"
          method="POST"
        >
          <fieldset>
            <input
              type="text"
              onChange={() => {
                setHoneypot(true);
              }}
            />
            <input
              required
              placeholder="Name"
              type="text"
              id="fullName"
              name="fullName"
            />
            <input
              required
              type="email"
              placeholder="Email"
              id="emailAddress"
              name="emailAddress"
            />
            <textarea
              required
              placeholder="Message"
              id="message"
              name="message"
            />
          </fieldset>
          <div className="submit">
            <input
              disabled={honeypot}
              type="submit"
              id="submit"
              name="submit"
              value="Send"
            />
          </div>
        </form>
      )}
    </FormContainer>
  );
};

export default FormSpree;

export const FormContainer = styled.section`
  input,
  textarea {
    &[type='text'] {
      &:first-child {
        display: none;
      }
    }
  }
`;
