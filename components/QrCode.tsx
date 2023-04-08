/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react'

import { GeneratorContext } from 'lib/context/generatorContext'

export default function QrCode() {
  const { generatedQrCode, showQrCode } = useContext(GeneratorContext)

  return (
    <div
      className={`flex justify-center overflow-hidden duration-300 ${
        showQrCode ? 'h-44' : 'h-0'
      }`}
    >
      <img
        src={generatedQrCode}
        alt="Password QR Code"
        className="ym-hide-content h-44 w-44"
      />
    </div>
  )
}
