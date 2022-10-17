import React, { useState, useCallback } from 'react'
import { useRouter } from 'next/router'

import Title from '@/components/Title'
import TextField from '@/components/TextField'
import Button from '@/components/Button'
import ModalAlert from '@/components/ModalAlert'

import * as styles from '@/css/login/findIdStyles'

const FindIdSuccess = () => {
  const router = useRouter()

  const id = router.query.id
  const [modalVisible, setModalVisible] = useState<boolean>(true)

  const handleResetError = useCallback(() => {
    router.push('/login/find-id')
  }, [router])

  const handleModalClose = useCallback(() => {
    setModalVisible(!modalVisible)
  }, [modalVisible])

  const handleSubmit = useCallback(() => {
    router.push('/login')
  }, [router])

  if (!id) {
    return (
      <ModalAlert
        isOpen={modalVisible}
        title="이메일 인증을 먼저 진행해주세요."
        onClick={handleResetError}
        onCancel={handleModalClose}
      />
    )
  }
  return (
    <>
      <div css={styles.container}>
        <Title>아이디 찾기</Title>
        <div>
          <div css={styles.form}>
            <div css={styles.box}>
              <label>아이디 정보</label>
              <div>
                <TextField value={id} readonly={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div css={styles.buttonContainer}>
        <Button size="sm" style="primary" onClick={handleSubmit}>
          로그인하기
        </Button>
      </div>
    </>
  )
}

export default React.memo(FindIdSuccess)
