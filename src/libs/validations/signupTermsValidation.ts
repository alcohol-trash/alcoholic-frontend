import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export const signupTermsValidation = () =>
  yupResolver(
    yup.object({
      checkAll: yup.boolean().oneOf([true]),
      checkAge: yup.boolean().oneOf([true]),
      checkService: yup.boolean().oneOf([true]),
      checkInfo: yup.boolean().oneOf([true]),
    }),
  )
