import { NextApiRequest, NextApiResponse } from 'next'
import { apiBaseUrl } from '@/libs/config'

export async function Categories() {
  const res = await fetch(`${apiBaseUrl}/api/board-categories`)
  const data = await res.json()
  return data
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const data = await Categories()
  res.status(200).json(data)
}
