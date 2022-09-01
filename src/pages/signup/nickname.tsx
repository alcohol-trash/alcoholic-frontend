//소셜 회원가입 -> 닉네임 생성 페이지
import NickNameForm from '@/components/NicknameForm'
import Sentence from '@/components/Sentence'
import Title from '@/components/Title'

import * as styles from '@/css/signup/signupNicknameStyles'

const SignupNickname = () => {
  return (
    <section css={styles.container}>
      <section css={styles.topContainer}>
        <Title>
          알코홀-릭에서 사용할
          <br />
          닉네임을 입력해주세요.
        </Title>
        <Sentence>
          이름은 공백없이 12자 이하,
          <br />
          기호는 -_.만 사용 가능합니다.
        </Sentence>
      </section>
      <section css={styles.bottomContainer}>
        <NickNameForm />
      </section>
    </section>
  )
}

export default SignupNickname
