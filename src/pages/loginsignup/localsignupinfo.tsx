//일반 회원가입 -> 정보 입력
import { LocalInfoPage } from '@/css/login'
import SignupForm from '@/components/signupform'

const SignupInfo = () => {
  return (
    <section css={LocalInfoPage.Container}>
      <section css={LocalInfoPage.Block}>
        <h1>
          회원가입 정보를
          <br />
          입력해주세요.
        </h1>
      </section>
      <SignupForm />
    </section>
  )
}

export default SignupInfo
