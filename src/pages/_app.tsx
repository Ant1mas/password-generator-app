import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import TagManager from 'react-gtm-module'

import '../../i18n'
import 'src/styles/globals.css'
import CustomSnackbarProvider from 'lib/plugins/notistack/CustomSnackbarProvider'

export function App(props: AppProps) {
  const { Component, pageProps } = props

  React.useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-KDLQ5GP' })
  }, [])

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
