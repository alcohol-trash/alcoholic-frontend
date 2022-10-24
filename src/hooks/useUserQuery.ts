import { useQuery, UseQueryResult } from 'react-query'
import { memberInfoAPI } from '@/api/user'
import User from '@/interfaces/user'

export const useUserQuery = (): UseQueryResult<User> => {
  return useQuery('user', () => memberInfoAPI())
}
