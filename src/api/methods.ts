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

const getLogin = () => requestExecutor.get<GetLoginResponse>('/login')

const getMe = () => requestExecutor.get<GetMeResponse>('/me')

const getLogout = () => requestExecutor.get<null>('/logout')

const getReset = () => requestExecutor.get<null>('/logout')

const getUserById = (id: string) => requestExecutor.get<GetUserByIdResponse>(`/users/${id}`)

const getResource = () => requestExecutor.get<GetResourceResponse>('/resource')

const getBookings = () => requestExecutor.get<GetBookingsResponse>('/bookings')

const postBooking = ({ name, duration }: { name: string; duration: number }) => requestExecutor.post<PostBookingsResponse>('/bookings', { name, duration })

const deleteBookings = (bookingId: string) => requestExecutor.delete<null>(`/bookings/${bookingId}`)

export default {
  getLogin,
  getLogout,
  getMe,
  getReset,
  getUserById,
  getResource,
  getBookings,
  postBooking,
  deleteBookings,
}
