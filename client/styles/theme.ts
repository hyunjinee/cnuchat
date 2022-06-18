import { DefaultTheme, css } from 'styled-components';

export const darkTheme: DefaultTheme = {
  color: {
    black: '#000000',
    blue: '#3385F7',
    red: '#FF7B93',
    white: '#FFFFFF',
  },
};
export const lightTheme: DefaultTheme = {
  color: {
    black: '#FFFFFF',
    blue: '#6400ff',
    red: '#00ff50',
    white: '#000000',
  },
};

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(1440),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
};
