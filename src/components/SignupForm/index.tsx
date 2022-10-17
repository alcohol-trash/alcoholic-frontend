import React, { useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import { signupAPI } from '@/api/user'
import { signupValidation } from '@/libs/validations/signupValidation'

import TextField from '@/components/TextField'
import Button from '@/components/Button'
import ValidateMessage from '@/components/ValidateMessage'
import ModalAlert from '@/components/ModalAlert'

import * as styles from './styles'

type FormTypes = {
  id: string
  password: string
  passwordConfirm: string
}

const SignupForm = () => {
  const router = useRouter()
  const email = router.query.email

  const [modal, setModal] = useState<boolean>(false)
  const [modalTitle, setModalTitle] = useState<string>('')

  const {
    register,
    setValue,
    getValues,
    formState: { isValid, errors },
  } = useForm<FormTypes>({
    resolver: signupValidation(),
  })

  const handleChange = ({ name, value }: any) => {
    setValue(name, value, { shouldValidate: true })
  }

  const handleSubmit = async () => {
    const response = await signupAPI({
      email: email as string,
      id: getValues('id'),
      password: getValues('password'),
    })
    if (response) {
      setModal(true)
      setModalTitle(response.data.message)
      if (response.data.success) {
        router.push('/')
      }
    }
  }

  const handleModal = useCallback(() => {
    setModal(!modal)
  }, [modal])

  return (
    <section css={styles.container}>
      <form>
        <div>
          <div css={styles.inputBlock}>
            <label>아이디</label>
            <p>8~16자리 영문, 숫자 조합</p>
            <TextField
              placeholder="아이디를 입력해주세요."
              {...register('id')}
              onChange={handleChange}
            />
            {errors?.id && <ValidateMessage result={errors?.id} />}
          </div>
          <div css={styles.inputBlock}>
            <label>비밀번호</label>
            <p>8~16자리 영문, 숫자, 특수문자 포함</p>
            <TextField
              placeholder="비밀번호를 입력해주세요."
              type="password"
              {...register('password')}
              onChange={handleChange}
            />
            {errors?.password && <ValidateMessage result={errors?.password} />}
          </div>
          <div css={styles.inputBlock}>
            <label>비밀번호 확인</label>
            <TextField
              placeholder="비밀번호를 입력해주세요."
              type="password"
              {...register('passwordConfirm')}
              onChange={handleChange}
            />
            {errors?.passwordConfirm && (
              <ValidateMessage result={errors?.passwordConfirm} />
            )}
          </div>
        </div>
        <div css={styles.btnBlock}>
          <Button
            onClick={handleSubmit}
            size="sm"
            style={isValid ? 'primary' : 'default'}
            disabled={!isValid}
          >
            입력 완료
          </Button>
        </div>
      </form>
      <ModalAlert title={modalTitle} isOpen={modal} onClick={handleModal} />
    </section>
  )
}

export default SignupForm
