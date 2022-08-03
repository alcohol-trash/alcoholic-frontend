import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Router from 'next/router'

import Button from '@/components/Button'
import ValidateMessage from '@/components/ValidateMessage'
import ModalAlert from '../ModalAlert'

import * as styles from './styles'
import { getSignupNicknameFormSchema } from '@/libs/validations/signupNicknameValidation'

const AUTH_TYPE = 'signup'
type FormTypes = {
  nickname: string
}

const Nickform = () => {
  const [modal, setModal] = useState<boolean>(false)
  const [modalTitle, setModalTitle] = useState<string>('')
  const {
    register,
    setValue,
    getValues,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<FormTypes>({
    mode: 'onChange',
    resolver: yupResolver(getSignupNicknameFormSchema),
  })

  const handleChange = ({ name, value }: any) => {
    setValue(name, value, { shouldValidate: true })
  }

  const handleSubmitClick = async () => {
    const [nickname] = getValues('nickname')
    const response = await fetch(`/api/auth/${AUTH_TYPE}`, {
      method: 'POST',
      body: JSON.stringify({
        nickname: nickname,
      }),
    })
    const data = await response.json()
    if (data.success) {
      Router.push('/')
    } else {
      setModal(true)
      setModalTitle(data.message)
    }
  }
  return (
    <section css={styles.container}>
      <form css={styles.form}>
        <input {...register('nickname')} onChange={handleChange} />
        {errors?.nickname && <ValidateMessage result={errors?.nickname} />}
        <div css={styles.btnBlock}>
          <Button
            size="sm"
            style={isValid ? 'primary' : 'default'}
            onClick={handleSubmit(handleSubmitClick)}
            disabled={!isValid}
          >
            알코홀-릭 시작하기
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

export default Nickform
