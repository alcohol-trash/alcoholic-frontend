import React, { useState, useCallback } from 'react'
import theme from '@/theme'
import Modal from 'react-modal'
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

type FormTypes = {
  reply: string
}

type Props = {
  isOpen: boolean
  boardSeq?: number
  onClick?: () => void
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
    top: `calc(100vh - 56px)`,
    bottom: '0',
    width: '100%',
    height: 56,
    transform: 'translate(-50%)',
    padding: '0 20px',
    border: 0,
    position: 'fixed',
    borderRadius: '16px 16px 0 0',
    overflow: 'hidden',
  },
}

const ModalReply = ({ boardSeq = 1, isOpen, onClick }: Props) => {
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
    makeReplyAPI,
    {
      onSuccess: (response) => {
        if (response) {
          setModal(true)
          if (response.success) {
            query.invalidateQueries(['reply', boardSeq])
            setModalTitle(response.message)
          } else {
            setModalTitle(response.data.message)
          }
        }
        reset()
      },
    },
  )

  const changeReplyMutation = useMutation<DataProps, AxiosError, any>(
    changeReplyAPI,
    {
      onSuccess: (response) => {
        if (response) {
          setModal(true)
          if (response.success) {
            query.invalidateQueries(['reply', boardSeq])
            setModalTitle(response.message)
          } else {
            setModalTitle(response.data.message)
          }
        }
        reset()
      },
    },
  )

  const addReReplyMutation = useMutation<DataProps, AxiosError, any>(
    makeRereplyAPI,
    {
      onSuccess: (response) => {
        if (response) {
          setModal(true)
          if (response.success) {
            query.invalidateQueries(['reply', boardSeq])
            setModalTitle(response.message)
          } else {
            setModalTitle(response.data.message)
          }
        }
        reset()
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
            replyParent: state.replyParent,
          },
        })
        break
    }
    reset()
  }

  const handleModal = useCallback(() => {
    setModal(!modal)
    reset()
  }, [modal, reset])

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClick}
      ariaHideApp={false}
      style={customStyles}
    >
      <section css={styles.container}>
        <form css={styles.form}>
          <div css={styles.block}>
            <Image src="/assets/profile_img.png" width={32} height={32} />
          </div>
          <div
            css={state.type === 'reReply' ? styles.reReply : styles.textarea}
          >
            {state.type === 'reReply' && <div>@{state.writer}</div>}
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
    </Modal>
  )
}

export default React.memo(ModalReply)
