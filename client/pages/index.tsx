import type { NextPage } from 'next';

import Intro from 'components/main/Intro';
import { Container } from 'styles/utils';

const Home: NextPage = () => {
  return (
    <Container>
      <Intro />

      {/* <ConnectionCount /> */}
    </Container>
  );
};

// const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   ${flexCenter};
//   /* background-color: ${({ theme }) => theme.color.black}; */
//   /* color: ${({ theme }) => theme.color.white}; */
// `;

export default Home;
