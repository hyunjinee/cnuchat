import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>CNU CHAT</title>
    </Head>
  );
}

export default MyApp;
