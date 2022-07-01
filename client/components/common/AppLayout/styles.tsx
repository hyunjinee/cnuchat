import styled from 'styled-components';

export const Container = styled.div`
  background-color: #d0ebff;
`;

export const ContainerInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  max-width: 48rem;
  min-height: 100vh;

  margin: 0 auto;

  padding: 0 1.8rem 8rem; // TODO

  background-color: white;
`;
