// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

interface DocumentProps {
  isProduction: boolean;
}

class CustomDocument extends Document<DocumentProps> {
  render() {
    return (
      <Html lang="id">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.png" />
          <meta name="theme-color" content="#0000" />
          <meta name="keyword" content=""></meta>
          <meta name="description" content=""></meta>
          <meta property="og:type" content="article" />
          <meta property="og:title" content="" />
          <meta property="og:description" content="" />
          <meta property="og:image" content="" />
          <meta property="og:url" content="" />
          <meta property="og:site_name" content="" />
          <meta name="twitter:card" content="summary"></meta>
          <meta name="twitter:title" content="" />
          <meta name="twitter:description" content="" />
          <meta name="twitter:image" content="" />
          <meta itemProp="name" content=""></meta>
          <meta itemProp="description" content=""></meta>
          <meta itemProp="image" content=""></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
