import { useState, useEffect } from 'react'

export const ACTIVATED_SYMBOLS = '!@#$%^&*'

const ACCEPTABLE_SYMBOLS = [
  '!',
  '*',
  '#',
  '%',
  '$',
  '&',
  '@',
  '^',
  '?',
  '+',
  '-',
  '=',
  '(',
  ')',
  '{',
  '}',
  '[',
  ']',
  '<',
  '>',
  '.',
  ',',
  '/',
  '\\',
  '"',
  "'",
  '`',
  ':',
  ';',
  '_',
  '|',
  '~',
]

const getIndexesBySymbols = (symbols) => {
  return symbols.split('').reduce((previousValue, currentValue) => {
    if (ACCEPTABLE_SYMBOLS.includes(currentValue)) {
      return [...previousValue, ACCEPTABLE_SYMBOLS.indexOf(currentValue)]
    }
  }, [])
}

export const useAcceptableSymbols = () => {
  const [activatedSymbols, setActivatedSymbols] = useState(
    getIndexesBySymbols(ACTIVATED_SYMBOLS),
  )
  const [activatedSymbolsString, setActivatedSymbolsString] =
    useState(ACTIVATED_SYMBOLS)

  useEffect(() => {
    setActivatedSymbolsString(getActivatedSymbolsString())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activatedSymbols])

  const getSymbolIndex = (symbol) => {
    return ACCEPTABLE_SYMBOLS.indexOf(symbol) !== -1
      ? ACCEPTABLE_SYMBOLS.indexOf(symbol)
      : null
  }

  const isSymbolActivated = (symbol) => {
    return activatedSymbols.includes(getSymbolIndex(symbol))
  }

  const includeSymbol = (symbol) => {
    if (
      ACCEPTABLE_SYMBOLS.includes(symbol) &&
      !activatedSymbols.includes(getSymbolIndex(symbol))
    ) {
      setActivatedSymbols([...activatedSymbols, getSymbolIndex(symbol)])
    }
  }

  const excludeSymbol = (symbol) => {
    if (
      ACCEPTABLE_SYMBOLS.includes(symbol) &&
      activatedSymbols.includes(getSymbolIndex(symbol))
    ) {
      setActivatedSymbols(
        activatedSymbols.filter((e) => e !== getSymbolIndex(symbol)),
      )
    }
  }

  const setSymbol = (symbol, activated = false) => {
    if (activated) {
      includeSymbol(symbol)
    } else {
      excludeSymbol(symbol)
    }
  }

  const getActivatedSymbolsString = () => {
    return activatedSymbols.reduce((previousValue, currentValue) => {
      return previousValue + ACCEPTABLE_SYMBOLS[currentValue]
    }, '')
  }

  return {
    acceptableSymbols: ACCEPTABLE_SYMBOLS,
    activatedSymbols,
    activatedSymbolsString,
    isSymbolActivated,
    setSymbol,
  }
}

export default useAcceptableSymbols
