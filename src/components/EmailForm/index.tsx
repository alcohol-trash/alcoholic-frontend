import React, { useState } from 'react'
import Router from 'next/router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import TextField from '@/components/TextField'
import Button from '@/components/Button'
import ValidateMessage from '@/components/ValidateMessage'
import AuthTimer from '@/components/AuthTimer'
import ModalAlert from '@/components/ModalAlert'

import * as styles from './styles'
import { getSignupEmailFormSchema } from '@/libs/validations/signupEmailValidation'

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
    resolver: yupResolver(getSignupEmailFormSchema),
  })
  const handleChange = ({ name, value }: any) => {
    setValue(name, value, { shouldValidate: true })
  }
  const handleSendClick = async (formData: FormTypes) => {
    const { email } = formData
    const response = await fetch(`/api/email/send/${MAIL_TYPE}?email=${email}`)
    const data = await response.json()
    if (data) {
      setModal(true)
      setModalTitle(data.message)
      if (data.success) {
        setCheck(true)
        if (!check) {
          setTime(5)
        }
      }
    }
  }
  const handleDoneClick = async () => {
    const email = getValues('email')
    const response = await fetch(`/api/email/check/${MAIL_TYPE}?email=${email}`)
    const data = await response.json()
    if (data) {
      setModal(true)
      setModalTitle(data.message)
      if (data.success) {
        Router.push({ pathname: '/signup/info', query: { email: email } })
      }
    }
  }
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
        <section>
          <ModalAlert
            title={modalTitle}
            isOpen={modal}
            onClick={() => setModal(!modal)}
          />
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
    </section>
  )
}

export default EmailForm
