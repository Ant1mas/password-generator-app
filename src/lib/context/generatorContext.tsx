import React from 'react'

import { usePasswordSettings } from 'lib/hooks/usePasswordSettings'

export const GeneratorContext = React.createContext(undefined)

const GeneratorContextProvider = (props) => {
  const {
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
  } = usePasswordSettings()

  return (
    <GeneratorContext.Provider
      value={{
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
      }}
    >
      {props.children}
    </GeneratorContext.Provider>
  )
}

export default GeneratorContextProvider
