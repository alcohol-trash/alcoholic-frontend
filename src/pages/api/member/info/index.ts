import { NextApiRequest, NextApiResponse } from 'next'
import { apiBaseUrl } from '@/libs/config'

export async function MemberInfo() {
  const res = await fetch(`${apiBaseUrl}/api/member`, {
    credentials: 'include',
  })
  const data = await res.json()
  return data
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const data = await MemberInfo()
  res.status(200).json(data)
}
