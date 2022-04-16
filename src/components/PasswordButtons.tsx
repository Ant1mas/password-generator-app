import React from 'react'
import { useSnackbar } from 'notistack'

import { GeneratorContext } from 'lib/context/generatorContext'
import copyToClipboard from 'lib/functions/copyToClipboard'
import IconUpdate from 'public/icons/update.svg'
import IconCopy from 'public/icons/copy.svg'
import IconQr from 'public/icons/qr.svg'
import Button from 'components/Button'

type Props = {}

export default function PasswordButtons({}: Props) {
  const {
    generatedPassword,
    generateNewPassword,
    showQrCode,
    setShowQrCode,
  } = React.useContext(GeneratorContext)
  const { enqueueSnackbar } = useSnackbar()

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
        onClick={()=>{
          copyToClipboard(generatedPassword)
          enqueueSnackbar('Copied', {
            autoHideDuration: 1000,
          })
        }}
        className='justify-center w-full mx-2 my-1 sm:w-auto sm:mx-4'
      >
        <IconCopy className='inline h-4 mr-2' />
        copy
      </Button>
      <Button 
        onClick={()=>{setShowQrCode(!showQrCode)}}
        className='justify-center w-full mx-2 my-1 sm:w-auto sm:mx-4'
      >
        <IconQr className='inline h-4 mr-2' />
        QR
      </Button>
    </div>
  )
}
