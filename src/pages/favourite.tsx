import * as React from 'react';
import Layout from '../components/Layout';
import { Favourite } from '../types';


const favourite: React.FunctionComponent<Favourite> = () => {
  return (
      <Layout>
          <h1> Your favourite Dog Images </h1>
      </Layout>
  );
};

export default favourite;
