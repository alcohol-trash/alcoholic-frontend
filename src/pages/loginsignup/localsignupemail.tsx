//일반 회원가입 -> 이메일 인증
import Emailform from '@/components/emailform'
import { LocalEmailPage } from '@/css/login'

const SignupEmail = () => {
  return (
    <section css={LocalEmailPage.Container}>
      <section css={LocalEmailPage.Block}>
        <h1>
          회원가입을 위해
          <br />
          이메일 인증이 필요해요.
        </h1>
      </section>
      <Emailform />
    </section>
  )
}

export default SignupEmail
