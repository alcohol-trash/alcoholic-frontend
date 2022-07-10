//일반 회원가입 -> 이용약관
import Terms from '@/components/terms'
import { LocalTermsPage } from '@/css/login'

const SignupTerms = () => {
  return (
    <section css={LocalTermsPage.Container}>
      <section css={LocalTermsPage.Block}>
        <h1>만나서 반가워요,</h1>
        <h1>
          알코홀-릭
          <br />
          서비스 이용약관
        </h1>
      </section>
      <Terms />
    </section>
  )
}

export default SignupTerms
