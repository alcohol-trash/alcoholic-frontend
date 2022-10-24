import React, { useState, useCallback } from 'react'
import { useQueryClient } from 'react-query'
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

  const query = useQueryClient()

  const handleLike = async () => {
    let response
    if (heartCount) {
      response = await heartAPI(seq, 'DELETE')
    }
    if (!heartCount) {
      response = await heartAPI(seq, 'POST')
    }
    if (response) {
      setModal(true)
      if (response.success) {
        setModalTitle(response.message)
        query.invalidateQueries(['board', seq])
      } else {
        setModalTitle(response.data.message)
      }
    }
  }

  const handleModal = useCallback(() => {
    setModal(!modal)
  }, [modal])

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
      <ModalAlert title={modalTitle} isOpen={modal} onClick={handleModal} />
    </>
  )
}

export default React.memo(LikeButton)
