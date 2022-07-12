import React from 'react'
import { useForm } from 'react-hook-form'

import Title from '@/components/Title'
import TextField from '@/components/TextField'
import Button from '@/components/Button'
import ValidateMessage from '@/components/ValidateMessage'

import * as styles from '@/css/login/findPasswordStyles'
import { getFindPasswordFormSchema } from '@/libs/validations/findPasswordValidation'

type FormTypes = {
  id: string
  email: string
}
const FindPassword = () => {
  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTypes>({
    resolver: getFindPasswordFormSchema(),
  })

  const handleChange = ({ name, value }: any) => {
    setValue(name, value, { shouldValidate: true })
  }

  const handleEmailClick = () => {
    if (!getValues('email')) {
      console.log(errors)
      alert('이메일을 정확하게 입력해주세요.')
      return
    } else {
      // TODO: 인증 요청
    }
  }

  const handleClick = () => {
    // TODO: 인증 확인
  }

  return (
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

export default React.memo(FindPassword)
