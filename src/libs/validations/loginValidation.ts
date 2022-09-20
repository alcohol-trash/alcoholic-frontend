import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export const loginValidation = () =>
  yupResolver(
    yup.object({
      id: yup
        .string()
        .trim()
        .min(8, '아이디를 확인해주세요.')
        .max(16, '아이디를 확인해주세요.')
        .required('아이디를 확인해주세요.'),
      password: yup
        .string()
        .trim()
        .min(8, '비밀번호를 확인해주세요.')
        .max(16, '비밀번호를 확인해주세요.')
        .required('비밀번호를 확인해주세요.'),
    }),
  )
