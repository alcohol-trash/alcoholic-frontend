import * as yup from 'yup'

export const getSettingNicknameFormSchema = yup.object({
  nickname: yup
    .string()
    .trim()
    .max(12, '닉네임을 확인해주세요')
    .required('닉네임을 확인해주세요'),
})
