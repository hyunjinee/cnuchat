import type { NextPage } from 'next';

import Header from 'components/common/Header';
import AppLayout from 'components/common/AppLayout';

const Home: NextPage = () => {
  return (
    <AppLayout>
      <Header />
      {/* <Intro /> */}
      {/* <ConnectionCount /> */}
    </AppLayout>
  );
};

export default Home;
