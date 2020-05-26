import { Booking } from '../store/bookings/types'

export interface GetLoginResponse {
  token: string
  expirationDate: string
}

export interface GetMeResponse {
  id: string
  name: string
}

export interface GetUserByIdResponse extends GetMeResponse {}

export interface GetResourceResponse {
  id: string
  name: string
  minimumBookingDuration: number
  maximumBookingDuration: number
  bookingDurationStep: number
}
export type GetBookingsResponse = Booking[]

export interface PostBookingsResponse {
  bookingId: string
}
