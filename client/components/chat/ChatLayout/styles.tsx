import styled from 'styled-components';
import { media } from 'styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* max-width: 43rem; */
  height: 81.2rem;
  width: 43rem;

  border: 1px solid black;
  border-radius: 1.5rem;

  ${media.mobile} {
    width: 100%;
    height: 100%;
    border: none;
  }
`;
