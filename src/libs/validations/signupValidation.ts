import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { pwdRegExp } from '../constants'

export const signupValidation = () =>
  yupResolver(
    yup.object({
      id: yup
        .string()
        .trim()
        .min(8, '최소 8자 이상 입력해주세요.')
        .max(16, '최대 16자를 입력해주세요.')
        .required('아이디를 입력해주세요.'),
      password: yup
        .string()
        .trim()
        .matches(
          pwdRegExp,
          '비밀번호 생성 조건에 맞지 않습니다. 다시 입력해주세요.',
        )
        .min(8, '최소 8자 이상 입력해주세요.')
        .max(16, '최대 16자를 입력해주세요.')
        .required('비밀번호를 입력해주세요.'),
      passwordConfirm: yup
        .string()
        .trim()
        .oneOf(
          [yup.ref('password'), null],
          '비밀번호가 일치하지 않습니다. 다시 입력해주세요.',
        )
        .required('비밀번호를 입력해주세요.'),
    }),
  )
