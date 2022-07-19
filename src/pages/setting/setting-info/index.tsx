import Image from 'next/image'

import Header from '@/components/Header'
import Sentence from '@/components/Sentence'

import * as styles from './styles'
import Button from '@/components/Button'

const Info = () => {
  return (
    <section css={styles.container}>
      <Header title="계정정보" style="left" />
      <label>이메일</label>
      <div css={styles.emailBlock}>
        <Sentence size="base">alcoholic@kakao.com</Sentence>
        <Image src="/assets/kakao.png" width={32} height={32} />
      </div>
      <Button style="secondary" size="base">
        회원탈퇴
      </Button>
    </section>
  )
}

export default Info
