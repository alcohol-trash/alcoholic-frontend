import Link from 'next/link'
import Router from 'next/router'
import Image from 'next/image'

import Header from '@/components/Header'
import Loginform from '@/components/loginform'
import Title from '@/components/Title'

import * as styles from '@/css/login/localLoginStyles'

const LocalLogin = () => {
  return (
    <section css={styles.container}>
      <Header
        right={
          <div css={styles.imgBlock} onClick={() => Router.push('/')}>
            <Image src="/assets/home.png" width={24} height={24} />
          </div>
        }
      />
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
