import Link from 'next/link'
import Image from 'next/image'

import * as styles from './styles'
import KakaoLogo from '@/images/kakao.png'
import GoogleLogo from '@/images/google.png'

const Login = () => {
  const login = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY
  const second = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI
  console.log(login)
  console.log(second)
  return (
    <section css={styles.SocialLogin.Container}>
      <section css={styles.SocialLogin.TopContainer}>
        <h1>
          <span style={{ color: 'var(--aqua)' }}>알코홀-릭</span>은 가입 후에
          <br />
          이용할 수 있어요!
        </h1>
      </section>
      <section css={styles.SocialLogin.BottomContainer}>
        <p>SNS 계정으로 시작하기</p>
        <div>
          <Link href="/signup">
            <div css={styles.SocialLogin.Block}>
              <Image src={KakaoLogo} width={56} height={56} />
            </div>
          </Link>
          <Link href="/signup">
            <div css={styles.SocialLogin.Block}>
              <Image src={GoogleLogo} width={56} height={56} />
            </div>
          </Link>
        </div>
        <div>
          <Link href="/locallogin">
            <a>일반 로그인 /</a>
          </Link>
          <Link href="/sociallogin">
            <a> 회원가입</a>
          </Link>
        </div>
      </section>
    </section>
  )
}
export default Login
