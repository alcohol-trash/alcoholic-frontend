import { NextApiRequest, NextApiResponse } from 'next'
import { apiBaseUrl } from '@/libs/config'

export default async function ChangePassword(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query
  const response = await fetch(`${apiBaseUrl}/api/member/password/${id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      cookie: `${req.headers.cookie}`,
    },
    body: req.body,
  })
  const data = await response.json()
  res.status(response.status).json(data)
}
