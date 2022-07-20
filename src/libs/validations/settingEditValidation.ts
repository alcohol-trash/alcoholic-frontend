import * as yup from 'yup'

const pwdRegExp =
  /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/

export const getSettingEditFormSchema = yup.object({
  password: yup
    .string()
    .trim()
    .matches(pwdRegExp, '비밀번호를 확인해주세요.')
    .min(8, '비밀번호를 확인해주세요.')
    .max(16, '비밀번호를 확인해주세요.')
    .required('비밀번호를 확인해주세요.'),
  passwordConfirm: yup
    .string()
    .trim()
    .oneOf([yup.ref('password'), null], '비밀번호를 다시 확인해주세요.')
    .required('비밀번호를 다시 확인해주세요.'),
})
