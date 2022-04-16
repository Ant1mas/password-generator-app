export default function getRandomNumber(min:number = 0, max:number = 100, scale:number = 0) {
  const byteArray = new Uint32Array(1)
  window.crypto.getRandomValues(byteArray)
  const number = min + (byteArray[0] / (Math.pow(2,32)-1)) * (max - min)
  const result = Math.round(number * Math.pow(10, scale)) / Math.pow(10, scale)
  return result
}
