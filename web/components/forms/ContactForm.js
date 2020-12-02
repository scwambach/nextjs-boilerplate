import React, { useState } from 'react';
import { colors, breakpoints, font } from '../../styles/settings';
import styled from 'styled-components';
import Axios from 'axios';

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

const postUrl = 'https://form.developersdonating.com/index.php';

const ContactForm = () => {
  const [serial, setSerial] = useState(null);
  const [honeypot, setHoneypot] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const collectData = (id) => {
    const form = global.document.getElementById(id);
    const inputs = form.querySelectorAll('input');
    const textareas = form.querySelectorAll('textarea');

    let serialString = '';

    inputs.forEach((input) => {
      serialString += `${input.name}=${input.value}&`;
    });

    textareas.forEach((input, index) => {
      serialString += `${input.name}=${input.value}${
        textareas.length === index + 1 ? '' : '&'
      }`;
    });
    setSerial(serialString);
  };

  const postForm = () => {
    Axios.post(postUrl, serial)
      .then((response) => {
        console.log(response);
        setSubmitted(true);
      })
      .catch((error) => {
        console.log(error);
        setSubmitError(true);
      });
  };

  return (
    <SForm>
      {!submitted && !submitError && (
        <form
          id="contactForm"
          onSubmit={(e) => {
            e.preventDefault();
            postForm();
          }}
        >
          <fieldset
            onChange={() => {
              collectData('contactForm');
            }}
            disabled={honeypot}
          >
            <input
              type="text"
              name="hpFirst"
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
      {submitted && !submitError && (
        <Message>
          Thank you for getting in touch! I&apos;ll get back to you very soon!
        </Message>
      )}
      {!submitted && submitError && (
        <Message>
          Oops! Looks like something was wonky there. Don&apos;t give up! Try
          contacting me later!
        </Message>
      )}
    </SForm>
  );
};

export default ContactForm;

export const SForm = styled.section`
  input,
  textarea {
    &[type='text'] {
      &:first-child {
        display: none;
      }
    }
  }
`;
