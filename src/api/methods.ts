import RequestExecutor from './requestExecutor'
import { LoginResponse, MeResponse } from './types'

const requestExecutor = new RequestExecutor()

export const getLogin = () => requestExecutor.get<LoginResponse>('/login')

export const getMe = () => requestExecutor.get<MeResponse>('/me')
