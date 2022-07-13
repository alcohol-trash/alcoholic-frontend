import Link from 'next/link'
import * as styles from '@/css/login/localLoginStyles'
import Loginform from '@/components/loginform'
import Homebar from '@/components/homebar'
import Title from '@/components/Title'

const LocalLogin = () => {
  return (
    <section css={styles.container}>
      <Homebar />
      <section css={styles.topContainer}>
        <Title>
          로그인 정보를
          <br />
          입력해주세요.
        </Title>
        <div css={styles.linkBlock}>
          <Link href="/login/findid">
            <a>ID /</a>
          </Link>
          <Link href="/login/findPassword">
            <a>비밀번호 찾기</a>
          </Link>
        </div>
      </section>
      <section css={styles.bottomContainer}>
        <Loginform />
      </section>
    </section>
  )
}

export default LocalLogin
