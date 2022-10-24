import React from 'react'
import Image from 'next/image'

import { useUserQuery } from '@/hooks/useUserQuery'

import Header from '@/components/Header'
import Sentence from '@/components/Sentence'
import BackButton from '@/components/BackButton'

import * as styles from './styles'

const SocialInfo = () => {
  const { data: me } = useUserQuery()
  return (
    <section>
      <Header title="계정정보" left={<BackButton />} />
      <section css={styles.container}>
        <label>이메일</label>
        <div css={styles.emailBlock}>
          <Sentence size="base">{me?.data.email}</Sentence>
          <Image
            src={
              me?.data.provider === 'KAKAO'
                ? '/assets/kakao.png'
                : '/assets/google.png'
            }
            width={32}
            height={32}
          />
        </div>
      </section>
    </section>
  )
}

export default React.memo(SocialInfo)
