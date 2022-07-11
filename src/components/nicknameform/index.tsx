import React from 'react'
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
import * as styles from './styles'
import Button from '../Button'

interface FormData {
  nickname: string
}

const Nickform = () => {
  const {
    register,
    formState: { isValid },
    handleSubmit,
    reset,
  } = useForm<FormData>({ mode: 'onChange' })
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data)
    reset()
  }
  const onError: SubmitErrorHandler<FormData> = (error) => console.log(error)
  return (
    <section css={styles.NicknameForm.Container}>
      <form
        css={styles.NicknameForm.Form}
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <input
          {...register('nickname', {
            required: true,
            maxLength: 12,
            pattern: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|._|]+$/,
          })}
          style={{ backgroundColor: 'var(--gray-800)', color: 'var(--white)' }}
        />
        {isValid ? (
          <p style={{ color: 'var(--aqua)', fontSize: '13px' }}>
            사용 가능한 닉네임입니다.
          </p>
        ) : (
          <p style={{ color: 'var(--gray-300)', fontSize: '13px' }}>
            이미 사용중인 닉네임입니다.
          </p>
        )}
        <div css={styles.NicknameForm.BtnBlock}>
          <Button>알코홀-릭 시작하기</Button>
        </div>
      </form>
    </section>
  )
}

export default Nickform
