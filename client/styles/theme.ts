import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  color: {},
  boxShadow: {},
};

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(1440),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
};
