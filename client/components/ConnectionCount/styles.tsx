import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  top: 2rem;
  left: 2rem;

  & > div {
    width: 2rem;
    height: 2rem;
    background-color: #2cbd3b;
    border-radius: 50%;
    margin-right: 1rem;
  }
`;
