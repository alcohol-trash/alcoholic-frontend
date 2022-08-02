import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import TextField from '@/components/TextField'
import Button from '@/components/Button'
import ValidateMessage from '@/components/ValidateMessage'
import ModalAlert from '@/components/ModalAlert'

import * as styles from './styles'
import { getSignupInfoFormSchema } from '@/libs/validations/signupInfoValidation'

const AUTH_TYPE = 'signup'
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
    handleSubmit,
  } = useForm<FormTypes>({
    resolver: yupResolver(getSignupInfoFormSchema),
  })

  const handleChange = ({ name, value }: any) => {
    setValue(name, value, { shouldValidate: true })
  }

  const handleBtnClick = async () => {
    const [id, password] = getValues(['id', 'password'])
    const response = await fetch(`/api/auth/${AUTH_TYPE}`, {
      method: 'POST',
      body: JSON.stringify({ email: email, id: id, password: password }),
    })
    const data = await response.json()
    if (data.success) {
      router.push('/')
    } else {
      setModal(true)
      setModalTitle(data.message)
    }
  }

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
            onClick={handleSubmit(handleBtnClick)}
            size="sm"
            style={isValid ? 'primary' : 'default'}
            disabled={!isValid}
          >
            입력 완료
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

export default SignupForm
