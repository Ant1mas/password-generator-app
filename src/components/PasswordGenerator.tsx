import React from 'react'

import GeneratorContextProvider from 'lib/context/generatorContext'
import QuantityBlock from 'components/QuantityBlock'
import PasswordStrength from 'components/PasswordStrength'
import QrCode from 'components/QrCode'
import PasswordButtons from 'components/PasswordButtons'
import PasswordResult from 'components/PasswordResult'
import PasswordOptions from 'components/PasswordOptions'

type Props = {}

export default function PasswordGenerator({}: Props) {
  return (
    <GeneratorContextProvider>
      <main className='flex flex-col items-center text-center grow'>
        <h1 className='mt-3 mb-6 text-4xl font-thin uppercase sm:text-5xl'>
          Password Generator
        </h1>
        <section className='bg-white w-full max-w-[728px] rounded-xl'>
          <PasswordStrength />
          <div className='px-4 pt-5 pb-24 md:px-12'>
            <PasswordResult />
            <QrCode />
            <PasswordButtons />
            <div className='mt-10'>
              <QuantityBlock />
            </div>
            <div className='mt-10'>
              <PasswordOptions />
            </div>
          </div>
        </section>
      </main>
    </GeneratorContextProvider>
  )
}
