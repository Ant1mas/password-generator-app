import { AppProps } from 'next/app'
import clsx from 'clsx'

import '@/styles/globals.css'
import Root from 'components/Root'
import RootProviders from 'components/RootProviders'
import ReactHotToaster from 'components/ReactHotToaster'
import { roboto } from 'lib/config/fonts'

export function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <div id="app" className={clsx([roboto.variable])}>
      <ReactHotToaster />
      <RootProviders>
        <>
          <Root />
          <Component {...pageProps} />
        </>
      </RootProviders>
    </div>
  )
}

export default App
