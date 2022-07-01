import styled, { css } from 'styled-components';

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  ${flexCenter}
  width: 100%;
  height: 100vh;
`;

export const AppLayout = styled.div`
  position: relative;
  width: 100%;
  max-width: 48rem;
  height: 100vh;

  margin: 0 auto;
`;
