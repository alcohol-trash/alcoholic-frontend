import { useQuery, UseQueryResult } from 'react-query'
import { getReplyAPI } from '@/api/board'
import { DataProps } from '@/interfaces/board'

export const useReplyQuery = (id: number): UseQueryResult<DataProps> => {
  return useQuery(['reply', id], async () => await getReplyAPI(id))
}
