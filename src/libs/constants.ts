import { apiBaseUrl } from './config'

export const KAKAO_AUTH_URL = `${apiBaseUrl}/oauth2/authorization/kakao`
export const GOOGLE_AUTH_URL = `${apiBaseUrl}/oauth2/authorization/google`

export const pwdRegExp =
  /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[~`!@#$%^&*()-+=]).*$/
