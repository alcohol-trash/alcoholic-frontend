import React from 'react'
import Modal from 'react-modal'

import * as styles from './styles'
export type ModalType = 'confirm' | 'login'

type Props = {
  isOpen: boolean
  children?: React.ReactNode
  type: ModalType
  onClick: () => void
}

const ModalAlert = ({ isOpen, children, type, onClick }: Props) => {
  return (
    <Modal css={styles.modalContainer} isOpen={isOpen} ariaHideApp={false}>
      <div css={styles.titleBlock}>{children}</div>
      <div css={styles.btnBlock}>
        {type == 'confirm' ? (
          <div css={styles.btnBlock}>
            <button css={styles.btn} onClick={onClick}>
              확인
            </button>
          </div>
        ) : (
          <div css={styles.btnBlock}></div>
        )}
      </div>
    </Modal>
  )
}

export default React.memo(ModalAlert)
