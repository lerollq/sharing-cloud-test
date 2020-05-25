import environments from '../config/environments'
import store from '../store'
import { userActions } from '../store/user'
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
  if (response.status === 401) {
    // If 401 UNAUTHORIZED, dispatch logout action which will then redirect the user to the login page
    store.dispatch(userActions.logoutAction())
  }
  // Return parsed JSON Response
  return response.json()
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
