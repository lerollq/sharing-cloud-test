import RequestExecutor from './requestExecutor'
import {
  GetLoginResponse,
  GetMeResponse,
  GetUserByIdResponse,
  GetResourceResponse,
  GetBookingsResponse,
  PostBookingsResponse,
} from './types'

const requestExecutor = new RequestExecutor()

export const getLogin = () => requestExecutor.get<GetLoginResponse>('/login')

export const getMe = () => requestExecutor.get<GetMeResponse>('/me')

export const getLogout = () => requestExecutor.get<null>('/logout')

export const getReset = () => requestExecutor.get<null>('/logout')

export const geUserById = (id: string) => requestExecutor.get<GetUserByIdResponse>(`/users/${id}`)

export const getResource = () => requestExecutor.get<GetResourceResponse>('/resource')

export const getBookings = () => requestExecutor.get<GetBookingsResponse>('/bookings')

export const postBooking = ({ name, duration }: { name: string; duration: number }) =>
  requestExecutor.post<PostBookingsResponse>('/bookings', { name, duration })

export const deleteBookings = (bookingId: string) => requestExecutor.delete<null>(`/bookings${bookingId}`)
