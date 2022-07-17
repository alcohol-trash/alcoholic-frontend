import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import TextField from '@/components/TextField'
import Button from '@/components/Button'
import ValidateMessage from '@/components/ValidateMessage'
import AuthTimer from '@/components/AuthTimer'
import ModalAlert from '@/components/Modal'

import * as styles from './styles'
import { getSignupEmailFormSchema } from '@/libs/validations/signupEmailValidation'

type FormTypes = {
  email: string
}

const Emailform = () => {
  const [submit, setSubmit] = useState<boolean>(false) //인증 요청 버튼을 누른 후 인증 완료 버튼 활성화
  const [modal, setModal] = useState<boolean>(false)
  const [time, setTime] = useState<number>(5)
  const [end, setEnd] = useState<boolean>(true) //요청 성공 여부
  const {
    register,
    setValue,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FormTypes>({
    resolver: yupResolver(getSignupEmailFormSchema),
  })
  const handleChange = ({ name, value }: any) => {
    setValue(name, value, { shouldValidate: true })
  }
  const handleSubmitClick = (data: FormTypes) => {
    //인증 요청
    console.log(data)
    //재요청 버튼 활성화+인증요청 완료
    setSubmit(true)
    //인증 실패 시
    //재요청
    if (!end) {
      setTime(5)
    }
  }
  const handleDoneClick = () => {
    if (!submit) {
      //인증이 완료되지 않은 경우
      //모달
      setModal(!modal)
    }
  }
  return (
    <section css={styles.container}>
      <form css={styles.form}>
        <section css={styles.emailBlock}>
          <label>이메일</label>
          <div css={styles.inputBlock}>
            <div css={styles.leftBlock}>
              <TextField
                placeholder="이메일 입력해주세요."
                {...register('email')}
                onChange={handleChange}
              />
            </div>
            <div css={styles.rightBlock}>
              <Button
                size="sm"
                align="center"
                style={isValid || submit ? 'primary' : 'default'}
                onClick={handleSubmit(handleSubmitClick)}
              >
                {submit ? '재요청' : '인증 요청'}
              </Button>
            </div>
          </div>
          {errors?.email && <ValidateMessage result={errors?.email} />}
          {submit && (
            <AuthTimer
              time={time}
              message={
                '인증 메일이 발송되었습니다.\n해당 메일에서 인증 링크를 눌러주세요.'
              }
            />
          )}
        </section>
        <section>
          <ModalAlert
            type={'confirm'}
            isOpen={modal}
            onClick={() => setModal(!modal)}
          >
            이메일 인증이 완료되지 않았습니다. <br />
            다시 인증 시도 해주세요.
          </ModalAlert>
        </section>
        <section css={styles.btnBlock}>
          <Button
            size="sm"
            style={submit ? 'primary' : 'default'}
            onClick={handleSubmit(handleDoneClick)}
            disabled={!submit}
          >
            인증 확인
          </Button>
        </section>
      </form>
    </section>
  )
}

export default Emailform
