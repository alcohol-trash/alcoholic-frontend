import { NextApiRequest, NextApiResponse } from 'next'
import { apiBaseUrl } from '@/libs/config'

export default async function GetMember(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const response = await fetch(`${apiBaseUrl}/api/member`, {
    headers: {
      cookie: `${req.headers.cookie}`,
    },
  })
  const data = await response.json()
  res.status(response.status).json(data)
}
