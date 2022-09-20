import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export const writeContentValidation = () =>
  yupResolver(
    yup.object({
      title: yup.string().required('제목을 작성해주세요.'),
      content: yup.string().required('글을 작성해주세요.'),
    }),
  )
