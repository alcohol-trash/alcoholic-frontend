import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import Title from '@/components/Title'
import TextField from '@/components/TextField'
import Button from '@/components/Button'
import ValidateMessage from '@/components/ValidateMessage'

import * as styles from '@/css/login/findIdStyles'
import { getFindIdFormSchema } from '@/libs/validations/findIdValidation'
import Router from 'next/router'

type FormTypes = {
  email: string
}
const FindId = () => {
  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTypes>({
    resolver: getFindIdFormSchema(),
  })
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(true)
  const [checkDisabled, setCheckDisabled] = useState<boolean>(true)

  const handleChange = ({ name, value }: any) => {
    setValue(name, value, { shouldValidate: true })
  }
  const handleClick = (data: FormTypes) => {
    // TODO: 인증 요청 API
    console.log('인증 요청 클릭', data)

    // 인증 확인 disabled -> default
    setCheckDisabled(false)
  }

  const handleCheckClick = () => {
    // TODO: 인증 확인 API -> 아이디 찾기 결과
    Router.push('/login/find-id/success')
  }

  useEffect(() => {
    console.log(getValues('email'), errors.email)
    if (getValues('email') && !errors.email) setSubmitDisabled(false)
    else setSubmitDisabled(true)
  }, [getValues, errors.email])

  return (
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
                  style={submitDisabled ? 'default' : 'primary'}
                  onClick={handleSubmit(handleClick)}
                  disabled={submitDisabled}
                >
                  인증 요청
                </Button>
              </div>
            </div>
            {errors?.email && <ValidateMessage result={errors?.email} />}
          </div>
        </form>
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
      </div>
    </div>
  )
}

export default React.memo(FindId)
