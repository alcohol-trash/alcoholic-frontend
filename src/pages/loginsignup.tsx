//로그인페이지 -> 소셜로그인 + 일반 로그인 + 일반 회원가입
import Link from 'next/link'
import Image from 'next/image'

import Title from '@/components/Title'

import * as styles from '@/css/loginsignup'
import { apiBaseUrl } from '@/libs/config'

const LoginSignup = () => {
  const KAKAO_AUTH_URL = `${apiBaseUrl}/oauth2/authorization/kakao`
  const GOOGLE_AUTH_URL = `${apiBaseUrl}/oauth2/authorization/google`
  return (
    <section css={styles.container}>
      <section css={styles.topContainer}>
        <Title>
          <span css={styles.titleColor}>알코홀-릭은</span> 가입 후에
        </Title>
        <Title>이용할 수 있어요!</Title>
      </section>
      <section css={styles.bottomContainer}>
        <p>SNS 계정으로 시작하기</p>
        <div css={styles.imgBlock}>
          <Link href={KAKAO_AUTH_URL} rel="noopener noreferrer">
            <div>
              <Image src="/assets/kakao.png" width={56} height={56} />
            </div>
          </Link>
          <Link href={GOOGLE_AUTH_URL}>
            <div>
              <Image src="/assets/google.png" width={56} height={56} />
            </div>
          </Link>
        </div>
        <div css={styles.linkBlock}>
          <Link href="/login">
            <a>일반 로그인 /</a>
          </Link>
          <Link href="/signup/terms">
            <a> 회원가입</a>
          </Link>
        </div>
      </section>
    </section>
  )
}
export default LoginSignup
