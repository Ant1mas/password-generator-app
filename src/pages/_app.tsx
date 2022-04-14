import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

import '../../i18n'
import 'styles/globals.css'
import CustomSnackbarProvider from 'lib/plugins/notistack/CustomSnackbarProvider'

export function App(props: AppProps) {
  const { Component, pageProps } = props
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CustomSnackbarProvider>
        <Component {...pageProps} />
      </CustomSnackbarProvider>
    </>
  )
}

export default App
