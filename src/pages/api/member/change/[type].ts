import { NextApiRequest, NextApiResponse } from 'next'
import { apiBaseUrl } from '@/libs/config'
export default async function ChangePassword(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { type } = req.query
  const response = await fetch(`${apiBaseUrl}/api/member/change/${type}`, {
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
