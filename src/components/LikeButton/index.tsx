import React, { useState } from 'react'
import Image from 'next/image'

import { heartAPI } from '@/api/board'

import ModalAlert from '@/components/ModalAlert'

import * as styles from './styles'

type Props = {
  heartCount?: number
  heartCheck?: boolean
  seq?: number
}

const LikeButton = ({ heartCount = 0, heartCheck = false, seq = 0 }: Props) => {
  const [modal, setModal] = useState<boolean>(false)
  const [modalTitle, setModalTitle] = useState<string>('')
  const handleLike = async () => {
    if (heartCount) {
      const response = await heartAPI(seq, 'DELETE')
      if (response) {
        setModal(true)
        setModalTitle(response.data.message)
      }
    }
    if (!heartCount) {
      const response = await heartAPI(seq, 'POST')
      if (response) {
        setModal(true)
        setModalTitle(response.data.message)
      }
    }
  }
  return (
    <>
      <button
        css={
          heartCheck
            ? [styles.buttonLike, styles.button]
            : [styles.buttonNormal, styles.button]
        }
        onClick={handleLike}
      >
        <Image src="/assets/like.png" width={13} height={16} />
        <span>{heartCount}</span>
      </button>
      <ModalAlert
        title={modalTitle}
        isOpen={modal}
        onClick={() => setModal(!modal)}
      />
    </>
  )
}

export default React.memo(LikeButton)
