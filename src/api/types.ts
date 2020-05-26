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

export type GetUserByIdResponse = GetMeResponse

export type GetResourceResponse = Resource

export type GetBookingsResponse = Booking[]

export interface PostBookingsResponse {
  bookingId: string
}
