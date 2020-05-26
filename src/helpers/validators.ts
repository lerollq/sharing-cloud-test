const lengthBookName = (name: string) => {
  if (!(name.length > 3 && name.length < 500)) {
    return 'Name must be between 3 and 500 characters long'
  }
}

const bookingDuration = (current: number, min: number, max: number, multiple: number) => {
  if (current < min) return `Cannot be less than ${min} minutes`
  else if (current > max) return `Cannot be more than ${max} minutes`
  else if (current % multiple !== 0) return `Must be a multiple of ${multiple}`
}

export const validators = {
  lengthBookName,
  bookingDuration,
}
