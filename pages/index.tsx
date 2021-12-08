import type { NextPage } from 'next';
import { Hero } from '../components/Hero';

import { Layout } from '../components/Layout';
import { Navigation } from '../components/Navigation';

const Home: NextPage = () => {
  return (
    <Layout>
      <Navigation />
      <Hero />
    </Layout>
  );
};

export default Home;
