import styled from 'styled-components';
import { flexCenter } from 'styles/utils';

export const Container = styled.div`
  position: relative;
  height: 5rem;
  min-height: 5rem;

  background-color: lightblue;
  ${flexCenter};

  justify-content: space-between;

  font-size: 1.6rem;
`;

export const ButtonContainer = styled.div`
  ${flexCenter};

  margin-left: 0.8rem;
  /* align-self: flex-start; */
  /* justify-content */
`;

export const Opponent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
