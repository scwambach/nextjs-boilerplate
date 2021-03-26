import React, { useState } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { colors, font } from '@/styles/settings';

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
    Axios.post('/api/mailer', serial)
      .then(() => {
        setSubmitted(true);
      })
      .catch(() => {
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
              type="text"
              name="subject"
              defaultValue="Contact Form"
              style={{ display: 'none' }}
            />
            <input
              type="text"
              name="recipient"
              defaultValue="scott@scottwamba.ch"
              style={{ display: 'none' }}
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