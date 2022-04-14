import React from 'react'

import QuantityBlock from 'components/QuantityBlock'
import CrackingTime from 'components/CrackingTime'
import PasswordButtons from 'components/PasswordButtons'
import PasswordResult from 'components/PasswordResult'
import PasswordOptions from 'components/PasswordOptions'

type Props = {}

export default function PasswordGenerator({}: Props) {
  const [range, setRange] = React.useState(15)

  return (
    <main className='flex flex-col items-center text-center grow'>
      <h1 className='mt-3 mb-6 text-4xl font-thin uppercase sm:text-5xl'>
        Password Generator
      </h1>
      <section className='bg-white w-full max-w-[728px] rounded-xl'>
        <CrackingTime />
        <div className='px-4 pt-5 pb-24 md:px-12'>
          <PasswordResult />
          <PasswordButtons />
          <div className='mt-10'>
            <QuantityBlock value={range} setValue={setRange} />
          </div>
          <div className='mt-10'>
            <PasswordOptions />
          </div>
        </div>
      </section>
    </main>
  )
}
