import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import Button from '@/components/Button'
import ValidateMessage from '@/components/ValidateMessage'

import * as styles from './styles'
import { getSignupNicknameFormSchema } from '@/libs/validations/signupNicknameValidation'

type FormTypes = {
  nickname: string
}

const Nickform = () => {
  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<FormTypes>({
    mode: 'onChange',
    resolver: yupResolver(getSignupNicknameFormSchema),
  })
  const handleSubmitClick = (data: any) => {
    console.log(data)
  }
  return (
    <section css={styles.container}>
      <form css={styles.form}>
        <input {...register('nickname')} />
        {errors?.nickname && <ValidateMessage result={errors?.nickname} />}
        <div css={styles.btnBlock}>
          <Button
            size="sm"
            style={isValid ? 'primary' : 'default'}
            onClick={handleSubmit(handleSubmitClick)}
          >
            알코홀-릭 시작하기
          </Button>
        </div>
      </form>
    </section>
  )
}

export default Nickform
