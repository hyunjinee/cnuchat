import type { NextPage } from 'next';
import styled from 'styled-components';

import ConnectionCount from 'components/common/ConnectionCount';
import Intro from 'components/main';
import { flexCenter } from 'styles/utils';

const Home: NextPage = () => {
  return (
    <Container>
      <Intro />

      <ConnectionCount />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  ${flexCenter};
  /* background-color: ${({ theme }) => theme.color.black}; */
  /* color: ${({ theme }) => theme.color.white}; */
`;

export default Home;
