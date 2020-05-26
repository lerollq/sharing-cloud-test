import { validators } from './validators'

describe('Validators', () => {
  describe('Booking Duration', () => {
    it('should return empty string', () => {
      expect(validators.bookingDuration(5, 0, 10, 5)).toEqual(undefined)
    })
    it('should return error if duration less than minimum duration', () => {
      expect(validators.bookingDuration(5, 10, 20, 5)).toEqual('Cannot be less than 10 minutes')
    })
    it('should return error if duration more than maximum duration', () => {
      expect(validators.bookingDuration(25, 10, 20, 5)).toEqual('Cannot be more than 20 minutes')
    })
    it('should return error if duration not a multiple of step duration', () => {
      expect(validators.bookingDuration(13, 10, 20, 5)).toEqual('Must be a multiple of 5')
    })
  })
  describe('Booking Length name', () => {
    it('should return undefined', () => {
      expect(validators.lengthBookName('Test')).toEqual(undefined)
    })
    it('should return error if length less than 3', () => {
      expect(validators.lengthBookName('Te')).toEqual('Name must be between 3 and 500 characters long')
    })
    it('should return error if length mora than 500', () => {
      expect(validators.lengthBookName('a'.repeat(501))).toEqual('Name must be between 3 and 500 characters long')
    })
  })
})
