import { NextApiRequest, NextApiResponse } from 'next'
import { apiBaseUrl } from '@/libs/config'
async function MemberForgetPassword(req: NextApiRequest, res: NextApiResponse) {
  const { type } = req.query
  const response = await fetch(`${apiBaseUrl}/api/member/forget/${type}`, {
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

export default MemberForgetPassword
