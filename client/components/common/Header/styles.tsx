import styled from 'styled-components';
import { flexCenter } from 'styles/utils';

export const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 48rem;
  height: 7rem;

  ${flexCenter}
  justify-content: space-between;
  padding: 0 3rem;
`;

export const Title = styled.div`
  font-size: 3rem;
  ${flexCenter}
`;
