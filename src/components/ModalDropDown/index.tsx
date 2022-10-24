import React from 'react'
import Modal from 'react-modal'

import Button from '@/components/Button'

import * as styles from './styles'
import theme from '@/theme'

type Props = {
  isOpen: boolean
  title?: string
  onClick?: () => void
  handleEdit?: () => void
  handleDelete?: () => void
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
    left: '50%',
    right: 'auto',
    top: `calc(100vh - 130px)`,
    bottom: '0',
    width: '100%',
    height: 130,
    transform: 'translate(-50%)',
    padding: '0 20px',
    border: 0,
    position: 'fixed',
    borderRadius: '16px 16px 0 0',
    overflow: 'hidden',
  },
}

const ModalDropDown = ({
  isOpen,
  title = '',
  onClick,
  handleEdit,
  handleDelete,
}: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClick}
      ariaHideApp={false}
      style={customStyles}
    >
      <div css={styles.button}>
        <Button style="secondary" size="sm" align="center" onClick={handleEdit}>
          {title} 수정
        </Button>
      </div>
      <div css={styles.button}>
        <Button
          style="secondary"
          size="sm"
          align="center"
          onClick={handleDelete}
        >
          {title} 삭제
        </Button>
      </div>
    </Modal>
  )
}

export default React.memo(ModalDropDown)
