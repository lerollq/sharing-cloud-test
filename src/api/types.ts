export interface LoginResponse {
  token: string
  expirationDate: string
}

export interface MeResponse {
  id: string
  name: string
}
