import React from 'react'
import Modal from 'react-modal'

import Button from '@/components/Button'
import theme from '@/theme'

import * as styles from './styles'
export type ModalType = 'alert' | 'confirm'

type Props = {
  title?: string
  isOpen: boolean
  type?: ModalType
  btnName?: string
  onClick?: () => void
  onCancel?: () => void
}

const customStyles: Modal.Styles = {
  overlay: {
    backgroundColor: 'rgba(16, 17, 29, .8)',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    backgroundColor: theme.gray[800],
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: 328,
    transform: 'translate(-50%, -50%)',
    padding: '15px',
    border: 0,
    position: 'fixed',
    borderRadius: '16px',
  },
}

const ModalAlert = ({
  title,
  isOpen,
  type = 'alert',
  btnName,
  onClick,
  onCancel,
}: Props) => {
  return (
    <Modal
      style={customStyles}
      isOpen={isOpen}
      ariaHideApp={false}
      onRequestClose={onCancel ? onCancel : onClick} // close modal when overlay clicked
    >
      <div css={styles.titleBlock}>{title}</div>
      <div css={styles.btnBlock}>
        {type == 'alert' ? (
          <Button align="center" size="base" style="modal" onClick={onClick}>
            확인
          </Button>
        ) : (
          <>
            <Button align="center" size="base" style="modal" onClick={onCancel}>
              취소
            </Button>
            <Button
              align="center"
              size="base"
              style="modalLogin"
              onClick={onClick}
            >
              {btnName}
            </Button>
          </>
        )}
      </div>
    </Modal>
  )
}

export default React.memo(ModalAlert)
