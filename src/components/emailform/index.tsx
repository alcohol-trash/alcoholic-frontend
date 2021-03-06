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

const Emailform = () => {
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
        Router.push(
          { pathname: '/signup/info', query: { email: email } },
          '/signup/info',
        )
      }
    }
  }
  return (
    <section css={styles.container}>
      <form css={styles.form}>
        <section css={styles.emailBlock}>
          <label>?????????</label>
          <div css={styles.inputBlock}>
            <div css={styles.leftBlock}>
              <TextField
                placeholder="????????? ??????????????????."
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
                {check ? '?????????' : '?????? ??????'}
              </Button>
            </div>
          </div>
          {errors?.email && <ValidateMessage result={errors?.email} />}
          {check && (
            <AuthTimer
              time={time}
              message={
                '?????? ????????? ?????????????????????.\n?????? ???????????? ?????? ????????? ???????????????.'
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
            ?????? ??????
          </Button>
        </section>
      </form>
    </section>
  )
}

export default Emailform
