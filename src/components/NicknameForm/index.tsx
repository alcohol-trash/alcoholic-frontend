import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Router from 'next/router'

import { socialAPI } from '@/api/user'
import { nicknameValidation } from '@/libs/validations/nicknameValidation'

import Button from '@/components/Button'
import ValidateMessage from '@/components/ValidateMessage'

import * as styles from './styles'

type FormTypes = {
  nickname: string
}

const NicknameForm = () => {
  const {
    register,
    formState: { isValid, errors },
    getValues,
  } = useForm<FormTypes>({
    mode: 'onChange',
    resolver: nicknameValidation(),
  })
  const [success, setSuccess] = useState<boolean>(false)
  const [errorMsg, setErrorMsg] = useState<string>('')
  const handleChange = () => {
    if (isValid) {
      setSuccess(isValid)
    }
  }
  const handleSubmitClick = async () => {
    const response = await socialAPI(getValues('nickname'))
    if (response.data.success) {
      Router.push('/')
    } else {
      setSuccess(!isValid)
      setErrorMsg(response.data.message)
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
            onClick={handleSubmitClick}
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
