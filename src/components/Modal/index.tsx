import React from 'react'
import Modal from 'react-modal'
import * as styles from './styles'

type Props = {
  isOpen: boolean
  children?: React.ReactNode
}

const CustomModal = ({ isOpen, children }: Props) => {
  return (
    <Modal css={styles.modalContainer} isOpen={isOpen} ariaHideApp={false}>
      <div css={styles.block}>{children}</div>
    </Modal>
  )
}

export default React.memo(CustomModal)
