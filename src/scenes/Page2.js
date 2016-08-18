import React from 'react';
import routes from '../routes';
import Page from '../components/Page';

const Page2 = ({navigator}) => {
  return (
    <Page
      title   = "Page2"
      toPage  = {() => navigator.push(routes.page3)}
    />
  );
};

export default Page2;
