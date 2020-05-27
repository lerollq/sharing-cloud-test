import environments from '../config/environments'
import store from '../store'
import { ActionTypeKeys } from '../store/user/types'

interface SuccessResponse<T> {
  success: true
  data: T
}

interface ErrorResponse {
  success: false
  message: string
}

type ResponseType<T> = SuccessResponse<T> | ErrorResponse

async function handleResponse<T>(response: Response): Promise<ResponseType<T>> {
  const jsonResponse = (await response.json()) as ResponseType<T>
  if (response.status === 401) {
    // If 401 UNAUTHORIZED, remove first bearer token in local storage then dispatch USER_DELETE type which will remove user's information in user reducer
    // then will redirect the user to the login page
    localStorage.removeItem('token')
    store.dispatch({ type: ActionTypeKeys.USER_DELETE })
    return Promise.reject(jsonResponse)
  }
  if (jsonResponse.success) {
    return Promise.resolve(jsonResponse)
  }
  // Return parsed JSON Response
  return Promise.reject(jsonResponse)
}

class RequestExecutor {
  public get<T>(path: string): Promise<ResponseType<T>> {
    return this.execRequest(path, { method: 'GET' })
  }

  public post<T>(path: string, body: { [key: string]: any }): Promise<ResponseType<T>> {
    return this.execRequest<T>(path, { method: 'POST', body: JSON.stringify(body) })
  }

  public delete<T>(path: string) {
    return this.execRequest<T>(path, { method: 'DELETE' })
  }

  private execRequest<T>(path: string, opts: Omit<RequestInit, 'headers'>): Promise<ResponseType<T>> {
    // Retrieve Bearer Token from LocalStorage
    const token = localStorage.getItem('token')
    // Send request
    return fetch(`${environments.api.domain}${path}`, {
      ...opts,
      headers: {
        'Content-Type': 'application/json',
        // Spread bearer token in header if exists
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    }).then((response) => handleResponse<T>(response))
  }
}

export default RequestExecutor
