/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import QRCode from 'qrcode'

import generatePassword from 'lib/functions/generatePassword'
import { ACTIVATED_SYMBOLS } from 'lib/hooks/useAcceptableSymbols'

export const MIN_LENGTH = 6
export const MAX_LENGTH = 128

const CHARSET_OBJECT = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  symbols: ACTIVATED_SYMBOLS,
}

export const DEFAULT_CHARSET =
  CHARSET_OBJECT.lowercase + CHARSET_OBJECT.uppercase + CHARSET_OBJECT.numbers

export const usePasswordSettings = () => {
  const [generatedPassword, setGeneratedPassword] = React.useState('')
  const [generatedQrCode, setGeneratedQrCode] = React.useState('')
  const [showQrCode, setShowQrCode] = React.useState(false)
  const [passwordLength, setPasswordLength] = React.useState(15)
  const [passwordCharset, setPasswordCharset] = React.useState(DEFAULT_CHARSET)
  const [charsetLowercaseOption, setCharsetLowercaseOption] =
    React.useState(true)
  const [charsetUppercaseOption, setCharsetUppercaseOption] =
    React.useState(true)
  const [charsetNumbersOption, setCharsetNumbersOption] = React.useState(true)
  const [charsetSymbolsOption, setCharsetSymbolsOption] = React.useState(false)
  const [charsetSymbolsList, setCharsetSymbolsList] = React.useState(
    CHARSET_OBJECT.symbols
  )
  const [charsetEasyToReadOption, setCharsetEasyToReadOption] =
    React.useState(false)

  React.useEffect(() => {
    if (!generatedPassword) {
      generateNewPassword()
    }
    generateQrCode(generatedPassword)
  }, [generatedPassword])

  React.useEffect(() => {
    if (passwordLength >= MIN_LENGTH && passwordLength <= MAX_LENGTH) {
      generateNewPassword()
    }
  }, [passwordLength, passwordCharset])

  React.useEffect(() => {
    let updatedCharset = ''
    updatedCharset += charsetLowercaseOption ? CHARSET_OBJECT.lowercase : ''
    updatedCharset += charsetUppercaseOption ? CHARSET_OBJECT.uppercase : ''
    updatedCharset += charsetNumbersOption ? CHARSET_OBJECT.numbers : ''
    updatedCharset += charsetSymbolsOption ? charsetSymbolsList : ''
    updatedCharset = charsetEasyToReadOption
      ? updatedCharset.replaceAll(/[oO01lI]/gi, '')
      : updatedCharset
    setPasswordCharset(updatedCharset)
  }, [
    charsetLowercaseOption,
    charsetUppercaseOption,
    charsetNumbersOption,
    charsetSymbolsOption,
    charsetEasyToReadOption,
    charsetSymbolsList,
  ])

  const generateNewPassword = () => {
    setGeneratedPassword(generatePassword(passwordLength, passwordCharset))
  }

  const generateQrCode = async (text) => {
    try {
      setGeneratedQrCode(await QRCode.toDataURL(text))
    } catch (err) {}
  }

  return {
    generatedPassword,
    generatedQrCode,
    showQrCode,
    passwordLength,
    charsetLowercaseOption,
    charsetUppercaseOption,
    charsetNumbersOption,
    charsetSymbolsOption,
    charsetSymbolsList,
    charsetEasyToReadOption,
    setShowQrCode,
    setPasswordLength,
    setCharsetLowercaseOption,
    setCharsetUppercaseOption,
    setCharsetNumbersOption,
    setCharsetSymbolsOption,
    setCharsetEasyToReadOption,
    setCharsetSymbolsList,
    generateNewPassword,
  }
}

export default usePasswordSettings
