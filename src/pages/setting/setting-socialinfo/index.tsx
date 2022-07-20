import React, { useState } from 'react'
import Image from 'next/image'

import Header from '@/components/Header'
import Sentence from '@/components/Sentence'
import Button from '@/components/Button'
import ModalAlert from '@/components/Modal'

import * as styles from '@/css/setting/settingSocialInfoStyles'

const SocialInfo = () => {
  const [modal, setModal] = useState(false)
  return (
    <section css={styles.container}>
      <Header title="계정정보" style="left" />
      <label>이메일</label>
      <div css={styles.emailBlock}>
        <Sentence size="base">alcoholic@kakao.com</Sentence>
        <Image src="/assets/kakao.png" width={32} height={32} />
      </div>
      <Button style="secondary" size="base" onClick={() => setModal(!modal)}>
        회원탈퇴
      </Button>
      <ModalAlert
        title={`이메일 인증이 완료되지 않았습니다.\n다시 인증 시도 해주세요.`}
        type={'alert'}
        isOpen={modal}
        onClick={() => setModal(!modal)}
      ></ModalAlert>
    </section>
  )
}

export default SocialInfo
