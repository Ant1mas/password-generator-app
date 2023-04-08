import toast from 'react-hot-toast'

import { useGeneratorContext } from 'lib/context/generatorContext'
import copyToClipboard from 'lib/functions/copyToClipboard'
import IconUpdate from 'public/icons/update.svg'
import IconCopy from 'public/icons/copy.svg'
import IconQr from 'public/icons/qr.svg'
import Button from 'components/Button'

export default function PasswordButtons() {
  const { generatedPassword, generateNewPassword, showQrCode, setShowQrCode } =
    useGeneratorContext()

  return (
    <div className="flex flex-wrap justify-center">
      <Button
        onClick={() => {
          generateNewPassword()
        }}
        className="mx-2 my-1 w-full justify-center sm:mx-4 sm:w-auto"
      >
        <IconUpdate className="mr-2 inline h-4" />
        update
      </Button>
      <Button
        onClick={() => {
          copyToClipboard(generatedPassword)
          toast.success('Copied', { duration: 1000 })
        }}
        className="mx-2 my-1 w-full justify-center sm:mx-4 sm:w-auto"
      >
        <IconCopy className="mr-2 inline h-4" />
        copy
      </Button>
      <Button
        onClick={() => {
          setShowQrCode(!showQrCode)
        }}
        className="mx-2 my-1 w-full justify-center sm:mx-4 sm:w-auto"
      >
        <IconQr className="mr-2 inline h-4" />
        QR
      </Button>
    </div>
  )
}
