import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import Router from 'next/router'

import { socialAPI } from '@/api/user'
import { nicknameValidation } from '@/libs/validations/nicknameValidation'

import Button from '@/components/Button'
import ValidateMessage from '@/components/ValidateMessage'

import * as styles from './styles'
import User from '@/interfaces/user'
import { AxiosError } from 'axios'

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

  const query = useQueryClient()

  const mutation = useMutation<User, AxiosError, FormTypes>('user', socialAPI, {
    onSuccess: (response) => {
      console.log(response)
      if (response.success) {
        query.setQueryData('user', response)
        Router.replace('/')
      } else {
        setSuccess(!isValid)
        setErrorMsg(response.data.message)
      }
    },
    onSettled: () => {
      query.invalidateQueries(['boards', 1])
      query.invalidateQueries(['boards', 2])
      query.invalidateQueries(['boards', 3])
    },
  })

  const handleChange = () => {
    if (isValid) {
      setSuccess(isValid)
    }
  }

  const handleSubmitClick = useCallback(() => {
    mutation.mutate({
      nickname: getValues('nickname'),
    })
  }, [getValues, mutation])

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
