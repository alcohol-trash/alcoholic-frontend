import * as styles from './styles'
import TextField from '@/components/TextField'
import Button from '@/components/Button'
import ValidateMessage from '@/components/ValidateMessage'

import React from 'react'
//import Link from 'next/link'
//import Router from 'next/router'
import { useForm } from 'react-hook-form'
import { getSignupInfoFormSchema } from '@/libs/validations/signupInfoValidation'
import { yupResolver } from '@hookform/resolvers/yup'
//import { logInAPI } from '@/apis/user'

type FormTypes = {
  id: string
  password: string
  passwordConfirm: string
}

const SignupForm = () => {
  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<FormTypes>({
    resolver: yupResolver(getSignupInfoFormSchema),
  })
  const handleBtnClick = (data: FormTypes) => {
    console.log(data)
  }
  return (
    <section css={styles.container}>
      <form>
        <div>
          <div css={styles.inputBlock}>
            <label>아이디</label>
            <p>8~16자리 영문, 숫자 조합</p>
            <TextField
              placeholder="아이디를 입력해주세요."
              {...register('id')}
            />
            {errors?.id && <ValidateMessage result={errors?.id} />}
          </div>
          <div css={styles.inputBlock}>
            <label>비밀번호</label>
            <p>8~16자리 영문, 숫자, 특수문자 포함</p>
            <TextField
              placeholder="비밀번호를 입력해주세요."
              type="password"
              {...register('password')}
            />
            {errors?.password && <ValidateMessage result={errors?.password} />}
          </div>
          <div css={styles.inputBlock}>
            <label>비밀번호 확인</label>
            <TextField
              placeholder="비밀번호를 입력해주세요."
              type="password"
              {...register('passwordConfirm')}
            />
            {errors?.passwordConfirm && (
              <ValidateMessage result={errors?.passwordConfirm} />
            )}
          </div>
        </div>
        <div css={styles.btnBlock}>
          <Button
            onClick={handleSubmit(handleBtnClick)}
            size="sm"
            style={isValid ? 'primary' : 'default'}
          >
            입력 완료
          </Button>
        </div>
      </form>
    </section>
  )
}

export default SignupForm
