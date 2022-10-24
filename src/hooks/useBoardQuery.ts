import { useQuery, UseQueryResult } from 'react-query'
import { getBoardAPI } from '@/api/board'
import { DataProps } from '@/interfaces/board'

export const useBoardQuery = (id: number): UseQueryResult<DataProps> => {
  return useQuery(['board', id], async () => await getBoardAPI(id))
}
