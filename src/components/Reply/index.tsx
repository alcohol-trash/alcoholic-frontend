import React, { useState, useCallback } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import Image from 'next/image'
import { AxiosError } from 'axios'
import { useRecoilState } from 'recoil'
import * as R from 'ramda'

import { deleteReplyAPI } from '@/api/board'
import { DataProps, ReplyStateProps } from '@/interfaces/board'
import { replyState } from '@/recoil'

import Button from '@/components/Button'
import ModalAlert from '@/components/ModalAlert'
import ModalDropDown from '@/components/ModalDropDown'

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
  reReply?: any
  boardSeq?: number
}

const Reply = ({ data, reReply, boardSeq }: Props) => {
  const query = useQueryClient()

  const [, setState] = useRecoilState<ReplyStateProps>(replyState)

  const [menu, setMenu] = useState<boolean>(false)
  const [modal, setModal] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('')

  const {
    content = '',
    createdDate,
    isRoot,
    mine,
    replyParent = 1,
    seq = 1,
    writerNickname,
    writerProfileImage,
  } = data || {}

  const deleteMutation = useMutation<DataProps, AxiosError, number>(
    ['reply', boardSeq],
    deleteReplyAPI,
    {
      onSuccess: (response) => {
        if (response) {
          setModal(true)
          if (response.success) {
            setTitle(response.message)
            query.invalidateQueries(['reply', boardSeq])
          } else {
            setTitle(response.data.message)
          }
        }
      },
    },
  )

  const handleMenu = useCallback(() => {
    setMenu(!menu)
  }, [menu])

  const handleModal = useCallback(() => {
    setModal(!modal)
  }, [modal])

  const handleEdit = useCallback(() => {
    handleMenu()
    setState({
      type: 'edit',
      content: content,
      seq: seq,
      replyParent: replyParent,
    })
  }, [content, handleMenu, replyParent, seq, setState])

  const handleDelete = useCallback(() => {
    handleMenu()
    deleteMutation.mutate(seq)
  }, [deleteMutation, handleMenu, seq])

  return (
    <div css={styles.container}>
      <div css={styles.innerContainer}>
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
        {mine && (
          <div css={styles.menu} onClick={handleMenu}>
            <Image src="/assets/more.png" width={24} height={24} />
          </div>
        )}
      </div>
      {isRoot && (
        <div css={styles.replyButton}>
          <Button style="secondary" size="xs" onClick={handleEdit}>
            답글 달기
          </Button>
        </div>
      )}
      {!R.isEmpty(reReply) && (
        <div css={styles.reReplyBlock}>
          {reReply?.map((item: any) => (
            <Reply key={item.seq} data={item} boardSeq={boardSeq} />
          ))}
        </div>
      )}
      <ModalDropDown
        isOpen={menu}
        title="댓글"
        onClick={handleMenu}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <ModalAlert title={title} isOpen={modal} onClick={handleModal} />
    </div>
  )
}

export default React.memo(Reply)
