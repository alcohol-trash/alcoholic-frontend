import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const getFindIdFormSchema = () =>
  yupResolver(
    yup.object({
      email: yup
        .string()
        .email('이메일을 정확하게 입력해주세요.')
        .required('이메일을 정확하게 입력해주세요.'),
    }),
  )
