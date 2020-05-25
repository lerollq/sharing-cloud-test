import environments from '../config/environments'

interface SuccessResponse<T> {
  success: true
  data: T
}

interface ErrorResponse {
  success: false
  message: string
}

type ResponseType<T> = SuccessResponse<T> | ErrorResponse

class RequestExecutor {
  constructor() {}

  public get<T>(path: string): Promise<ResponseType<T>> {
    return this.execRequest(path, { method: 'GET' })
  }

  public post<T>(path: string, body: { [key: string]: any }): Promise<ResponseType<T>> {
    return this.execRequest<T>(path, { method: 'POST', body: JSON.stringify(body) })
  }

  public delete<T>(path: string) {
    return this.execRequest<T>(path, { method: 'DELETE' })
  }

  private execRequest<T>(
    path: string,
    opts: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  ): Promise<ResponseType<T>> {
    const token = localStorage.getItem('token')
    if (token) {
      Object.assign(opts.headers, { Authorization: `Bearer ${token}` })
    }
    return fetch(`${environments.api.domain}/${path}`, opts).then((response) => response.json() as Promise<ResponseType<T>>)
  }
}

export default RequestExecutor
