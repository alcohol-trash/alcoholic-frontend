import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image'

import { makeReplyAPI } from '@/api/board'
import { replyValidation } from '@/libs/validations/replyValidation'

import Button from '@/components/Button'
import ModalAlert from '@/components/ModalAlert'

import * as styles from './styles'

type Props = {
  boardSeq: number
}

type FormTypes = {
  reply: string
}

const ContentBar = ({ boardSeq }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<FormTypes>({
    resolver: replyValidation(),
    mode: 'onChange',
  })
  const [modal, setModal] = useState(false)
  const [modalTitle, setModalTitle] = useState<string>('')

  const onHandleSendClick = async (data: any) => {
    const response = await makeReplyAPI(boardSeq, data)
    if (response) {
      setModal(true)
      setModalTitle(response.message)
      if (response.success) {
        reset()
      }
    }
  }

  return (
    <>
      <section css={styles.container}>
        <form css={styles.form}>
          <div css={styles.block}>
            <Image src="/assets/profile_img.png" width={32} height={32} />
          </div>
          <textarea placeholder="댓글 남기기" rows={1} {...register('reply')} />
        </form>
        <div css={styles.button}>
          <Button
            align="center"
            style={isValid ? 'secondaryTrue' : 'secondary'}
            disabled={!isValid}
            onClick={handleSubmit(onHandleSendClick)}
          >
            전송
          </Button>
        </div>
      </section>
      <ModalAlert
        title={modalTitle}
        isOpen={modal}
        onClick={() => setModal(!modal)}
      />
    </>
  )
}

export default React.memo(ContentBar)
