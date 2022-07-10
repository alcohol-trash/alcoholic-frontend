import React from 'react'
import { useForm } from 'react-hook-form'

import Title from '@/components/Title'
import TextField from '@/components/TextField'
import Button from '@/components/Button'
import ValidateMessage from '@/components/ValidateMessage'

import * as styles from './styles'
import { getFindIdFormSchema } from './funcions'

type FormTypes = {
  email: string
}
const FindId = () => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTypes>({
    resolver: getFindIdFormSchema(),
  })

  const handleClick = (data: FormTypes) => {
    // TODO: 인증 확인
    console.log(data)
    console.log(getValues('email'))
  }

  const handleEmailClick = () => {
    if (!getValues('email')) {
      alert('이메일을 정확하게 입력해주세요.2')
      return
    } else {
      // TODO: 인증 요청
    }
  }

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
                />
              </div>
              <div css={styles.colRight}>
                <Button size="sm" align="center" onClick={handleEmailClick}>
                  인증 요청
                </Button>
              </div>
            </div>
            {errors?.email && <ValidateMessage result={errors?.email} />}
          </div>
          <div css={styles.buttonContainer}>
            <Button onClick={handleSubmit(handleClick)} size="sm">
              인증 확인
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default React.memo(FindId)
