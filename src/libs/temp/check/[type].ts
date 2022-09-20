import { NextApiRequest, NextApiResponse } from 'next'
import { apiBaseUrl } from '@/libs/config'
import { URLSearchParams } from 'url'
async function EmailCheck(req: NextApiRequest, res: NextApiResponse) {
  const { type, email } = req.query
  const searchParams = new URLSearchParams({ email: `${email}` }).toString()
  const response = await fetch(
    `${apiBaseUrl}/api/mail/check/${type}?` + searchParams,
  )
  const data = await response.json()
  res.status(response.status).json(data)
}

export default EmailCheck
