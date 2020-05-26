import { toast } from 'react-toastify'

const error = (message?: string) => {
  if (message) {
    toast.error(message)
  }
}

export const notif = {
  error,
}
