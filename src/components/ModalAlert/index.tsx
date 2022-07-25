import React from 'react'
import Modal from 'react-modal'

import Button from '@/components/Button'
import theme from '@/theme'

import * as styles from './styles'
export type ModalType = 'alert' | 'confirm'

type Props = {
  title?: string
  isOpen: boolean
  type: ModalType
  btnName?: string
  btnProp?: boolean
  onClick: () => void
}

const customStyles: Modal.Styles = {
  overlay: {
    zIndex: 99,
    background: 'rgba(0, 0, 0, 0.5)',
    touchAction: 'none',
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
    height: 152,
    transform: 'translate(-50%, -50%)',
    padding: 0,
    border: 0,
    boxShadow: '0 3px 15px rgba(0,0,0,0.2)',
    position: 'fixed',
    borderRadius: '16px',
  },
}

const ModalAlert = ({
  title,
  isOpen,
  type = 'alert',
  btnName,
  btnProp,
  onClick,
}: Props) => {
  return (
    <Modal style={customStyles} isOpen={isOpen} ariaHideApp={false}>
      <div css={styles.titleBlock}>{title}</div>
      <div css={styles.btnBlock}>
        {type == 'alert' ? (
          <Button
            align="center"
            size="base"
            style="secondary"
            onClick={onClick}
          >
            확인
          </Button>
        ) : (
          <>
            <Button
              align="center"
              size="base"
              style={btnProp ? 'primary' : 'default'}
            >
              {btnName}
            </Button>
            <Button
              align="center"
              size="base"
              style="secondary"
              onClick={onClick}
            >
              취소
            </Button>
          </>
        )}
      </div>
    </Modal>
  )
}

export default React.memo(ModalAlert)
