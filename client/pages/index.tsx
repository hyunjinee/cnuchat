import type { NextPage } from 'next';
import styled from 'styled-components';
import ConnectionCount from '../components/ConnectionCount';

import Intro from '../components/Intro';
import { flexCenter } from '../styles/theme';

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
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
`;

export default Home;
