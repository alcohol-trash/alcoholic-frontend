import { yupResolver } from '@hookform/resolvers/yup'
import { Resolver } from 'react-hook-form'
import * as yup from 'yup'

export const getFindIdFormSchema = (): Resolver<any, object> =>
  yupResolver(
    yup.object({
      email: yup
        .string()
        .email('이메일을 정확하게 입력해주세요.')
        .required('이메일을 정확하게 입력해주세요.'),
    }),
  )
