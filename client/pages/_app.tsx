import { useState } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../styles/globalStyle';
import { lightTheme, darkTheme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('dark');

  const handleTheme = () => {
    if (theme === 'dark') setTheme('light');
    else setTheme('dark');
  };

  return (
    <>
      <Head>
        <title>충남대학교 채팅</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <ThemeToggle onClick={handleTheme} isDark={theme === 'dark'}>
          {theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}
        </ThemeToggle>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

const ThemeToggle = styled.div<{ isDark: boolean }>`
  cursor: pointer;
  position: fixed;
  right: 2rem;
  top: 2rem;

  z-index: 100;

  color: ${({ theme }) => theme.color.white};
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    color: ${({ theme }) => theme.color.blue};
  }
`;

export default MyApp;
