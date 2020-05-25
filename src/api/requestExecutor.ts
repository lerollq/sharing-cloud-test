import environments from '../config/environments'

interface BaseResponse {
  success: boolean
}

interface SuccessResponse extends BaseResponse {
  data: any
}

interface ErrorResponse extends BaseResponse {
  message: string
}

type ResponseType = SuccessResponse | ErrorResponse

class RequestExecutor {
  constructor() {}

  public get(path: string): Promise<ResponseType> {
    return this.execRequest(path)
  }

  public post(path: string, body: { [key: string]: any }): Promise<ResponseType> {
    return this.execRequest(path, { method: 'POST', body: JSON.stringify(body) })
  }

  private execRequest(
    path: string,
    opts: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  ): Promise<ResponseType> {
    const token = localStorage.getItem('token')
    if (token) {
      Object.assign(opts.headers, { Authorization: `Bearer ${token}` })
    }
    return fetch(`${environments.api.domain}/${path}`, opts).then((response) => response.json() as Promise<ResponseType>)
  }
}

export default RequestExecutor
