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
export interface GetBookingsResponse {
  [index: number]: {
    id: string
    start: string
    end: string
    name: string
    userId: string
  }
}

export interface PostBookingsResponse {
  bookingId: string
}
