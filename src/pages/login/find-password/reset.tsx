import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Router from 'next/router'

import { getFindPasswordResetFormSchema } from '@/libs/validations/findPasswordResetValidation'

import Title from '@/components/Title'
import TextField from '@/components/TextField'
import Button from '@/components/Button'
import ValidateMessage from '@/components/ValidateMessage'

import * as styles from '@/css/login/findPasswordStyles'

type FormTypes = {
  password: string
  passwordConfirm: string
}
const findPasswordReset = () => {
  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTypes>({
    resolver: getFindPasswordResetFormSchema(),
  })
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(true)

  const handleChange = ({ name, value }: any) => {
    // TODO: any 타입 변경
    setValue(name, value, { shouldValidate: true })
  }

  const handleClick = () => {
    // TODO: 비밀번호 재설정 API -> 로그인 이동
    Router.push('/login/localLogin')
  }

  useEffect(() => {
    if (
      getValues('password') &&
      !errors.password &&
      getValues('passwordConfirm') &&
      !errors.passwordConfirm
    )
      setSubmitDisabled(false)
    else setSubmitDisabled(true)
  }, [getValues, errors.password, errors.passwordConfirm])

  return (
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
            {errors?.password && <ValidateMessage result={errors?.password} />}
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
          <div css={styles.buttonContainer}>
            <Button
              size="sm"
              style={submitDisabled ? 'default' : 'primary'}
              onClick={handleSubmit(handleClick)}
              disabled={submitDisabled}
            >
              설정 완료
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default React.memo(findPasswordReset)
