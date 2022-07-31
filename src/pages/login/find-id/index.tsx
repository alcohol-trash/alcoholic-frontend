import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Router from 'next/router'

import { getFindIdFormSchema } from '@/libs/validations/findIdValidation'

import Title from '@/components/Title'
import TextField from '@/components/TextField'
import Button from '@/components/Button'
import ValidateMessage from '@/components/ValidateMessage'
import AuthTimer from '@/components/AuthTimer'
import ModalAlert from '@/components/ModalAlert'

import * as styles from '@/css/login/findIdStyles'

const MAIL_TYPE = 'id'
type FormTypes = {
  email: string
}
const FindId = () => {
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { isValid, errors }, // isValid: Set to true if the form doesn't have any errors.
  } = useForm<FormTypes>({
    resolver: getFindIdFormSchema(),
  })
  const [checkDisabled, setCheckDisabled] = useState<boolean>(true)
  const [time, setTime] = useState<number>(5)
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [modalTitle, setModalTitle] = useState<string>('')

  const handleChange = ({ name, value }: any) => {
    // TODO: any 타입 변경
    setValue(name, value, { shouldValidate: true })
  }
  const handleClick = async (formData: FormTypes) => {
    const { email } = formData

    // const response = await fetch(`/api/email/send/${MAIL_TYPE}?email=${email}`)
    // const data = await response.json()
    const data = { success: true, message: '123' }
    if (data) {
      setModalVisible(true)
      setModalTitle(data.message)

      if (data.success) {
        setCheckDisabled(false) // 인증 확인 disabled -> default
        // 재요청
        if (!checkDisabled) {
          setTime(5)
        }
      }
    }
  }

  const handleCheckClick = async () => {
    const email = getValues('email')
    const response = await fetch(`/api/email/check/${MAIL_TYPE}?email=${email}`)
    const data = await response.json()
    if (data) {
      setModalVisible(true)
      setModalTitle(data.message)

      if (data.success) {
        Router.push('/login/find-id/success')
      }
    }
  }

  return (
    <>
      <div css={styles.container}>
        <Title>아이디 찾기</Title>
        <div>
          <form css={styles.form}>
            <div css={styles.box}>
              <label>이메일</label>
              <div css={styles.row}>
                <div css={styles.colLeft}>
                  <TextField
                    placeholder="이메일을 입력해주세요."
                    {...register('email')}
                    // 'onChange' is specified more than once, so this usage will be overwritten. -> register spread 이후에
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

export default React.memo(FindId)
