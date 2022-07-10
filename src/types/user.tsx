//로컬로그인
export interface LoginData {
  id: string
  password: string
}

//이용약관
export interface TermsData {
  checkAll: boolean
  checkAge: boolean
  checkService: boolean
  checkInfo: boolean
}

//이메일 인증
export interface EmailData {
  email: string
}
