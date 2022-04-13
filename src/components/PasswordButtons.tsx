import React from 'react'

import IconUpdate from 'public/icons/update.svg'
import IconCopy from 'public/icons/copy.svg'
import IconQr from 'public/icons/qr.svg'
import Button from 'components/Button'

type Props = {}

export default function PasswordButtons({}: Props) {
  return (
    <>
      <Button 
        onClick={()=>{}}
        className='mx-4'
      >
        <IconUpdate className='inline h-4 mr-2' />
        update
      </Button>
      <Button 
        onClick={()=>{}}
        className='mx-4'
      >
        <IconCopy className='inline h-4 mr-2' />
        copy
      </Button>
      <Button 
        onClick={()=>{}}
        className='mx-4'
      >
        <IconQr className='inline h-4 mr-2' />
        QR
      </Button>
    </>
  )
}
