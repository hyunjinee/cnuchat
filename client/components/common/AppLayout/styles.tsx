import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-color: #d0ebff;
`;

export const ContainerInner = styled.div<{ page?: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  ${({ page }) =>
    page === 'home' &&
    css`
      align-items: center;
      justify-content: center;
    `}

  max-width: 48rem;
  width: 100%;
  min-height: 100vh;

  margin: 0 auto;
  padding: 0 1.8rem 8rem; // TODO

  background-color: white;
`;
