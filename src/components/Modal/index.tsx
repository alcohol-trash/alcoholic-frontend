import React from 'react'
import Modal from 'react-modal'

import Button from '@/components/Button'

import * as styles from './styles'
export type ModalType = 'alert' | 'confirm'
export type LocationType = 'middle' | 'bottom'

type Props = {
  isOpen: boolean
  children?: React.ReactNode
  title: string
  type: ModalType
  btnName?: string
  btnProp?: boolean
  location?: string
  width: number
  height: number
  onClick: () => void
}

const ModalAlert = ({
  isOpen,
  children,
  title,
  type = 'alert',
  btnName,
  btnProp,
  location = 'middle',
  width,
  height,
  onClick,
}: Props) => {
  return (
    <Modal
      css={[
        styles.modalContainer,
        styles.size(width, height),
        location === 'middle' ? styles.middle : styles.bottom,
      ]}
      isOpen={isOpen}
      ariaHideApp={false}
    >
      <div css={styles.titleBlock}>
        {title.split('\n').map((txt) => (
          <>
            {txt}
            <br />
          </>
        ))}
      </div>
      <div css={styles.childrenBlock}>{children}</div>
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
