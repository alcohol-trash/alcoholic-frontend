import { NextApiRequest, NextApiResponse } from 'next'
import { apiBaseUrl } from '@/libs/config'

export default async function Auth(req: NextApiRequest, res: NextApiResponse) {
  const { type } = req.query
  const response = await fetch(`${apiBaseUrl}/api/auth/${type}`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: req.body,
  })
  const data = await response.json()
  const accessToken = response.headers.get('access_token')
  const refreshToken = response.headers.get('refresh_token')
  res.setHeader(
    'Set-Cookie',
    `access_token=${accessToken}; refresh_token=${refreshToken}; path=/;`,
  )
  res.status(response.status).json(data)
}
