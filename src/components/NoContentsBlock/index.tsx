import React, { useState, useEffect } from 'react'
import Router from 'next/router'

import Sentence from '@/components/Sentence'
import Button from '@/components/Button'
import ModalAlert from '@/components/ModalAlert'
import ModalWriteContent from '@/components/ModalWriteContent'

import * as styles from './styles'

type Props = {
  isLoggedIn: boolean
  index: number
  title: string
}

const NoContentsBlock = ({ isLoggedIn, index, title }: Props) => {
  const [modalAlert, setModalAlert] = useState<boolean>(false)
  const [modalContent, setModalContent] = useState<boolean>(false)
  const [category, setCategory] = useState<string>(title)
  const [categoryNum, setCategoryNum] = useState<number>(index)
  const handleClick = () => {
    if (!isLoggedIn) {
      setModalAlert(true)
    }
    if (isLoggedIn) {
      setModalContent(true)
    }
  }
  useEffect(() => {
    setCategory(title)
    setCategoryNum(index)
  }, [title, index])
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
        category={category}
        categoryNum={categoryNum}
      />
    </>
  )
}

export default React.memo(NoContentsBlock)
