import React from 'react'

import IconUpdate from 'public/icons/update.svg'
import IconCopy from 'public/icons/copy.svg'
import IconQr from 'public/icons/qr.svg'
import IconEdit from 'public/icons/edit.svg'
import IconInfo from 'public/icons/info.svg'
import Button from 'components/Button'
import QuantityBlock from 'components/QuantityBlock'

type Props = {}

export default function PasswordGenerator({}: Props) {
  const [range, setRange] = React.useState(15)

  return (
    <main className='flex flex-col items-center text-center grow'>
      <h1 className='font-thin text-[42px] uppercase mt-3 mb-6'>
        Password Generator
      </h1>
      <section className='bg-white w-full max-w-[728px] rounded-xl'>
        <div className='text-sm rounded-xl text-white bg-gradient-to-r from-red-400 to-red-500 p-1.5'>
          Estimated password cracking time is 6 months
        </div>
        <div className='px-12 pb-24'>
          <div className='text-4xl font-light text-neutral-500 mt-9'>
            a6iu3453d34c3r34vg453v3343yb3
          </div>
          <div className='mt-3'>
            <Button className='mx-4'>
              <IconUpdate className='inline h-4 mr-2' />
              update
            </Button>
            <Button className='mx-4'>
              <IconCopy className='inline h-4 mr-2' />
              copy
            </Button>
            <Button className='mx-4'>
              <IconQr className='inline h-4 mr-2' />
              QR
            </Button>
          </div>
          <div className='mt-10'>
            <QuantityBlock value={range} setValue={setRange} />
          </div>
          <div className='flex justify-center mt-10'>
            <div className='flex justify-end flex-1 mr-8'>
              <div className='flex flex-col'>
                <label className="flex items-center my-2 cursor-pointer">
                  <input 
                    type='checkbox'
                    className="w-5 h-5 duration-200 border rounded cursor-pointer border-neutral-200 text-primary hover:bg-primary/5 hover:border-primary/40 focus:ring-primary"
                  />
                  <span className='ml-3 text-neutral-600'>Lowercase</span>
                </label>
                <label className="flex items-center my-2 cursor-pointer">
                <input 
                    type='checkbox'
                    className="w-5 h-5 duration-200 border rounded cursor-pointer border-neutral-200 text-primary hover:bg-primary/5 hover:border-primary/40 focus:ring-primary"
                  />
                  <span className='ml-3 text-neutral-600'>UPPERCASE</span>
                </label>
                <label className="flex items-center my-2 cursor-pointer">
                <input 
                    type='checkbox'
                    className="w-5 h-5 duration-200 border rounded cursor-pointer border-neutral-200 text-primary hover:bg-primary/5 hover:border-primary/40 focus:ring-primary"
                  />
                  <span className='ml-3 text-neutral-600'>Numbers</span>
                </label>
                <label className="flex items-center my-2 cursor-pointer">
                <input 
                    type='checkbox'
                    className="w-5 h-5 duration-200 border rounded cursor-pointer border-neutral-200 text-primary hover:bg-primary/5 hover:border-primary/40 focus:ring-primary"
                  />
                  <span className='ml-3 text-neutral-600'>Symbols</span>
                </label>
                <Button className='my-2'>
                  <IconEdit className='inline h-4 mr-2' />
                  edit symbols
                </Button>
              </div>
            </div>
            <div className='flex w-0.5 bg-neutral-200'></div>
            <div className='flex flex-1 ml-8'>
              <div className='flex flex-col'>
                <div className='inline-flex items-center'>
                  <label className="flex items-center my-2 cursor-pointer">
                    <input 
                      type='checkbox'
                      className="w-5 h-5 duration-200 border rounded cursor-pointer border-neutral-200 text-primary hover:bg-primary/5 hover:border-primary/40 focus:ring-primary"
                    />
                    <span className='ml-3 text-neutral-600'>Easy to read</span>
                  </label>
                  <button className='inline p-1 ml-1 duration-200 rounded-full focus:outline-primary'>
                    <IconInfo className='h-5 duration-200 fill-neutral-400 hover:fill-primary/75' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
