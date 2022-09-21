import React, { useState } from 'react'

import { changeReplyAPI } from '@/api/board'

import Button from '@/components/Button'
import ModalAlert from '@/components/ModalAlert'

import * as styles from './styles'

type ReplyProps = {
  content: string
  createdDate: string
  isRoot: boolean
  mine: boolean
  replyParent: number
  seq: number
  updatedDate: null
  writerNickname: string
  writerProfileImage: string
}

type Props = {
  data?: ReplyProps
}

const Reply = ({ data }: Props) => {
  const [modal, setModal] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('')

  const {
    content,
    createdDate,
    isRoot,
    mine,
    replyParent,
    seq = 0,
    updatedDate,
    writerNickname,
    writerProfileImage,
  } = data || {}

  const handleDelete = async () => {
    const response = await changeReplyAPI('DELETE', seq)
    if (response) {
      setModal(true)
      setTitle(response.data.message)
    }
  }

  return (
    <>
      <div css={styles.container}>
        <div css={styles.image}>
          <img referrerPolicy="no-referrer" src={writerProfileImage} />
        </div>
        <div>
          <div>
            <span css={styles.name}>{writerNickname}</span>
            <span css={styles.date}>{createdDate}</span>
          </div>
          <div css={styles.reply}>{content}</div>
        </div>
      </div>
      {mine && (
        <div>
          <Button style="secondary" size="xs" onClick={handleDelete}>
            삭제
          </Button>
        </div>
      )}
      {isRoot && (
        <div css={styles.button}>
          <Button style="secondary" size="xs">
            답글 달기
          </Button>
        </div>
      )}
      <ModalAlert
        title={title}
        isOpen={modal}
        onClick={() => setModal(!modal)}
      />
    </>
  )
}

export default React.memo(Reply)
