import React from 'react';
import routes from '../routes';
import Page from '../components/Page';

const Page0 = ({navigator}) => {
  return (
    <Page
      title   = "Page0"
      toPage  = {() => navigator.push(routes.page1)}
    />
  );
};

export default Page0;
