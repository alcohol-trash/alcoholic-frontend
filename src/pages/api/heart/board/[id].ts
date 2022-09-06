import { NextApiRequest, NextApiResponse } from 'next'
import { apiBaseUrl } from '@/libs/config'
export default async function Heart(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  if (req.method === 'POST') {
    const response = await fetch(`${apiBaseUrl}/api/heart/board/${id}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        cookie: `${document.cookie}`,
      },
      body: req.body,
    })
    const data = await response.json()
    res.status(response.status).json(data)
  }
  if (req.method === 'DELETE') {
    const response = await fetch(`${apiBaseUrl}/api/heart/board/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: req.body,
    })
    const data = await response.json()
    res.status(response.status).json(data)
  }
}
