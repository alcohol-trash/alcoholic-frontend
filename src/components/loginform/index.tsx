import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Router from 'next/router'
import { useQueryClient } from 'react-query'

import TextField from '@/components/TextField'
import Button from '@/components/Button'
import ValidateMessage from '@/components/ValidateMessage'
import ModalAlert from '../ModalAlert'

import * as styles from './styles'
import { getLocalLoginFormSchema } from '@/libs/validations/localLoginValidation'

const AUTH_TYPE = 'login'
type FormTypes = {
  id: string
  password: string
}

const Loginform = () => {
  const [modal, setModal] = useState<boolean>(false)
  const [modalTitle, setModalTitle] = useState<string>('')

  const query = useQueryClient()

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { isValid, errors },
  } = useForm<FormTypes>({
    resolver: yupResolver(getLocalLoginFormSchema),
  })

  const handleChange = ({ name, value }: any) => {
    setValue(name, value, { shouldValidate: true })
  }

  const handleBtnClick = async () => {
    const [id, password] = getValues(['id', 'password'])
    const response = await fetch(`/api/auth/${AUTH_TYPE}`, {
      method: 'POST',
      body: JSON.stringify({
        id: id,
        password: password,
      }),
    })
    const data = await response.json()
    if (data.success) {
      query.setQueryData('user', data.data)
      Router.push('/')
    } else {
      setModal(true)
      setModalTitle(data.message)
    }
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
            onClick={handleSubmit(handleBtnClick)}
            size="sm"
            style={isValid ? 'primary' : 'default'}
          >
            로그인 하기
          </Button>
        </div>
      </form>
      <ModalAlert
        title={modalTitle}
        isOpen={modal}
        onClick={() => setModal(!modal)}
      />
    </section>
  )
}

export default Loginform
