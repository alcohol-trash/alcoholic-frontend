//일반 회원가입 -> 이메일 인증
import EmailForm from '@/components/Temp'
import Title from '@/components/Title'

import * as styles from '@/css/signup/signupEmailStyles'

const SignupEmail = () => {
  return (
    <section css={styles.container}>
      <section css={styles.topContainer}>
        <Title>
          회원가입을 위해
          <br />
          이메일 인증이 필요해요.
        </Title>
      </section>
      <section css={styles.bottomContainer}>
        <EmailForm />
      </section>
    </section>
  )
}

export default SignupEmail
