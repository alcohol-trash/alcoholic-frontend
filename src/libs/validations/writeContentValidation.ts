import * as yup from 'yup'

export const writeContentFormSchema = yup.object({
  title: yup.string().required('제목을 작성해주세요.'),
  content: yup.string().required('글을 작성해주세요.'),
})
