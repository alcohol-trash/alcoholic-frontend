import * as styles from './styles'
import TextField from '@/components/TextField'
import Button from '@/components/Button'
import ValidateMessage from '@/components/ValidateMessage'

import React from 'react'
//import Link from 'next/link'
//import Router from 'next/router'
import { useForm } from 'react-hook-form'
import { getLocalLoginFormSchema } from '@/libs/validations/localLoginValidation'
import { yupResolver } from '@hookform/resolvers/yup'
//import { logInAPI } from '@/apis/user'

type FormTypes = {
  id: string
  password: string
}

const Loginform = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FormTypes>({
    resolver: yupResolver(getLocalLoginFormSchema),
  })
  const handleBtnClick = (data: FormTypes) => {
    console.log(data)
  }
  return (
    <section css={styles.container}>
      <form css={styles.form}>
        <div>
          <div css={styles.inputBlock}>
            <label>아이디</label>
            <TextField
              placeholder="아이디를 입력해주세요."
              {...register('id')}
            />
            {errors?.id && <ValidateMessage result={errors?.id} />}
          </div>
          <div css={styles.inputBlock}>
            <label>비밀번호</label>
            <TextField
              placeholder="비밀번호를 입력해주세요."
              type="password"
              {...register('password')}
            />
            {errors?.password && <ValidateMessage result={errors?.password} />}
          </div>
        </div>
        <div css={styles.btnBlock}>
          <Button
            onClick={handleSubmit(handleBtnClick)}
            size="sm"
            style={isValid ? 'primary' : 'default'}
          >
            로그인 하기
          </Button>
        </div>
      </form>
    </section>
  )
}

export default Loginform
