import React from 'react'
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
import { EmailData } from '@/types/user'
import * as styles from './styles'
import Button from '@/components/Button'

const Emailform = () => {
  const {
    register,
    formState: { isValid },
    handleSubmit,
    reset,
  } = useForm<EmailData>({ mode: 'onChange' })
  const onSubmit: SubmitHandler<EmailData> = (data) => {
    console.log(data)
    reset()
  }
  const onError: SubmitErrorHandler<EmailData> = (error) => console.log(error)
  return (
    <section css={styles.EmailForm.Container}>
      <form
        css={styles.EmailForm.Form}
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <label>이메일</label>
        <div css={styles.EmailForm.Block}>
          <input
            placeholder="이메일을 입력해주세요."
            {...register('email', {
              required: true,
              maxLength: 12,
              pattern: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|._|]+$/,
            })}
          />
          <Button>인증 요청</Button>
        </div>
        {isValid ? (
          ' '
        ) : (
          <p
            style={{
              color: 'var(--aqua-100)',
              fontSize: '13px',
              margin: '5px 0 15px 0',
            }}
          >
            이메일을 확인해주세요.
          </p>
        )}
        <div css={styles.EmailForm.BtnBlock}>
          <Button>인증 확인</Button>
        </div>
      </form>
    </section>
  )
}

export default Emailform
