import { NextApiRequest, NextApiResponse } from 'next'
import { apiBaseUrl } from '@/libs/config'

export default async function CreatePost(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const response = await fetch(`${apiBaseUrl}/api/board/$`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
    body: req.body,
  })
  const data = await response.json()
  res.status(response.status).json(data)
}
