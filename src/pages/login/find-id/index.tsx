import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Router from 'next/router'

import { getFindIdFormSchema } from '@/libs/validations/findIdValidation'

import Title from '@/components/Title'
import TextField from '@/components/TextField'
import Button from '@/components/Button'
import ValidateMessage from '@/components/ValidateMessage'
import AuthTimer from '@/components/AuthTimer'

import * as styles from '@/css/login/findIdStyles'

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
  const [time, setTime] = useState<number>(5)

  const handleChange = ({ name, value }: any) => {
    // TODO: any 타입 변경
    setValue(name, value, { shouldValidate: true })
  }
  const handleClick = (data: FormTypes) => {
    // TODO: 인증 요청 API
    console.log('인증 요청 클릭', data)

    // 인증 확인 disabled -> default
    setCheckDisabled(false)

    if (!checkDisabled) {
      // TODO: 재요청
      setTime(5)
    }
  }

  const handleCheckClick = () => {
    // TODO: 인증 확인 API -> 아이디 찾기 결과
    Router.push('/login/find-id/success')
  }

  useEffect(() => {
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
