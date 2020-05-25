import environments from '../config/environments'

interface BaseResponse {
  success: boolean
}

interface SuccessResponse<T> extends BaseResponse {
  data: T
}

interface ErrorResponse extends BaseResponse {
  message: string
}

type ResponseType<T> = SuccessResponse<T> | ErrorResponse

class RequestExecutor {
  constructor() {}

  public get<T>(path: string): Promise<ResponseType<T>> {
    return this.execRequest(path)
  }

  public post<T>(path: string, body: { [key: string]: any }): Promise<ResponseType<T>> {
    return this.execRequest<T>(path, { method: 'POST', body: JSON.stringify(body) })
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
