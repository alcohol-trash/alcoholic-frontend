import React, { useState, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import Router, { useRouter } from 'next/router'

import { findPasswordResetValidation } from '@/libs/validations/findPasswordResetValidation'
import { forgetPwdAPI } from '@/api/user'

import Title from '@/components/Title'
import TextField from '@/components/TextField'
import Button from '@/components/Button'
import ValidateMessage from '@/components/ValidateMessage'
import ModalAlert from '@/components/ModalAlert'

import * as styles from '@/css/login/findPasswordStyles'

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
    resolver: findPasswordResetValidation(),
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

  const handleSubmitClick = async () => {
    const response = await forgetPwdAPI(id as string, {
      email: email as string,
      newPassword: getValues('passwordConfirm'),
    })
    if (response) {
      setModalVisible(true)
      setModalTitle(response.data.message)
      if (response.data.success) {
        Router.push('/login')
      }
    }
  }

  const handleResetError = useCallback(() => {
    Router.push('/login/find-password')
  }, [])

  const handleModalClose = useCallback(() => {
    setErrorModalVisible(!errorModalVisible)
  }, [errorModalVisible])

  const handleModal = useCallback(() => {
    setModalVisible(!modalVisible)
  }, [modalVisible])

  if (!id && !email)
    return (
      <ModalAlert
        isOpen={errorModalVisible}
        title="이메일 인증을 먼저 진행해주세요."
        onClick={handleResetError}
        onCancel={handleModalClose}
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
          onClick={handleSubmit(handleSubmitClick)}
          disabled={!isValid}
        >
          설정 완료
        </Button>
      </div>

      <ModalAlert
        isOpen={modalVisible}
        title={modalTitle}
        onClick={handleModal}
      />
    </>
  )
}

export default React.memo(FindPasswordReset)
