import { NextApiRequest, NextApiResponse } from 'next'
import { apiBaseUrl } from '@/libs/config'

export default async function Signup(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const response = await fetch(`${apiBaseUrl}/api/auth/oauth/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: req.body,
  })
  const data = await response.json()
  res.status(response.status).json(data)
}
