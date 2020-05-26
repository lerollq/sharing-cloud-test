/**
 * Format date in this form XXd XXh XXm XXs
 * @param date in milliseconds
 */
export const formatDate = (date: number) => {
  const days = Math.floor(date / (1000 * 60 * 60 * 24))
  const hours = Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((date % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((date % (1000 * 60)) / 1000)
  return `${days > 0 ? `${days}d ` : '0d '}${hours > 0 ? `${hours}h ` : '0h '}${minutes > 0 ? `${minutes}m ` : '0m '}${
    seconds > 0 ? `${seconds}s` : '0s '
  }`
}
