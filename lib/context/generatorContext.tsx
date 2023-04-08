import React, { createContext, useContext } from 'react'

import usePasswordSettings from 'lib/hooks/usePasswordSettings'

const GeneratorContext = createContext(undefined)

interface ProviderProps {
  children: React.ReactNode
}

export const GeneratorContextProvider: React.FC<ProviderProps> = ({
  children,
}) => {
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
      {children}
    </GeneratorContext.Provider>
  )
}

// Define a hook to use the context value.
export const useGeneratorContext = () => {
  const context = useContext(GeneratorContext)
  return context
}
