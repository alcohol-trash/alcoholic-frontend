import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Header from '@/components/Header'
import LoginForm from '@/components/LoginForm'
import Title from '@/components/Title'

import * as styles from '@/css/login/localLoginStyles'

const Login = () => {
  return (
    <>
      <Header
        right={
          <Link href="/">
            <div css={styles.imgBlock}>
              <Image src="/assets/home.png" width={24} height={24} />
            </div>
          </Link>
        }
      />
      <section css={styles.container}>
        <section css={styles.topContainer}>
          <Title>{`로그인 정보를\n입력해주세요.`}</Title>
          <div css={styles.linkBlock}>
            <Link href="/login/find-id">
              <a>ID/</a>
            </Link>
            <Link href="/login/find-password">
              <a>비밀번호 찾기</a>
            </Link>
          </div>
        </section>
        <section css={styles.bottomContainer}>
          <LoginForm />
        </section>
      </section>
    </>
  )
}

export default React.memo(Login)
