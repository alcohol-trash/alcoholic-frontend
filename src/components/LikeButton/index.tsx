import React, { useState } from 'react'
import Image from 'next/image'

import ModalAlert from '@/components/ModalAlert'

import * as styles from './styles'

type Props = {
  heartCount?: number
  heartCheck?: boolean
  seq?: number
}

const LikeButton = ({ heartCount, heartCheck = false, seq }: Props) => {
  const [modal, setModal] = useState<boolean>(false)
  const [modalTitle, setModalTitle] = useState<string>('')
  const handleLike = async () => {
    if (heartCount) {
      const response = await fetch(`/api/heart/board/${seq}`, {
        method: 'DELETE',
      })
      const data = await response.json()
      if (data) {
        setModal(true)
        setModalTitle(data.message)
      }
    }
    if (!heartCount) {
      const response = await fetch(`/api/heart/board/${seq}`, {
        method: 'POST',
      })
      const data = await response.json()
      if (data) {
        setModal(true)
        setModalTitle(data.message)
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
