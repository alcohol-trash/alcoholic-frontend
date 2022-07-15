import * as yup from 'yup'

export const getSignupTermsFormSchema = yup.object({
  checkAll: yup.boolean().oneOf([true]),
  checkAge: yup.boolean().oneOf([true]),
  checkService: yup.boolean().oneOf([true]),
  checkInfo: yup.boolean().oneOf([true]),
})
