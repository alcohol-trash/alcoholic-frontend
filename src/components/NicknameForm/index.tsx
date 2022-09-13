import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Router from 'next/router'

import Button from '@/components/Button'
import ValidateMessage from '@/components/ValidateMessage'

import * as styles from './styles'
import { getNicknameFormSchema } from '@/libs/validations/nicknameValidation'

type FormTypes = {
  nickname: string
}

const NicknameForm = () => {
  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<FormTypes>({
    mode: 'onChange',
    resolver: yupResolver(getNicknameFormSchema),
  })
  const [success, setSuccess] = useState<boolean>(false)
  const [errorMsg, setErrorMsg] = useState<string>('')
  const handleChange = () => {
    if (isValid) {
      setSuccess(isValid)
    }
  }
  const handleSubmitClick = async (formData: FormTypes) => {
    const response = await fetch(`/api/auth/oauth/signup`, {
      method: 'POST',
      body: JSON.stringify({
        nickname: formData,
      }),
    })
    const data = await response.json()
    if (data.success) {
      Router.push('/')
    } else {
      setSuccess(!isValid)
      setErrorMsg(data.message)
    }
  }
  return (
    <section css={styles.container}>
      <form css={styles.form} onChange={handleChange}>
        <input {...register('nickname')} />
        {(errors?.nickname || errorMsg) && (
          <ValidateMessage result={errors?.nickname || errorMsg} />
        )}
        <div css={styles.btnBlock}>
          <Button
            size="sm"
            style={isValid && success ? 'primary' : 'default'}
            onClick={handleSubmit(handleSubmitClick)}
            disabled={!isValid && !success}
          >
            알코홀-릭 시작하기
          </Button>
        </div>
      </form>
    </section>
  )
}

export default React.memo(NicknameForm)
