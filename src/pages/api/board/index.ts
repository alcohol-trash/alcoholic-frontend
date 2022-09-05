import { NextApiRequest, NextApiResponse } from 'next'
import { apiBaseUrl } from '@/libs/config'

export default async function Auth(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch(`${apiBaseUrl}/api/board/$`, {
    method: 'POST',
    credentials: 'include',
    body: req.body,
  })
  const data = await response.json()
  res.status(response.status).json(data)
}
