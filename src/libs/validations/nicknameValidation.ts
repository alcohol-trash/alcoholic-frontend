import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export const nicknameValidation = () =>
  yupResolver(
    yup.object({
      nickname: yup
        .string()
        .trim()
        .min(1, '최소 1자 이상 입력해주세요.')
        .max(12, '최대 12자를 입력해주세요.')
        .required('닉네임을 입력해주세요.'),
    }),
  )
