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

const customMediaQuery = (maxWidth: number): string => `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(1440),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
};

export const colors = {
  primary: '#ffec3e',
  black: '#121212',
  gray1: '#1f1f1f',
  gray2: '#272727',
  gray3: '#3a3a3b',
  gray4: '#7f7f7f',
  gray5: '#a6a6a6',
  gray6: '#bfbfbf',
  gray7: '#ffffff',
  white: '#f2f2f2',
  red: '#df3c3c',
  kakao: '#fdd902',
} as const;

export const fonts = {
  h1: `
    font-size: 2.4rem;
    font-weight: bold;
  `,
  h2: `
    font-size: 2rem;
    font-weight: bold;
  `,
  h3: `
    font-size: 1.8rem;
    font-weight: bold;
  `,
  h4: `
    font-size: 1.6rem;
    font-weight: 500;
  `,
  h5: `
    font-size: 1.4rem;
    font-weight: bold;
  `,
  h6: `
    font-size: 1.4rem;
    font-weight: 500;
  `,
  subtitle1: `
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 144%;
  `,
  body: `
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 170%;
  `,
  caption1: `
    font-size: 1.2rem;
    font-weight: 500;
  `,
  caption2: `
    font-size: 1.2rem;
    font-weight: bold;
  `,
  btn1: `
    font-size: 1.6rem;
    font-weight: bold;
    line-height: 1.8rem;
  `,
  btn2: `
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.6rem;
  `,
} as const;

const theme = { fonts, colors };

export default theme;
