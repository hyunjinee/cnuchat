import styled from 'styled-components';
import theme from 'styles/theme';

export const DialogContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.4rem 1.6rem 2.8rem;
`;

export const Title = styled.span`
  ${theme.fonts.h4}
  /* color: ${theme.colors.white}; */
  text-align: center;
`;
