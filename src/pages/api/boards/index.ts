import { NextApiRequest, NextApiResponse } from 'next'
import { apiBaseUrl } from '@/libs/config'
import { URLSearchParams } from 'url'

export default async function GetBoards(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { category } = req.query
  const searchParams = new URLSearchParams({
    category: `${category}`,
  })
  const response = await fetch(`${apiBaseUrl}/api/boards?` + searchParams)
  const data = await response.json()
  res.status(response.status).json(data)
}
