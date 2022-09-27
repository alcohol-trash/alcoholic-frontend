import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export const serviceValidation = () =>
  yupResolver(
    yup.object({
      email: yup.string().trim().email().required(),
      message: yup.string().required(),
    }),
  )
