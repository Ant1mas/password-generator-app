import React from 'react'

import { GeneratorContext } from 'lib/context/generatorContext'
import getPasswordsStrength from 'lib/functions/getPasswordsStrength'
import getPasswordGradient from 'lib/functions/getPasswordGradient'

type Props = {}

export default function PasswordStrength({}: Props) {
  const {
    passwordLength,
    charsetLowercaseOption,
    charsetUppercaseOption,
    charsetNumbersOption,
    charsetSymbolsOption,
  } = React.useContext(GeneratorContext)

  let charactersGroupsArray = []
  if (charsetLowercaseOption) {
    charactersGroupsArray.push('lowercase')
  }
  if (charsetUppercaseOption) {
    charactersGroupsArray.push('uppercase')
  }
  if (charsetNumbersOption) {
    charactersGroupsArray.push('numbers')
  }
  if (charsetSymbolsOption) {
    charactersGroupsArray.push('symbols')
  }
  const passwordStrength = getPasswordsStrength(
    passwordLength,
    charactersGroupsArray
  ).percent

  return (
    <div
      className={`text-sm rounded-xl duration-200 text-white bg-gradient-to-r px-2 py-1.5 ${getPasswordGradient(
        passwordStrength
      )}`}
    >
      {/* Estimated password cracking time is 6 months */}
    </div>
  )
}
