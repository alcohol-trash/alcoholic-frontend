import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export const replyValidation = () =>
  yupResolver(
    yup.object({
      reply: yup.string().trim().required(),
    }),
  )
