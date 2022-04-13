import React from 'react'

import IconEdit from 'public/icons/edit.svg'
import IconInfo from 'public/icons/info.svg'
import Button from 'components/Button'
import Checkbox from 'components/Checkbox'

type Props = {}

export default function PasswordOptions({}: Props) {
  return (
    <div className='flex justify-center'>
      <div className='flex justify-end flex-1 mr-8'>
        <div className='flex flex-col'>
          <Checkbox 
            label='Lowercase'
            checked
            className='my-2'
          />
          <Checkbox 
            label='UPPERCASE'
            checked
            className='my-2'
          />
          <Checkbox 
            label='Numbers'
            checked
            className='my-2'
          />
          <Checkbox 
            label='Symbols'
            className='my-2'
          />
          <Button
            onClick={()=>{}}
            className='my-2'
          >
            <IconEdit className='inline h-4 mr-2' />
            edit symbols
          </Button>
        </div>
      </div>
      <div className='flex w-0.5 bg-neutral-200'></div>
      <div className='flex flex-1 ml-8'>
        <div className='flex flex-col'>
          <div className='inline-flex items-center'>
            <Checkbox 
              label='Easy to read'
              className='my-2'
            />
            <button
              onClick={()=>{}}
              className='inline p-1 ml-1 duration-200 rounded-full focus:outline-primary'
            >
              <IconInfo className='h-5 duration-200 fill-neutral-400 hover:fill-primary/75' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
