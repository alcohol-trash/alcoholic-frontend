import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Title from '@/components/Title'

import * as styles from '@/css/loginsignup'
import { KAKAO_AUTH_URL, GOOGLE_AUTH_URL } from '@/libs/constants'

const LoginSignup = () => {
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
            <a>
              <div>
                <Image src="/assets/kakao.png" width={56} height={56} />
              </div>
            </a>
          </Link>
          <Link href={GOOGLE_AUTH_URL}>
            <a>
              <div>
                <Image src="/assets/google.png" width={56} height={56} />
              </div>
            </a>
          </Link>
        </div>
        <div css={styles.linkBlock}>
          <Link href="/login">일반 로그인 /</Link>
          <Link href="/signup/terms"> 회원가입</Link>
        </div>
      </section>
    </section>
  )
}
export default React.memo(LoginSignup)
