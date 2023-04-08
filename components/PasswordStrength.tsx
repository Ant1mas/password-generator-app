import { useGeneratorContext } from 'lib/context/generatorContext'
import getPasswordsStrength from 'lib/functions/getPasswordsStrength'
import getPasswordGradient from 'lib/functions/getPasswordGradient'

export default function PasswordStrength() {
  const {
    passwordLength,
    charsetLowercaseOption,
    charsetUppercaseOption,
    charsetNumbersOption,
    charsetSymbolsOption,
  } = useGeneratorContext()

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
    charactersGroupsArray,
  ).percent

  return (
    <div
      className={`rounded-xl bg-gradient-to-r px-2 py-1.5 text-sm text-white duration-200 ${getPasswordGradient(
        passwordStrength,
      )}`}
    >
      {/* Estimated password cracking time is 6 months */}
    </div>
  )
}
