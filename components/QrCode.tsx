/* eslint-disable @next/next/no-img-element */
import React from 'react'

import { GeneratorContext } from 'lib/context/generatorContext'

type Props = {}

export default function QrCode({}: Props) {
  const { generatedQrCode, showQrCode } = React.useContext(GeneratorContext)

  return (
    <div
      className={`flex justify-center overflow-hidden duration-300 ${
        showQrCode ? 'h-44' : 'h-0'
      }`}
    >
      <img
        src={generatedQrCode}
        alt="Password QR Code"
        className="w-44 h-44 ym-hide-content"
      />
    </div>
  )
}
