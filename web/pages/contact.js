import React from 'react';
import ContactForm from '../components/forms/ContactForm';
import Layout from '../components/Layout';
import Wrapper from '../tools/Wrapper';

const ContactPage = () => {
  return (
    <Layout page staticTitle="Contact">
      <Wrapper narrow>
        <ContactForm />
      </Wrapper>
    </Layout>
  );
};

export default ContactPage;
