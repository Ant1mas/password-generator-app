import { useEffect } from 'react'
import { AppProps } from 'next/app'
import clsx from 'clsx'
import TagManager from 'react-gtm-module'

import '@/styles/globals.css'
import { roboto } from 'lib/config/fonts'
import CustomSnackbarProvider from 'lib/plugins/notistack/CustomSnackbarProvider'

export function App(props: AppProps) {
  const { Component, pageProps } = props

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-KDLQ5GP' })
  }, [])

  return (
    <div id="app" className={clsx([roboto.variable])}>
      <CustomSnackbarProvider>
        <Component {...pageProps} />
      </CustomSnackbarProvider>
    </div>
  )
}

export default App
