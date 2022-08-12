import { NextApiRequest, NextApiResponse } from 'next'
import { apiBaseUrl } from '@/libs/config'
export default async function MemberInfo(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { type } = req.query
  const response = await fetch(`${apiBaseUrl}/api/member/change/${type}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json()
  res.status(response.status).json(data)
}
