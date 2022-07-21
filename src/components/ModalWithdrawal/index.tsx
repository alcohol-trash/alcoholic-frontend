import React from 'react'
import Modal from 'react-modal'

import Button from '@/components/Button'

import * as styles from './styles'

type Props = {
  isOpen: boolean
  children?: React.ReactNode
  btnProp?: boolean
  onClick: () => void
}

const ModalWithdrawal = ({ isOpen, children, btnProp, onClick }: Props) => {
  return (
    <Modal isOpen={isOpen} ariaHideApp={false} css={styles.container}>
      <div css={styles.titleBlock}>회원탈퇴</div>
      <div>{children}</div>
      <div css={styles.btnBlock}>
        <Button
          align="center"
          size="base"
          style={btnProp ? 'primary' : 'default'}
        >
          확인
        </Button>
        <Button align="center" size="base" style="secondary" onClick={onClick}>
          취소
        </Button>
      </div>
    </Modal>
  )
}

export default React.memo(ModalWithdrawal)
