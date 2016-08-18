import React from 'react';
import routes from '../routes';
import Page from '../components/Page';

const Page3 = ({navigator}) => {
  return (
    <Page
      title   = "Page3"
      toPage  = {() => navigator.resetTo(routes.page0)}
    />
  );
};

export default Page3;
