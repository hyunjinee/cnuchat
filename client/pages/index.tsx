import type { NextPage } from 'next';

import Header from 'components/common/Header';
import { AppLayout } from 'styles/utils';

const Home: NextPage = () => {
  return (
    <AppLayout>
      <Header />
      {/* <Intro /> */}
      {/* <ConnectionCount /> */}
    </AppLayout>
  );
};

// const Container = styled.div`
//   position: relative;
//   width: 100%;
//   max-width: 48rem;
//   height: 100vh;

//   margin: 0 auto;
//   /* display: flex;
//   align-items: center;
//   justify-content: center;
//   ${flexCenter}; */
//   /* background-color: ${({ theme }) => theme.color.black}; */
//   /* color: ${({ theme }) => theme.color.white}; */
// `;

export default Home;
