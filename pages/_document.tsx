import Document, { Html, Head, Main, NextScript } from 'next/document'

import DocumentFavicon from 'components/DocumentFavicon'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <DocumentFavicon />
          <meta name="theme-color" content="#fff" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
