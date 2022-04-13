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
      <h1 className='font-thin text-[42px] uppercase mt-3 mb-6'>
        Password Generator
      </h1>
      <section className='bg-white w-full max-w-[728px] rounded-xl'>
        <CrackingTime />
        <div className='px-12 pb-24 pt-9'>
          <PasswordResult />
          <div className='mt-3'>
            <PasswordButtons />
          </div>
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
