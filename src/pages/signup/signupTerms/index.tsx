//일반 회원가입 -> 이용약관
import Terms from '@/components/terms'
import Title from '@/components/Title'

import * as styles from '@/css/signup/signupTermsStyles'

const SignupTerms = () => {
  return (
    <section>
      <section css={styles.topContainer}>
        <Title>만나서 반가워요,</Title>
        <Title>
          알코홀-릭
          <br />
          서비스 이용약관
        </Title>
      </section>
      <section css={styles.bottomContainer}>
        <Terms />
      </section>
    </section>
  )
}

export default SignupTerms