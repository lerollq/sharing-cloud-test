import { Booking } from '../store/bookings/types'
import { Resource } from '../store/resource/types'

export interface GetLoginResponse {
  token: string
  expirationDate: string
}

export interface GetMeResponse {
  id: string
  name: string
}

export interface GetUserByIdResponse extends GetMeResponse {}

export type GetResourceResponse = Resource

export type GetBookingsResponse = Booking[]

export interface PostBookingsResponse {
  bookingId: string
}
