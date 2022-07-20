import React from 'react'
import Modal from 'react-modal'

import * as styles from './styles'
export type ModalType = 'alert' | 'confirm'

type Props = {
  isOpen: boolean
  children?: React.ReactNode
  title: string
  type: ModalType
  btnName?: string
  onClick: () => void
}

const ModalAlert = ({
  isOpen,
  children,
  title,
  type = 'alert',
  btnName,
  onClick,
}: Props) => {
  return (
    <Modal css={styles.modalContainer} isOpen={isOpen} ariaHideApp={false}>
      <div css={styles.titleBlock}>{title}</div>
      <div>{children}</div>
      <div css={styles.btnBlock}>
        {type == 'alert' ? (
          <div css={styles.btnBlock}>
            <button css={styles.btn} onClick={onClick}>
              확인
            </button>
          </div>
        ) : (
          <div css={styles.btnBlock}>
            <button>{btnName}</button>
            <button css={styles.btn} onClick={onClick}>
              취소
            </button>
          </div>
        )}
      </div>
    </Modal>
  )
}

export default React.memo(ModalAlert)
