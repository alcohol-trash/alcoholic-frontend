import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Router, { useRouter } from 'next/router'

import { getFindPasswordResetFormSchema } from '@/libs/validations/findPasswordResetValidation'

import Title from '@/components/Title'
import TextField from '@/components/TextField'
import Button from '@/components/Button'
import ValidateMessage from '@/components/ValidateMessage'

import * as styles from '@/css/login/findPasswordStyles'
import ModalAlert from '@/components/ModalAlert'
const TYPE = 'password'
type FormTypes = {
  password: string
  passwordConfirm: string
}
const FindPasswordReset = () => {
  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FormTypes>({
    resolver: getFindPasswordResetFormSchema(),
  })
  const router = useRouter()
  const { query } = router
  const { id, email } = query || {}
  const [errorModalVisible, setErrorModalVisible] = useState<boolean>(true)
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [modalTitle, setModalTitle] = useState<string>('')

  const handleChange = ({ name, value }: any) => {
    setValue(name, value, { shouldValidate: true })
  }

  const handleClick = async () => {
    const response = await fetch(`/api/member/forget/${TYPE}`, {
      method: 'POST',
      body: JSON.stringify({
        id,
        email,
        password: getValues('password'),
        newPassword: getValues('passwordConfirm'),
      }),
    })
    const data = await response.json()
    if (data) {
      setModalVisible(true)
      setModalTitle(data.message)

      if (data.success) {
        Router.push('/login')
      }
    }
  }

  const handleResetError = () => {
    Router.push('/login/find-password')
  }

  if (!id && !email)
    return (
      <ModalAlert
        isOpen={errorModalVisible}
        title="이메일 인증을 먼저 진행해주세요."
        onClick={handleResetError}
        onCancel={() => setErrorModalVisible(!errorModalVisible)}
      />
    )

  return (
    <>
      <div css={styles.container}>
        <Title>비밀번호 재설정</Title>
        <div>
          <form css={styles.form}>
            <div css={styles.box}>
              <label>
                비밀번호 <span>8~16자리 영문, 숫자, 특수문자 포함</span>
              </label>
              <div>
                <TextField
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                  {...register('password')}
                  onChange={handleChange}
                />
              </div>
              {errors?.password && (
                <ValidateMessage result={errors?.password} />
              )}
            </div>
            <div css={styles.box}>
              <label>비밀번호 확인</label>
              <div>
                <TextField
                  type="password"
                  placeholder="비밀번호를 다시 입력해주세요."
                  {...register('passwordConfirm')}
                  onChange={handleChange}
                />
              </div>
              {errors?.passwordConfirm && (
                <ValidateMessage result={errors?.passwordConfirm} />
              )}
            </div>
          </form>
        </div>
      </div>
      <div css={styles.buttonContainer}>
        <Button
          size="sm"
          style={!isValid ? 'default' : 'primary'}
          onClick={handleSubmit(handleClick)}
          disabled={!isValid}
        >
          설정 완료
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

export default React.memo(FindPasswordReset)
