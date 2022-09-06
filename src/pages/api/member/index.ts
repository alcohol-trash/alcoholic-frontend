import { NextApiRequest, NextApiResponse } from 'next'
import { apiBaseUrl } from '@/libs/config'

export async function MemberInfo(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch(`${apiBaseUrl}/api/member`, {
    credentials: 'same-origin',
  })
  const data = await response.json()
  res.status(response.status).json(data)
}
