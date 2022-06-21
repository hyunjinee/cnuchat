import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;

  & > div {
    width: 2rem;
    height: 2rem;
    background-color: #2cbd3b;
    border-radius: 50%;
    margin-right: 1rem;
  }
`;
