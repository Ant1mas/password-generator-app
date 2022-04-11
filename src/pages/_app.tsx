import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

import '../../i18n'
import 'styles/globals.css'

export function App(props: AppProps) {
  const { Component, pageProps } = props
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
