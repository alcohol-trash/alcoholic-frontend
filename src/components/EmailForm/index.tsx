import React, { useState, useCallback } from 'react'
import Router from 'next/router'
import { useForm } from 'react-hook-form'

import { mailAPI } from '@/api/user'
import { emailValidation } from '@/libs/validations/emailValidation'

import TextField from '@/components/TextField'
import Button from '@/components/Button'
import ValidateMessage from '@/components/ValidateMessage'
import AuthTimer from '@/components/AuthTimer'
import ModalAlert from '@/components/ModalAlert'

import * as styles from './styles'

const MAIL_TYPE = 'signup'

type FormTypes = {
  email: string
}

const EmailForm = () => {
  const [check, setCheck] = useState<boolean>(false)
  const [modal, setModal] = useState<boolean>(false)
  const [modalTitle, setModalTitle] = useState<string>('')
  const [time, setTime] = useState<number>(5)

  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FormTypes>({
    resolver: emailValidation(),
  })

  const handleChange = ({ name, value }: any) => {
    setValue(name, value, { shouldValidate: true })
  }

  const handleSendClick = async (formData: FormTypes) => {
    const { email } = formData
    const response = await mailAPI('send', MAIL_TYPE, email)
    if (response) {
      setModal(true)
      setModalTitle(response.data.message)
      if (response.data.success) {
        setCheck(true)
        if (!check) {
          setTime(5)
        }
      }
    }
  }

  const handleDoneClick = async () => {
    const email = getValues('email')
    const response = await mailAPI('check', MAIL_TYPE, email)
    if (response) {
      setModal(true)
      setModalTitle(response.data.message)
      if (response.data.success) {
        Router.push({ pathname: '/signup/info', query: { email: email } })
      }
    }
  }

  const handleModal = useCallback(() => {
    setModal(!modal)
  }, [modal])

  return (
    <section css={styles.container}>
      <form css={styles.form}>
        <section css={styles.emailBlock}>
          <label>이메일</label>
          <div css={styles.inputBlock}>
            <div css={styles.leftBlock}>
              <TextField
                placeholder="이메일 입력해주세요."
                {...register('email')}
                onChange={handleChange}
              />
            </div>
            <div css={styles.rightBlock}>
              <Button
                size="sm"
                align="center"
                style={isValid ? 'primary' : 'default'}
                onClick={handleSubmit(handleSendClick)}
              >
                {check ? '재요청' : '인증 요청'}
              </Button>
            </div>
          </div>
          {errors?.email && <ValidateMessage result={errors?.email} />}
          {check && (
            <AuthTimer
              time={time}
              message={
                '인증 메일이 발송되었습니다.\n해당 메일에서 인증 링크를 눌러주세요.'
              }
            />
          )}
        </section>
        <section css={styles.btnBlock}>
          <Button
            size="sm"
            style={check ? 'primary' : 'default'}
            onClick={handleSubmit(handleDoneClick)}
            disabled={!check}
          >
            인증 확인
          </Button>
        </section>
      </form>
      <ModalAlert title={modalTitle} isOpen={modal} onClick={handleModal} />
    </section>
  )
}

export default EmailForm
