import type { NextPage } from 'next';
import styled from 'styled-components';

import Header from 'components/common/Header';
import AppLayout from 'components/common/AppLayout';
import Intro from 'components/home/Intro';

const Home: NextPage = () => {
  return (
    <AppLayout page="home">
      <Header />
      <Intro />
    </AppLayout>
  );
};

export default Home;
