import { NextApiRequest, NextApiResponse } from 'next'
import { apiBaseUrl } from '@/libs/config'

export async function GetBoards(
  category?: number,
  pageNum?: number,
  lastId?: number,
) {
  const res = await fetch(
    `${apiBaseUrl}/api/boards?category=${category || 1}&page=${
      pageNum || 0
    }&size=${lastId || 3}`,
    {
      credentials: 'include',
    },
  )
  const data = await res.json()
  return data
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const data = await GetBoards()
  res.status(200).json(data)
}
