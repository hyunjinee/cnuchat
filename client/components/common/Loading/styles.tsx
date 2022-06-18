import styled from 'styled-components';
import { spin } from 'styles/keyframes';
import { flexCenter } from 'styles/utils';

export const Container = styled.div`
  ${flexCenter}
  width: 100%;
  height: 100vh;
`;

export const Spinner = styled.div`
  z-index: 999;
  animation: ${spin} 1.5s linear infinite;
`;
