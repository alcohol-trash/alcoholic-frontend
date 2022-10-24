import React, { useState, useCallback } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useForm } from 'react-hook-form'
import { AxiosError } from 'axios'
import Image from 'next/image'
import { useRecoilState } from 'recoil'

import { changeReplyAPI, makeReplyAPI, makeRereplyAPI } from '@/api/board'
import { replyValidation } from '@/libs/validations/replyValidation'
import { DataProps, ReplyStateProps } from '@/interfaces/board'
import { replyState } from '@/recoil'

import Button from '@/components/Button'
import ModalAlert from '@/components/ModalAlert'

import * as styles from './styles'

type Props = {
  boardSeq: number
}

type FormTypes = {
  reply: string
}

const ReplyForm = ({ boardSeq }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<FormTypes>({
    resolver: replyValidation(),
    mode: 'onChange',
  })
  const query = useQueryClient()

  const [state] = useRecoilState<ReplyStateProps>(replyState)

  const [modal, setModal] = useState(false)
  const [modalTitle, setModalTitle] = useState<string>('')

  const addReplyMutation = useMutation<DataProps, AxiosError, any>(
    ['reply', boardSeq],
    makeReplyAPI,
    {
      onSuccess: (response) => {
        if (response) {
          setModal(true)
          if (response.success) {
            setModalTitle(response.message)
            query.invalidateQueries(['reply', boardSeq])
          } else {
            setModalTitle(response.data.message)
          }
        }
      },
    },
  )

  const changeReplyMutation = useMutation<DataProps, AxiosError, any>(
    ['reply', boardSeq],
    changeReplyAPI,
    {
      onSuccess: (response) => {
        if (response) {
          setModal(true)
          if (response.success) {
            setModalTitle(response.message)
            query.invalidateQueries(['reply', boardSeq])
          } else {
            setModalTitle(response.data.message)
          }
        }
      },
    },
  )

  const addReReplyMutation = useMutation<DataProps, AxiosError, any>(
    ['reply', boardSeq],
    makeRereplyAPI,
    {
      onSuccess: (response) => {
        if (response) {
          setModal(true)
          if (response.success) {
            setModalTitle(response.message)
            query.invalidateQueries(['reply', boardSeq])
          } else {
            setModalTitle(response.data.message)
          }
        }
      },
    },
  )

  const onHandleSendClick = async (data: any) => {
    switch (state.type) {
      case 'add':
        addReplyMutation.mutate({
          boardSeq: boardSeq,
          data: {
            content: data.reply,
          },
        })
        break
      case 'edit':
        changeReplyMutation.mutate({
          replySeq: state.seq,
          data: {
            content: data.reply,
          },
        })
        break
      case 'reReply':
        addReReplyMutation.mutate({
          boardSeq: boardSeq,
          data: {
            content: data.reply,
            replayParent: state.replyParent,
          },
        })
        break
    }
    reset()
  }

  const handleModal = useCallback(() => {
    setModal(!modal)
  }, [modal])

  return (
    <section css={styles.container}>
      <form css={styles.form}>
        <div css={styles.block}>
          <Image src="/assets/profile_img.png" width={32} height={32} />
        </div>
        <div css={state.type === 'reReply' ? styles.reReply : styles.textarea}>
          {state.type === 'reReply' && <div>@테스트</div>}
          <textarea
            placeholder="댓글 남기기"
            rows={1}
            defaultValue={state.type === 'edit' ? state.content : ''}
            {...register('reply')}
          />
        </div>
      </form>
      <div css={styles.button}>
        <Button
          size="sm"
          align="center"
          style={isValid ? 'secondaryTrue' : 'secondary'}
          disabled={!isValid}
          onClick={handleSubmit(onHandleSendClick)}
        >
          전송
        </Button>
      </div>
      <ModalAlert title={modalTitle} isOpen={modal} onClick={handleModal} />
    </section>
  )
}

export default React.memo(ReplyForm)
