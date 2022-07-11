import React from 'react'
import Button from '@/components/Button'
import Link from 'next/link'
import * as styles from './styles'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useMutation } from 'react-query'
import Router from 'next/router'
import { logInAPI } from '@/apis/user'
import { LoginData } from '@/types/user'

const SignupForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<LoginData>({ mode: 'onChange' })
  const mutation = useMutation(logInAPI, {
    onSuccess: () => {
      //요청이 성공한 경우
      Router.push('/')
    },
    onError: (error: object) => {
      //요청에 에러가 발생된 경우
      alert(error)
    },
  })
  const onSubmit: SubmitHandler<LoginData> = (data) => {
    const id = data.id
    const password = data.password
    mutation.mutate({ id, password })
    reset()
  }
  return (
    <section css={styles.SignupForm.Container}>
      <form css={styles.SignupForm.Form} onSubmit={handleSubmit(onSubmit)}>
        <label>아이디</label>
        <p>8~15자리 영문, 숫자 조합</p>
        <input
          placeholder="아이디를 입력해주세요."
          {...register('id', {
            required: { value: true, message: '아이디를 확인해주세요' },
            maxLength: { value: 12, message: '아이디를 확인해주세요' },
            pattern: {
              value: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|._|]+$/,
              message: '아이디를 확인해주세요',
            },
          })}
        />
        {errors.id && (
          <p
            style={{
              color: 'var(--aqua-100)',
              fontSize: '13px',
              margin: '5px 0 15px 0',
            }}
          >
            {errors.id.message}
          </p>
        )}
        <label>비밀번호</label>
        <p>8~15자리 영문, 숫자, 특수문자 포함</p>
        <input
          placeholder="비밀번호를 입력해주세요."
          type="password"
          {...register('password', {
            required: { value: true, message: '비밀번호를 확인해주세요' },
            maxLength: { value: 12, message: '비밀번호를 확인해주세요' },
            pattern: {
              value: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|._|]+$/,
              message: '비밀번호를 확인해주세요',
            },
          })}
        />
        {errors.password && (
          <p
            style={{
              color: 'var(--aqua-100)',
              fontSize: '13px',
              margin: '5px 0 15px 0',
            }}
          >
            {errors.password.message}
          </p>
        )}
        <label>비밀번호 확인</label>
        <input
          placeholder="비밀번호를 입력해주세요."
          type="password"
          {...register('password', {
            required: { value: true, message: '비밀번호를 확인해주세요' },
            maxLength: { value: 12, message: '비밀번호를 확인해주세요' },
            pattern: {
              value: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|._|]+$/,
              message: '비밀번호를 확인해주세요',
            },
          })}
        />
        {errors.password && (
          <p
            style={{
              color: 'var(--aqua-100)',
              fontSize: '13px',
              margin: '5px 0 15px 0',
            }}
          >
            {errors.password.message}
          </p>
        )}
        <div css={styles.SignupForm.BtnBlock}>
          <Link href="/">
            <Button>입력 완료</Button>
          </Link>
        </div>
      </form>
    </section>
  )
}

export default SignupForm
