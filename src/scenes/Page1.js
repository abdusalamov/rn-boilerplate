import React from 'react';
import routes from '../routes';
import Page from '../components/Page';

const Page1 = ({navigator}) => {
  return (
    <Page
      title   = "Page1"
      toPage  = {() => navigator.push(routes.page2)}
    />
  );
};

export default Page1;
