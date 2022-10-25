import React, { useState, useCallback } from 'react'
import { useQueryClient, useMutation } from 'react-query'
import Image from 'next/image'
import { AxiosError } from 'axios'

import { heartAPI } from '@/api/board'
import { DataProps } from '@/interfaces/board'

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

  const mutation = useMutation<DataProps, AxiosError, any>(heartAPI, {
    onSuccess: (response) => {
      if (response) {
        setModal(true)
        if (response.success) {
          setModalTitle(response.message)
        } else {
          setModalTitle(response.data.message)
        }
      }
    },
    onSettled: () => {
      query.invalidateQueries(['board', seq])
    },
  })

  const handleLike = useCallback(() => {
    if (heartCount) {
      mutation.mutate({ boardSeq: seq, type: 'DELETE' })
    }
    if (!heartCount) {
      mutation.mutate({ boardSeq: seq, type: 'POST' })
    }
  }, [heartCount, mutation, seq])

  // const handleLike = async () => {
  //   let response
  //   if (heartCount) {
  //     response = await heartAPI({ boardSeq: seq, type: 'DELETE' })
  //   }
  //   if (!heartCount) {
  //     response = await heartAPI({ boardSeq: seq, type: 'POST' })
  //   }
  //   if (response) {
  //     setModal(true)
  //     if (response.success) {
  //       setModalTitle(response.message)
  //       query.invalidateQueries(['board', seq])
  //     } else {
  //       setModalTitle(response.data.message)
  //     }
  //   }
  // }

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
