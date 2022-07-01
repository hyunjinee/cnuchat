import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          // https://velog.io/@junho0956/NextJS-styled-component
          <React.Fragment key={'key'}>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </React.Fragment>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
          <meta property="og:title" content="충남대학교 채팅" />
          <meta property="og:image" content="" />
          <meta property="og:description" content="충남대학교 학생들과 대화를 나눌 수 있는 플랫폼입니다." />
          <meta property="og:url" content="/" />
          <meta name="description" content="충남대학교 학생들과 즐거운 대화를 나눠보세요!" />
          <meta name="keywords" content="충남대, 학생" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
