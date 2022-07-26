import React, { useState } from 'react'
import Image from 'next/image'

import Header from '@/components/Header'
import Sentence from '@/components/Sentence'
import Button from '@/components/Button'
import AccountInfo from '@/components/accountinfo'
import ModalWithdrawal from '@/components/ModalWithdrawal'

import * as styles from '@/css/setting/settingInfoStyles'

const Info = () => {
  const [local, setLocal] = useState(false)
  const [modal, setModal] = useState(false)
  return (
    <section css={styles.container}>
      <Header title="계정정보" style="left" />
      <label>이메일</label>
      <div css={styles.emailBlock}>
        <Sentence size="base">alcoholic@kakao.com</Sentence>
        {!local && <Image src="/assets/kakao.png" width={32} height={32} />}
      </div>
      {local && <AccountInfo />}
      <Button style="secondary" size="base" onClick={() => setModal(!modal)}>
        회원탈퇴
      </Button>
      <ModalWithdrawal isOpen={modal} onClick={() => setModal(!modal)} />
    </section>
  )
}

export default Info
