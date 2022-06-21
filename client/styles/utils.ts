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
