const lengthBookName = (name: string) => {
  if (!(name.length > 3 && name.length < 500)) {
    return 'Name must be between 3 and 500 characters long'
  }
  return undefined
}

const bookingDuration = (current: number, min: number, max: number, multiple: number) => {
  if (current < min) return `Cannot be less than ${min} minutes`
  if (current > max) return `Cannot be more than ${max} minutes`
  if (current % multiple !== 0) return `Must be a multiple of ${multiple}`
  return undefined
}

export const validators = {
  lengthBookName,
  bookingDuration,
}
