export default function getPasswordGradient(strengthPercent = 0) {
  if (strengthPercent > 75) {
    return 'from-green-400 to-green-500'
  }
  if (strengthPercent > 50) {
    return 'from-yellow-400 to-yellow-500'
  }
  if (strengthPercent > 25) {
    return 'from-orange-400 to-orange-500'
  }
  return 'from-red-400 to-red-500'
}
