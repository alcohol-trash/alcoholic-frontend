//일반 회원가입 -> 정보 입력
import * as styles from '@/css/signup/signupInfoStyles'
import SignupForm from '@/components/signupform'
import Title from '@/components/Title'

const SignupInfo = () => {
  return (
    <section css={styles.container}>
      <section css={styles.topContainer}>
        <Title>
          회원가입 정보를
          <br />
          입력해주세요.
        </Title>
      </section>
      <section css={styles.bottomContainer}>
        <SignupForm />
      </section>
    </section>
  )
}

export default SignupInfo
