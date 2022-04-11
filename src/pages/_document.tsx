import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

import DocumentFavicon from 'components/DocumentFavicon'
import DocumentMetrics from 'components/DocumentMetrics'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head>
          <DocumentFavicon />
          <meta name="theme-color" content="#fff" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <DocumentMetrics />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
