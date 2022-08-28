import { toast, ToastContainer, ToastOptions } from 'react-toastify'

import theme from '@/theme'

const options: ToastOptions = {
  autoClose: 2000,
  hideProgressBar: true,
  position: toast.POSITION.BOTTOM_CENTER,
  closeOnClick: false,
  closeButton: false,
}

export const Toasts = (message: string) => {
  toast(message, options)
}

export default function ToastsAlerts() {
  return (
    <ToastContainer
      limit={1}
      toastStyle={{
        width: '335px',
        height: '48px',
        backgroundColor: theme.gray[800],
        color: '#ffffff',
        fontSize: '12px',
        textAlign: 'center',
      }}
    />
  )
}
