import React, { useState } from 'react';
import Axios from 'axios';
import Wrapper from 'tools/Wrapper';
import styled from 'styled-components';
import Grid from '@/tools/grid/Grid';
import GridItem from '@/tools/grid/GridItem';
import Field from '../Field';
import BodyContent from '../BodyContent';

export const Message = ({ children }) => <ScMessage>{children}</ScMessage>;

export const ScMessage = styled.div`
  font-size: 40px;
`;

const FormCreator = (props) => {
  const [serial, setSerial] = useState(null);
  const [honeypot, setHoneypot] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const collectData = (id) => {
    const form = global.document.getElementById(id);
    const inputs = form.querySelectorAll('input');
    const textareas = form.querySelectorAll('textarea');

    let serialString = `recipient=${props.formRecipient}&subject=${props.title}&`;

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
    <section>
      <Wrapper narrow={!props.heading || !props.message}>
        {props.heading || props.message ? (
          <Grid gutter={50}>
            <GridItem width="half">
              <h2>{props.heading}</h2>
              <BodyContent content={props.message} />
            </GridItem>
            <GridItem width="half">
              <h3>{props.title}</h3>
              {!submitted && !submitError && (
                <form
                  id={props._type + props._key}
                  onSubmit={(e) => {
                    e.preventDefault();
                    postForm();
                  }}
                >
                  <fieldset
                    onChange={() => {
                      collectData(props._type + props._key);
                    }}
                    disabled={honeypot}
                  >
                    <input
                      type="text"
                      name="hpFirst"
                      onChange={() => {
                        setHoneypot(true);
                      }}
                      style={{ display: 'none' }}
                    />

                    {props.fields.map((field) => (
                      <Field key={field._key} {...field} />
                    ))}
                  </fieldset>
                  <button
                    disabled={honeypot}
                    type="submit"
                    id="submit"
                    name="submit"
                  >
                    {props.submitButtonCopy}
                  </button>
                </form>
              )}
              {submitted && !submitError && (
                <Message>{props.thankYouMessage}</Message>
              )}
              {!submitted && submitError && (
                <Message>{props.errorMessage}</Message>
              )}
            </GridItem>
          </Grid>
        ) : (
          <>
            <h3>{props.title}</h3>
            {!submitted && !submitError && (
              <form
                id={props._type + props._key}
                onSubmit={(e) => {
                  e.preventDefault();
                  postForm();
                }}
              >
                <fieldset
                  onChange={() => {
                    collectData(props._type + props._key);
                  }}
                  disabled={honeypot}
                >
                  <input
                    type="text"
                    name="hpFirst"
                    onChange={() => {
                      setHoneypot(true);
                    }}
                    style={{ display: 'none' }}
                  />

                  {props.fields.map((field) => (
                    <Field key={field._key} {...field} />
                  ))}
                </fieldset>
                <button
                  disabled={honeypot}
                  type="submit"
                  id="submit"
                  name="submit"
                >
                  {props.submitButtonCopy}
                </button>
              </form>
            )}
            {submitted && !submitError && (
              <Message>{props.thankYouMessage}</Message>
            )}
            {!submitted && submitError && (
              <Message>{props.errorMessage}</Message>
            )}
          </>
        )}
      </Wrapper>
    </section>
  );
};

export default FormCreator;
