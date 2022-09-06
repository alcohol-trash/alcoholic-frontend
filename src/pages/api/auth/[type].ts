import { NextApiRequest, NextApiResponse } from 'next'
import { apiBaseUrl } from '@/libs/config'

export default async function Auth(req: NextApiRequest, res: NextApiResponse) {
  const { type } = req.query
  const response = await fetch(`${apiBaseUrl}/api/auth/${type}`, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: req.body,
  })
  const data = await response.json()
  const token = response.headers.get('Set-Cookie')
  res.setHeader('Set-Cookie', `${token}; path=/;`)
  res.status(response.status).json(data)
}
