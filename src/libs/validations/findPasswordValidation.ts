import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const getFindPasswordFormSchema = () =>
  yupResolver(
    yup.object().shape({
      id: yup
        .string()
        .trim()
        .min(8, '8~16자리로 입력해주세요.')
        .max(16, '8~16자리로 입력해주세요.')
        .required('8~16자리로 입력해주세요.'),
      email: yup
        .string()
        .trim()
        .email('이메일을 정확하게 입력해주세요.')
        .required('이메일을 정확하게 입력해주세요.'),
    }),
  )
