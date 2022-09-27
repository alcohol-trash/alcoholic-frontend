import { getBoardsAPI } from '@/api/board'

export const getPaths = async () => {
  const boardFirst = await getBoardsAPI(1, 0)
  const boardSecond = await getBoardsAPI(2, 0)
  const boardThird = await getBoardsAPI(3, 0)
  const arr = [...boardFirst.data, ...boardSecond.data, ...boardThird.data]
  const result = arr.map((i) => ({
    params: { id: i.seq?.toString() },
  }))
  return result
}
