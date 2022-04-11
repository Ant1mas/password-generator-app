import Head from 'next/head'

import Header from 'components/Header'
import PasswordGenerator from 'components/PasswordGenerator'
import Footer from 'components/Footer'

export function Home() {
  return (
    <>
      <Head>
        <title>
          Password Generator
        </title>
        <meta
          name="description"
          content="Password Generator"
        />
      </Head>
      <div className='bg-neutral-50 min-h-screen flex flex-col'>
        <Header />
        <PasswordGenerator />
        <Footer />
      </div>
    </>
  )
}

export default Home
