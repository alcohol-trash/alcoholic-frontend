import * as yup from 'yup'

export const getSettingTermsFormSchema = yup.object({
  check: yup.boolean().oneOf([true]),
})
