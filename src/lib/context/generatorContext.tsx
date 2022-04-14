import React from "react"

import { usePasswordSettings } from 'lib/hooks/usePasswordSettings'

export const GeneratorContext = React.createContext(undefined);

const GeneratorContextProvider = ( props ) => {
  const {
    generatedPassword,
    passwordLength,
    charsetLowercaseOption,
    charsetUppercaseOption,
    charsetNumbersOption,
    charsetSymbolsOption,
    charsetSymbolsList,
    charsetEasyToReadOption,
    setPasswordLength,
    setCharsetLowercaseOption,
    setCharsetUppercaseOption,
    setCharsetNumbersOption,
    setCharsetSymbolsOption,
    setCharsetEasyToReadOption,
    generateNewPassword,
  } = usePasswordSettings();

  return (
    <GeneratorContext.Provider
      value={{
        generatedPassword,
        passwordLength,
        charsetLowercaseOption,
        charsetUppercaseOption,
        charsetNumbersOption,
        charsetSymbolsOption,
        charsetSymbolsList,
        charsetEasyToReadOption,
        setPasswordLength,
        setCharsetLowercaseOption,
        setCharsetUppercaseOption,
        setCharsetNumbersOption,
        setCharsetSymbolsOption,
        setCharsetEasyToReadOption,
        generateNewPassword,
      }}
    >
      {props.children}
    </GeneratorContext.Provider>
  )
}

export default GeneratorContextProvider
