import Head from 'next/head'

import DefaultMetadata from 'components/DefaultMetadata'
import Header from 'components/Header'
import PasswordGenerator from 'components/PasswordGenerator'
import Footer from 'components/Footer'

export function Home() {
  return (
    <>
      <Head>
        <title>Password Generator by Ant1mas</title>
        <meta name="description" content="Password Generator by Ant1mas" />
        <DefaultMetadata />
      </Head>
      <div className="flex min-h-screen flex-col bg-neutral-50">
        <Header />
        <PasswordGenerator />
        <Footer />
      </div>
    </>
  )
}

export default Home
