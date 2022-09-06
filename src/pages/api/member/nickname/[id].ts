import { NextApiRequest, NextApiResponse } from 'next'
import { apiBaseUrl } from '@/libs/config'
async function ChangeNickname(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  const response = await fetch(`${apiBaseUrl}/api/member/nickname/${id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: req.body,
  })
  const data = await response.json()
  res.status(response.status).json(data)
}

export default ChangeNickname
