import * as styles from './styles'
import TextField from '@/components/TextField'
import Button from '@/components/Button'
import ValidateMessage from '@/components/ValidateMessage'
import Timer from '@/components/timer'
import CustomModal from '@/components/Modal'

import React from 'react'
//import Link from 'next/link'
//import Router from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { getSignupEmailFormSchema } from '@/libs/validations/signupEmailValidation'
import { yupResolver } from '@hookform/resolvers/yup'

type FormTypes = {
  email: string
}

const Emailform = () => {
  const [submit, setSubmit] = useState(false) //인증 요청 버튼을 누른 후 인증 완료 버튼 활성화
  const [modal, setModal] = useState(false) //인증 완료 버튼 활성화 후 버튼을 눌렀을 때 모달 셋팅 여부 -> 인증이 되었는지에 대한 응답에 따라 바뀜
  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<FormTypes>({
    resolver: yupResolver(getSignupEmailFormSchema),
  })
  const handleSubmitClick = (data: FormTypes) => {
    console.log(data)
    setSubmit(!submit)
  }
  const handleDoneClick = () => {
    setModal(!modal)
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
              />
            </div>
            <div css={styles.rightBlock}>
              <Button
                size="sm"
                align="center"
                style={isValid || submit ? 'primary' : 'default'}
                onClick={handleSubmit(handleSubmitClick)}
              >
                {submit ? '재 요청' : '인증 요청'}
              </Button>
            </div>
          </div>
          {errors?.email && <ValidateMessage result={errors?.email} />}
          {submit && <Timer />}
        </section>
        <section>
          <CustomModal isOpen={modal ? true : false}>
            <div>
              이메일 인증이 완료되지 않았습니다. <br />
              다시 인증 시도 해주세요.
            </div>
            <div>
              <button onClick={() => setModal(!modal)}>확인</button>
            </div>
          </CustomModal>
        </section>
        <section css={styles.btnBlock}>
          <Button
            size="sm"
            style={submit ? 'primary' : 'default'}
            onClick={handleSubmit(handleDoneClick)}
          >
            인증 확인
          </Button>
        </section>
      </form>
    </section>
  )
}

export default Emailform
