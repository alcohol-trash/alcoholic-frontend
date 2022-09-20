import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Router from 'next/router'

import { findPasswordValidation } from '@/libs/validations/findPasswordValidation'
import { mailAPI } from '@/api/user'

import Title from '@/components/Title'
import TextField from '@/components/TextField'
import Button from '@/components/Button'
import ValidateMessage from '@/components/ValidateMessage'
import AuthTimer from '@/components/AuthTimer'
import ModalAlert from '@/components/ModalAlert'

import * as styles from '@/css/login/findPasswordStyles'

const MAIL_TYPE = 'password'

type FormTypes = {
  id: string
  email: string
}
const FindPassword = () => {
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FormTypes>({
    resolver: findPasswordValidation(),
  })
  const [checkDisabled, setCheckDisabled] = useState<boolean>(true)
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [modalTitle, setModalTitle] = useState<string>('')
  const [time, setTime] = useState<number>(5)

  const handleChange = ({ name, value }: any) => {
    setValue(name, value, { shouldValidate: true })
  }

  const handleClick = async (formData: FormTypes) => {
    const { email } = formData
    const response = await mailAPI('send', MAIL_TYPE, email)
    if (response) {
      setModalVisible(true)
      setModalTitle(response.data.message)
      if (response.data.success) {
        setCheckDisabled(false)
        if (!checkDisabled) {
          setTime(5)
        }
      }
    }
  }

  const handleCheckClick = async () => {
    const id = getValues('id')
    const email = getValues('email')
    const response = await mailAPI('send', MAIL_TYPE, email)
    if (response) {
      setModalVisible(true)
      setModalTitle(response.data.message)
      if (response.data.success) {
        Router.push(`/login/find-password/reset?id=${id}&email=${email}`)
      }
    }
  }

  return (
    <>
      <div css={styles.container}>
        <Title>비밀번호 찾기</Title>
        <div>
          <form css={styles.form}>
            <div css={styles.box}>
              <label>아이디</label>
              <div>
                <TextField
                  placeholder="아이디를 입력해주세요."
                  {...register('id')}
                  onChange={handleChange}
                />
              </div>
              {errors?.id && <ValidateMessage result={errors?.id} />}
            </div>
            <div css={styles.box}>
              <label>이메일</label>
              <div css={styles.row}>
                <div css={styles.colLeft}>
                  <TextField
                    placeholder="이메일을 입력해주세요."
                    {...register('email')}
                    onChange={handleChange}
                  />
                </div>
                <div css={styles.colRight}>
                  <Button
                    size="sm"
                    align="center"
                    style={!isValid ? 'default' : 'primary'}
                    onClick={handleSubmit(handleClick)}
                    disabled={!isValid}
                  >
                    {checkDisabled ? '인증 요청' : '재요청'}
                  </Button>
                </div>
              </div>
              {errors?.email && <ValidateMessage result={errors?.email} />}
            </div>
            <div css={styles.timer}>
              {!checkDisabled && (
                <AuthTimer
                  time={time}
                  message={
                    '인증 메일이 발송되었습니다.\n해당 메일에서 인증 링크를 눌러주세요.'
                  }
                />
              )}
            </div>
          </form>
        </div>
      </div>
      <div css={styles.buttonContainer}>
        <Button
          size="sm"
          style={checkDisabled ? 'default' : 'primary'}
          onClick={handleCheckClick}
          disabled={checkDisabled}
        >
          인증 확인
        </Button>
      </div>

      <ModalAlert
        isOpen={modalVisible}
        title={modalTitle}
        onClick={() => setModalVisible(!modalVisible)}
      />
    </>
  )
}

export default React.memo(FindPassword)
