import { NextApiRequest, NextApiResponse } from 'next'
import { apiBaseUrl } from '@/libs/config'
export default async function ChangeImage(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query
  if (req.method === 'PUT') {
    const response = await fetch(`${apiBaseUrl}/api/member/image/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        cookie: `${req.headers.cookie}`,
      },
      body: req.body,
    })
    const data = await response.json()
    res.status(response.status).json(data)
  }
  if (req.method === 'DELETE') {
    const response = await fetch(`${apiBaseUrl}/api/member/image/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        cookie: `${req.headers.cookie}`,
      },
    })
    const data = await response.json()
    res.status(response.status).json(data)
  }
}
