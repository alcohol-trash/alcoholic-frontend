import { NextApiRequest, NextApiResponse } from 'next'
import { apiBaseUrl } from '@/libs/config'
import { URLSearchParams } from 'url'
async function MemberForgetId(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.query
  const searchParams = new URLSearchParams({ email: `${email}` }).toString()
  const response = await fetch(
    `${apiBaseUrl}/api/member/forget/id?` + searchParams,
  )
  const data = await response.json()
  res.status(response.status).json(data)
}

export default MemberForgetId
