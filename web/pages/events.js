import React, { useContext } from 'react';
import { AppContext } from '../pages/_app';
import EventListing from '../components/pageComponents/EventsListing';
import Layout from '../components/Layout';

const events = () => {
  return (
    <Layout staticTitle="Events">
      <EventListing />
    </Layout>
  );
};

export default events;
