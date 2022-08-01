import { apiBaseUrl } from '@/libs/config'

type FormTypes = {
  data: any
  massage: string
  success: boolean
}

export async function signupApi(formData: {
  email: string | string[] | undefined
  id: string
  password: string
}) {
  const response = await fetch(`${apiBaseUrl}/api/auth/signup`, {
    mode: 'no-cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    method: 'POST',
    body: JSON.stringify(formData),
  })
  const data: FormTypes = await response.json()
  return data
}

export async function loginApi(formData: { id: string; password: string }) {
  const response = await fetch(`${apiBaseUrl}/api/auth/login`, {
    mode: 'no-cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    method: 'POST',
    body: JSON.stringify(formData),
  })
  const data: FormTypes = await response.json()
  return data
}
