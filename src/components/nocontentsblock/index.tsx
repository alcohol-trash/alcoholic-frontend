import React, { useState } from 'react'
import Router from 'next/router'

import Sentence from '@/components/Sentence'
import Button from '@/components/Button'
import ModalAlert from '@/components/ModalAlert'
import ModalWriteContent from '@/components/ModalWriteContent'

import * as styles from './styles'
import User from '@/types/user'

type Props = {
  isLoggedIn: boolean | undefined | void | string | null | User
}

const NoContentsBlock = ({ isLoggedIn }: Props) => {
  const [modalAlert, setModalAlert] = useState<boolean>(false)
  const [modalContent, setModalContent] = useState<boolean>(false)
  const handleClick = () => {
    if (!isLoggedIn) {
      setModalAlert(true)
    }
    if (isLoggedIn) {
      setModalContent(true)
    }
  }
  return (
    <>
      <section css={styles.container}>
        <Sentence size="base">아직 게시판에 작성된 글이 없어요</Sentence>
        <Button size="xs" align="center" onClick={handleClick}>
          글 업로드하기
        </Button>
      </section>
      <ModalAlert
        title={'로그인 후에 이용할 수 있어요'}
        type={'confirm'}
        btnName="로그인"
        isOpen={modalAlert}
        onClick={() => Router.push('/loginsignup')}
        onCancel={() => setModalAlert(!modalAlert)}
      />
      <ModalWriteContent
        isOpen={modalContent}
        onClick={() => setModalContent(!modalContent)}
      />
    </>
  )
}

export default React.memo(NoContentsBlock)
