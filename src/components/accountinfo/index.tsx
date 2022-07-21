import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import Sentence from '@/components/Sentence'
import TextField from '@/components/TextField'
import ValidateMessage from '@/components/ValidateMessage'

import * as styles from './styles'
import { getSettingEditFormSchema } from '@/libs/validations/settingEditValidation'

type FormTypes = {
  password: string
  passwordConfirm: string
}

const AccountInfo = () => {
  const {
    register,
    setValue,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<FormTypes>({
    resolver: yupResolver(getSettingEditFormSchema),
  })
  const handleChange = ({ name, value }: any) => {
    setValue(name, value, { shouldValidate: true })
  }
  const handleBtnClick = (data: FormTypes) => {
    console.log(data)
  }
  return (
    <section css={styles.container}>
      <label>이메일</label>
      <div css={styles.infoBlock}>
        <Sentence size="base">alcoholic@kakao.com</Sentence>
      </div>
      <label>아이디</label>
      <div css={styles.infoBlock}>
        <Sentence size="base">alcoholic</Sentence>
      </div>
      <form>
        <div>
          <div css={styles.inputBlock}>
            <label>비밀번호</label>
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
              placeholder="비밀번호를 다시 입력해주세요."
              type="password"
              {...register('passwordConfirm')}
              onChange={handleChange}
            />
            {errors?.passwordConfirm && (
              <ValidateMessage result={errors?.passwordConfirm} />
            )}
          </div>
        </div>
      </form>
    </section>
  )
}

export default AccountInfo
