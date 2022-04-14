import React from 'react'

import { GeneratorContext } from 'lib/context/generatorContext'
import IconUpdate from 'public/icons/update.svg'
import IconCopy from 'public/icons/copy.svg'
import IconQr from 'public/icons/qr.svg'
import Button from 'components/Button'

type Props = {}

export default function PasswordButtons({}: Props) {
  const { generateNewPassword } = React.useContext(GeneratorContext);

  return (
    <div className='flex flex-wrap justify-center'>
      <Button 
        onClick={()=>{generateNewPassword()}}
        className='justify-center w-full mx-2 my-1 sm:w-auto sm:mx-4'
      >
        <IconUpdate className='inline h-4 mr-2' />
        update
      </Button>
      <Button 
        onClick={()=>{}}
        className='justify-center w-full mx-2 my-1 sm:w-auto sm:mx-4'
      >
        <IconCopy className='inline h-4 mr-2' />
        copy
      </Button>
      <Button 
        onClick={()=>{}}
        className='justify-center w-full mx-2 my-1 sm:w-auto sm:mx-4'
      >
        <IconQr className='inline h-4 mr-2' />
        QR
      </Button>
    </div>
  )
}
