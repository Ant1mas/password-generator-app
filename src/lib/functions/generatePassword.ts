import getRandomNumber from 'lib/functions/getRandomNumber'

export default function generatePassword(
  length:number = 15,
  charset:string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
) {
  if (!charset) {return null}
  let result = ''
  for (let index = 0; index < length; index++) {
    result += charset[getRandomNumber(0, charset.length - 1)]
  }
  return result
}
