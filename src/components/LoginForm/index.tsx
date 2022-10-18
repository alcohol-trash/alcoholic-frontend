import React, { useState, useCallback } from 'react'
import { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import Router from 'next/router'

import User from '@/libs/interfaces/user'
import { loginAPI } from '@/api/user'
import { loginValidation } from '@/libs/validations/loginValidation'

import TextField from '@/components/TextField'
import Button from '@/components/Button'
import ValidateMessage from '@/components/ValidateMessage'
import ModalAlert from '../ModalAlert'

import * as styles from './styles'

type FormTypes = {
  id: string
  password: string
}

const LoginForm = () => {
  const [modal, setModal] = useState<boolean>(false)
  const [modalTitle, setModalTitle] = useState<string>('')

  const query = useQueryClient()

  const {
    register,
    setValue,
    getValues,
    formState: { isValid, errors },
  } = useForm<FormTypes>({
    resolver: loginValidation(),
  })

  const mutation = useMutation<User, AxiosError, FormTypes>('user', loginAPI, {
    onSuccess: (response) => {
      if (response.success) {
        query.setQueryData('user', response)
        Router.push('/')
      } else {
        console.log(response.data)
        setModal(true)
        setModalTitle(response.data.message)
      }
    },
  })

  const handleChange = ({ name, value }: any) => {
    setValue(name, value, { shouldValidate: true })
  }

  const handleSubmit = useCallback(() => {
    mutation.mutate({
      id: getValues('id'),
      password: getValues('password'),
    })
  }, [getValues, mutation])

  const handleModal = useCallback(() => {
    setModal(!modal)
  }, [modal])

  return (
    <section css={styles.container}>
      <form css={styles.form}>
        <div>
          <div css={styles.inputBlock}>
            <label>아이디</label>
            <TextField
              placeholder="아이디를 입력해주세요."
              {...register('id')}
              onChange={handleChange}
            />
            {errors?.id && <ValidateMessage result={errors?.id} />}
          </div>
          <div css={styles.inputBlock}>
            <label>비밀번호</label>
            <TextField
              placeholder="비밀번호를 입력해주세요."
              type="password"
              {...register('password')}
              onChange={handleChange}
            />
            {errors?.password && <ValidateMessage result={errors?.password} />}
          </div>
        </div>
        <div css={styles.btnBlock}>
          <Button
            onClick={handleSubmit}
            size="sm"
            style={isValid ? 'primary' : 'default'}
          >
            로그인 하기
          </Button>
        </div>
      </form>
      <ModalAlert title={modalTitle} isOpen={modal} onClick={handleModal} />
    </section>
  )
}

export default LoginForm
